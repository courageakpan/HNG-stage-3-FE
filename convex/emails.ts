import { v } from "convex/values";
import { action } from "./_generated/server";
import { api } from "./_generated/api";
import nodemailer from "nodemailer";

// Generate HTML email template for order confirmation
function generateOrderConfirmationEmail(orderData: any) {
  const {
    orderNumber,
    customerName,
    customerEmail,
    items,
    subtotal,
    shipping,
    vat,
    grandTotal,
    shippingAddress,
    shippingCity,
    shippingZip,
    shippingCountry,
    paymentMethod,
    orderDate
  } = orderData;

  const formatDate = (timestamp: number) => {
    return new Date(timestamp).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const itemsHtml = items.map((item: any) => `
    <tr style="border-bottom: 1px solid #e5e7eb;">
      <td style="padding: 12px; text-align: left;">
        <div style="display: flex; align-items: center; gap: 12px;">
          <img src="${item.image}" alt="${item.name}" style="width: 50px; height: 50px; object-fit: contain; background: #f3f4f6; border-radius: 8px; padding: 8px;" />
          <div>
            <h4 style="margin: 0; font-weight: 600; color: #1f2937;">${item.name}</h4>
            <p style="margin: 4px 0 0 0; color: #6b7280; font-size: 14px;">Qty: ${item.quantity}</p>
          </div>
        </div>
      </td>
      <td style="padding: 12px; text-align: right; font-weight: 600; color: #1f2937;">
        $${(item.price * item.quantity).toLocaleString()}
      </td>
    </tr>
  `).join('');

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Order Confirmation - ${orderNumber}</title>
      <style>
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
          line-height: 1.6;
          color: #374151;
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
          background-color: #f9fafb;
        }
        .header {
          background: linear-gradient(135deg, #d87d4a 0%, #f5f5f5 100%);
          padding: 40px 30px;
          text-align: center;
          border-radius: 12px 12px 0 0;
          margin-bottom: 0;
        }
        .header h1 {
          color: white;
          margin: 0;
          font-size: 28px;
          font-weight: 700;
        }
        .header p {
          color: rgba(255, 255, 255, 0.9);
          margin: 8px 0 0 0;
          font-size: 16px;
        }
        .content {
          background: white;
          padding: 40px 30px;
          border-radius: 0 0 12px 12px;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }
        .section {
          margin-bottom: 30px;
        }
        .section h2 {
          color: #1f2937;
          font-size: 20px;
          font-weight: 600;
          margin-bottom: 16px;
          padding-bottom: 8px;
          border-bottom: 2px solid #d87d4a;
        }
        .order-info {
          background: #f9fafb;
          padding: 20px;
          border-radius: 8px;
          margin-bottom: 20px;
        }
        .order-info p {
          margin: 4px 0;
        }
        .order-info strong {
          color: #1f2937;
        }
        table {
          width: 100%;
          border-collapse: collapse;
          margin-bottom: 20px;
        }
        .summary {
          background: #f3f4f6;
          padding: 20px;
          border-radius: 8px;
        }
        .summary-row {
          display: flex;
          justify-content: space-between;
          margin-bottom: 8px;
        }
        .summary-row.total {
          font-weight: 700;
          font-size: 18px;
          color: #d87d4a;
          padding-top: 8px;
          border-top: 2px solid #d87d4a;
        }
        .cta-button {
          display: inline-block;
          background: #d87d4a;
          color: white;
          text-decoration: none;
          padding: 12px 24px;
          border-radius: 8px;
          font-weight: 600;
          text-align: center;
          margin-top: 20px;
        }
        .cta-button:hover {
          background: #c96a3a;
        }
        .footer {
          text-align: center;
          padding: 20px;
          color: #6b7280;
          font-size: 14px;
        }
        @media (max-width: 600px) {
          body {
            padding: 10px;
          }
          .header, .content {
            padding: 20px;
          }
        }
      </style>
    </head>
    <body>
      <div class="header">
        <h1>Order Confirmed!</h1>
        <p>Thank you for your purchase, ${customerName}</p>
      </div>
      
      <div class="content">
        <div class="section">
          <h2>Order Information</h2>
          <div class="order-info">
            <p><strong>Order Number:</strong> ${orderNumber}</p>
            <p><strong>Order Date:</strong> ${formatDate(orderDate)}</p>
            <p><strong>Payment Method:</strong> ${paymentMethod}</p>
            <p><strong>Status:</strong> <span style="color: #059669; font-weight: 600;">Processing</span></p>
          </div>
        </div>

        <div class="section">
          <h2>Shipping Address</h2>
          <div class="order-info">
            <p><strong>${customerName}</strong></p>
            <p>${shippingAddress}</p>
            <p>${shippingCity}, ${shippingZip} ${shippingCountry}</p>
            <p><strong>Email:</strong> ${customerEmail}</p>
          </div>
        </div>

        <div class="section">
          <h2>Order Items</h2>
          <table>
            <thead>
              <tr style="border-bottom: 2px solid #d87d4a;">
                <th style="padding: 12px; text-align: left; color: #1f2937;">Item</th>
                <th style="padding: 12px; text-align: right; color: #1f2937;">Price</th>
              </tr>
            </thead>
            <tbody>
              ${itemsHtml}
            </tbody>
          </table>
        </div>

        <div class="section">
          <h2>Order Summary</h2>
          <div class="summary">
            <div class="summary-row">
              <span>Subtotal:</span>
              <span>$${subtotal.toLocaleString()}</span>
            </div>
            <div class="summary-row">
              <span>Shipping:</span>
              <span>$${shipping.toLocaleString()}</span>
            </div>
            <div class="summary-row">
              <span>VAT (included):</span>
              <span>$${vat.toLocaleString()}</span>
            </div>
            <div class="summary-row total">
              <span>Total:</span>
              <span>$${grandTotal.toLocaleString()}</span>
            </div>
          </div>
        </div>

        <div class="section" style="text-align: center;">
          <a href="${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/order-confirmation?orderId=${orderData._id}&orderNumber=${orderNumber}" class="cta-button">
            View Your Order
          </a>
        </div>

        <div class="section">
          <h2>What's Next?</h2>
          <ul style="padding-left: 20px; color: #6b7280;">
            <li style="margin-bottom: 8px;">We'll process your order within 1-2 business days</li>
            <li style="margin-bottom: 8px;">You'll receive a shipping confirmation email when your order ships</li>
            <li style="margin-bottom: 8px;">Expected delivery: 3-5 business days after shipping</li>
          </ul>
        </div>
      </div>

      <div class="footer">
        <p><strong>Audiophile</strong> - Premium Audio Equipment</p>
        <p>Questions? Contact us at support@audiophile.com or call 1-800-AUDIO</p>
        <p>© 2024 Audiophile. All rights reserved.</p>
      </div>
    </body>
    </html>
  `;
}

// Send order confirmation email
export const sendOrderConfirmationEmail = action({
  args: {
    orderId: v.id("orders"),
  },
  handler: async (ctx, { orderId }) => {
    // Get order details
    const order = await ctx.runQuery(api.orders.getOrderById, { orderId }) as any;
    
    if (!order) {
      throw new Error("Order not found");
    }

    // Generate email content
    const emailHtml = generateOrderConfirmationEmail(order);

    // Here you would integrate with an email service like:
    // - Resend
    // - SendGrid
    // - AWS SES
    // - Nodemailer with SMTP
    
    // For now, we'll log the email content
    console.log("=== ORDER CONFIRMATION EMAIL ===");
    console.log(`To: ${order.customerEmail}`);
    console.log(`Subject: Order Confirmation - ${order.orderNumber}`);
    console.log("HTML Content:", emailHtml);
    
    // Send email using Nodemailer
    // Use environment variables for SMTP configuration
    const smtpHost = process.env.SMTP_HOST || 'smtp.gmail.com';
    const smtpPort = parseInt(process.env.SMTP_PORT || '587');
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const fromEmail = process.env.SMTP_FROM_EMAIL || 'noreply@audiophile.com';
    
    // Check if SMTP credentials are properly configured
    if (!smtpUser || !smtpPass || smtpUser === 'your-email@gmail.com' || smtpPass === 'your-app-password') {
      console.error("SMTP credentials are not properly configured. Please update your .env.local file with valid SMTP credentials.");
      console.log("Current configuration:");
      console.log(`- SMTP Host: ${smtpHost}`);
      console.log(`- SMTP Port: ${smtpPort}`);
      console.log(`- SMTP User: ${smtpUser}`);
      console.log(`- SMTP Pass: ${smtpPass ? '***' : 'NOT SET'}`);
      console.log(`- From Email: ${fromEmail}`);
      
      // In development, we might want to continue even if email fails
      if (process.env.NODE_ENV === 'development') {
        console.warn("Email sending skipped due to missing SMTP configuration in development mode, continuing...");
        return { success: true, email: order.customerEmail, warning: "Email not sent - SMTP credentials not configured" };
      }
      throw new Error("SMTP credentials are not properly configured. Please update your environment variables.");
    }
    
    // Create a transporter object using SMTP transport
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465, // true for 465, false for other ports
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });
    
    try {
      console.log("Sending email with Nodemailer...");
      console.log(`From: ${fromEmail}`);
      console.log(`To: ${order.customerEmail}`);
      console.log(`Subject: Order Confirmation - ${order.orderNumber}`);
      console.log(`SMTP Host: ${smtpHost}:${smtpPort}`);
      
      const info = await transporter.sendMail({
        from: fromEmail,
        to: order.customerEmail,
        subject: `Order Confirmation - ${order.orderNumber}`,
        html: emailHtml,
      });
      
      console.log("Email sent successfully:", info.messageId);
      
    } catch (error) {
      console.error("Failed to send email:", error);
      
      // Log detailed error information
      if (error instanceof Error) {
        console.error("Error message:", error.message);
        console.error("Error stack:", error.stack);
      }
      
      // In development, we might want to continue even if email fails
      if (process.env.NODE_ENV === 'development') {
        console.warn("Email sending failed in development mode, continuing...");
        return { success: true, email: order.customerEmail, warning: `Email not sent: ${error instanceof Error ? error.message : 'Unknown error'}` };
      }
      throw new Error("Failed to send confirmation email");
    }

    return { success: true, email: order.customerEmail };
  },
});