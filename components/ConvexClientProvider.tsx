"use client";

import { ConvexProvider, ConvexReactClient } from "convex/react";
import { ReactNode } from "react";

// Create a mock client for build time
const createMockClient = () => ({
  query: () => () => Promise.resolve(null),
  mutation: () => () => Promise.resolve(null),
  action: () => () => Promise.resolve(null),
  subscription: () => () => ({ unsubscribe: () => {} }),
});

let convex: ConvexReactClient | any = null;

// Initialize Convex client if the URL is available, otherwise use mock
if (typeof window !== "undefined" && process.env.NEXT_PUBLIC_CONVEX_URL) {
  convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL);
} else {
  // Use mock client for build time or when URL is not available
  convex = createMockClient();
}

export default function ConvexClientProvider({
  children,
}: {
  children: ReactNode;
}) {
  return <ConvexProvider client={convex}>{children}</ConvexProvider>;
}