/**
 * @amlplugins/deepseek-reasoner
 *
 * Thin namespaced re-export of the native @ai-sdk/deepseek SDK.
 *
 * Symmetry rule (.claude/rules/definitions/ageni.md): every @amlplugins/google-*
 * package shares this shape — a single root index re-exporting the wrapped
 * vendor SDK with zero domain modeling on top.
 *
 * DeepSeek Reasoner — deepseek-reasoner (R1) chain-of-thought reasoning model via @ai-sdk/deepseek.
 */

import * as _sdk from "@ai-sdk/deepseek";
export * from "@ai-sdk/deepseek";
export { _sdk as sdk };
export default _sdk;

import * as _secondary from "ai";
export * as secondary from "ai";
export { _secondary };
