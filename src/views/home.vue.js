"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const skeleton_1 = require("@/components/ui/skeleton");
const badge_1 = require("@/components/ui/badge");
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await Promise.resolve().then(() => __importStar(require('vue')));
const __VLS_fnComponent = (await Promise.resolve().then(() => __importStar(require('vue')))).defineComponent({});
;
let __VLS_functionalComponentProps;
function __VLS_template() {
    const __VLS_ctx = {};
    const __VLS_localComponents = {
        ...{},
        ...{},
        ...__VLS_ctx,
    };
    let __VLS_components;
    const __VLS_localDirectives = {
        ...{},
        ...__VLS_ctx,
    };
    let __VLS_directives;
    let __VLS_styleScopedClasses;
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex flex-col space-y-3") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ("/four0four.jpg"), alt: ("4o4-temp"), ...{ class: ("w-[250px] rounded-xl") }, });
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.Skeleton;
    /** @type { [typeof __VLS_components.Skeleton, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ class: ("h-[96px] w-[250px] rounded-xl") }, }));
    const __VLS_2 = __VLS_1({ ...{ class: ("h-[96px] w-[250px] rounded-xl") }, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("space-y-2") }, });
    const __VLS_6 = __VLS_resolvedLocalAndGlobalComponents.Skeleton;
    /** @type { [typeof __VLS_components.Skeleton, ] } */
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ ...{ class: ("h-4 w-[250px]") }, }));
    const __VLS_8 = __VLS_7({ ...{ class: ("h-4 w-[250px]") }, }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    const __VLS_12 = __VLS_resolvedLocalAndGlobalComponents.Skeleton;
    /** @type { [typeof __VLS_components.Skeleton, ] } */
    // @ts-ignore
    const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ ...{ class: ("h-4 w-[200px]") }, }));
    const __VLS_14 = __VLS_13({ ...{ class: ("h-4 w-[200px]") }, }, ...__VLS_functionalComponentArgsRest(__VLS_13));
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("w-[240px] font-mono text-xs") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("font-bold") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("font-mono text-xs") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ href: ("https://www.facebook.com/lesPetitsClochards/"), target: ("_blank"), });
    const __VLS_18 = __VLS_resolvedLocalAndGlobalComponents.Badge;
    /** @type { [typeof __VLS_components.Badge, typeof __VLS_components.Badge, ] } */
    // @ts-ignore
    const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({}));
    const __VLS_20 = __VLS_19({}, ...__VLS_functionalComponentArgsRest(__VLS_19));
    __VLS_nonNullable(__VLS_23.slots).default;
    const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_18, __VLS_20);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("font-mono text-xs") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ href: ("mailto:hello@lespetitsclochards.fr"), target: ("_blank"), });
    const __VLS_24 = __VLS_resolvedLocalAndGlobalComponents.Badge;
    /** @type { [typeof __VLS_components.Badge, typeof __VLS_components.Badge, ] } */
    // @ts-ignore
    const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({}));
    const __VLS_26 = __VLS_25({}, ...__VLS_functionalComponentArgsRest(__VLS_25));
    __VLS_nonNullable(__VLS_29.slots).default;
    const __VLS_29 = __VLS_pickFunctionalComponentCtx(__VLS_24, __VLS_26);
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['flex-col'];
    __VLS_styleScopedClasses['space-y-3'];
    __VLS_styleScopedClasses['w-[250px]'];
    __VLS_styleScopedClasses['rounded-xl'];
    __VLS_styleScopedClasses['h-[96px]'];
    __VLS_styleScopedClasses['w-[250px]'];
    __VLS_styleScopedClasses['rounded-xl'];
    __VLS_styleScopedClasses['space-y-2'];
    __VLS_styleScopedClasses['h-4'];
    __VLS_styleScopedClasses['w-[250px]'];
    __VLS_styleScopedClasses['h-4'];
    __VLS_styleScopedClasses['w-[200px]'];
    __VLS_styleScopedClasses['w-[240px]'];
    __VLS_styleScopedClasses['font-mono'];
    __VLS_styleScopedClasses['text-xs'];
    __VLS_styleScopedClasses['font-bold'];
    __VLS_styleScopedClasses['font-mono'];
    __VLS_styleScopedClasses['text-xs'];
    __VLS_styleScopedClasses['font-mono'];
    __VLS_styleScopedClasses['text-xs'];
    var __VLS_slots;
    var __VLS_inheritedAttrs;
    const __VLS_refs = {};
    var $refs;
    return {
        slots: __VLS_slots,
        refs: $refs,
        attrs: {},
    };
}
;
const __VLS_self = (await Promise.resolve().then(() => __importStar(require('vue')))).defineComponent({
    setup() {
        return {
            Skeleton: skeleton_1.Skeleton,
            Badge: badge_1.Badge,
        };
    },
});
exports.default = (await Promise.resolve().then(() => __importStar(require('vue')))).defineComponent({
    setup() {
        return {};
    },
});
;
