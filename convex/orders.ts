import { v } from "convex/values";
import { mutation, query } from "./_generated/server";
import { api } from "./_generated/api";

// Generate unique order number
function generateOrderNumber() {
  const timestamp = Date.now().toString(36);
  const random = Math.random().toString(36).substring(2, 5);
  return `ORD-${timestamp}-${random}`.toUpperCase();
}

// Create a new order
export const createOrder = mutation({
  args: {
    customerName: v.string(),
    customerEmail: v.string(),
    customerPhone: v.string(),
    shippingAddress: v.string(),
    shippingCity: v.string(),
    shippingZip: v.string(),
    shippingCountry: v.string(),
    paymentMethod: v.string(),
    eMoneyNumber: v.optional(v.string()),
    eMoneyPIN: v.optional(v.string()),
    items: v.array(
      v.object({
        id: v.string(),
        name: v.string(),
        price: v.number(),
        quantity: v.number(),
        image: v.string(),
      })
    ),
    subtotal: v.number(),
    shipping: v.number(),
    vat: v.number(),
    grandTotal: v.number(),
  },
  handler: async (ctx, args) => {
    const orderNumber = generateOrderNumber();
    const orderDate = Date.now();
    
    const orderId = await ctx.db.insert("orders", {
      ...args,
      status: "pending",
      orderDate,
      orderNumber,
    });

    return { orderId, orderNumber };
  },
});

// Create order and send confirmation email
export const createOrderWithConfirmation = mutation({
  args: {
    customerName: v.string(),
    customerEmail: v.string(),
    customerPhone: v.string(),
    shippingAddress: v.string(),
    shippingCity: v.string(),
    shippingZip: v.string(),
    shippingCountry: v.string(),
    paymentMethod: v.string(),
    eMoneyNumber: v.optional(v.string()),
    eMoneyPIN: v.optional(v.string()),
    items: v.array(
      v.object({
        id: v.string(),
        name: v.string(),
        price: v.number(),
        quantity: v.number(),
        image: v.string(),
      })
    ),
    subtotal: v.number(),
    shipping: v.number(),
    vat: v.number(),
    grandTotal: v.number(),
  },
  handler: async (ctx, args) => {
    const orderNumber = generateOrderNumber();
    const orderDate = Date.now();
    
    const orderId = await ctx.db.insert("orders", {
      ...args,
      status: "pending",
      orderDate,
      orderNumber,
    });

    // Schedule email sending
    await ctx.scheduler.runAfter(0, api.emails.sendOrderConfirmationEmail, {
      orderId,
    });

    return { orderId, orderNumber };
  },
});

// Get order by ID
export const getOrderById = query({
  args: { orderId: v.id("orders") },
  handler: async (ctx, args) => {
    return await ctx.db.get(args.orderId);
  },
});

// Get orders by customer email
export const getOrdersByEmail = query({
  args: { email: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("orders")
      .withIndex("by_email", (q) => q.eq("customerEmail", args.email))
      .collect();
  },
});

// Update order status
export const updateOrderStatus = mutation({
  args: {
    orderId: v.id("orders"),
    status: v.string(), // "pending", "processing", "shipped", "delivered", "cancelled"
  },
  handler: async (ctx, args) => {
    await ctx.db.patch(args.orderId, { status: args.status });
  },
});

// Get all orders (for admin)
export const getAllOrders = query({
  handler: async (ctx) => {
    return await ctx.db.query("orders").collect();
  },
});