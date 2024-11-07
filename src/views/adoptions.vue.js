"use strict";
var __createBinding =
  (this && this.__createBinding) ||
  (Object.create
    ? function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (
          !desc ||
          ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)
        ) {
          desc = {
            enumerable: true,
            get: function () {
              return m[k];
            },
          };
        }
        Object.defineProperty(o, k2, desc);
      }
    : function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
      });
var __setModuleDefault =
  (this && this.__setModuleDefault) ||
  (Object.create
    ? function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      }
    : function (o, v) {
        o["default"] = v;
      });
var __importStar =
  (this && this.__importStar) ||
  function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null)
      for (var k in mod)
        if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
          __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
  };
Object.defineProperty(exports, "__esModule", { value: true });
const badge_1 = require("@/components/ui/badge");
const {
  defineProps,
  defineSlots,
  defineEmits,
  defineExpose,
  defineModel,
  defineOptions,
  withDefaults,
} = await Promise.resolve().then(() => __importStar(require("vue")));
const __VLS_fnComponent = (
  await Promise.resolve().then(() => __importStar(require("vue")))
).defineComponent({});
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
  // CSS variable injection
  // CSS variable injection end
  let __VLS_resolvedLocalAndGlobalComponents;
  __VLS_elementAsFunction(
    __VLS_intrinsicElements.div,
    __VLS_intrinsicElements.div
  )({ ...{ class: "adoptions flex flex-col space-y-3 p-8" } });
  __VLS_elementAsFunction(__VLS_intrinsicElements.img)({
    src: "/voyage-del-accuel.jpg",
    alt: "Le voyage de l'accueil",
    ...{ class: "w-[720px] md:w-[320px] rounded-xl" },
  });
  __VLS_elementAsFunction(
    __VLS_intrinsicElements.div,
    __VLS_intrinsicElements.div
  )({ ...{ class: "m-auto flex flex-col space-y-3 w-72" } });
  __VLS_elementAsFunction(
    __VLS_intrinsicElements.p,
    __VLS_intrinsicElements.p
  )({ ...{ class: "font-mono text-xs mt-4" } });
  __VLS_elementAsFunction(
    __VLS_intrinsicElements.span,
    __VLS_intrinsicElements.span
  )({ ...{ class: "font-bold" } });
  __VLS_elementAsFunction(
    __VLS_intrinsicElements.p,
    __VLS_intrinsicElements.p
  )({ ...{ class: "font-mono text-xs mt-2" } });
  __VLS_elementAsFunction(
    __VLS_intrinsicElements.p,
    __VLS_intrinsicElements.p
  )({ ...{ class: "font-mono text-xs mt-2" } });
  __VLS_elementAsFunction(
    __VLS_intrinsicElements.span,
    __VLS_intrinsicElements.span
  )({ ...{ class: "font-bold" } });
  __VLS_elementAsFunction(
    __VLS_intrinsicElements.div,
    __VLS_intrinsicElements.div
  )({ ...{ class: "font-mono text-xs" } });
  __VLS_elementAsFunction(
    __VLS_intrinsicElements.a,
    __VLS_intrinsicElements.a
  )({ href: "tel:+33642804318", target: "_blank" });
  const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.Badge;
  /** @type { [typeof __VLS_components.Badge, typeof __VLS_components.Badge, ] } */
  // @ts-ignore
  const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({}));
  const __VLS_2 = __VLS_1({}, ...__VLS_functionalComponentArgsRest(__VLS_1));
  __VLS_nonNullable(__VLS_5.slots).default;
  const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
  __VLS_elementAsFunction(
    __VLS_intrinsicElements.div,
    __VLS_intrinsicElements.div
  )({ ...{ class: "font-mono text-xs" } });
  __VLS_elementAsFunction(
    __VLS_intrinsicElements.a,
    __VLS_intrinsicElements.a
  )({ href: "mailto:lespetitsclochards91@gmail.com", target: "_blank" });
  const __VLS_6 = __VLS_resolvedLocalAndGlobalComponents.Badge;
  /** @type { [typeof __VLS_components.Badge, typeof __VLS_components.Badge, ] } */
  // @ts-ignore
  const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({}));
  const __VLS_8 = __VLS_7({}, ...__VLS_functionalComponentArgsRest(__VLS_7));
  __VLS_nonNullable(__VLS_11.slots).default;
  const __VLS_11 = __VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8);
  __VLS_styleScopedClasses["adoptions"];
  __VLS_styleScopedClasses["flex"];
  __VLS_styleScopedClasses["flex-col"];
  __VLS_styleScopedClasses["space-y-3"];
  __VLS_styleScopedClasses["p-8"];
  __VLS_styleScopedClasses["w-[720px]"];
  __VLS_styleScopedClasses["md:w-[320px]"];
  __VLS_styleScopedClasses["rounded-xl"];
  __VLS_styleScopedClasses["m-auto"];
  __VLS_styleScopedClasses["flex"];
  __VLS_styleScopedClasses["flex-col"];
  __VLS_styleScopedClasses["space-y-3"];
  __VLS_styleScopedClasses["w-72"];
  __VLS_styleScopedClasses["font-mono"];
  __VLS_styleScopedClasses["text-xs"];
  __VLS_styleScopedClasses["mt-4"];
  __VLS_styleScopedClasses["font-bold"];
  __VLS_styleScopedClasses["font-mono"];
  __VLS_styleScopedClasses["text-xs"];
  __VLS_styleScopedClasses["mt-2"];
  __VLS_styleScopedClasses["font-mono"];
  __VLS_styleScopedClasses["text-xs"];
  __VLS_styleScopedClasses["mt-2"];
  __VLS_styleScopedClasses["font-bold"];
  __VLS_styleScopedClasses["font-mono"];
  __VLS_styleScopedClasses["text-xs"];
  __VLS_styleScopedClasses["font-mono"];
  __VLS_styleScopedClasses["text-xs"];
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
const __VLS_self = (
  await Promise.resolve().then(() => __importStar(require("vue")))
).defineComponent({
  setup() {
    return {
      Badge: badge_1.Badge,
    };
  },
});
exports.default = (
  await Promise.resolve().then(() => __importStar(require("vue")))
).defineComponent({
  setup() {
    return {};
  },
});
