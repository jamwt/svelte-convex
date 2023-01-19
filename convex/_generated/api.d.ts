/* eslint-disable */
/**
 * Generated API.
 *
 * THIS CODE IS AUTOMATICALLY GENERATED.
 *
 * Generated by convex@0.4.0.
 * To regenerate, run `npx convex codegen`.
 * @module
 */

import type { ApiFromModules } from "convex/browser";
import type * as addMessage from "../addMessage";
import type * as common from "../common";
import type * as createUser from "../createUser";
import type * as getMessages from "../getMessages";

/**
 * A type describing your app's public Convex API.
 *
 * This `API` type includes information about the arguments and return
 * types of your app's query and mutation functions.
 *
 * This type should be used with type-parameterized classes like
 * `ConvexReactClient` to create app-specific types.
 */
export type API = ApiFromModules<{
  addMessage: typeof addMessage;
  common: typeof common;
  createUser: typeof createUser;
  getMessages: typeof getMessages;
}>;