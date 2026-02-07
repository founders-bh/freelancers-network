import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

export const users = sqliteTable("users", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  email: text("email").notNull().unique(),
  role: text("role", { enum: ["client", "creator", "seller", "moderator"] })
    .notNull()
    .default("client"),
  isVerified: integer("is_verified", { mode: "boolean" }).notNull().default(false),
});

export const projects = sqliteTable("projects", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  clientId: integer("client_id").references(() => users.id),
  creatorId: integer("creator_id").references(() => users.id),
  sellerId: integer("seller_id").references(() => users.id),
  totalPrice: integer("total_price").notNull(), // Storing in cents or smallest unit recommended, or just number
  status: text("status", {
    enum: ["pending_deposit", "active", "in_review", "completed", "cancelled"],
  })
    .notNull()
    .default("pending_deposit"),
  fundsStatus: text("funds_status", {
    enum: ["unpaid", "held_in_escrow", "released"],
  })
    .notNull()
    .default("unpaid"),
  // Proposed splits (stored as expected amounts)
  creatorAmount: integer("creator_amount").notNull().default(0),
  sellerAmount: integer("seller_amount").notNull().default(0),
});

export const payoutRequests = sqliteTable("payout_requests", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  userId: integer("user_id")
    .references(() => users.id)
    .notNull(),
  projectId: integer("project_id")
    .references(() => projects.id)
    .notNull(),
  amount: integer("amount").notNull(),
  ibanOrWalletInfo: text("iban_or_wallet_info").notNull(),
  status: text("status", {
    enum: ["requested", "processing", "paid_by_admin"],
  })
    .notNull()
    .default("requested"),
  adminNote: text("admin_note"), // For Transaction Reference ID
});
