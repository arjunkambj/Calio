/* eslint-disable */
/**
 * Generated `api` utility.
 *
 * THIS CODE IS AUTOMATICALLY GENERATED.
 *
 * To regenerate, run `npx convex dev`.
 * @module
 */

import type * as admin from "../admin.js";
import type * as consultations from "../consultations.js";
import type * as core_users from "../core/users.js";
import type * as firms from "../firms.js";
import type * as gp from "../gp.js";
import type * as http from "../http.js";
import type * as lib_auth from "../lib/auth.js";
import type * as lib_gp from "../lib/gp.js";
import type * as lib_verifyPurchaseCatalog from "../lib/verifyPurchaseCatalog.js";
import type * as rewardClaims from "../rewardClaims.js";
import type * as rewards from "../rewards.js";
import type * as verifyPurchaseEvidence from "../verifyPurchaseEvidence.js";
import type * as verifyPurchases from "../verifyPurchases.js";
import type * as webhooks_stack from "../webhooks/stack.js";

import type {
  ApiFromModules,
  FilterApi,
  FunctionReference,
} from "convex/server";

declare const fullApi: ApiFromModules<{
  admin: typeof admin;
  consultations: typeof consultations;
  "core/users": typeof core_users;
  firms: typeof firms;
  gp: typeof gp;
  http: typeof http;
  "lib/auth": typeof lib_auth;
  "lib/gp": typeof lib_gp;
  "lib/verifyPurchaseCatalog": typeof lib_verifyPurchaseCatalog;
  rewardClaims: typeof rewardClaims;
  rewards: typeof rewards;
  verifyPurchaseEvidence: typeof verifyPurchaseEvidence;
  verifyPurchases: typeof verifyPurchases;
  "webhooks/stack": typeof webhooks_stack;
}>;

/**
 * A utility for referencing Convex functions in your app's public API.
 *
 * Usage:
 * ```js
 * const myFunctionReference = api.myModule.myFunction;
 * ```
 */
export declare const api: FilterApi<
  typeof fullApi,
  FunctionReference<any, "public">
>;

/**
 * A utility for referencing Convex functions in your app's internal API.
 *
 * Usage:
 * ```js
 * const myFunctionReference = internal.myModule.myFunction;
 * ```
 */
export declare const internal: FilterApi<
  typeof fullApi,
  FunctionReference<any, "internal">
>;

export declare const components: {};
