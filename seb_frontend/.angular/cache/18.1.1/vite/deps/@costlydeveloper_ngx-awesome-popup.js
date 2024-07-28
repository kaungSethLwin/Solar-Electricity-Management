import {
  AnimationDriver,
  AnimationEngine,
  AnimationRendererFactory,
  AnimationStyleNormalizer,
  NoopAnimationDriver,
  WebAnimationsDriver,
  WebAnimationsStyleNormalizer
} from "./chunk-RLXXZZIS.js";
import {
  animate,
  animateChild,
  keyframes,
  query,
  state,
  style,
  transition,
  trigger
} from "./chunk-I4J6BTCB.js";
import {
  BrowserModule,
  DomRendererFactory2
} from "./chunk-SXFMZTCP.js";
import "./chunk-BGRRKDZM.js";
import {
  CommonModule,
  DOCUMENT,
  NgClass,
  NgForOf,
  NgIf,
  NgStyle
} from "./chunk-3CGXVUBG.js";
import {
  ANIMATION_MODULE_TYPE,
  ApplicationRef,
  BehaviorSubject,
  ChangeDetectorRef,
  Component,
  ComponentFactoryResolver$1,
  Directive,
  HostListener,
  Inject,
  Injectable,
  Injector,
  NgModule,
  NgZone,
  Observable,
  RendererFactory2,
  Subject,
  ViewChild,
  ViewChildren,
  ViewContainerRef,
  __classPrivateFieldGet,
  delay,
  map,
  of,
  setClassMetadata,
  take,
  tap,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction3,
  ɵɵpureFunction6,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-JTRJNW5M.js";

// node_modules/@angular/platform-browser/fesm2022/animations.mjs
var _InjectableAnimationEngine = class _InjectableAnimationEngine extends AnimationEngine {
  // The `ApplicationRef` is injected here explicitly to force the dependency ordering.
  // Since the `ApplicationRef` should be created earlier before the `AnimationEngine`, they
  // both have `ngOnDestroy` hooks and `flush()` must be called after all views are destroyed.
  constructor(doc, driver, normalizer) {
    super(doc, driver, normalizer);
  }
  ngOnDestroy() {
    this.flush();
  }
};
_InjectableAnimationEngine.ɵfac = function InjectableAnimationEngine_Factory(t) {
  return new (t || _InjectableAnimationEngine)(ɵɵinject(DOCUMENT), ɵɵinject(AnimationDriver), ɵɵinject(AnimationStyleNormalizer));
};
_InjectableAnimationEngine.ɵprov = ɵɵdefineInjectable({
  token: _InjectableAnimationEngine,
  factory: _InjectableAnimationEngine.ɵfac
});
var InjectableAnimationEngine = _InjectableAnimationEngine;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InjectableAnimationEngine, [{
    type: Injectable
  }], () => [{
    type: Document,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: AnimationDriver
  }, {
    type: AnimationStyleNormalizer
  }], null);
})();
function instantiateDefaultStyleNormalizer() {
  return new WebAnimationsStyleNormalizer();
}
function instantiateRendererFactory(renderer, engine, zone) {
  return new AnimationRendererFactory(renderer, engine, zone);
}
var SHARED_ANIMATION_PROVIDERS = [{
  provide: AnimationStyleNormalizer,
  useFactory: instantiateDefaultStyleNormalizer
}, {
  provide: AnimationEngine,
  useClass: InjectableAnimationEngine
}, {
  provide: RendererFactory2,
  useFactory: instantiateRendererFactory,
  deps: [DomRendererFactory2, AnimationEngine, NgZone]
}];
var BROWSER_ANIMATIONS_PROVIDERS = [{
  provide: AnimationDriver,
  useFactory: () => new WebAnimationsDriver()
}, {
  provide: ANIMATION_MODULE_TYPE,
  useValue: "BrowserAnimations"
}, ...SHARED_ANIMATION_PROVIDERS];
var BROWSER_NOOP_ANIMATIONS_PROVIDERS = [{
  provide: AnimationDriver,
  useClass: NoopAnimationDriver
}, {
  provide: ANIMATION_MODULE_TYPE,
  useValue: "NoopAnimations"
}, ...SHARED_ANIMATION_PROVIDERS];
var _BrowserAnimationsModule = class _BrowserAnimationsModule {
  /**
   * Configures the module based on the specified object.
   *
   * @param config Object used to configure the behavior of the `BrowserAnimationsModule`.
   * @see {@link BrowserAnimationsModuleConfig}
   *
   * @usageNotes
   * When registering the `BrowserAnimationsModule`, you can use the `withConfig`
   * function as follows:
   * ```
   * @NgModule({
   *   imports: [BrowserAnimationsModule.withConfig(config)]
   * })
   * class MyNgModule {}
   * ```
   */
  static withConfig(config) {
    return {
      ngModule: _BrowserAnimationsModule,
      providers: config.disableAnimations ? BROWSER_NOOP_ANIMATIONS_PROVIDERS : BROWSER_ANIMATIONS_PROVIDERS
    };
  }
};
_BrowserAnimationsModule.ɵfac = function BrowserAnimationsModule_Factory(t) {
  return new (t || _BrowserAnimationsModule)();
};
_BrowserAnimationsModule.ɵmod = ɵɵdefineNgModule({
  type: _BrowserAnimationsModule,
  exports: [BrowserModule]
});
_BrowserAnimationsModule.ɵinj = ɵɵdefineInjector({
  providers: BROWSER_ANIMATIONS_PROVIDERS,
  imports: [BrowserModule]
});
var BrowserAnimationsModule = _BrowserAnimationsModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BrowserAnimationsModule, [{
    type: NgModule,
    args: [{
      exports: [BrowserModule],
      providers: BROWSER_ANIMATIONS_PROVIDERS
    }]
  }], null, null);
})();
var _NoopAnimationsModule = class _NoopAnimationsModule {
};
_NoopAnimationsModule.ɵfac = function NoopAnimationsModule_Factory(t) {
  return new (t || _NoopAnimationsModule)();
};
_NoopAnimationsModule.ɵmod = ɵɵdefineNgModule({
  type: _NoopAnimationsModule,
  exports: [BrowserModule]
});
_NoopAnimationsModule.ɵinj = ɵɵdefineInjector({
  providers: BROWSER_NOOP_ANIMATIONS_PROVIDERS,
  imports: [BrowserModule]
});
var NoopAnimationsModule = _NoopAnimationsModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NoopAnimationsModule, [{
    type: NgModule,
    args: [{
      exports: [BrowserModule],
      providers: BROWSER_NOOP_ANIMATIONS_PROVIDERS
    }]
  }], null, null);
})();

// node_modules/@costlydeveloper/ngx-awesome-popup/fesm2020/costlydeveloper-ngx-awesome-popup.mjs
var _c0 = ["elConfirmBoxWrapper"];
var _c1 = ["elTextWrapper"];
var _c2 = ["elTitleWrapper"];
var _c3 = ["elButtonWrapper"];
var _c4 = ["elButton"];
var _c5 = (a0) => ({
  closeDelay: a0
});
var _c6 = (a0, a1) => ({
  value: a0,
  params: a1
});
var _c7 = (a0, a1, a2) => ({
  width: a0,
  height: a1,
  opacity: a2
});
var _c8 = (a0) => ({
  "text-align": a0
});
function ConfirmBoxWrapperComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 11, 2)(2, "div", 12)(3, "div", 13)(4, "div", 14);
    ɵɵtext(5);
    ɵɵelementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(5);
    ɵɵtextInterpolate1(" ", ctx_r1.confirmBoxBelonging.dispatch.title, " ");
  }
}
function ConfirmBoxWrapperComponent_div_4_div_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 19);
    ɵɵelement(1, "span", 20);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("className", ctx_r1.getIconClasses());
  }
}
function ConfirmBoxWrapperComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 15, 3);
    ɵɵtemplate(2, ConfirmBoxWrapperComponent_div_4_div_2_Template, 2, 1, "div", 16);
    ɵɵelementStart(3, "div", 17)(4, "div", 12);
    ɵɵelement(5, "div", 18);
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("ngClass", ctx_r1.confirmBoxBelonging.dispatch.title ? "" : "without-title");
    ɵɵadvance(2);
    ɵɵproperty("ngIf", !ctx_r1.confirmBoxBelonging.confirmBoxCoreConfig.disableIcon);
    ɵɵadvance(3);
    ɵɵproperty("innerHTML", ctx_r1.confirmBoxBelonging.dispatch.message, ɵɵsanitizeHtml);
  }
}
function ConfirmBoxWrapperComponent_div_7_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 23, 4);
    ɵɵlistener("click", function ConfirmBoxWrapperComponent_div_7_button_1_Template_button_click_0_listener() {
      const button_r4 = ɵɵrestoreView(_r3).$implicit;
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onCustomButton(button_r4));
    });
    ɵɵtext(2);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const button_r4 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵstyleProp("display", button_r4.hidden ? "none" : "inline");
    ɵɵproperty("disabled", button_r4.disabled)("className", ctx_r1.layoutHelper.getButtonClasses(button_r4.layoutType, "ed-btn ed-btn-md"));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", button_r4.label, " ");
  }
}
function ConfirmBoxWrapperComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 21);
    ɵɵtemplate(1, ConfirmBoxWrapperComponent_div_7_button_1_Template, 3, 5, "button", 22);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("ngStyle", ɵɵpureFunction1(2, _c8, ctx_r1.confirmBoxBelonging.confirmBoxCoreConfig.buttonPosition));
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r1.confirmBoxBelonging.buttons);
  }
}
function ConfirmBoxWrapperComponent_div_8_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 26, 4);
    ɵɵlistener("click", function ConfirmBoxWrapperComponent_div_8_button_4_Template_button_click_0_listener() {
      ɵɵrestoreView(_r6);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onButtonClick("decline"));
    });
    ɵɵtext(2);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ctx_r1.confirmBoxBelonging.confirmBoxCoreConfig.declineLabel, " ");
  }
}
function ConfirmBoxWrapperComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 21)(1, "button", 24, 4);
    ɵɵlistener("click", function ConfirmBoxWrapperComponent_div_8_Template_button_click_1_listener() {
      ɵɵrestoreView(_r5);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onButtonClick("confirm"));
    });
    ɵɵtext(3);
    ɵɵelementEnd();
    ɵɵtemplate(4, ConfirmBoxWrapperComponent_div_8_button_4_Template, 3, 1, "button", 25);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("ngStyle", ɵɵpureFunction1(4, _c8, ctx_r1.confirmBoxBelonging.confirmBoxCoreConfig.buttonPosition));
    ɵɵadvance();
    ɵɵproperty("className", ctx_r1.layoutHelper.getButtonClasses(ctx_r1.confirmBoxBelonging.confirmBoxCoreConfig.layoutType, "ed-btn ed-btn-md", "auto-button"));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ctx_r1.confirmBoxBelonging.confirmBoxCoreConfig.confirmLabel, " ");
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.confirmBoxBelonging.confirmBoxCoreConfig.declineLabel);
  }
}
var _c9 = ["elDialogWrapper"];
var _c10 = () => ({
  maxWidth: "100%",
  maxHeight: "100%",
  height: "100%",
  width: "100%",
  borderRadius: "0"
});
var _c11 = () => ({
  width: "100%",
  height: "100%"
});
var _c12 = (a0, a1, a2, a3, a4, a5) => ({
  width: a0,
  minWidth: a1,
  maxWidth: a2,
  height: a3,
  minHeight: a4,
  maxHeight: a5
});
function DialogWrapperComponent_ng_template_5_Template(rf, ctx) {
}
function DialogWrapperComponent_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function DialogWrapperComponent_ng_template_7_Template(rf, ctx) {
}
function DialogWrapperComponent_ng_template_11_Template(rf, ctx) {
}
function DialogWrapperComponent_div_14_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 17, 3);
    ɵɵlistener("click", function DialogWrapperComponent_div_14_button_1_Template_button_click_0_listener() {
      const button_r3 = ɵɵrestoreView(_r2).$implicit;
      const ctx_r3 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r3.onCustomButton(button_r3));
    });
    ɵɵtext(2);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const button_r3 = ctx.$implicit;
    const ctx_r3 = ɵɵnextContext(2);
    ɵɵstyleProp("display", button_r3.hidden ? "none" : "inline");
    ɵɵproperty("disabled", button_r3.disabled)("className", ctx_r3.layoutHelper.getButtonClasses(button_r3.layoutType, "ed-btn ed-btn-lg"));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", button_r3.label, " ");
  }
}
function DialogWrapperComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 15);
    ɵɵtemplate(1, DialogWrapperComponent_div_14_button_1_Template, 3, 5, "button", 16);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    ɵɵproperty("ngStyle", ɵɵpureFunction1(2, _c8, ctx_r3.dialogBelonging.dialogCoreConfig.buttonPosition));
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r3.dialogBelonging.buttons);
  }
}
var _c13 = (a0) => ({
  "only-message": a0
});
var _c14 = (a0) => ({
  width: a0
});
function ToastNotificationSimpleWrapperComponent_div_2_div_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 16);
    ɵɵelement(1, "span", 17);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("className", ctx_r1.getIconClasses());
  }
}
function ToastNotificationSimpleWrapperComponent_div_2_span_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "span", 18);
    ɵɵlistener("click", function ToastNotificationSimpleWrapperComponent_div_2_span_6_Template_span_click_0_listener() {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.closeIcon());
    });
    ɵɵelementEnd();
  }
}
function ToastNotificationSimpleWrapperComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 11, 1);
    ɵɵtemplate(2, ToastNotificationSimpleWrapperComponent_div_2_div_2_Template, 2, 1, "div", 12);
    ɵɵelementStart(3, "div", 13)(4, "div", 14);
    ɵɵtext(5);
    ɵɵtemplate(6, ToastNotificationSimpleWrapperComponent_div_2_span_6_Template, 1, 0, "span", 15);
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵproperty("ngIf", !ctx_r1.toastNotificationBelonging.toastCoreConfig.disableIcon);
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ctx_r1.toastNotificationBelonging.dispatch.title, " ");
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r1.buttonsExist);
  }
}
function ToastNotificationSimpleWrapperComponent_div_3_div_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 14)(1, "p");
    ɵɵtext(2);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r1.toastNotificationBelonging.dispatch.message);
  }
}
function ToastNotificationSimpleWrapperComponent_div_3_div_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 23);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("innerHTML", ctx_r1.toastNotificationBelonging.dispatch.message, ɵɵsanitizeHtml);
  }
}
function ToastNotificationSimpleWrapperComponent_div_3_span_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "span", 18);
    ɵɵlistener("click", function ToastNotificationSimpleWrapperComponent_div_3_span_6_Template_span_click_0_listener() {
      ɵɵrestoreView(_r4);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.closeIcon());
    });
    ɵɵelementEnd();
  }
}
function ToastNotificationSimpleWrapperComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 19, 2)(2, "div", 20)(3, "div", 13);
    ɵɵtemplate(4, ToastNotificationSimpleWrapperComponent_div_3_div_4_Template, 3, 1, "div", 21)(5, ToastNotificationSimpleWrapperComponent_div_3_div_5_Template, 1, 1, "div", 22);
    ɵɵelementEnd()();
    ɵɵtemplate(6, ToastNotificationSimpleWrapperComponent_div_3_span_6_Template, 1, 0, "span", 15);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵproperty("ngStyle", ɵɵpureFunction1(5, _c8, ctx_r1.toastNotificationBelonging.toastCoreConfig.textPosition))("ngClass", ɵɵpureFunction1(7, _c13, !ctx_r1.toastNotificationBelonging.dispatch.title));
    ɵɵadvance(2);
    ɵɵproperty("ngIf", !ctx_r1.toastNotificationBelonging.toastCoreConfig.allowHtmlMessage);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.toastNotificationBelonging.toastCoreConfig.allowHtmlMessage);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.buttonsExist && !ctx_r1.toastNotificationBelonging.dispatch.title);
  }
}
function ToastNotificationSimpleWrapperComponent_div_6_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 26, 3);
    ɵɵlistener("click", function ToastNotificationSimpleWrapperComponent_div_6_button_1_Template_button_click_0_listener() {
      const button_r6 = ɵɵrestoreView(_r5).$implicit;
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onCustomButton(button_r6));
    });
    ɵɵtext(2);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const button_r6 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵstyleProp("display", button_r6.hidden ? "none" : "inline");
    ɵɵproperty("disabled", button_r6.disabled)("className", ctx_r1.layoutHelper.getButtonClasses(button_r6.layoutType, "ed-btn ed-btn-sm"));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", button_r6.label, " ");
  }
}
function ToastNotificationSimpleWrapperComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 24);
    ɵɵtemplate(1, ToastNotificationSimpleWrapperComponent_div_6_button_1_Template, 3, 5, "button", 25);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("ngStyle", ɵɵpureFunction1(2, _c8, ctx_r1.toastNotificationBelonging.toastCoreConfig.buttonPosition));
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r1.toastNotificationBelonging.buttons);
  }
}
function ToastNotificationSimpleWrapperComponent_div_7_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 29);
    ɵɵlistener("click", function ToastNotificationSimpleWrapperComponent_div_7_button_1_Template_button_click_0_listener() {
      ɵɵrestoreView(_r7);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onButtonClick("confirm"));
    });
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("className", ctx_r1.layoutHelper.getButtonClasses(ctx_r1.toastNotificationBelonging.toastCoreConfig.layoutType, "ed-btn ed-btn-sm", "auto-button"));
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r1.toastNotificationBelonging.toastCoreConfig.confirmLabel, " ");
  }
}
function ToastNotificationSimpleWrapperComponent_div_7_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 30);
    ɵɵlistener("click", function ToastNotificationSimpleWrapperComponent_div_7_button_2_Template_button_click_0_listener() {
      ɵɵrestoreView(_r8);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onButtonClick("decline"));
    });
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r1.toastNotificationBelonging.toastCoreConfig.declineLabel, " ");
  }
}
function ToastNotificationSimpleWrapperComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 24);
    ɵɵtemplate(1, ToastNotificationSimpleWrapperComponent_div_7_button_1_Template, 2, 2, "button", 27)(2, ToastNotificationSimpleWrapperComponent_div_7_button_2_Template, 2, 1, "button", 28);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("ngStyle", ɵɵpureFunction1(3, _c8, ctx_r1.toastNotificationBelonging.toastCoreConfig.buttonPosition));
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.toastNotificationBelonging.toastCoreConfig.confirmLabel);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.toastNotificationBelonging.toastCoreConfig.declineLabel);
  }
}
function ToastNotificationSimpleWrapperComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 31);
    ɵɵelement(1, "div", 32);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngStyle", ɵɵpureFunction1(1, _c14, (ctx_r1.toastNotificationBelonging.toastCoreConfig.progressBar === 1 ? ctx_r1.timer.Progress : ctx_r1.timer.Remaining) + "%"));
  }
}
function ToastNotificationWrapperComponent_div_2_span_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "span", 15);
    ɵɵlistener("click", function ToastNotificationWrapperComponent_div_2_span_5_Template_span_click_0_listener() {
      ɵɵrestoreView(_r2);
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.closeIcon());
    });
    ɵɵelementEnd();
  }
}
function ToastNotificationWrapperComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 11, 1)(2, "div", 12)(3, "div", 13);
    ɵɵtext(4);
    ɵɵtemplate(5, ToastNotificationWrapperComponent_div_2_span_5_Template, 1, 0, "span", 14);
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance(4);
    ɵɵtextInterpolate1(" ", ctx_r2.toastNotificationBelonging.dispatch.title, " ");
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r2.buttonsExist);
  }
}
function ToastNotificationWrapperComponent_div_3_div_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 21);
    ɵɵelement(1, "span", 22);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("className", ctx_r2.getIconClasses());
  }
}
function ToastNotificationWrapperComponent_div_3_div_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 13)(1, "p");
    ɵɵtext(2);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r2.toastNotificationBelonging.dispatch.message);
  }
}
function ToastNotificationWrapperComponent_div_3_div_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 23);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵproperty("innerHTML", ctx_r2.toastNotificationBelonging.dispatch.message, ɵɵsanitizeHtml);
  }
}
function ToastNotificationWrapperComponent_div_3_span_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "span", 15);
    ɵɵlistener("click", function ToastNotificationWrapperComponent_div_3_span_7_Template_span_click_0_listener() {
      ɵɵrestoreView(_r4);
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.closeIcon());
    });
    ɵɵelementEnd();
  }
}
function ToastNotificationWrapperComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 16, 2);
    ɵɵtemplate(2, ToastNotificationWrapperComponent_div_3_div_2_Template, 2, 1, "div", 17);
    ɵɵelementStart(3, "div", 18)(4, "div", 12);
    ɵɵtemplate(5, ToastNotificationWrapperComponent_div_3_div_5_Template, 3, 1, "div", 19)(6, ToastNotificationWrapperComponent_div_3_div_6_Template, 1, 1, "div", 20);
    ɵɵelementEnd()();
    ɵɵtemplate(7, ToastNotificationWrapperComponent_div_3_span_7_Template, 1, 0, "span", 14);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵproperty("ngIf", !ctx_r2.toastNotificationBelonging.toastCoreConfig.disableIcon);
    ɵɵadvance();
    ɵɵproperty("ngStyle", ɵɵpureFunction1(6, _c8, ctx_r2.toastNotificationBelonging.toastCoreConfig.textPosition))("ngClass", ɵɵpureFunction1(8, _c13, !ctx_r2.toastNotificationBelonging.dispatch.title));
    ɵɵadvance(2);
    ɵɵproperty("ngIf", !ctx_r2.toastNotificationBelonging.toastCoreConfig.allowHtmlMessage);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.toastNotificationBelonging.toastCoreConfig.allowHtmlMessage);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.buttonsExist && !ctx_r2.toastNotificationBelonging.dispatch.title);
  }
}
function ToastNotificationWrapperComponent_div_6_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 26, 3);
    ɵɵlistener("click", function ToastNotificationWrapperComponent_div_6_button_1_Template_button_click_0_listener() {
      const button_r6 = ɵɵrestoreView(_r5).$implicit;
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.onCustomButton(button_r6));
    });
    ɵɵtext(2);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const button_r6 = ctx.$implicit;
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵstyleProp("display", button_r6.hidden ? "none" : "inline");
    ɵɵproperty("disabled", button_r6.disabled)("className", ctx_r2.layoutHelper.getButtonClasses(button_r6.layoutType, "ed-btn ed-btn-sm"));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", button_r6.label, " ");
  }
}
function ToastNotificationWrapperComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 24);
    ɵɵtemplate(1, ToastNotificationWrapperComponent_div_6_button_1_Template, 3, 5, "button", 25);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("ngStyle", ɵɵpureFunction1(2, _c8, ctx_r2.toastNotificationBelonging.toastCoreConfig.buttonPosition));
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r2.toastNotificationBelonging.buttons);
  }
}
function ToastNotificationWrapperComponent_div_7_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 29, 3);
    ɵɵlistener("click", function ToastNotificationWrapperComponent_div_7_button_1_Template_button_click_0_listener() {
      ɵɵrestoreView(_r7);
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.onButtonClick("confirm"));
    });
    ɵɵtext(2);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵproperty("className", ctx_r2.layoutHelper.getButtonClasses(ctx_r2.toastNotificationBelonging.toastCoreConfig.layoutType, "ed-btn ed-btn-sm", "auto-button"));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ctx_r2.toastNotificationBelonging.toastCoreConfig.confirmLabel, " ");
  }
}
function ToastNotificationWrapperComponent_div_7_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 30, 3);
    ɵɵlistener("click", function ToastNotificationWrapperComponent_div_7_button_2_Template_button_click_0_listener() {
      ɵɵrestoreView(_r8);
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.onButtonClick("decline"));
    });
    ɵɵtext(2);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ctx_r2.toastNotificationBelonging.toastCoreConfig.declineLabel, " ");
  }
}
function ToastNotificationWrapperComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 24);
    ɵɵtemplate(1, ToastNotificationWrapperComponent_div_7_button_1_Template, 3, 2, "button", 27)(2, ToastNotificationWrapperComponent_div_7_button_2_Template, 3, 1, "button", 28);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("ngStyle", ɵɵpureFunction1(3, _c8, ctx_r2.toastNotificationBelonging.toastCoreConfig.buttonPosition));
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.toastNotificationBelonging.toastCoreConfig.confirmLabel);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.toastNotificationBelonging.toastCoreConfig.declineLabel);
  }
}
function ToastNotificationWrapperComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 31);
    ɵɵelement(1, "div", 32);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngStyle", ɵɵpureFunction1(1, _c14, (ctx_r2.toastNotificationBelonging.toastCoreConfig.progressBar === 1 ? ctx_r2.timer.Progress : ctx_r2.timer.Remaining) + "%"));
  }
}
var DialogLayoutDisplay;
(function(DialogLayoutDisplay2) {
  DialogLayoutDisplay2[DialogLayoutDisplay2["NONE"] = 0] = "NONE";
  DialogLayoutDisplay2[DialogLayoutDisplay2["SUCCESS"] = 1] = "SUCCESS";
  DialogLayoutDisplay2[DialogLayoutDisplay2["INFO"] = 2] = "INFO";
  DialogLayoutDisplay2[DialogLayoutDisplay2["WARNING"] = 3] = "WARNING";
  DialogLayoutDisplay2[DialogLayoutDisplay2["DANGER"] = 4] = "DANGER";
  DialogLayoutDisplay2[DialogLayoutDisplay2["CUSTOM_ONE"] = 20] = "CUSTOM_ONE";
  DialogLayoutDisplay2[DialogLayoutDisplay2["CUSTOM_TWO"] = 21] = "CUSTOM_TWO";
  DialogLayoutDisplay2[DialogLayoutDisplay2["CUSTOM_THREE"] = 22] = "CUSTOM_THREE";
  DialogLayoutDisplay2[DialogLayoutDisplay2["CUSTOM_FOUR"] = 23] = "CUSTOM_FOUR";
  DialogLayoutDisplay2[DialogLayoutDisplay2["CUSTOM_FIVE"] = 24] = "CUSTOM_FIVE";
})(DialogLayoutDisplay || (DialogLayoutDisplay = {}));
var ButtonLayoutDisplay;
(function(ButtonLayoutDisplay2) {
  ButtonLayoutDisplay2[ButtonLayoutDisplay2["NONE"] = 0] = "NONE";
  ButtonLayoutDisplay2[ButtonLayoutDisplay2["SUCCESS"] = 1] = "SUCCESS";
  ButtonLayoutDisplay2[ButtonLayoutDisplay2["INFO"] = 2] = "INFO";
  ButtonLayoutDisplay2[ButtonLayoutDisplay2["WARNING"] = 3] = "WARNING";
  ButtonLayoutDisplay2[ButtonLayoutDisplay2["DANGER"] = 4] = "DANGER";
  ButtonLayoutDisplay2[ButtonLayoutDisplay2["DARK"] = 5] = "DARK";
  ButtonLayoutDisplay2[ButtonLayoutDisplay2["LIGHT"] = 6] = "LIGHT";
  ButtonLayoutDisplay2[ButtonLayoutDisplay2["PRIMARY"] = 7] = "PRIMARY";
  ButtonLayoutDisplay2[ButtonLayoutDisplay2["SECONDARY"] = 8] = "SECONDARY";
  ButtonLayoutDisplay2[ButtonLayoutDisplay2["LINK"] = 9] = "LINK";
  ButtonLayoutDisplay2[ButtonLayoutDisplay2["CUSTOM_ONE"] = 20] = "CUSTOM_ONE";
  ButtonLayoutDisplay2[ButtonLayoutDisplay2["CUSTOM_TWO"] = 21] = "CUSTOM_TWO";
  ButtonLayoutDisplay2[ButtonLayoutDisplay2["CUSTOM_THREE"] = 22] = "CUSTOM_THREE";
  ButtonLayoutDisplay2[ButtonLayoutDisplay2["CUSTOM_FOUR"] = 23] = "CUSTOM_FOUR";
  ButtonLayoutDisplay2[ButtonLayoutDisplay2["CUSTOM_FIVE"] = 24] = "CUSTOM_FIVE";
})(ButtonLayoutDisplay || (ButtonLayoutDisplay = {}));
var ColorVariance;
(function(ColorVariance2) {
  ColorVariance2[ColorVariance2["SUCCESS"] = 1] = "SUCCESS";
  ColorVariance2[ColorVariance2["INFO"] = 2] = "INFO";
  ColorVariance2[ColorVariance2["WARNING"] = 3] = "WARNING";
  ColorVariance2[ColorVariance2["DANGER"] = 4] = "DANGER";
  ColorVariance2[ColorVariance2["DARK"] = 5] = "DARK";
  ColorVariance2[ColorVariance2["LIGHT"] = 6] = "LIGHT";
  ColorVariance2[ColorVariance2["PRIMARY"] = 7] = "PRIMARY";
  ColorVariance2[ColorVariance2["SECONDARY"] = 8] = "SECONDARY";
  ColorVariance2[ColorVariance2["LINK"] = 9] = "LINK";
  ColorVariance2[ColorVariance2["CUSTOM_ONE"] = 20] = "CUSTOM_ONE";
  ColorVariance2[ColorVariance2["CUSTOM_TWO"] = 21] = "CUSTOM_TWO";
  ColorVariance2[ColorVariance2["CUSTOM_THREE"] = 22] = "CUSTOM_THREE";
  ColorVariance2[ColorVariance2["CUSTOM_FOUR"] = 23] = "CUSTOM_FOUR";
  ColorVariance2[ColorVariance2["CUSTOM_FIVE"] = 24] = "CUSTOM_FIVE";
})(ColorVariance || (ColorVariance = {}));
var AppearanceAnimation;
(function(AppearanceAnimation2) {
  AppearanceAnimation2["NONE"] = "noneIn";
  AppearanceAnimation2["BOUNCE_IN"] = "bounceIn";
  AppearanceAnimation2["SWING"] = "swing";
  AppearanceAnimation2["ZOOM_IN"] = "zoomIn";
  AppearanceAnimation2["ZOOM_IN_ROTATE"] = "zoomInRotate";
  AppearanceAnimation2["ELASTIC"] = "elastic";
  AppearanceAnimation2["JELLO"] = "jello";
  AppearanceAnimation2["FADE_IN"] = "fadeIn";
  AppearanceAnimation2["SLIDE_IN_UP"] = "slideInUp";
  AppearanceAnimation2["SLIDE_IN_DOWN"] = "slideInDown";
  AppearanceAnimation2["SLIDE_IN_LEFT"] = "slideInLeft";
  AppearanceAnimation2["SLIDE_IN_RIGHT"] = "slideInRight";
})(AppearanceAnimation || (AppearanceAnimation = {}));
var DisappearanceAnimation;
(function(DisappearanceAnimation2) {
  DisappearanceAnimation2["NONE"] = "noneOut";
  DisappearanceAnimation2["FADE_OUT"] = "fadeOut";
  DisappearanceAnimation2["ZOOM_OUT_WIND"] = "zoomOutWind";
  DisappearanceAnimation2["BOUNCE_OUT"] = "bounceOut";
  DisappearanceAnimation2["FLIP_OUT"] = "flipOutY";
  DisappearanceAnimation2["ZOOM_OUT"] = "zoomOut";
  DisappearanceAnimation2["ZOOM_OUT_ROTATE"] = "zoomOutRotate";
  DisappearanceAnimation2["SLIDE_OUT_UP"] = "slideOutUp";
  DisappearanceAnimation2["SLIDE_OUT_DOWN"] = "slideOutDown";
  DisappearanceAnimation2["SLIDE_OUT_LEFT"] = "slideOutLeft";
  DisappearanceAnimation2["SLIDE_OUT_RIGHT"] = "slideOutRight";
})(DisappearanceAnimation || (DisappearanceAnimation = {}));
var MotionBlockAnimation;
(function(MotionBlockAnimation2) {
  MotionBlockAnimation2[MotionBlockAnimation2["NONE"] = 0] = "NONE";
  MotionBlockAnimation2["WOBBLE"] = "wobble";
})(MotionBlockAnimation || (MotionBlockAnimation = {}));
var Sizes = class {
  constructor() {
    this.width = null;
    this.minWidth = null;
    this.maxWidth = null;
    this.height = null;
    this.minHeight = null;
    this.maxHeight = null;
    this.fullScreen = null;
  }
};
var dispatch = class {
  constructor() {
    this.title = null;
    this.message = null;
  }
};
var ButtonMaker = class {
  constructor(label, ID, layoutType = ButtonLayoutDisplay.PRIMARY, disabled = false) {
    this.label = label;
    this.ID = ID;
    this.layoutType = layoutType;
    this.disabled = disabled;
    this.hidden = false;
  }
  disable() {
    this.disabled = true;
  }
  enable() {
    this.disabled = false;
  }
  hide() {
    this.hidden = true;
  }
  show() {
    this.hidden = false;
  }
};
var GlobalUserConfig = class {
  constructor(_GlobalUserConfig2) {
    this.colorList = new ColorTypes();
    if (_GlobalUserConfig2) {
      const dataControl = new DataControl();
      dataControl.copyValuesFrom(_GlobalUserConfig2, this);
      const colorList = new ColorTypes();
      this.colorList = dataControl.copyValuesFrom(this.colorList, colorList);
    }
  }
};
var ColorTypes = class {
  constructor() {
    this.primary = null;
    this.secondary = null;
    this.success = null;
    this.info = null;
    this.warning = null;
    this.danger = null;
    this.light = null;
    this.dark = null;
    this.customOne = null;
    this.customTwo = null;
    this.customThree = null;
    this.customFour = null;
    this.customFive = null;
  }
};
var GlobalConfig = class {
  constructor() {
    this.displayColor = new DisplayColor();
  }
};
var DisplayColor = class {
  constructor() {
    this.primary = null;
    this.secondary = null;
    this.success = null;
    this.info = null;
    this.warning = null;
    this.danger = null;
    this.light = null;
    this.dark = null;
    this.customOne = null;
    this.customTwo = null;
    this.customThree = null;
    this.customFour = null;
    this.customFive = null;
  }
};
var ColorProvider = class {
  constructor(_Color) {
    this.Base = null;
    this.Brighten = null;
    this.BrightenForShade = null;
    this.Darken = null;
    this.DarkenForShade = null;
    this.ContrastColor = null;
    this.TransparentDarkenVariance = null;
    this.BrightShade = null;
    this.BrightWarmly = null;
    this.IsBaseBright = null;
    if (this.Base = this.isColor(_Color)) {
      this.Brighten = this.brightness(this.Base, "brighten", 25);
      this.BrightenForShade = this.brightness(this.Base, "brighten", 10);
      this.Darken = this.brightness(this.Base, "darken", 20);
      this.DarkenForShade = this.brightness(this.Base, "darken", 10);
      const luminance = Math.floor(this.luminance(this.Base) * 100);
      const darken = luminance > 50 ? 5 : luminance > 40 ? 10 : luminance > 20 ? 15 : luminance;
      const brighten = luminance > 55 ? 65 : luminance > 45 ? 60 : luminance > 20 ? 55 : luminance > 10 ? 45 : 80;
      this.BrightShade = this.brightness(this.brightness(this.Base, "darken", darken), "brighten", brighten);
      this.BrightWarmly = this.brightness(this.brightness(this.saturate(this.Base), "darken", darken - 10), "brighten", brighten - 5);
      this.TransparentDarkenVariance = this.brightness(this.transparentize(this.Base, 80), "darken", 40);
      if (this.isBright(this.Base)) {
        this.ContrastColor = "rgba(58,65,71,0.5)";
        this.IsBaseBright = true;
      } else {
        this.ContrastColor = "rgb(255,255,255, 0.7)";
        this.IsBaseBright = false;
      }
    }
  }
  saturate(_Rgb) {
    const rgbIntArray = this.getRGBArray(_Rgb);
    const greyVal = this.getLightnessOfRGB(_Rgb) * 55;
    const [lowest, middle, highest] = this.getLowMidHi(rgbIntArray);
    if (lowest.val === highest.val) {
      return _Rgb;
    }
    const saturationRange = Math.round(Math.min(255 - greyVal, greyVal));
    const maxChange = Math.min(255 - highest.val, lowest.val);
    const changeAmount = Math.min(saturationRange / 10, maxChange);
    const middleValueRatio = (greyVal - middle.val) / (greyVal - highest.val) + 0.07;
    const returnArray = [];
    returnArray[highest.index] = Math.round(highest.val + changeAmount);
    returnArray[lowest.index] = Math.round(lowest.val - changeAmount);
    returnArray[middle.index] = Math.round(greyVal + (returnArray[highest.index] - greyVal) * middleValueRatio + 5);
    return `rgb(${[returnArray].join()})`;
  }
  brightness(_Rgb, _Action, _Percentage) {
    const rgbIntArray = this.getRGBArray(_Rgb);
    const [lowest, middle, highest] = this.getLowMidHi(rgbIntArray);
    if (_Action === "brighten" && lowest.val === 255) {
      return _Rgb;
    }
    if (_Action === "darken" && highest.val === 0) {
      return _Rgb;
    }
    const amount = _Percentage / 100 * 255;
    let returnList = [];
    if (_Action === "brighten") {
      returnList[lowest.index] = Math.round(lowest.val + Math.min(255 - lowest.val, amount));
      const increaseFraction = (returnList[lowest.index] - lowest.val) / (255 - lowest.val);
      returnList[middle.index] = middle.val + (255 - middle.val) * increaseFraction;
      returnList[highest.index] = highest.val + (255 - highest.val) * increaseFraction;
    }
    if (_Action === "darken") {
      returnList[highest.index] = highest.val - Math.min(highest.val, amount);
      const decreaseFraction = (highest.val - returnList[highest.index]) / highest.val;
      returnList[middle.index] = middle.val - middle.val * decreaseFraction;
      returnList[lowest.index] = lowest.val - lowest.val * decreaseFraction;
    }
    returnList = returnList.map((item) => Math.round(item));
    if (rgbIntArray.length > 3) {
      returnList.push(rgbIntArray[3]);
      return `rgba(${returnList.join()})`;
    }
    return `rgb(${returnList.join()})`;
  }
  getLightnessOfRGB(_Rgb) {
    const rgbIntArray = this.getRGBArray(_Rgb);
    const highest = Math.max(...rgbIntArray);
    const lowest = Math.min(...rgbIntArray);
    return (highest + lowest) / 2 / 255;
  }
  isBright(_Rgb) {
    return this.contrast(this.luminance(_Rgb));
  }
  getLowMidHi(_RgbArray) {
    const rgbArrayCopy = _RgbArray.slice();
    const rgbArrayWithoutAlpha = _RgbArray.length > 3 ? rgbArrayCopy.reverse().slice(1).reverse() : _RgbArray;
    let highest = {
      val: -1,
      index: -1
    };
    let lowest = {
      val: Infinity,
      index: -1
    };
    rgbArrayWithoutAlpha.map((val, index) => {
      if (val > highest.val) {
        highest = {
          val,
          index
        };
      }
      if (val < lowest.val) {
        lowest = {
          val,
          index
        };
      }
    });
    if (lowest.index === highest.index) {
      lowest.index = highest.index + 1;
    }
    const middleIndex = 3 - highest.index - lowest.index;
    const middle = {
      val: rgbArrayWithoutAlpha[middleIndex],
      index: middleIndex
    };
    return [lowest, middle, highest];
  }
  contrast(_Luminance) {
    const brightest = Math.max(1.05, _Luminance + 0.05);
    const darkest = Math.min(1.05, _Luminance + 0.05);
    const contrast = brightest / darkest;
    return contrast < 2.7;
  }
  isColor(_StrColor) {
    const CSSDeclaration = new Option().style;
    CSSDeclaration.color = _StrColor;
    return CSSDeclaration.color ? CSSDeclaration.color : null;
  }
  getRGBArray(_Rgb) {
    return _Rgb.replace(/^(rgb|rgba)\(/, "").replace(/\)$/, "").replace(/\s/g, "").split(",").map((x) => +x);
  }
  luminance(_Rgb) {
    const rgbIntArray = this.getRGBArray(_Rgb);
    const W3algorithm = rgbIntArray.map((item) => {
      item /= 255;
      return item <= 0.03928 ? item / 12.92 : Math.pow((item + 0.055) / 1.055, 2.4);
    });
    return W3algorithm[0] * 0.2126 + W3algorithm[1] * 0.7152 + W3algorithm[2] * 0.0722;
  }
  transparentize(_Rgb, _Percentage) {
    const baseArray = this.Base.replace(/^(rgb|rgba)\(/, "").replace(/\)$/, "").replace(/\s/g, "").split(",").map((x) => +x);
    if (baseArray.length > 3) {
      baseArray.pop();
    }
    const amount = (100 - _Percentage) / 100;
    baseArray.push(amount);
    return `rgb(${baseArray.join()})`;
  }
};
var DataControl = class {
  copyValuesFrom(_Data, _DestinationObject) {
    if (typeof _Data !== "object") {
      return _DestinationObject;
    }
    const dataKeys = Object.keys(_Data);
    const destinationObjectKeys = Object.keys(_DestinationObject);
    dataKeys.forEach((key) => {
      if (destinationObjectKeys.find((tKey) => tKey === key || tKey === "_" + key)) {
        if (key.includes("Date")) {
          const date = Date.parse(_Data[key]);
          if (date) {
            _DestinationObject[key] = new Date(date);
          } else {
            if (_Data[key] !== null) {
              _DestinationObject[key] = _Data[key];
            }
          }
        } else {
          if (_Data[key] !== null) {
            _DestinationObject[key] = _Data[key];
          }
        }
      }
    });
    return _DestinationObject;
  }
};
var Timer = class {
  constructor() {
    this.TimePassed = 0;
    this.Progress = 0;
    this.Remaining = 100;
  }
  setMilliseconds(_Milliseconds) {
    this.Milliseconds = _Milliseconds;
  }
  reset() {
    this.TimePassed = 0;
    this.Progress = 0;
  }
  pause() {
    this.TimePassed = 0;
    this.Progress = 0;
  }
  stop() {
    this.TimePassed = 0;
    clearInterval(this.Timer);
  }
  start() {
    this.Timer = setInterval(() => {
      if (this.TimePassed >= this.Milliseconds) {
        clearInterval(this.Timer);
        return;
      }
      this.TimePassed += 100;
      this.Progress = this.TimePassed * 100 / this.Milliseconds;
      this.Remaining = 100 - this.Progress;
    }, 100);
  }
};
var ServiceLocator = class {
};
var ConfirmBoxConfigService = class {
  constructor(userConfig = {}) {
    this.userConfig = userConfig;
    this.authorConfig = new ConfirmBoxSettings();
    this.productionConfig = new ConfirmBoxSettings();
    const userConfigBase = new ConfirmBoxSettings();
    const dataControl = new DataControl();
    dataControl.copyValuesFrom(userConfig.confirmBoxCoreConfig, userConfigBase.confirmBoxCoreConfig);
    userConfig.confirmBoxCoreConfig = userConfigBase.confirmBoxCoreConfig;
    this.authorConfig.confirmBoxCoreConfig.width = "auto";
    this.authorConfig.confirmBoxCoreConfig.height = "auto";
    this.authorConfig.confirmBoxCoreConfig.buttonPosition = "center";
    this.authorConfig.confirmBoxCoreConfig.confirmLabel = "Confirm";
    this.authorConfig.confirmBoxCoreConfig.declineLabel = "Decline";
    this.authorConfig.confirmBoxCoreConfig.disableIcon = false;
    this.authorConfig.confirmBoxCoreConfig.allowHtmlMessage = false;
    this.authorConfig.confirmBoxCoreConfig.layoutType = DialogLayoutDisplay.NONE;
    this.authorConfig.confirmBoxCoreConfig.animationIn = AppearanceAnimation.ZOOM_IN;
    this.authorConfig.confirmBoxCoreConfig.animationOut = DisappearanceAnimation.ZOOM_OUT;
    this.authorConfig.confirmBoxCoreConfig.customStyles = new ConfirmBoxCustomStyles();
    this.authorConfig.confirmBoxCoreConfig.iconStyleClass = null;
    dataControl.copyValuesFrom(this.authorConfig.confirmBoxCoreConfig, this.productionConfig.confirmBoxCoreConfig);
    dataControl.copyValuesFrom(userConfig.confirmBoxCoreConfig, this.productionConfig.confirmBoxCoreConfig);
  }
};
ConfirmBoxConfigService.ɵfac = function ConfirmBoxConfigService_Factory(t) {
  return new (t || ConfirmBoxConfigService)(ɵɵinject("confirmBoxConfig"));
};
ConfirmBoxConfigService.ɵprov = ɵɵdefineInjectable({
  token: ConfirmBoxConfigService,
  factory: ConfirmBoxConfigService.ɵfac,
  providedIn: "root"
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfirmBoxConfigService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], function() {
    return [{
      type: void 0,
      decorators: [{
        type: Inject,
        args: ["confirmBoxConfig"]
      }]
    }];
  }, null);
})();
var DialogInjector = class {
  constructor(ParentInjector, AdditionalTokens) {
    this.ParentInjector = ParentInjector;
    this.AdditionalTokens = AdditionalTokens;
  }
  get(token, notFoundValue, flags) {
    const value = this.AdditionalTokens.get(token);
    if (value) {
      return value;
    }
    return this.ParentInjector.get(token, notFoundValue);
  }
};
var bounceIn = [style({
  transform: "scale3d(0.7, 0.7, 0.7)",
  offset: 0,
  opacity: 0
}), style({
  transform: "scale3d(1.3, 1.3, 1.3)",
  offset: 0.3,
  opacity: 0.3
}), style({
  transform: "scale3d(0.95, 0.95, 0.95)",
  offset: 0.6,
  opacity: 1
}), style({
  transform: "scale3d(1.03, 1.03, 1.03)",
  opacity: 1,
  offset: 0.8
}), style({
  transform: "scale3d(0.97, 0.97, 0.97)",
  offset: 0.9
}), style({
  transform: "scale3d(1, 1, 1)",
  offset: 1,
  opacity: 1
})];
var swing = [style({
  offset: 0,
  opacity: 0
}), style({
  transform: "rotate3d(0, 0, 1, 10deg)",
  offset: 0.2
}), style({
  transform: "rotate3d(0, 0, 1, -7deg)",
  offset: 0.3,
  opacity: 1
}), style({
  transform: "rotate3d(0, 0, 1, 3deg)",
  offset: 0.55
}), style({
  transform: "rotate3d(0, 0, 1, -3deg)",
  offset: 0.8
}), style({
  transform: "none",
  offset: 1
})];
var zoomIn = [style({
  transform: "scale3d(0.3, 0.3, 0.3)",
  offset: 0
}), style({
  offset: 0.1,
  opacity: 1
}), style({
  transform: "scale3d(1, 1, 1)",
  offset: 1
})];
var zoomInRotate = [style({
  transform: "scale(0.1) rotate(30deg)",
  offset: 0,
  opacity: 0
}), style({
  transform: "rotate(-10deg)",
  offset: 0.5,
  opacity: 1
}), style({
  transform: "rotate(3deg)",
  offset: 0.7
}), style({
  transform: "scale(1)",
  offset: 1
})];
var elastic = [style({
  transform: "scale3d(1, 1, 1)",
  offset: 0,
  opacity: 0
}), style({
  transform: "scale3d(1.25, 0.75, 1)",
  offset: 0.3
}), style({
  transform: "scale3d(0.75, 1.25, 1)",
  offset: 0.4,
  opacity: 1
}), style({
  transform: "scale3d(1.15, 0.85, 1)",
  offset: 0.5
}), style({
  transform: "scale3d(0.95, 1.05, 1)",
  offset: 0.6
}), style({
  transform: "scale3d(1.05, 0.95, 1)",
  offset: 0.7
}), style({
  transform: "scale3d(1, 1, 1)",
  offset: 1
})];
var jello = [style({
  offset: 0,
  opacity: 0
}), style({
  transform: "skewX(-12.5deg) skewY(-12.5deg)",
  offset: 0.111
}), style({
  transform: "skewX(6.25deg) skewY(6.25deg)",
  offset: 0.222
}), style({
  transform: "skewX(-3.125deg) skewY(-3.125deg)",
  offset: 0.333,
  opacity: 1
}), style({
  transform: "skewX(1.5625deg) skewY(1.5625deg)",
  offset: 0.444
}), style({
  transform: "skewX(-0.78125deg) skewY(-0.78125deg)",
  offset: 0.555
}), style({
  transform: "skewX(0.390625deg) skewY(0.390625deg)",
  offset: 0.666
}), style({
  transform: "skewX(0.390625deg) skewY(0.390625deg)",
  offset: 0.777
}), style({
  transform: "skewX(-0.1953125deg) skewY(-0.1953125deg)",
  offset: 0.888
}), style({
  transform: "none",
  offset: 1
})];
var fadeIn = [style({
  offset: 0,
  opacity: 0
}), style({
  offset: 1,
  opacity: 1
})];
var slideInUp = [style({
  offset: 0,
  opacity: 0,
  transform: "translate3d(0, 100%, 0)"
}), style({
  offset: 1,
  opacity: 1,
  transform: "translate3d(0, 0, 0)"
})];
var slideInDown = [style({
  offset: 0,
  opacity: 0,
  transform: "translate3d(0, -100%, 0)"
}), style({
  offset: 1,
  opacity: 1,
  transform: "translate3d(0, 0, 0)"
})];
var slideInLeft = [style({
  offset: 0,
  opacity: 0,
  transform: "translate3d(-100%, 0, 0)"
}), style({
  offset: 1,
  opacity: 1,
  transform: "translate3d(0, 0, 0)"
})];
var slideInRight = [style({
  offset: 0,
  opacity: 0,
  transform: "translate3d(100%, 0, 0)"
}), style({
  offset: 1,
  opacity: 1,
  transform: "translate3d(0, 0, 0)"
})];
var fadeOut = [style({
  offset: 0,
  opacity: 1
}), style({
  offset: 1,
  opacity: 0
})];
var zoomOutWind = [style({
  transform: "scale3d(.475, .475, .475) translate3d(-42px, 0, 0)",
  offset: 0.4
}), style({
  transform: "scale(.1) translate3d(400px, 0, 0)",
  "transform-origin": "top center",
  offset: 1,
  opacity: 0
})];
var bounceOut = [style({
  transform: "scale3d(1.3, 1.3, 1.3)",
  offset: 0.3
}), style({
  transform: "scale3d(0.9, 0.9, 0.9)",
  offset: 0.5
}), style({
  transform: "scale3d(0.3, 0.3, 0.3)",
  opacity: 0,
  offset: 1
})];
var flipOutY = [style({
  transform: "perspective(400px)",
  offset: 0
}), style({
  transform: "perspective(400px) rotate3d(0, 1, 0, -15deg)",
  opacity: 1,
  offset: 0.33
}), style({
  transform: "perspective(400px) rotate3d(0, 1, 0, 90deg)",
  opacity: 0,
  offset: 0.9
})];
var zoomOut = [style({
  opacity: 1,
  offset: 0
}), style({
  offset: 0.5,
  transform: "scale3d(0.3, 0.3, 0.3)",
  opacity: 0
}), style({
  offset: 1,
  opacity: 0
})];
var zoomOutRotate = [style({
  opacity: 1,
  offset: 0
}), style({
  offset: 0.9,
  transform: "rotate(200deg) scale(0.1)",
  opacity: 0
})];
var slideOutUp = [style({
  transform: "translate3d(0, 0, 0)",
  offset: 0
}), style({
  transform: "translate3d(0, -100%, 0)",
  opacity: 0,
  offset: 1
})];
var slideOutDown = [style({
  transform: "translate3d(0, 0, 0)",
  offset: 0
}), style({
  transform: "translate3d(0, 100%, 0)",
  opacity: 0,
  offset: 1
})];
var slideOutLeft = [style({
  transform: "translate3d(0, 0, 0)",
  offset: 0
}), style({
  transform: "translate3d(-100%, 0, 0)",
  opacity: 0,
  offset: 1
})];
var slideOutRight = [style({
  transform: "translate3d(0, 0, 0)",
  offset: 0
}), style({
  transform: "translate3d(100%, 0, 0)",
  opacity: 0,
  offset: 1
})];
var wobble = [style({
  transform: "translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg)",
  offset: 0.15
}), style({
  transform: "translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg)",
  offset: 0.3
}), style({
  transform: "translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg)",
  offset: 0.45
}), style({
  transform: "translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg)",
  offset: 0.6
}), style({
  transform: "translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg)",
  offset: 0.75
}), style({
  transform: "none",
  offset: 1
})];
function boxAnimations() {
  return trigger("boxAnimations", [state("reset", style({
    opacity: 1
  })), state("noneIn", style({
    opacity: 1
  })), state("bounceIn", style({
    opacity: 1
  })), state("swing", style({
    opacity: 1
  })), state("zoomIn", style({
    opacity: 1
  })), state("zoomInRotate", style({
    opacity: 1
  })), state("elastic", style({
    opacity: 1
  })), state("jello", style({
    opacity: 1
  })), state("fadeIn", style({
    opacity: 1
  })), state("slideInUp", style({
    opacity: 1
  })), state("slideInDown", style({
    opacity: 1
  })), state("slideInLeft", style({
    opacity: 1
  })), state("slideInRight", style({
    opacity: 1
  })), transition("* => noneIn", animate("10ms", keyframes(fadeIn))), transition("* => bounceIn", animate("1000ms cubic-bezier(0.215, 0.61, 0.355, 1)", keyframes(bounceIn))), transition("* => swing", animate("800ms", keyframes(swing))), transition("* => zoomIn", animate("400ms ease-in", keyframes(zoomIn))), transition("* => zoomInRotate", animate("800ms ease-in", keyframes(zoomInRotate))), transition("* => elastic", animate("1000ms", keyframes(elastic))), transition("* => jello", animate(1e3, keyframes(jello))), transition("* => fadeIn", animate("400ms ease-in", keyframes(fadeIn))), transition("* => slideInUp", animate("400ms ease-in", keyframes(slideInUp))), transition("* => slideInDown", animate("400ms ease-in", keyframes(slideInDown))), transition("* => slideInLeft", animate("400ms ease-in", keyframes(slideInLeft))), transition("* => slideInRight", animate("400ms ease-in", keyframes(slideInRight))), transition("* => reset", style({
    opacity: 1
  })), state("noneOut", style({
    opacity: 0
  })), state("fadeOut", style({
    opacity: 0
  })), state("zoomOutWind", style({
    opacity: 0
  })), state("bounceOut", style({
    opacity: 0
  })), state("flipOutY", style({
    opacity: 0
  })), state("zoomOut", style({
    opacity: 0
  })), state("zoomOutRotate", style({
    opacity: 0
  })), state("slideOutUp", style({
    opacity: 0
  })), state("slideOutDown", style({
    opacity: 0
  })), state("slideOutLeft", style({
    opacity: 0
  })), state("slideOutRight", style({
    opacity: 0
  })), transition("* => noneOut", animate("100ms ease-out", keyframes(fadeOut))), transition("* => fadeOut", animate("300ms ease-out", keyframes(fadeOut))), transition("* => zoomOutWind", animate("400ms ease-out", keyframes(zoomOutWind))), transition("* => bounceOut", animate("400ms ease-out", keyframes(bounceOut))), transition("* => flipOutY", animate("400ms ease-out", keyframes(flipOutY))), transition("* => zoomOut", animate("400ms ease-out", keyframes(zoomOut))), transition("* => zoomOutRotate", animate("400ms ease-out", keyframes(zoomOutRotate))), transition("* => slideOutUp", animate("300ms ease-out", keyframes(slideOutUp))), transition("* => slideOutDown", animate("300ms ease-out", keyframes(slideOutDown))), transition("* => slideOutLeft", animate("300ms ease-out", keyframes(slideOutLeft))), transition("* => slideOutRight", animate("300ms ease-out", keyframes(slideOutRight))), transition("* => wobble", animate(1e3, keyframes(wobble)))]);
}
function fadeInOut() {
  return trigger("fadeInOut", [state("open", style({
    opacity: 1
  })), state("close-fast", style({
    opacity: 0
  })), state("close-instant", style({
    opacity: 0
  })), transition("* => close-fast", [query("*", [animateChild()]), animate("{{closeDelay}}")]), transition("* => open", [animate(100)]), transition("* => close-instant", [animate(0)])]);
}
var LayoutHelperService = class {
  getIconClasses(layoutType, iconStyleClass) {
    let returnString = "";
    if (iconStyleClass) {
      returnString += iconStyleClass;
      return returnString;
    }
    switch (layoutType) {
      case DialogLayoutDisplay.SUCCESS: {
        returnString += "ap-icon-success icon-check-circle";
        break;
      }
      case DialogLayoutDisplay.INFO: {
        returnString += "ap-icon-info icon-info-circle";
        break;
      }
      case DialogLayoutDisplay.WARNING: {
        returnString += "ap-icon-warning icon-warning";
        break;
      }
      case DialogLayoutDisplay.DANGER: {
        returnString += "ap-icon-danger icon-times-circle";
        break;
      }
    }
    return returnString;
  }
  getButtonClasses(layoutType, perm = "", type) {
    let returnString = perm + " ";
    if (type === "auto-button" && layoutType === DialogLayoutDisplay.NONE) {
      layoutType = ButtonLayoutDisplay.PRIMARY;
    }
    switch (layoutType) {
      case ButtonLayoutDisplay.SUCCESS: {
        returnString += "ed-btn-success";
        break;
      }
      case ButtonLayoutDisplay.INFO: {
        returnString += "ed-btn-info";
        break;
      }
      case ButtonLayoutDisplay.WARNING: {
        returnString += "ed-btn-warning";
        break;
      }
      case ButtonLayoutDisplay.DANGER: {
        returnString += "ed-btn-danger";
        break;
      }
      case ButtonLayoutDisplay.DARK: {
        returnString += "ed-btn-dark";
        break;
      }
      case ButtonLayoutDisplay.LIGHT: {
        returnString += "ed-btn-light";
        break;
      }
      case ButtonLayoutDisplay.PRIMARY: {
        returnString += "ed-btn-primary";
        break;
      }
      case ButtonLayoutDisplay.SECONDARY: {
        returnString += "ed-btn-secondary";
        break;
      }
      case ButtonLayoutDisplay.LINK: {
        returnString += "ed-btn-link";
        break;
      }
      case ButtonLayoutDisplay.CUSTOM_ONE: {
        returnString += "ed-btn-customone";
        break;
      }
      case ButtonLayoutDisplay.CUSTOM_TWO: {
        returnString += "ed-btn-customtwo";
        break;
      }
      case ButtonLayoutDisplay.CUSTOM_THREE: {
        returnString += "ed-btn-customthree";
        break;
      }
      case ButtonLayoutDisplay.CUSTOM_FOUR: {
        returnString += "ed-btn-customfour";
        break;
      }
      case ButtonLayoutDisplay.CUSTOM_FIVE: {
        returnString += "ed-btn-customfive";
        break;
      }
    }
    return returnString;
  }
  getBoxClasses(layoutType, perm = "") {
    let returnString = perm + " ";
    switch (layoutType) {
      case DialogLayoutDisplay.NONE: {
        returnString += "standard-dialog";
        break;
      }
      case DialogLayoutDisplay.SUCCESS: {
        returnString += "success-dialog";
        break;
      }
      case DialogLayoutDisplay.INFO: {
        returnString += "info-dialog";
        break;
      }
      case DialogLayoutDisplay.WARNING: {
        returnString += "warning-dialog";
        break;
      }
      case DialogLayoutDisplay.DANGER: {
        returnString += "danger-dialog";
        break;
      }
      case DialogLayoutDisplay.CUSTOM_ONE: {
        returnString += "customone-dialog";
        break;
      }
      case DialogLayoutDisplay.CUSTOM_TWO: {
        returnString += "customtwo-dialog";
        break;
      }
      case DialogLayoutDisplay.CUSTOM_THREE: {
        returnString += "customthree-dialog";
        break;
      }
      case DialogLayoutDisplay.CUSTOM_FOUR: {
        returnString += "customfour-dialog";
        break;
      }
      case DialogLayoutDisplay.CUSTOM_FIVE: {
        returnString += "customfive-dialog";
        break;
      }
    }
    return returnString;
  }
};
LayoutHelperService.ɵfac = function LayoutHelperService_Factory(t) {
  return new (t || LayoutHelperService)();
};
LayoutHelperService.ɵprov = ɵɵdefineInjectable({
  token: LayoutHelperService,
  factory: LayoutHelperService.ɵfac,
  providedIn: "root"
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LayoutHelperService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var ConfirmBoxWrapperComponent = class {
  constructor(confirmBoxBelonging, cd, layoutHelper) {
    this.confirmBoxBelonging = confirmBoxBelonging;
    this.cd = cd;
    this.layoutHelper = layoutHelper;
    this.fadeInOutAnimation = "open";
    this.appearanceAnimation = AppearanceAnimation;
    this.disappearanceAnimation = DisappearanceAnimation;
    setTimeout(() => {
      this.boxAnimation = this.confirmBoxBelonging.confirmBoxCoreConfig.animationIn;
    }, 1);
  }
  ngAfterViewInit() {
    this.setResponse(false);
    this.cd.detectChanges();
    this.setCustomStyles();
  }
  setResponse(_IsSuccess, _ClickedButtonID) {
    const response = new ConfirmBoxDefaultResponse();
    if (_ClickedButtonID) {
      response.clickedButtonID = _ClickedButtonID;
    }
    response.setSuccess(_IsSuccess);
    response.setBelonging(this.confirmBoxBelonging);
    this.confirmBoxBelonging.eventsController.setDefaultResponse(response);
  }
  onOverlayClicked(evt) {
  }
  onCustomButton(_Button) {
    this.confirmBoxBelonging.eventsController.onButtonClick(_Button);
    this.setResponse(true, _Button.ID);
    this.confirmBoxBelonging.eventsController.close();
  }
  onButtonClick(_Type) {
    let buttonID;
    if (_Type === "confirm") {
      buttonID = this.confirmBoxBelonging.confirmBoxCoreConfig.confirmLabel.toLowerCase();
    } else if (_Type === "decline") {
      buttonID = this.confirmBoxBelonging.confirmBoxCoreConfig.declineLabel.toLowerCase();
    }
    this.setResponse(_Type === "confirm", buttonID);
    this.confirmBoxBelonging.eventsController.close();
  }
  closeParent$() {
    this.boxAnimation = this.confirmBoxBelonging.confirmBoxCoreConfig.animationOut;
    const closeDuration = this.confirmBoxBelonging.confirmBoxCoreConfig.animationOut ? 800 : 200;
    this.fadeInOutAnimation = "close-fast";
    return new Observable((observer) => {
      observer.next("");
      observer.complete();
    }).pipe(delay(closeDuration));
  }
  setCustomStyles() {
    if (this.confirmBoxBelonging.confirmBoxCoreConfig.customStyles.wrapperCSS && this.elConfirmBoxWrapper) {
      this.elConfirmBoxWrapper.nativeElement.style.cssText += this.confirmBoxBelonging.confirmBoxCoreConfig.customStyles.wrapperCSS;
    }
    if (this.confirmBoxBelonging.confirmBoxCoreConfig.customStyles.textCSS && this.elTextWrapper) {
      this.elTextWrapper.nativeElement.style.cssText += this.confirmBoxBelonging.confirmBoxCoreConfig.customStyles.textCSS;
    }
    if (this.confirmBoxBelonging.confirmBoxCoreConfig.customStyles.titleCSS && this.elTitleWrapper) {
      this.elTitleWrapper.nativeElement.style.cssText += this.confirmBoxBelonging.confirmBoxCoreConfig.customStyles.titleCSS;
    }
    if (this.confirmBoxBelonging.confirmBoxCoreConfig.customStyles.buttonSectionCSS && this.elButtonWrapper) {
      this.elButtonWrapper.nativeElement.style.cssText += this.confirmBoxBelonging.confirmBoxCoreConfig.customStyles.buttonSectionCSS;
    }
    if (this.confirmBoxBelonging.confirmBoxCoreConfig.customStyles.buttonCSS && this.elButton) {
      this.elButton.forEach((el) => {
        el.nativeElement.style.cssText += this.confirmBoxBelonging.confirmBoxCoreConfig.customStyles.buttonCSS;
      });
    }
  }
  getIconClasses() {
    return "icon-type-confirm-box  " + this.layoutHelper.getIconClasses(this.confirmBoxBelonging.confirmBoxCoreConfig.layoutType, this.confirmBoxBelonging.confirmBoxCoreConfig.iconStyleClass);
  }
  getButtonClasses(layoutType) {
    return this.layoutHelper.getButtonClasses(layoutType);
  }
};
ConfirmBoxWrapperComponent.ɵfac = function ConfirmBoxWrapperComponent_Factory(t) {
  return new (t || ConfirmBoxWrapperComponent)(ɵɵdirectiveInject("confirmBoxBelonging"), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(LayoutHelperService));
};
ConfirmBoxWrapperComponent.ɵcmp = ɵɵdefineComponent({
  type: ConfirmBoxWrapperComponent,
  selectors: [["app-confirm-box-wrapper"]],
  viewQuery: function ConfirmBoxWrapperComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c0, 5);
      ɵɵviewQuery(_c1, 5);
      ɵɵviewQuery(_c2, 5);
      ɵɵviewQuery(_c3, 5);
      ɵɵviewQuery(_c4, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.elConfirmBoxWrapper = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.elTextWrapper = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.elTitleWrapper = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.elButtonWrapper = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.elButton = _t);
    }
  },
  features: [ɵɵProvidersFeature([LayoutHelperService])],
  decls: 9,
  vars: 18,
  consts: [["elConfirmBoxWrapper", ""], ["elButtonWrapper", ""], ["elTitleWrapper", ""], ["elTextWrapper", ""], ["elButton", ""], [1, "ngx-awesome-popup-overlay", "confirm-box-overlay", 3, "dblclick"], [3, "className", "ngStyle"], ["class", "confirm-box-title-content", 4, "ngIf"], ["class", "content-holder", 3, "ngClass", 4, "ngIf"], [1, "button-holder"], ["class", "button-section", 3, "ngStyle", 4, "ngIf"], [1, "confirm-box-title-content"], [1, "dont-break-out"], [1, "text-wrapper", "dont-break-out"], [1, "confirm-box-title-text"], [1, "content-holder", 3, "ngClass"], ["class", "icon-section", 4, "ngIf"], [1, "text-wrapper-section", "confirm-box-inner-content"], [1, "text-wrapper", 3, "innerHTML"], [1, "icon-section"], [3, "className"], [1, "button-section", 3, "ngStyle"], [3, "disabled", "display", "className", "click", 4, "ngFor", "ngForOf"], [3, "click", "disabled", "className"], [1, "ed-btn", "ed-btn-md", 3, "click", "className"], ["class", "ed-btn ed-btn-md ed-btn-secondary", 3, "click", 4, "ngIf"], [1, "ed-btn", "ed-btn-md", "ed-btn-secondary", 3, "click"]],
  template: function ConfirmBoxWrapperComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = ɵɵgetCurrentView();
      ɵɵelementStart(0, "div", 5);
      ɵɵlistener("dblclick", function ConfirmBoxWrapperComponent_Template_div_dblclick_0_listener($event) {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.onOverlayClicked($event));
      });
      ɵɵelementStart(1, "div", 6, 0);
      ɵɵtemplate(3, ConfirmBoxWrapperComponent_div_3_Template, 6, 1, "div", 7)(4, ConfirmBoxWrapperComponent_div_4_Template, 6, 3, "div", 8);
      ɵɵelementStart(5, "div", 9, 1);
      ɵɵtemplate(7, ConfirmBoxWrapperComponent_div_7_Template, 2, 4, "div", 10)(8, ConfirmBoxWrapperComponent_div_8_Template, 5, 6, "div", 10);
      ɵɵelementEnd()()();
    }
    if (rf & 2) {
      ɵɵproperty("@fadeInOut", ɵɵpureFunction2(11, _c6, ctx.fadeInOutAnimation, ɵɵpureFunction1(9, _c5, ctx.confirmBoxBelonging.confirmBoxCoreConfig.animationOut === ctx.disappearanceAnimation.NONE ? "200ms" : "300ms")));
      ɵɵadvance();
      ɵɵproperty("@.disabled", ctx.confirmBoxBelonging.confirmBoxCoreConfig.animationIn === ctx.appearanceAnimation.NONE && ctx.confirmBoxBelonging.confirmBoxCoreConfig.animationOut === ctx.disappearanceAnimation.NONE)("@boxAnimations", ctx.boxAnimation)("className", ctx.layoutHelper.getBoxClasses(ctx.confirmBoxBelonging.confirmBoxCoreConfig.layoutType, "evolve-confirm-box"))("ngStyle", ɵɵpureFunction3(14, _c7, ctx.confirmBoxBelonging.confirmBoxCoreConfig.width, ctx.confirmBoxBelonging.confirmBoxCoreConfig.height, ctx.confirmBoxBelonging.confirmBoxCoreConfig.animationIn === ctx.appearanceAnimation.NONE ? 1 : 0));
      ɵɵadvance(2);
      ɵɵproperty("ngIf", ctx.confirmBoxBelonging.dispatch.title);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.confirmBoxBelonging.dispatch.message);
      ɵɵadvance(3);
      ɵɵproperty("ngIf", ctx.confirmBoxBelonging.buttons.length);
      ɵɵadvance();
      ɵɵproperty("ngIf", !ctx.confirmBoxBelonging.buttons.length);
    }
  },
  dependencies: [NgStyle, NgIf, NgClass, NgForOf],
  encapsulation: 2,
  data: {
    animation: [fadeInOut(), boxAnimations()]
  }
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfirmBoxWrapperComponent, [{
    type: Component,
    args: [{
      selector: "app-confirm-box-wrapper",
      animations: [fadeInOut(), boxAnimations()],
      providers: [LayoutHelperService],
      template: `<div
  class="ngx-awesome-popup-overlay confirm-box-overlay"
  (dblclick)="onOverlayClicked($event)"
  [@fadeInOut]="{
    value: fadeInOutAnimation,
    params: {
      closeDelay: confirmBoxBelonging.confirmBoxCoreConfig.animationOut === disappearanceAnimation.NONE ? '200ms' : '300ms'
    }
  }">
  <div
    [@.disabled]="
      confirmBoxBelonging.confirmBoxCoreConfig.animationIn === appearanceAnimation.NONE &&
      confirmBoxBelonging.confirmBoxCoreConfig.animationOut === disappearanceAnimation.NONE
    "
    [@boxAnimations]="boxAnimation"
    #elConfirmBoxWrapper
    [className]="layoutHelper.getBoxClasses(confirmBoxBelonging.confirmBoxCoreConfig.layoutType, 'evolve-confirm-box')"
    [ngStyle]="{
      width: confirmBoxBelonging.confirmBoxCoreConfig.width,
      height: confirmBoxBelonging.confirmBoxCoreConfig.height,
      opacity: confirmBoxBelonging.confirmBoxCoreConfig.animationIn === appearanceAnimation.NONE ? 1 : 0
    }">
    <div class="confirm-box-title-content" #elTitleWrapper *ngIf="confirmBoxBelonging.dispatch.title">
      <div class="dont-break-out">
        <div class="text-wrapper dont-break-out">
          <div class="confirm-box-title-text">
            {{ confirmBoxBelonging.dispatch.title }}
          </div>
        </div>
      </div>
    </div>

    <div
      class="content-holder"
      #elTextWrapper
      [ngClass]="confirmBoxBelonging.dispatch.title ? '' : 'without-title'"
      *ngIf="confirmBoxBelonging.dispatch.message">
      <div class="icon-section" *ngIf="!confirmBoxBelonging.confirmBoxCoreConfig.disableIcon">
        <span [className]="getIconClasses()"></span>
      </div>
      <div class="text-wrapper-section confirm-box-inner-content">
        <div class="dont-break-out">
          <div class="text-wrapper" [innerHTML]="confirmBoxBelonging.dispatch.message"></div>
        </div>
      </div>
    </div>
    <div class="button-holder" #elButtonWrapper>
      <div
        class="button-section"
        *ngIf="confirmBoxBelonging.buttons.length"
        [ngStyle]="{
          'text-align': confirmBoxBelonging.confirmBoxCoreConfig.buttonPosition
        }">
        <button
          #elButton
          *ngFor="let button of confirmBoxBelonging.buttons"
          (click)="onCustomButton(button)"
          [disabled]="button.disabled"
          [style.display]="button.hidden ? 'none' : 'inline'"
          [className]="layoutHelper.getButtonClasses(button.layoutType, 'ed-btn ed-btn-md')">
          {{ button.label }}
        </button>
      </div>
      <div
        class="button-section"
        *ngIf="!confirmBoxBelonging.buttons.length"
        [ngStyle]="{
          'text-align': confirmBoxBelonging.confirmBoxCoreConfig.buttonPosition
        }">
        <button
          class="ed-btn ed-btn-md"
          #elButton
          (click)="onButtonClick('confirm')"
          [className]="
            layoutHelper.getButtonClasses(confirmBoxBelonging.confirmBoxCoreConfig.layoutType, 'ed-btn ed-btn-md', 'auto-button')
          ">
          {{ confirmBoxBelonging.confirmBoxCoreConfig.confirmLabel }}
        </button>
        <button
          class="ed-btn ed-btn-md ed-btn-secondary"
          #elButton
          (click)="onButtonClick('decline')"
          *ngIf="confirmBoxBelonging.confirmBoxCoreConfig.declineLabel">
          {{ confirmBoxBelonging.confirmBoxCoreConfig.declineLabel }}
        </button>
      </div>
    </div>
  </div>
</div>
`
    }]
  }], function() {
    return [{
      type: ConfirmBoxBelonging,
      decorators: [{
        type: Inject,
        args: ["confirmBoxBelonging"]
      }]
    }, {
      type: ChangeDetectorRef
    }, {
      type: LayoutHelperService
    }];
  }, {
    elConfirmBoxWrapper: [{
      type: ViewChild,
      args: ["elConfirmBoxWrapper"]
    }],
    elTextWrapper: [{
      type: ViewChild,
      args: ["elTextWrapper"]
    }],
    elTitleWrapper: [{
      type: ViewChild,
      args: ["elTitleWrapper"]
    }],
    elButtonWrapper: [{
      type: ViewChild,
      args: ["elButtonWrapper"]
    }],
    elButton: [{
      type: ViewChildren,
      args: ["elButton"]
    }]
  });
})();
var ResetGlobalConfig = class {
  constructor(globalConfig) {
    const globalConfigService = ServiceLocator.injector.get(GlobalConfigService);
    if (globalConfig) {
      globalConfigService.setUserColors(globalConfig.colorList);
      globalConfigService.setNodeStyles(globalConfigService.productionGlobalConfig.displayColor, true);
    } else {
      globalConfigService.resetStyles();
    }
  }
};
var GlobalConfigService = class {
  constructor(userGlobalConfig) {
    this.userGlobalConfig = userGlobalConfig;
    this.authorGlobalConfig = new GlobalConfig();
    this.productionGlobalConfig = new GlobalConfig();
    this.userGeneratedConfig = new GlobalUserConfig(userGlobalConfig);
    this.authorGlobalConfig.displayColor.primary = null;
    this.authorGlobalConfig.displayColor.secondary = null;
    this.authorGlobalConfig.displayColor.success = null;
    this.authorGlobalConfig.displayColor.info = null;
    this.authorGlobalConfig.displayColor.warning = null;
    this.authorGlobalConfig.displayColor.danger = null;
    this.authorGlobalConfig.displayColor.light = null;
    this.authorGlobalConfig.displayColor.dark = null;
    this.authorGlobalConfig.displayColor.customOne = null;
    this.authorGlobalConfig.displayColor.customTwo = null;
    this.authorGlobalConfig.displayColor.customThree = null;
    this.authorGlobalConfig.displayColor.customFour = null;
    this.authorGlobalConfig.displayColor.customFive = null;
    this.productionGlobalConfig.displayColor = this.authorGlobalConfig.displayColor;
    this.setUserColors(this.userGeneratedConfig.colorList);
    this.setNodeStyles(this.productionGlobalConfig.displayColor);
  }
  resetStyles() {
    this.setUserColors(this.userGeneratedConfig.colorList);
    this.setNodeStyles(this.productionGlobalConfig.displayColor, true);
  }
  setNodeStyles(_ProductionColorTypes, _Reset = false) {
    if (_Reset) {
      const evolveDialogStyleNode = document.getElementById("ngx-awesome-popup-glob-styles");
      if (evolveDialogStyleNode) {
        evolveDialogStyleNode.remove();
      }
    }
    this.setToastStyles();
    Object.keys(_ProductionColorTypes).forEach((key) => {
      if (_ProductionColorTypes[key]) {
        this.setButtonStyling(key, _ProductionColorTypes[key]);
        this.setIconStyling(key, _ProductionColorTypes[key]);
        this.setToastStyling(key, _ProductionColorTypes[key]);
        this.setDialogFrame(key, _ProductionColorTypes[key]);
        if (ColorVariance[key.toUpperCase()] === ColorVariance.PRIMARY) {
          this.getSheet("ngx-awesome-popup-styles").addRule(".ngx-awesome-popup-overlay", `background:  ${_ProductionColorTypes[key].TransparentDarkenVariance}!important;`);
        }
      }
    });
  }
  setUserColors(_UserColorTypes) {
    if (typeof _UserColorTypes !== "object") {
      return;
    }
    const userKeys = Object.keys(_UserColorTypes);
    const productionObjectKeys = Object.keys(this.productionGlobalConfig.displayColor);
    userKeys.forEach((key) => {
      if (productionObjectKeys.find((tKey) => tKey === key)) {
        if (_UserColorTypes[key]) {
          const baseColorProvider = new ColorProvider(_UserColorTypes[key]);
          if (baseColorProvider.Base) {
            this.productionGlobalConfig.displayColor[key] = baseColorProvider;
          }
        } else {
          this.productionGlobalConfig.displayColor[key] = null;
        }
      }
    });
  }
  getSheet(_StyleID) {
    let evolveDialogStyleNode = document.getElementById(_StyleID);
    if (!evolveDialogStyleNode) {
      const headNode = document.head || document.getElementsByTagName("head")[0];
      if (!headNode) {
        return;
      }
      evolveDialogStyleNode = document.createElement("style");
      evolveDialogStyleNode.setAttribute("id", _StyleID);
      evolveDialogStyleNode.appendChild(document.createTextNode(""));
      headNode.appendChild(evolveDialogStyleNode);
    }
    return evolveDialogStyleNode ? evolveDialogStyleNode.sheet : null;
  }
  setToastStyling(_Key, _ColorProvider) {
    const standardToast = `.toast-wrapper.standard-toast .evolve-toast.${_Key.toLowerCase()}-dialog`;
    const standardToastStyle = `
        background:  ${_ColorProvider.BrightShade}!important;
        border-color: ${_ColorProvider.Brighten}!important;
        `;
    const simpleToast = `.toast-wrapper.simple-toast .evolve-toast.${_Key.toLowerCase()}-dialog`;
    const simpleToastStyle = `
        background:  ${_ColorProvider.BrightWarmly}!important;
        color:  ${_ColorProvider.Darken}!important;
        `;
    const baseProgress = `.toast-wrapper .evolve-toast.${_Key.toLowerCase()}-dialog .progress-bar`;
    const baseProgressStyle = `
        background-color:  ${_ColorProvider.Brighten}!important;
        `;
    this.getSheet("ngx-awesome-popup-glob-styles").addRule(baseProgress, baseProgressStyle);
    this.getSheet("ngx-awesome-popup-glob-styles").addRule(standardToast, standardToastStyle);
    this.getSheet("ngx-awesome-popup-glob-styles").addRule(simpleToast, simpleToastStyle);
  }
  setButtonStyling(_Key, _ColorProvider) {
    const baseButtonClass = `.ed-btn-${_Key.toLowerCase()}`;
    const baseStyle = `
        color: ${_ColorProvider.ContrastColor}!important;
        background:  ${_ColorProvider.Base}!important;
        border-color: ${_ColorProvider.BrightenForShade}!important;
        `;
    const hoverButtonClass = `.ed-btn-${_Key.toLowerCase()}:hover`;
    const hoverStyle = `
        background:  ${_ColorProvider.IsBaseBright ? _ColorProvider.DarkenForShade : _ColorProvider.BrightenForShade}!important;
        border-color: ${_ColorProvider.IsBaseBright ? _ColorProvider.Darken : _ColorProvider.Brighten}!important;
        `;
    const focusActiveButtonClass = `.ed-btn-${_Key.toLowerCase()}:focus, .ed-btn-${_Key.toLowerCase()}:active`;
    const focusActiveStyle = `
        box-shadow: 0 0 1px 2px ${_ColorProvider.IsBaseBright ? _ColorProvider.Darken : _ColorProvider.Brighten}!important;
        `;
    this.getSheet("ngx-awesome-popup-glob-styles").addRule(baseButtonClass, baseStyle);
    this.getSheet("ngx-awesome-popup-glob-styles").addRule(hoverButtonClass, hoverStyle);
    this.getSheet("ngx-awesome-popup-glob-styles").addRule(focusActiveButtonClass, focusActiveStyle);
  }
  setIconStyling(_Key, _ColorProvider) {
    const baseIconClass = `.ap-icon-${_Key.toLowerCase()}`;
    const baseStyle = `color: ${_ColorProvider.BrightenForShade}!important;`;
    this.getSheet("ngx-awesome-popup-glob-styles").addRule(baseIconClass, baseStyle);
  }
  setDialogFrame(_Key, _ColorProvider) {
    const baseDialogFrameClass = `.ngx-awesome-popup-overlay .${_Key.toLowerCase()}-dialog`;
    const baseStyle = `
        border-color: ${_ColorProvider.Brighten}!important;
        `;
    this.getSheet("ngx-awesome-popup-glob-styles").addRule(baseDialogFrameClass, baseStyle);
  }
  setToastStyles() {
    this.getSheet("ngx-awesome-popup-styles").addRule(`.toast-entity`, `all 0.5s ease;`);
    this.getSheet("ngx-awesome-popup-styles").addRule(`.toast-entity:first-child`, `animation: move 0.7s ease-out;`);
    const isIEOrEdge = /msie\s|trident\//i.test(window.navigator.userAgent);
    if (!isIEOrEdge) {
      this.getSheet("ngx-awesome-popup-styles").addRule(`@-webkit-keyframes move`, `
                                        0% {margin-top: -5px; opacity: 0.4;}
                                        30% {margin-top: -4px; opacity: 0.7;}
                                        100% {margin-top: 0px; opacity: 1;}
                                        `);
      this.getSheet("ngx-awesome-popup-styles").addRule(`@keyframes move`, `
                                        0% {margin-top: -5px; opacity: 0.4;}
                                        30% {margin-top: -4px; opacity: 0.7;}
                                        100% {margin-top: 0px; opacity: 1;}
                                        `);
    }
  }
};
GlobalConfigService.ɵfac = function GlobalConfigService_Factory(t) {
  return new (t || GlobalConfigService)(ɵɵinject("cdGlobalConfig"));
};
GlobalConfigService.ɵprov = ɵɵdefineInjectable({
  token: GlobalConfigService,
  factory: GlobalConfigService.ɵfac,
  providedIn: "root"
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GlobalConfigService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], function() {
    return [{
      type: void 0,
      decorators: [{
        type: Inject,
        args: ["cdGlobalConfig"]
      }]
    }];
  }, null);
})();
var ConfirmBoxService = class {
  constructor(componentFactoryResolver, injector, appRef, gConfigService) {
    this.componentFactoryResolver = componentFactoryResolver;
    this.injector = injector;
    this.appRef = appRef;
    this.gConfigService = gConfigService;
    this.confirmBoxComponentRefList = [];
  }
  open(_ConfirmBoxBelonging) {
    const dialogController = _ConfirmBoxBelonging.eventsController;
    const componentRef = this.getComponentRef(dialogController, _ConfirmBoxBelonging);
    this.confirmBoxComponentRefList.push(componentRef);
    componentRef.instance.confirmBoxBelonging = _ConfirmBoxBelonging;
    this.appendToBodyParentComponent(componentRef);
    this.listeners(dialogController);
    return dialogController;
  }
  getComponentRef(_eventsController, _ConfirmBoxBelonging) {
    let componentFactory;
    const dialogIndex = this.findDialogIndex(_ConfirmBoxBelonging.entityUniqueID);
    if (dialogIndex === -1) {
      const weakMap = /* @__PURE__ */ new WeakMap();
      weakMap.set(ConfirmBoxeventsController, _eventsController);
      componentFactory = this.componentFactoryResolver.resolveComponentFactory(ConfirmBoxWrapperComponent);
      return componentFactory.create(new DialogInjector(this.injector, weakMap));
    }
    return null;
  }
  listeners(_eventsController) {
    const closeDialogSubscription = _eventsController.afterClosed$.subscribe((response) => {
      const modalIndex = this.findDialogIndex(response.confirmBoxBelonging.entityUniqueID);
      this.removeFromBodyParentComponent(modalIndex);
      closeDialogSubscription.unsubscribe();
    });
  }
  appendToBodyParentComponent(_ComponentRef) {
    this.appRef.attachView(_ComponentRef.hostView);
    const domElem = _ComponentRef.hostView.rootNodes[0];
    document.body.appendChild(domElem);
  }
  closeDialogWrapperComponent(_DialogUniqueID) {
    const modalIndex = this.findDialogIndex(_DialogUniqueID);
    this.removeFromBodyParentComponent(modalIndex);
  }
  removeFromBodyParentComponent(_DialogIndex) {
    if (_DialogIndex > -1) {
      this.confirmBoxComponentRefList[_DialogIndex].instance.closeParent$().pipe(tap((item) => {
        this.appRef.detachView(this.confirmBoxComponentRefList[_DialogIndex].hostView);
        this.confirmBoxComponentRefList[_DialogIndex].destroy();
        this.confirmBoxComponentRefList.splice(_DialogIndex, 1);
      }), take(1)).subscribe();
    }
  }
  findDialogIndex(_DialogUniqueID) {
    return this.confirmBoxComponentRefList.findIndex((item) => {
      return _DialogUniqueID === item.instance.confirmBoxBelonging.entityUniqueID;
    });
  }
};
ConfirmBoxService.ɵfac = function ConfirmBoxService_Factory(t) {
  return new (t || ConfirmBoxService)(ɵɵinject(ComponentFactoryResolver$1), ɵɵinject(Injector), ɵɵinject(ApplicationRef), ɵɵinject(GlobalConfigService));
};
ConfirmBoxService.ɵprov = ɵɵdefineInjectable({
  token: ConfirmBoxService,
  factory: ConfirmBoxService.ɵfac,
  providedIn: "root"
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfirmBoxService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], function() {
    return [{
      type: ComponentFactoryResolver$1
    }, {
      type: Injector
    }, {
      type: ApplicationRef
    }, {
      type: GlobalConfigService
    }];
  }, null);
})();
var ConfirmBoxInitializer = class {
  constructor() {
    this.confirmBoxCarrier = new ConfirmBoxCarrier();
  }
  openConfirmBox$() {
    return this.confirmBoxCarrier.openConfirmBox$().pipe(map((resp) => {
      const basicConfirmBoxResponse = new ConfirmBoxResponse();
      const dataControl = new DataControl();
      dataControl.copyValuesFrom(resp, basicConfirmBoxResponse);
      return basicConfirmBoxResponse;
    }), take(1));
  }
  setButtons(_Buttons) {
    this.confirmBoxCarrier.setButtons(_Buttons);
  }
  setConfig(_ConfirmBoxCoreConfig) {
    this.confirmBoxCarrier.setConfig(_ConfirmBoxCoreConfig);
  }
  setDispatch(_Title, _Message = null) {
    this.confirmBoxCarrier.setTitle(_Title);
    this.confirmBoxCarrier.setMessage(_Message);
  }
  setTitle(_Title) {
    this.confirmBoxCarrier.setTitle(_Title);
  }
  setMessage(_Message) {
    this.confirmBoxCarrier.setMessage(_Message);
  }
  setButtonLabels(_Confirm, _Decline) {
    this.confirmBoxCarrier.setButtonLabels(_Confirm, _Decline);
  }
};
var ConfirmBoxResponse = class extends DataControl {
  constructor() {
    super();
    this.success = null;
    this.clickedButtonID = null;
  }
  setSuccess(_IsSuccess) {
    this.success = _IsSuccess;
  }
  setClickedButtonID(_ClickedButtonID) {
    this.clickedButtonID = _ClickedButtonID;
  }
};
var ConfirmBoxeventsController = class {
  constructor(entityUniqueID) {
    this.entityUniqueID = entityUniqueID;
    this._afterClosed = new Subject();
    this._onButtonClick = new Subject();
    this._buttonList = new Subject();
    this.afterClosed$ = this._afterClosed.asObservable();
    this.onButtonClick$ = this._onButtonClick.asObservable();
    this.buttonList$ = this._buttonList.asObservable();
  }
  close(_Response) {
    const response = _Response ? _Response : this.defaultResponse;
    this._afterClosed.next(response);
  }
  onButtonClick(_Button) {
    this.defaultResponse.setClickedButtonID(_Button.ID);
    this._onButtonClick.next(_Button);
  }
  setButtonList(_ButtonList) {
    this._buttonList.next(_ButtonList);
  }
  setDefaultResponse(_Response) {
    this.defaultResponse = _Response;
  }
};
var ConfirmBoxDefaultResponse = class extends ConfirmBoxResponse {
  constructor() {
    super();
    this.confirmBoxBelonging = null;
  }
  setBelonging(_ConfirmBoxBelonging) {
    this.confirmBoxBelonging = _ConfirmBoxBelonging;
  }
};
var ConfirmBoxCarrier = class {
  constructor() {
    this.confirmBoxBelonging = new ConfirmBoxBelonging();
  }
  setButtons(_Buttons) {
    if (_Buttons.length) {
      this.confirmBoxBelonging.buttons = _Buttons;
    }
  }
  setTitle(_Title) {
    this.confirmBoxBelonging.dispatch.title = _Title;
  }
  setMessage(_Message) {
    this.confirmBoxBelonging.dispatch.message = _Message;
  }
  setButtonLabels(_Confirm, _Decline) {
    this.confirmBoxBelonging.confirmBoxCoreConfig.confirmLabel = _Confirm;
    this.confirmBoxBelonging.confirmBoxCoreConfig.declineLabel = _Decline;
  }
  setConfig(_ConfirmBoxBelonging) {
    const dataControl = new DataControl();
    dataControl.copyValuesFrom(_ConfirmBoxBelonging, this.confirmBoxBelonging.confirmBoxCoreConfig);
  }
  openConfirmBox$() {
    const service = ServiceLocator.injector.get(ConfirmBoxService);
    const confirmBoxController = service.open(this.confirmBoxBelonging);
    return confirmBoxController.afterClosed$;
  }
};
var ConfirmBoxSettings = class {
  constructor() {
    this.buttons = [];
    this.confirmBoxCoreConfig = new confirmBoxCoreConfig();
    this.dispatch = new dispatch();
  }
};
var ConfirmBoxCustomStyles = class {
  constructor() {
    this.titleCSS = null;
    this.textCSS = null;
    this.buttonSectionCSS = null;
    this.buttonCSS = null;
    this.wrapperCSS = null;
  }
};
var confirmBoxCoreConfig = class {
  constructor() {
    this.width = null;
    this.height = null;
    this.buttonPosition = null;
    this.layoutType = null;
    this.dispatch = null;
    this.confirmLabel = null;
    this.declineLabel = null;
    this.disableIcon = null;
    this.allowHtmlMessage = null;
    this.animationIn = null;
    this.animationOut = null;
    this.customStyles = new ConfirmBoxCustomStyles();
    this.iconStyleClass = null;
  }
};
var ConfirmBoxBelonging = class extends ConfirmBoxSettings {
  constructor() {
    super();
    this.entityUniqueID = "C" + Math.random().toString(36).substr(2, 9);
    this.eventsController = new ConfirmBoxeventsController(this.entityUniqueID);
    const ConfirmBoxCoreConfigurator = ServiceLocator.injector.get(ConfirmBoxConfigService);
    const baseSettings = new ConfirmBoxSettings();
    const dataControl = new DataControl();
    dataControl.copyValuesFrom(ConfirmBoxCoreConfigurator.productionConfig.confirmBoxCoreConfig, baseSettings.confirmBoxCoreConfig);
    this.confirmBoxCoreConfig = baseSettings.confirmBoxCoreConfig;
    this.buttons = ConfirmBoxCoreConfigurator.productionConfig.buttons.slice();
  }
};
var DefaultLoaderComponent = class {
};
DefaultLoaderComponent.ɵfac = function DefaultLoaderComponent_Factory(t) {
  return new (t || DefaultLoaderComponent)();
};
DefaultLoaderComponent.ɵcmp = ɵɵdefineComponent({
  type: DefaultLoaderComponent,
  selectors: [["ng-component"]],
  decls: 7,
  vars: 0,
  consts: [[1, "box-position"], [1, "loader-center"], [1, "lds-ring"]],
  template: function DefaultLoaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
      ɵɵelement(3, "div")(4, "div")(5, "div")(6, "div");
      ɵɵelementEnd()()();
    }
  },
  styles: [".box-position[_ngcontent-%COMP%]{height:auto;left:50%;margin:0 auto;position:absolute;text-align:center;top:44%;transform:translate(-50%,-40%)}.box-position[_ngcontent-%COMP%]   .loader-center[_ngcontent-%COMP%]{align-items:center;display:flex;justify-content:center}.box-position[_ngcontent-%COMP%]   .loader-center[_ngcontent-%COMP%]   .lds-ring[_ngcontent-%COMP%]{display:inline-block;height:80px;position:relative;width:80px}.box-position[_ngcontent-%COMP%]   .loader-center[_ngcontent-%COMP%]   .lds-ring[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_lds-ring 1.2s cubic-bezier(.5,0,.5,1) infinite;border:8px solid;border-color:#d4d4d4 transparent transparent transparent;border-radius:50%;box-sizing:border-box;display:block;height:64px;margin:8px;position:absolute;width:64px}.box-position[_ngcontent-%COMP%]   .loader-center[_ngcontent-%COMP%]   .lds-ring[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(1){animation-delay:-.45s}.box-position[_ngcontent-%COMP%]   .loader-center[_ngcontent-%COMP%]   .lds-ring[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2){animation-delay:-.3s}.box-position[_ngcontent-%COMP%]   .loader-center[_ngcontent-%COMP%]   .lds-ring[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(3){animation-delay:-.15s}@keyframes _ngcontent-%COMP%_lds-ring{0%{transform:rotate(0)}to{transform:rotate(360deg)}}"]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DefaultLoaderComponent, [{
    type: Component,
    args: [{
      template: '<div class="box-position">\n  <div class="loader-center">\n    <div class="lds-ring">\n      <div></div>\n      <div></div>\n      <div></div>\n      <div></div>\n    </div>\n  </div>\n</div>\n',
      styles: [".box-position{height:auto;left:50%;margin:0 auto;position:absolute;text-align:center;top:44%;transform:translate(-50%,-40%)}.box-position .loader-center{align-items:center;display:flex;justify-content:center}.box-position .loader-center .lds-ring{display:inline-block;height:80px;position:relative;width:80px}.box-position .loader-center .lds-ring div{animation:lds-ring 1.2s cubic-bezier(.5,0,.5,1) infinite;border:8px solid;border-color:#d4d4d4 transparent transparent transparent;border-radius:50%;box-sizing:border-box;display:block;height:64px;margin:8px;position:absolute;width:64px}.box-position .loader-center .lds-ring div:nth-child(1){animation-delay:-.45s}.box-position .loader-center .lds-ring div:nth-child(2){animation-delay:-.3s}.box-position .loader-center .lds-ring div:nth-child(3){animation-delay:-.15s}@keyframes lds-ring{0%{transform:rotate(0)}to{transform:rotate(360deg)}}\n"]
    }]
  }], null, null);
})();
var DialogConfigService = class {
  constructor(userConfig = {}, gConfigService) {
    this.userConfig = userConfig;
    this.gConfigService = gConfigService;
    this.authorConfig = new DialogSettings();
    this.productionConfig = new DialogSettings();
    const userConfigBase = new DialogSettings();
    const dataControl = new DataControl();
    dataControl.copyValuesFrom(userConfig.dialogCoreConfig, userConfigBase.dialogCoreConfig);
    userConfig.dialogCoreConfig = userConfigBase.dialogCoreConfig;
    if (userConfig.dialogCoreConfig.loaderComponent !== null) {
      userConfig.dialogCoreConfig.displayLoader = userConfig.dialogCoreConfig.displayLoader === null;
    }
    this.authorConfig.dialogCoreConfig.width = "auto";
    this.authorConfig.dialogCoreConfig.height = "auto";
    this.authorConfig.dialogCoreConfig.hideScrollbar = false;
    this.authorConfig.dialogCoreConfig.escapeKeyClose = false;
    this.authorConfig.dialogCoreConfig.buttonPosition = "right";
    this.authorConfig.dialogCoreConfig.displayLoader = false;
    this.authorConfig.dialogCoreConfig.fullScreen = false;
    this.authorConfig.dialogCoreConfig.layoutType = DialogLayoutDisplay.NONE;
    this.authorConfig.dialogCoreConfig.loaderComponent = DefaultLoaderComponent;
    this.authorConfig.dialogCoreConfig.animationIn = AppearanceAnimation.ZOOM_IN;
    this.authorConfig.dialogCoreConfig.animationOut = DisappearanceAnimation.ZOOM_OUT;
    this.authorConfig.dialogCoreConfig.customStyles = new DialogCustomStyles();
    dataControl.copyValuesFrom(this.authorConfig.dialogCoreConfig, this.productionConfig.dialogCoreConfig);
    dataControl.copyValuesFrom(userConfig.dialogCoreConfig, this.productionConfig.dialogCoreConfig);
  }
};
DialogConfigService.ɵfac = function DialogConfigService_Factory(t) {
  return new (t || DialogConfigService)(ɵɵinject("dialogConfig"), ɵɵinject(GlobalConfigService));
};
DialogConfigService.ɵprov = ɵɵdefineInjectable({
  token: DialogConfigService,
  factory: DialogConfigService.ɵfac,
  providedIn: "root"
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DialogConfigService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], function() {
    return [{
      type: void 0,
      decorators: [{
        type: Inject,
        args: ["dialogConfig"]
      }]
    }, {
      type: GlobalConfigService
    }];
  }, null);
})();
var InsertionLoaderDirective = class {
  constructor(viewContainerRef) {
    this.viewContainerRef = viewContainerRef;
  }
};
InsertionLoaderDirective.ɵfac = function InsertionLoaderDirective_Factory(t) {
  return new (t || InsertionLoaderDirective)(ɵɵdirectiveInject(ViewContainerRef));
};
InsertionLoaderDirective.ɵdir = ɵɵdefineDirective({
  type: InsertionLoaderDirective,
  selectors: [["", "appInsertionLoader", ""]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InsertionLoaderDirective, [{
    type: Directive,
    args: [{
      selector: "[appInsertionLoader]"
    }]
  }], function() {
    return [{
      type: ViewContainerRef
    }];
  }, null);
})();
var InsertionDirective = class {
  constructor(viewContainerRef) {
    this.viewContainerRef = viewContainerRef;
  }
};
InsertionDirective.ɵfac = function InsertionDirective_Factory(t) {
  return new (t || InsertionDirective)(ɵɵdirectiveInject(ViewContainerRef));
};
InsertionDirective.ɵdir = ɵɵdefineDirective({
  type: InsertionDirective,
  selectors: [["", "appInsertion", ""]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InsertionDirective, [{
    type: Directive,
    args: [{
      selector: "[appInsertion]"
    }]
  }], function() {
    return [{
      type: ViewContainerRef
    }];
  }, null);
})();
var DialogWrapperComponent = class {
  constructor(dialogBelonging, componentFactoryResolver, cd, layoutHelper) {
    this.dialogBelonging = dialogBelonging;
    this.componentFactoryResolver = componentFactoryResolver;
    this.cd = cd;
    this.layoutHelper = layoutHelper;
    this.fadeInOutAnimation = "open";
    this.showLoader = true;
    this.appearanceAnimation = AppearanceAnimation;
    this.disappearanceAnimation = DisappearanceAnimation;
    setTimeout(() => {
      this.boxAnimation = this.dialogBelonging.dialogCoreConfig.animationIn;
    }, 1);
  }
  ngAfterViewInit() {
    this.hideScrollbar();
    this.loadChildComponent(this.childComponentType);
    this.loadLoaderComponent(this.dialogBelonging.dialogCoreConfig.loaderComponent);
    this.setDefaultResponse();
    this.cd.detectChanges();
    this.setCustomStyles();
  }
  hideScrollbar() {
    if (this.dialogBelonging.dialogCoreConfig.hideScrollbar) {
      this.bodyOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
    }
  }
  revertScrollbarSettings() {
    if (this.dialogBelonging.dialogCoreConfig.hideScrollbar) {
      document.body.style.overflow = this.bodyOverflow;
    }
  }
  setDefaultResponse() {
    const dialogResponse = new DialogDefaultResponse();
    dialogResponse.setBelonging(this.dialogBelonging);
    this.dialogBelonging.eventsController.setDefaultResponse(dialogResponse);
  }
  ngOnDestroy() {
    this.revertScrollbarSettings();
    if (this.childComponentRef) {
      this.childComponentRef.destroy();
    }
    if (this.loaderComponentRef) {
      this.loaderComponentRef.destroy();
    }
  }
  hideScroller() {
  }
  loadChildComponent(_ComponentType) {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(_ComponentType);
    const viewContainerRef = this.insertionPoint.viewContainerRef;
    viewContainerRef.clear();
    this.childComponentRef = viewContainerRef.createComponent(componentFactory);
    this.childComponentRef.instance.dialogBelonging = this.dialogBelonging;
  }
  loadLoaderComponent(_LoaderRef) {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(_LoaderRef);
    const viewContainerRef = this.loaderInsertionPoint.viewContainerRef;
    viewContainerRef.clear();
    this.loaderComponentRef = viewContainerRef.createComponent(componentFactory);
  }
  close() {
    this.dialogBelonging.eventsController.close();
  }
  closeParent$() {
    this.boxAnimation = this.dialogBelonging.dialogCoreConfig.animationOut;
    const closeDuration = this.dialogBelonging.dialogCoreConfig.animationOut ? 800 : 200;
    this.fadeInOutAnimation = "close-fast";
    return new Observable((observer) => {
      observer.next("");
      observer.complete();
    }).pipe(delay(closeDuration));
  }
  onOverlayClicked(evt) {
  }
  onCustomButton(_Button) {
    this.dialogBelonging.eventsController.onButtonClick(_Button);
  }
  closeLoader() {
    this.showLoader = false;
  }
  setCustomStyles() {
    if (this.dialogBelonging.dialogCoreConfig.customStyles.wrapperCSS && this.elDialogWrapper) {
      this.elDialogWrapper.nativeElement.style.cssText += this.dialogBelonging.dialogCoreConfig.customStyles.wrapperCSS;
    }
    if (this.dialogBelonging.dialogCoreConfig.customStyles.buttonSectionCSS && this.elButtonWrapper) {
      this.elButtonWrapper.nativeElement.style.cssText += this.dialogBelonging.dialogCoreConfig.customStyles.buttonSectionCSS;
    }
    if (this.dialogBelonging.dialogCoreConfig.customStyles.buttonCSS && this.elButton) {
      this.elButton.forEach((el) => {
        el.nativeElement.style.cssText += this.dialogBelonging.dialogCoreConfig.customStyles.buttonCSS;
      });
    }
  }
  keyEvent(event) {
    if (event.key === "Escape" && this.dialogBelonging.dialogCoreConfig.escapeKeyClose) {
      this.close();
    }
  }
};
DialogWrapperComponent.ɵfac = function DialogWrapperComponent_Factory(t) {
  return new (t || DialogWrapperComponent)(ɵɵdirectiveInject("dialogBelonging"), ɵɵdirectiveInject(ComponentFactoryResolver$1), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(LayoutHelperService));
};
DialogWrapperComponent.ɵcmp = ɵɵdefineComponent({
  type: DialogWrapperComponent,
  selectors: [["dialog-popup-wrapper"]],
  viewQuery: function DialogWrapperComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c9, 5);
      ɵɵviewQuery(_c3, 5);
      ɵɵviewQuery(InsertionDirective, 7);
      ɵɵviewQuery(InsertionLoaderDirective, 7);
      ɵɵviewQuery(_c4, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.elDialogWrapper = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.elButtonWrapper = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.insertionPoint = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.loaderInsertionPoint = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.elButton = _t);
    }
  },
  hostBindings: function DialogWrapperComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("keyup", function DialogWrapperComponent_keyup_HostBindingHandler($event) {
        return ctx.keyEvent($event);
      }, false, ɵɵresolveWindow);
    }
  },
  features: [ɵɵProvidersFeature([LayoutHelperService])],
  decls: 15,
  vars: 25,
  consts: [["elDialogWrapper", ""], ["fullScreen", ""], ["elButtonWrapper", ""], ["elButton", ""], [1, "ngx-awesome-popup-overlay", "aw-dialog-modal", 3, "dblclick"], [1, "evolve-parent-dialog", 3, "ngStyle", "className"], [1, "loader-holder", 3, "ngClass"], [1, "dialog-loader"], ["appInsertionLoader", ""], [4, "ngIf", "ngIfElse"], [1, "content-holder", 3, "ngStyle"], [1, "component-content", 3, "ngClass"], ["appInsertion", ""], [1, "button-holder"], ["class", "button-section", 3, "ngStyle", 4, "ngIf"], [1, "button-section", 3, "ngStyle"], [3, "disabled", "display", "className", "click", 4, "ngFor", "ngForOf"], [3, "click", "disabled", "className"]],
  template: function DialogWrapperComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = ɵɵgetCurrentView();
      ɵɵelementStart(0, "div", 4);
      ɵɵlistener("dblclick", function DialogWrapperComponent_Template_div_dblclick_0_listener($event) {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.onOverlayClicked($event));
      });
      ɵɵelementStart(1, "div", 5, 0)(3, "div", 6)(4, "div", 7);
      ɵɵtemplate(5, DialogWrapperComponent_ng_template_5_Template, 0, 0, "ng-template", 8);
      ɵɵelementEnd()();
      ɵɵtemplate(6, DialogWrapperComponent_ng_container_6_Template, 1, 0, "ng-container", 9)(7, DialogWrapperComponent_ng_template_7_Template, 0, 0, "ng-template", null, 1, ɵɵtemplateRefExtractor);
      ɵɵelementStart(9, "div", 10)(10, "div", 11);
      ɵɵtemplate(11, DialogWrapperComponent_ng_template_11_Template, 0, 0, "ng-template", 12);
      ɵɵelementEnd()();
      ɵɵelementStart(12, "div", 13, 2);
      ɵɵtemplate(14, DialogWrapperComponent_div_14_Template, 2, 4, "div", 14);
      ɵɵelementEnd()()();
    }
    if (rf & 2) {
      const fullScreen_r5 = ɵɵreference(8);
      ɵɵproperty("@fadeInOut", ɵɵpureFunction2(13, _c6, ctx.fadeInOutAnimation, ɵɵpureFunction1(11, _c5, ctx.dialogBelonging.dialogCoreConfig.animationOut === ctx.disappearanceAnimation.NONE ? "200ms" : "300ms")));
      ɵɵadvance();
      ɵɵproperty("@.disabled", ctx.dialogBelonging.dialogCoreConfig.animationIn === ctx.appearanceAnimation.NONE && ctx.dialogBelonging.dialogCoreConfig.animationOut === ctx.disappearanceAnimation.NONE)("@boxAnimations", ctx.boxAnimation)("ngStyle", ctx.dialogBelonging.dialogCoreConfig.fullScreen && ɵɵpureFunction0(16, _c10))("className", ctx.layoutHelper.getBoxClasses(ctx.dialogBelonging.dialogCoreConfig.layoutType, "evolve-parent-dialog"));
      ɵɵadvance(2);
      ɵɵproperty("ngClass", !ctx.dialogBelonging.dialogCoreConfig.displayLoader ? "dialog-loader-off" : ctx.showLoader ? "dialog-loader-active" : "dialog-loader-gone");
      ɵɵadvance(3);
      ɵɵproperty("ngIf", !ctx.dialogBelonging.dialogCoreConfig.fullScreen)("ngIfElse", fullScreen_r5);
      ɵɵadvance(3);
      ɵɵproperty("ngStyle", ctx.dialogBelonging.dialogCoreConfig.fullScreen ? ɵɵpureFunction0(17, _c11) : ɵɵpureFunction6(18, _c12, ctx.dialogBelonging.dialogCoreConfig.width, ctx.dialogBelonging.dialogCoreConfig.minWidth, ctx.dialogBelonging.dialogCoreConfig.maxWidth, ctx.dialogBelonging.dialogCoreConfig.height, ctx.dialogBelonging.dialogCoreConfig.minHeight, ctx.dialogBelonging.dialogCoreConfig.maxHeight));
      ɵɵadvance();
      ɵɵproperty("ngClass", !ctx.dialogBelonging.dialogCoreConfig.displayLoader ? "component-content-loader-off" : ctx.showLoader ? "component-content-preparing" : "component-content-ready");
      ɵɵadvance(4);
      ɵɵproperty("ngIf", ctx.dialogBelonging.buttons.length > 0);
    }
  },
  dependencies: [NgStyle, NgClass, InsertionLoaderDirective, NgIf, InsertionDirective, NgForOf],
  encapsulation: 2,
  data: {
    animation: [fadeInOut(), boxAnimations()]
  }
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DialogWrapperComponent, [{
    type: Component,
    args: [{
      selector: "dialog-popup-wrapper",
      animations: [fadeInOut(), boxAnimations()],
      providers: [LayoutHelperService],
      template: `<div
  class="ngx-awesome-popup-overlay aw-dialog-modal"
  (dblclick)="onOverlayClicked($event)"
  [@fadeInOut]="{
    value: fadeInOutAnimation,
    params: {
      closeDelay: dialogBelonging.dialogCoreConfig.animationOut === disappearanceAnimation.NONE ? '200ms' : '300ms'
    }
  }">
  <div
    class="evolve-parent-dialog"
    [@.disabled]="
      dialogBelonging.dialogCoreConfig.animationIn === appearanceAnimation.NONE &&
      dialogBelonging.dialogCoreConfig.animationOut === disappearanceAnimation.NONE
    "
    [@boxAnimations]="boxAnimation"
    #elDialogWrapper
    [ngStyle]="
      dialogBelonging.dialogCoreConfig.fullScreen && {
        maxWidth: '100%',
        maxHeight: '100%',
        height: '100%',
        width: '100%',
        borderRadius: '0'
      }
    "
    [className]="layoutHelper.getBoxClasses(dialogBelonging.dialogCoreConfig.layoutType, 'evolve-parent-dialog')">
    <div
      class="loader-holder"
      [ngClass]="
        !dialogBelonging.dialogCoreConfig.displayLoader ? 'dialog-loader-off' : showLoader ? 'dialog-loader-active' : 'dialog-loader-gone'
      ">
      <div class="dialog-loader">
        <ng-template appInsertionLoader></ng-template>
      </div>
    </div>
    <ng-container *ngIf="!dialogBelonging.dialogCoreConfig.fullScreen; else fullScreen"></ng-container>
    <ng-template #fullScreen></ng-template>
    <div
      class="content-holder"
      [ngStyle]="
        dialogBelonging.dialogCoreConfig.fullScreen
          ? {
              width: '100%',
              height: '100%'
            }
          : {
              width: dialogBelonging.dialogCoreConfig.width,
              minWidth: dialogBelonging.dialogCoreConfig.minWidth,
              maxWidth: dialogBelonging.dialogCoreConfig.maxWidth,
              height: dialogBelonging.dialogCoreConfig.height,
              minHeight: dialogBelonging.dialogCoreConfig.minHeight,
              maxHeight: dialogBelonging.dialogCoreConfig.maxHeight
            }
      ">
      <div
        class="component-content"
        [ngClass]="
          !dialogBelonging.dialogCoreConfig.displayLoader
            ? 'component-content-loader-off'
            : showLoader
            ? 'component-content-preparing'
            : 'component-content-ready'
        ">
        <ng-template appInsertion></ng-template>
      </div>
    </div>

    <div class="button-holder" #elButtonWrapper>
      <div
        class="button-section"
        *ngIf="dialogBelonging.buttons.length > 0"
        [ngStyle]="{
          'text-align': dialogBelonging.dialogCoreConfig.buttonPosition
        }">
        <button
          #elButton
          *ngFor="let button of dialogBelonging.buttons"
          [disabled]="button.disabled"
          [style.display]="button.hidden ? 'none' : 'inline'"
          (click)="onCustomButton(button)"
          [className]="layoutHelper.getButtonClasses(button.layoutType, 'ed-btn ed-btn-lg')">
          {{ button.label }}
        </button>
      </div>
    </div>
  </div>
</div>
`
    }]
  }], function() {
    return [{
      type: DialogBelonging,
      decorators: [{
        type: Inject,
        args: ["dialogBelonging"]
      }]
    }, {
      type: ComponentFactoryResolver$1
    }, {
      type: ChangeDetectorRef
    }, {
      type: LayoutHelperService
    }];
  }, {
    elDialogWrapper: [{
      type: ViewChild,
      args: ["elDialogWrapper"]
    }],
    elButtonWrapper: [{
      type: ViewChild,
      args: ["elButtonWrapper"]
    }],
    elButton: [{
      type: ViewChildren,
      args: ["elButton"]
    }],
    insertionPoint: [{
      type: ViewChild,
      args: [InsertionDirective, {
        static: true
      }]
    }],
    loaderInsertionPoint: [{
      type: ViewChild,
      args: [InsertionLoaderDirective, {
        static: true
      }]
    }],
    keyEvent: [{
      type: HostListener,
      args: ["window:keyup", ["$event"]]
    }]
  });
})();
var DialogService = class {
  constructor(componentFactoryResolver, injector, appRef) {
    this.componentFactoryResolver = componentFactoryResolver;
    this.injector = injector;
    this.appRef = appRef;
    this.dialogParentComponentRefList = [];
  }
  open(_ComponentType, _DialogBelonging) {
    const dialogController = _DialogBelonging.eventsController;
    const componentRef = this.getComponentRef(dialogController, _DialogBelonging);
    this.dialogParentComponentRefList.push(componentRef);
    componentRef.instance.dialogBelonging = _DialogBelonging;
    componentRef.instance.childComponentType = _ComponentType;
    this.appendToBodyParentComponent(componentRef);
    this.listeners(dialogController);
    return dialogController;
  }
  getComponentRef(_eventsController, _DialogBelonging) {
    let componentFactory;
    const dialogIndex = this.findDialogIndex(_DialogBelonging.entityUniqueID);
    if (dialogIndex === -1) {
      const weakMap = /* @__PURE__ */ new WeakMap();
      weakMap.set(DialogeventsController, _eventsController);
      componentFactory = this.componentFactoryResolver.resolveComponentFactory(DialogWrapperComponent);
      return componentFactory.create(new DialogInjector(this.injector, weakMap));
    }
    return null;
  }
  listeners(_eventsController) {
    const closeDialogSubscription = _eventsController.afterClosed$.subscribe((response) => {
      const modalIndex = this.findDialogIndex(response.DialogBelonging.entityUniqueID);
      this.removeFromBodyDialogWrapperComponent(modalIndex);
      closeDialogSubscription.unsubscribe();
    });
    const closeLoaderSubscription = _eventsController.afterLoader$.subscribe((_DialogUniqueID) => {
      if (_DialogUniqueID) {
        const modalIndex = this.findDialogIndex(_DialogUniqueID);
        if (modalIndex !== -1) {
          this.dialogParentComponentRefList[modalIndex].instance.closeLoader();
        }
      }
      closeLoaderSubscription.unsubscribe();
    });
  }
  childComponentResolver() {
  }
  appendToBodyParentComponent(_ComponentRef) {
    this.appRef.attachView(_ComponentRef.hostView);
    const domElem = _ComponentRef.hostView.rootNodes[0];
    document.body.appendChild(domElem);
  }
  closeDialogWrapperComponent(_DialogUniqueID) {
    const modalIndex = this.findDialogIndex(_DialogUniqueID);
    this.removeFromBodyDialogWrapperComponent(modalIndex);
  }
  removeFromBodyDialogWrapperComponent(_DialogIndex) {
    if (_DialogIndex > -1) {
      this.dialogParentComponentRefList[_DialogIndex].instance.closeParent$().pipe(tap((item) => {
        this.appRef.detachView(this.dialogParentComponentRefList[_DialogIndex].hostView);
        this.dialogParentComponentRefList[_DialogIndex].destroy();
        this.dialogParentComponentRefList.splice(_DialogIndex, 1);
      }), take(1)).subscribe();
    }
  }
  findDialogIndex(_DialogUniqueID) {
    return this.dialogParentComponentRefList.findIndex((item) => {
      return _DialogUniqueID === item.instance.dialogBelonging.entityUniqueID;
    });
  }
};
DialogService.ɵfac = function DialogService_Factory(t) {
  return new (t || DialogService)(ɵɵinject(ComponentFactoryResolver$1), ɵɵinject(Injector), ɵɵinject(ApplicationRef));
};
DialogService.ɵprov = ɵɵdefineInjectable({
  token: DialogService,
  factory: DialogService.ɵfac,
  providedIn: "root"
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DialogService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], function() {
    return [{
      type: ComponentFactoryResolver$1
    }, {
      type: Injector
    }, {
      type: ApplicationRef
    }];
  }, null);
})();
var DialogInitializer = class {
  constructor(component) {
    this.component = component;
    this.dialogCarrier = new DialogCarrier();
    this.dialogCarrier.setComponent(this.component);
  }
  openDialog$() {
    return this.dialogCarrier.openDialog$().pipe(map((resp) => {
      const basicDialogResponse = new DialogResponse();
      const dataControl = new DataControl();
      dataControl.copyValuesFrom(resp, basicDialogResponse);
      return basicDialogResponse;
    }), take(1));
  }
  setButtons(_Buttons) {
    this.dialogCarrier.setButtons(_Buttons);
  }
  setCustomData(_CustomData) {
    this.dialogCarrier.setCustomData(_CustomData);
  }
  setConfig(_DialogConfig) {
    this.dialogCarrier.setConfig(_DialogConfig);
  }
};
var DialogResponse = class extends DataControl {
  constructor() {
    super();
    this.payload = null;
    this.success = null;
    this.clickedButtonID = null;
  }
  setPayload(_Payload) {
    this.payload = _Payload;
  }
  setClickedButtonID(_ClickedButtonID) {
    this.clickedButtonID = _ClickedButtonID;
  }
};
var DialogeventsController = class {
  constructor(entityUniqueID) {
    this.entityUniqueID = entityUniqueID;
    this._afterClosed = new Subject();
    this._afterLoader = new Subject();
    this._onButtonClick = new Subject();
    this._buttonList = new Subject();
    this.onButtonClick$ = this._onButtonClick.asObservable();
    this.afterClosed$ = this._afterClosed.asObservable();
    this.afterLoader$ = this._afterLoader.asObservable();
    this.buttonList$ = this._buttonList.asObservable();
  }
  close(_Payload = null) {
    this.defaultResponse.setPayload(_Payload);
    this._afterClosed.next(this.defaultResponse);
  }
  onButtonClick(_Button) {
    this.defaultResponse.setClickedButtonID(_Button.ID);
    this._onButtonClick.next(_Button);
  }
  setButtonList(_ButtonList) {
    this._buttonList.next(_ButtonList);
  }
  closeLoader() {
    setTimeout(() => {
      this._afterLoader.next(this.entityUniqueID);
    }, 0);
  }
  setDefaultResponse(_Response) {
    this.defaultResponse = _Response;
  }
};
var DialogDefaultResponse = class extends DialogResponse {
  constructor() {
    super();
    this.DialogBelonging = null;
  }
  setBelonging(_DialogBelonging) {
    this.DialogBelonging = _DialogBelonging;
  }
};
var DialogCarrier = class {
  constructor() {
    this.dialogBelonging = new DialogBelonging();
  }
  setComponent(_Component) {
    this.component = _Component;
  }
  setButtons(_Buttons) {
    if (_Buttons.length) {
      this.dialogBelonging.buttons = _Buttons;
    }
  }
  setCustomData(_CustomData) {
    this.dialogBelonging.customData = _CustomData;
  }
  setConfig(_DialogConfig) {
    const dataControl = new DataControl();
    dataControl.copyValuesFrom(_DialogConfig, this.dialogBelonging.dialogCoreConfig);
    if (_DialogConfig?.loaderComponent) {
      this.dialogBelonging.dialogCoreConfig.displayLoader = true;
    }
  }
  openDialog$() {
    const service = ServiceLocator.injector.get(DialogService);
    const dialogController = service.open(this.component, this.dialogBelonging);
    return dialogController.afterClosed$;
  }
};
var DialogCustomStyles = class {
  constructor() {
    this.buttonSectionCSS = null;
    this.buttonCSS = null;
    this.wrapperCSS = null;
  }
};
var dialogCoreConfig = class extends Sizes {
  constructor() {
    super(...arguments);
    this.escapeKeyClose = null;
    this.hideScrollbar = null;
    this.buttonPosition = null;
    this.layoutType = null;
    this.displayLoader = null;
    this.loaderComponent = null;
    this.animationIn = null;
    this.animationOut = null;
    this.customStyles = new DialogCustomStyles();
  }
};
var DialogSettings = class {
  constructor() {
    this.buttons = [];
    this.dialogCoreConfig = new dialogCoreConfig();
  }
};
var DialogBelonging = class extends DialogSettings {
  constructor() {
    super();
    this.entityUniqueID = "D" + Math.random().toString(36).substr(2, 9);
    this.customData = null;
    this.eventsController = new DialogeventsController(this.entityUniqueID);
    const dialogConfigurator = ServiceLocator.injector.get(DialogConfigService);
    const baseSettings = new DialogSettings();
    const dataControl = new DataControl();
    dataControl.copyValuesFrom(dialogConfigurator.productionConfig.dialogCoreConfig, baseSettings.dialogCoreConfig);
    this.dialogCoreConfig = baseSettings.dialogCoreConfig;
    this.buttons = dialogConfigurator.productionConfig.buttons.slice();
  }
};
var ToastProgressBarEnum;
(function(ToastProgressBarEnum2) {
  ToastProgressBarEnum2[ToastProgressBarEnum2["NONE"] = 0] = "NONE";
  ToastProgressBarEnum2[ToastProgressBarEnum2["INCREASE"] = 1] = "INCREASE";
  ToastProgressBarEnum2[ToastProgressBarEnum2["DECREASE"] = 2] = "DECREASE";
})(ToastProgressBarEnum || (ToastProgressBarEnum = {}));
var ToastPositionEnum;
(function(ToastPositionEnum2) {
  ToastPositionEnum2["TOP_LEFT"] = "top-left";
  ToastPositionEnum2["TOP_CENTER"] = "top-center";
  ToastPositionEnum2["TOP_RIGHT"] = "top-right";
  ToastPositionEnum2["TOP_FULL_WIDTH"] = "top-fullwidth";
  ToastPositionEnum2["BOTTOM_LEFT"] = "bottom-left";
  ToastPositionEnum2["BOTTOM_CENTER"] = "bottom-center";
  ToastPositionEnum2["BOTTOM_RIGHT"] = "bottom-right";
  ToastPositionEnum2["BOTTOM_FULL_WIDTH"] = "bottom-fullwidth";
})(ToastPositionEnum || (ToastPositionEnum = {}));
var ToastUserViewTypeEnum;
(function(ToastUserViewTypeEnum2) {
  ToastUserViewTypeEnum2["SIMPLE"] = "simple";
  ToastUserViewTypeEnum2["STANDARD"] = "standard";
})(ToastUserViewTypeEnum || (ToastUserViewTypeEnum = {}));
var ToastNotificationConfigService = class {
  constructor(userConfig = {}) {
    this.userConfig = userConfig;
    this.dataControl = new DataControl();
    this.authorConfig = new ToastSettings();
    this.productionConfig = new ToastSettings();
    const userConfigBase = new ToastSettings();
    this.dataControl.copyValuesFrom(userConfig.toastCoreConfig, userConfigBase.toastCoreConfig);
    userConfig.toastCoreConfig = userConfigBase.toastCoreConfig;
    this.authorConfig.toastCoreConfig.buttonPosition = "right";
    this.authorConfig.toastCoreConfig.textPosition = "left";
    this.authorConfig.toastCoreConfig.toastPosition = ToastPositionEnum.TOP_RIGHT;
    this.authorConfig.toastCoreConfig.progressBar = ToastProgressBarEnum.INCREASE;
    this.authorConfig.toastCoreConfig.toastUserViewType = ToastUserViewTypeEnum.SIMPLE;
    this.authorConfig.toastCoreConfig.autoCloseDelay = 2500;
    this.authorConfig.toastCoreConfig.disableIcon = false;
    this.authorConfig.toastCoreConfig.allowHtmlMessage = true;
    this.authorConfig.toastCoreConfig.layoutType = DialogLayoutDisplay.NONE;
    this.authorConfig.globalSettings.allowedNotificationsAtOnce = 5;
    this.authorConfig.toastCoreConfig.animationIn = AppearanceAnimation.ZOOM_IN;
    this.authorConfig.toastCoreConfig.animationOut = DisappearanceAnimation.ZOOM_OUT;
    this.authorConfig.toastCoreConfig.customStyles = new ToastCustomStyles();
    this.authorConfig.toastCoreConfig.iconStyleClass = null;
    this.setResetGlobalToastConfig();
    this.dataControl.copyValuesFrom(this.authorConfig.toastCoreConfig, this.productionConfig.toastCoreConfig);
    this.dataControl.copyValuesFrom(this.userConfig.toastCoreConfig, this.productionConfig.toastCoreConfig);
  }
  setResetGlobalToastConfig(globalToastConfig) {
    this.dataControl.copyValuesFrom(this.authorConfig.globalSettings, this.productionConfig.globalSettings);
    this.dataControl.copyValuesFrom(globalToastConfig ? globalToastConfig : this.userConfig.globalSettings, this.productionConfig.globalSettings);
  }
};
ToastNotificationConfigService.ɵfac = function ToastNotificationConfigService_Factory(t) {
  return new (t || ToastNotificationConfigService)(ɵɵinject("toastNotificationConfig"));
};
ToastNotificationConfigService.ɵprov = ɵɵdefineInjectable({
  token: ToastNotificationConfigService,
  factory: ToastNotificationConfigService.ɵfac,
  providedIn: "root"
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToastNotificationConfigService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], function() {
    return [{
      type: void 0,
      decorators: [{
        type: Inject,
        args: ["toastNotificationConfig"]
      }]
    }];
  }, null);
})();
var WrapperAbstraction = class {
  constructor(toastNotificationBelonging, layoutHelper) {
    this.toastNotificationBelonging = toastNotificationBelonging;
    this.layoutHelper = layoutHelper;
    this.closeIsClicked = false;
    this.autoClosingHasStarted = false;
    this.fadeInOutAnimation = "open";
    this.timerStarted$ = new BehaviorSubject("start-counter");
    this.isTimerStarted = false;
    this.timer = new Timer();
    this.appearanceAnimation = AppearanceAnimation;
    this.disappearanceAnimation = DisappearanceAnimation;
    setTimeout(() => {
      this.boxAnimation = this.toastNotificationBelonging.toastCoreConfig.animationIn;
    }, 1);
  }
  get autoCloseCondition() {
    return this.toastNotificationBelonging.toastCoreConfig.autoCloseDelay && !(this.toastNotificationBelonging.buttons.length || this.toastNotificationBelonging.toastCoreConfig.declineLabel || this.toastNotificationBelonging.toastCoreConfig.confirmLabel);
  }
  get buttonsExist() {
    return !!this.toastNotificationBelonging.buttons.length || !!this.toastNotificationBelonging.toastCoreConfig.declineLabel || !!this.toastNotificationBelonging.toastCoreConfig.confirmLabel;
  }
  setCustomStyles() {
    if (this.toastNotificationBelonging.toastCoreConfig.customStyles.textCSS && this.elTextWrapper) {
      this.elTextWrapper.nativeElement.style.cssText += this.toastNotificationBelonging.toastCoreConfig.customStyles.textCSS;
    }
    if (this.toastNotificationBelonging.toastCoreConfig.customStyles.titleCSS && this.elTitleWrapper) {
      this.elTitleWrapper.nativeElement.style.cssText += this.toastNotificationBelonging.toastCoreConfig.customStyles.titleCSS;
    }
    if (this.toastNotificationBelonging.toastCoreConfig.customStyles.buttonSectionCSS && this.elButtonWrapper) {
      this.elButtonWrapper.nativeElement.style.cssText += this.toastNotificationBelonging.toastCoreConfig.customStyles.buttonSectionCSS;
    }
    if (this.toastNotificationBelonging.toastCoreConfig.customStyles.buttonCSS && this.elButton) {
      this.elButton.forEach((el) => {
        el.nativeElement.style.cssText += this.toastNotificationBelonging.toastCoreConfig.customStyles.buttonCSS;
      });
    }
  }
  mouseOver() {
    if (!this.buttonsExist && !this.closeIsClicked && !this.autoClosingHasStarted) {
      this.timerStarted$.next("stop-counter");
      this.fadeInOutAnimation = "open";
      this.subsToClosingDelay?.unsubscribe();
      this.boxAnimation = "reset";
    }
  }
  mouseOut() {
    if (!this.buttonsExist && !this.closeIsClicked && !this.autoClosingHasStarted) {
      this.timerStarted$.next("start-counter");
    }
  }
  onOverlayClicked(evt) {
  }
  onToastClicked(evt) {
  }
  setResponse(_IsSuccess, _ClickedButtonID) {
    const response = new ToastNotificationDefaultResponse();
    if (_ClickedButtonID) {
      response.clickedButtonID = _ClickedButtonID;
    }
    response.setSuccess(_IsSuccess);
    response.setBelonging(this.toastNotificationBelonging);
    this.toastNotificationBelonging.eventsController.setDefaultResponse(response);
  }
  onCustomButton(_Button) {
    this.toastNotificationBelonging.eventsController.onButtonClick(_Button);
    this.setResponse(true, _Button.ID);
    this.toastNotificationBelonging.eventsController.close();
  }
  onButtonClick(_Type) {
    let buttonID;
    if (_Type === "confirm") {
      buttonID = this.toastNotificationBelonging.toastCoreConfig.confirmLabel.toLowerCase();
    } else if (_Type === "decline") {
      buttonID = this.toastNotificationBelonging.toastCoreConfig.declineLabel.toLowerCase();
    }
    this.setResponse(_Type === "confirm", buttonID);
    this.toastNotificationBelonging.eventsController.close();
  }
  autoClose() {
    if (this.autoCloseCondition) {
      this.timer.setMilliseconds(this.toastNotificationBelonging.toastCoreConfig.autoCloseDelay);
      this.subTimer = this.timerStarted$.pipe(tap((next) => {
        if ("start-counter" === next) {
          this.timer.start();
          this.isTimerStarted = true;
          this.timeout = setTimeout(() => {
            this.subsToClosingDelay = this.closeParent$().subscribe((resp) => {
              this.toastNotificationBelonging.eventsController.close();
            });
          }, this.toastNotificationBelonging.toastCoreConfig.autoCloseDelay);
        } else if ("stop-counter" === next) {
          if (this.isTimerStarted) {
            this.timer.stop();
            clearTimeout(this.timeout);
            this.isTimerStarted = false;
          }
        }
      })).subscribe();
    }
  }
  closeParent$() {
    this.autoClosingHasStarted = true;
    this.boxAnimation = this.toastNotificationBelonging.toastCoreConfig.animationOut;
    const closeDuration = this.toastNotificationBelonging.toastCoreConfig.animationOut ? 400 : 200;
    this.fadeInOutAnimation = "close-fast";
    return of("").pipe(delay(closeDuration));
  }
  close() {
    this.toastNotificationBelonging.eventsController.close();
  }
  closeIcon() {
    this.closeIsClicked = true;
    this.subsToClosingDelay?.unsubscribe();
    this.closeParent$().pipe(take(1)).subscribe((resp) => {
      this.toastNotificationBelonging.eventsController.close();
    });
  }
  ngOnDestroy() {
    this.subsToClosingDelay?.unsubscribe();
    this.subTimer?.unsubscribe();
  }
  getIconClasses() {
    return "icon-type-toast " + this.layoutHelper.getIconClasses(this.toastNotificationBelonging.toastCoreConfig.layoutType, this.toastNotificationBelonging.toastCoreConfig.iconStyleClass);
  }
};
WrapperAbstraction.ɵfac = function WrapperAbstraction_Factory(t) {
  return new (t || WrapperAbstraction)(ɵɵdirectiveInject("toastNotificationBelonging"), ɵɵdirectiveInject(LayoutHelperService));
};
WrapperAbstraction.ɵdir = ɵɵdefineDirective({
  type: WrapperAbstraction,
  viewQuery: function WrapperAbstraction_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c1, 5);
      ɵɵviewQuery(_c2, 5);
      ɵɵviewQuery(_c3, 5);
      ɵɵviewQuery(_c4, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.elTextWrapper = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.elTitleWrapper = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.elButtonWrapper = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.elButton = _t);
    }
  }
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WrapperAbstraction, [{
    type: Directive
  }], function() {
    return [{
      type: ToastNotificationBelonging,
      decorators: [{
        type: Inject,
        args: ["toastNotificationBelonging"]
      }]
    }, {
      type: LayoutHelperService
    }];
  }, {
    elTextWrapper: [{
      type: ViewChild,
      args: ["elTextWrapper"]
    }],
    elTitleWrapper: [{
      type: ViewChild,
      args: ["elTitleWrapper"]
    }],
    elButtonWrapper: [{
      type: ViewChild,
      args: ["elButtonWrapper"]
    }],
    elButton: [{
      type: ViewChildren,
      args: ["elButton"]
    }]
  });
})();
var ToastNotificationSimpleWrapperComponent = class extends WrapperAbstraction {
  constructor(toastNotificationBelonging, gConfig, cd, layoutHelper) {
    super(toastNotificationBelonging, layoutHelper);
    this.toastNotificationBelonging = toastNotificationBelonging;
    this.gConfig = gConfig;
    this.cd = cd;
    this.layoutHelper = layoutHelper;
  }
  ngAfterViewInit() {
    this.setResponse(false);
    this.cd.detectChanges();
    this.autoClose();
    this.setCustomStyles();
  }
};
ToastNotificationSimpleWrapperComponent.ɵfac = function ToastNotificationSimpleWrapperComponent_Factory(t) {
  return new (t || ToastNotificationSimpleWrapperComponent)(ɵɵdirectiveInject("toastNotificationBelonging"), ɵɵdirectiveInject(GlobalConfigService), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(LayoutHelperService));
};
ToastNotificationSimpleWrapperComponent.ɵcmp = ɵɵdefineComponent({
  type: ToastNotificationSimpleWrapperComponent,
  selectors: [["app-toast-notification-simple-wrapper"]],
  features: [ɵɵProvidersFeature([LayoutHelperService]), ɵɵInheritDefinitionFeature],
  decls: 9,
  vars: 14,
  consts: [["elButtonWrapper", ""], ["elTitleWrapper", ""], ["elTextWrapper", ""], ["elButton", ""], [1, "toast-wrapper", "simple-toast", 3, "dblclick"], [3, "mouseover", "mouseout", "click", "className"], ["class", "toast-title-content", 4, "ngIf"], ["class", "content-holder toast-text", 4, "ngIf"], [1, "button-holder"], ["class", "button-section", 3, "ngStyle", 4, "ngIf"], ["class", "progress-bar-container", 4, "ngIf"], [1, "toast-title-content"], ["class", "icon-section", 4, "ngIf"], [1, "dont-break-out"], [1, "text-wrapper", "dont-break-out"], ["class", "close-ico icon-times-circle", 3, "click", 4, "ngIf"], [1, "icon-section"], [3, "className"], [1, "close-ico", "icon-times-circle", 3, "click"], [1, "content-holder", "toast-text"], [1, "text-wrapper-section", "toast-inner-content", 3, "ngStyle", "ngClass"], ["class", "text-wrapper dont-break-out", 4, "ngIf"], ["class", "text-wrapper", 3, "innerHTML", 4, "ngIf"], [1, "text-wrapper", 3, "innerHTML"], [1, "button-section", 3, "ngStyle"], [3, "disabled", "display", "className", "click", 4, "ngFor", "ngForOf"], [3, "click", "disabled", "className"], [3, "className", "click", 4, "ngIf"], ["class", "ed-btn ed-btn-sm ed-btn-secondary", 3, "click", 4, "ngIf"], [3, "click", "className"], [1, "ed-btn", "ed-btn-sm", "ed-btn-secondary", 3, "click"], [1, "progress-bar-container"], [1, "progress-bar", 3, "ngStyle"]],
  template: function ToastNotificationSimpleWrapperComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = ɵɵgetCurrentView();
      ɵɵelementStart(0, "div", 4);
      ɵɵlistener("dblclick", function ToastNotificationSimpleWrapperComponent_Template_div_dblclick_0_listener($event) {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.onOverlayClicked($event));
      });
      ɵɵelementStart(1, "div", 5);
      ɵɵlistener("mouseover", function ToastNotificationSimpleWrapperComponent_Template_div_mouseover_1_listener() {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.mouseOver());
      })("mouseout", function ToastNotificationSimpleWrapperComponent_Template_div_mouseout_1_listener() {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.mouseOut());
      })("click", function ToastNotificationSimpleWrapperComponent_Template_div_click_1_listener($event) {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.onToastClicked($event));
      });
      ɵɵtemplate(2, ToastNotificationSimpleWrapperComponent_div_2_Template, 7, 3, "div", 6)(3, ToastNotificationSimpleWrapperComponent_div_3_Template, 7, 9, "div", 7);
      ɵɵelementStart(4, "div", 8, 0);
      ɵɵtemplate(6, ToastNotificationSimpleWrapperComponent_div_6_Template, 2, 4, "div", 9)(7, ToastNotificationSimpleWrapperComponent_div_7_Template, 3, 5, "div", 9);
      ɵɵelementEnd();
      ɵɵtemplate(8, ToastNotificationSimpleWrapperComponent_div_8_Template, 2, 3, "div", 10);
      ɵɵelementEnd()();
    }
    if (rf & 2) {
      ɵɵproperty("@fadeInOut", ɵɵpureFunction2(11, _c6, ctx.fadeInOutAnimation, ɵɵpureFunction1(9, _c5, ctx.toastNotificationBelonging.toastCoreConfig.animationOut === ctx.disappearanceAnimation.NONE ? "200ms" : "300ms")));
      ɵɵadvance();
      ɵɵproperty("@.disabled", ctx.toastNotificationBelonging.toastCoreConfig.animationIn === ctx.appearanceAnimation.NONE && ctx.toastNotificationBelonging.toastCoreConfig.animationOut === ctx.disappearanceAnimation.NONE)("@boxAnimations", ctx.boxAnimation)("className", ctx.layoutHelper.getBoxClasses(ctx.toastNotificationBelonging.toastCoreConfig.layoutType, "evolve-toast"));
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.toastNotificationBelonging.dispatch.title);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.toastNotificationBelonging.dispatch.message);
      ɵɵadvance(3);
      ɵɵproperty("ngIf", ctx.toastNotificationBelonging.buttons.length);
      ɵɵadvance();
      ɵɵproperty("ngIf", !ctx.toastNotificationBelonging.buttons.length && (ctx.toastNotificationBelonging.toastCoreConfig.declineLabel || ctx.toastNotificationBelonging.toastCoreConfig.confirmLabel));
      ɵɵadvance();
      ɵɵproperty("ngIf", !ctx.buttonsExist && ctx.toastNotificationBelonging.toastCoreConfig.progressBar !== 0);
    }
  },
  dependencies: [NgIf, NgStyle, NgClass, NgForOf],
  encapsulation: 2,
  data: {
    animation: [fadeInOut(), boxAnimations()]
  }
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToastNotificationSimpleWrapperComponent, [{
    type: Component,
    args: [{
      selector: "app-toast-notification-simple-wrapper",
      animations: [fadeInOut(), boxAnimations()],
      providers: [LayoutHelperService],
      template: `<div
  class="toast-wrapper simple-toast"
  (dblclick)="onOverlayClicked($event)"
  [@fadeInOut]="{
    value: fadeInOutAnimation,
    params: {
      closeDelay: toastNotificationBelonging.toastCoreConfig.animationOut === disappearanceAnimation.NONE ? '200ms' : '300ms'
    }
  }">
  <div
    [@.disabled]="
      toastNotificationBelonging.toastCoreConfig.animationIn === appearanceAnimation.NONE &&
      toastNotificationBelonging.toastCoreConfig.animationOut === disappearanceAnimation.NONE
    "
    [@boxAnimations]="boxAnimation"
    (mouseover)="mouseOver()"
    (mouseout)="mouseOut()"
    (click)="onToastClicked($event)"
    [className]="layoutHelper.getBoxClasses(toastNotificationBelonging.toastCoreConfig.layoutType, 'evolve-toast')">
    <div class="toast-title-content" #elTitleWrapper *ngIf="toastNotificationBelonging.dispatch.title">
      <div class="icon-section" *ngIf="!toastNotificationBelonging.toastCoreConfig.disableIcon">
        <span [className]="getIconClasses()"></span>
      </div>
      <div class="dont-break-out">
        <div class="text-wrapper dont-break-out">
          {{ toastNotificationBelonging.dispatch.title }}
          <span class="close-ico icon-times-circle" (click)="closeIcon()" *ngIf="!buttonsExist"></span>
        </div>
      </div>
    </div>

    <div class="content-holder toast-text" #elTextWrapper *ngIf="toastNotificationBelonging.dispatch.message">
      <div
        class="text-wrapper-section toast-inner-content"
        [ngStyle]="{
          'text-align': toastNotificationBelonging.toastCoreConfig.textPosition
        }"
        [ngClass]="{
          'only-message': !toastNotificationBelonging.dispatch.title
        }">
        <div class="dont-break-out">
          <div class="text-wrapper dont-break-out" *ngIf="!toastNotificationBelonging.toastCoreConfig.allowHtmlMessage">
            <p>{{ toastNotificationBelonging.dispatch.message }}</p>
          </div>
          <div
            class="text-wrapper"
            *ngIf="toastNotificationBelonging.toastCoreConfig.allowHtmlMessage"
            [innerHTML]="toastNotificationBelonging.dispatch.message"></div>
        </div>
      </div>
      <span
        class="close-ico icon-times-circle"
        (click)="closeIcon()"
        *ngIf="buttonsExist && !toastNotificationBelonging.dispatch.title"></span>
    </div>

    <div class="button-holder" #elButtonWrapper>
      <div
        class="button-section"
        *ngIf="toastNotificationBelonging.buttons.length"
        [ngStyle]="{
          'text-align': toastNotificationBelonging.toastCoreConfig.buttonPosition
        }">
        <button
          #elButton
          *ngFor="let button of toastNotificationBelonging.buttons"
          (click)="onCustomButton(button)"
          [disabled]="button.disabled"
          [style.display]="button.hidden ? 'none' : 'inline'"
          [className]="layoutHelper.getButtonClasses(button.layoutType, 'ed-btn ed-btn-sm')">
          {{ button.label }}
        </button>
      </div>

      <div
        class="button-section"
        [ngStyle]="{
          'text-align': toastNotificationBelonging.toastCoreConfig.buttonPosition
        }"
        *ngIf="
          !toastNotificationBelonging.buttons.length &&
          (toastNotificationBelonging.toastCoreConfig.declineLabel || toastNotificationBelonging.toastCoreConfig.confirmLabel)
        ">
        <button
          *ngIf="toastNotificationBelonging.toastCoreConfig.confirmLabel"
          (click)="onButtonClick('confirm')"
          [className]="
            layoutHelper.getButtonClasses(toastNotificationBelonging.toastCoreConfig.layoutType, 'ed-btn ed-btn-sm', 'auto-button')
          ">
          {{ toastNotificationBelonging.toastCoreConfig.confirmLabel }}
        </button>
        <button
          class="ed-btn ed-btn-sm ed-btn-secondary"
          (click)="onButtonClick('decline')"
          *ngIf="toastNotificationBelonging.toastCoreConfig.declineLabel">
          {{ toastNotificationBelonging.toastCoreConfig.declineLabel }}
        </button>
      </div>
    </div>

    <div class="progress-bar-container" *ngIf="!buttonsExist && toastNotificationBelonging.toastCoreConfig.progressBar !== 0">
      <div
        class="progress-bar"
        [ngStyle]="{
          width: (toastNotificationBelonging.toastCoreConfig.progressBar === 1 ? timer.Progress : timer.Remaining) + '%'
        }"></div>
    </div>
  </div>
</div>
`
    }]
  }], function() {
    return [{
      type: ToastNotificationBelonging,
      decorators: [{
        type: Inject,
        args: ["toastNotificationBelonging"]
      }]
    }, {
      type: GlobalConfigService
    }, {
      type: ChangeDetectorRef
    }, {
      type: LayoutHelperService
    }];
  }, null);
})();
var ToastNotificationWrapperComponent = class extends WrapperAbstraction {
  constructor(toastNotificationBelonging, gConfig, cd, layoutHelper) {
    super(toastNotificationBelonging, layoutHelper);
    this.toastNotificationBelonging = toastNotificationBelonging;
    this.gConfig = gConfig;
    this.cd = cd;
    this.layoutHelper = layoutHelper;
  }
  ngAfterViewInit() {
    this.setResponse(false);
    this.cd.detectChanges();
    this.autoClose();
    this.setCustomStyles();
  }
};
ToastNotificationWrapperComponent.ɵfac = function ToastNotificationWrapperComponent_Factory(t) {
  return new (t || ToastNotificationWrapperComponent)(ɵɵdirectiveInject("toastNotificationBelonging"), ɵɵdirectiveInject(GlobalConfigService), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(LayoutHelperService));
};
ToastNotificationWrapperComponent.ɵcmp = ɵɵdefineComponent({
  type: ToastNotificationWrapperComponent,
  selectors: [["app-toast-notification-wrapper"]],
  features: [ɵɵProvidersFeature([LayoutHelperService]), ɵɵInheritDefinitionFeature],
  decls: 9,
  vars: 14,
  consts: [["elButtonWrapper", ""], ["elTitleWrapper", ""], ["elTextWrapper", ""], ["elButton", ""], [1, "toast-wrapper", "standard-toast", 3, "dblclick"], [3, "mouseover", "mouseout", "click", "className"], ["class", "toast-title-content", 4, "ngIf"], ["class", "content-holder toast-text", 4, "ngIf"], [1, "button-holder"], ["class", "button-section", 3, "ngStyle", 4, "ngIf"], ["class", "progress-bar-container", 4, "ngIf"], [1, "toast-title-content"], [1, "dont-break-out"], [1, "text-wrapper", "dont-break-out"], ["class", "close-ico icon-times-circle", 3, "click", 4, "ngIf"], [1, "close-ico", "icon-times-circle", 3, "click"], [1, "content-holder", "toast-text"], ["class", "icon-section", 4, "ngIf"], [1, "text-wrapper-section", "toast-inner-content", 3, "ngStyle", "ngClass"], ["class", "text-wrapper dont-break-out", 4, "ngIf"], ["class", "text-wrapper", 3, "innerHTML", 4, "ngIf"], [1, "icon-section"], [3, "className"], [1, "text-wrapper", 3, "innerHTML"], [1, "button-section", 3, "ngStyle"], [3, "disabled", "display", "className", "click", 4, "ngFor", "ngForOf"], [3, "click", "disabled", "className"], [3, "className", "click", 4, "ngIf"], ["class", "ed-btn ed-btn-sm ed-btn-secondary", 3, "click", 4, "ngIf"], [3, "click", "className"], [1, "ed-btn", "ed-btn-sm", "ed-btn-secondary", 3, "click"], [1, "progress-bar-container"], [1, "progress-bar", 3, "ngStyle"]],
  template: function ToastNotificationWrapperComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = ɵɵgetCurrentView();
      ɵɵelementStart(0, "div", 4);
      ɵɵlistener("dblclick", function ToastNotificationWrapperComponent_Template_div_dblclick_0_listener($event) {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.onOverlayClicked($event));
      });
      ɵɵelementStart(1, "div", 5);
      ɵɵlistener("mouseover", function ToastNotificationWrapperComponent_Template_div_mouseover_1_listener() {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.mouseOver());
      })("mouseout", function ToastNotificationWrapperComponent_Template_div_mouseout_1_listener() {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.mouseOut());
      })("click", function ToastNotificationWrapperComponent_Template_div_click_1_listener($event) {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.onToastClicked($event));
      });
      ɵɵtemplate(2, ToastNotificationWrapperComponent_div_2_Template, 6, 2, "div", 6)(3, ToastNotificationWrapperComponent_div_3_Template, 8, 10, "div", 7);
      ɵɵelementStart(4, "div", 8, 0);
      ɵɵtemplate(6, ToastNotificationWrapperComponent_div_6_Template, 2, 4, "div", 9)(7, ToastNotificationWrapperComponent_div_7_Template, 3, 5, "div", 9);
      ɵɵelementEnd();
      ɵɵtemplate(8, ToastNotificationWrapperComponent_div_8_Template, 2, 3, "div", 10);
      ɵɵelementEnd()();
    }
    if (rf & 2) {
      ɵɵproperty("@fadeInOut", ɵɵpureFunction2(11, _c6, ctx.fadeInOutAnimation, ɵɵpureFunction1(9, _c5, ctx.toastNotificationBelonging.toastCoreConfig.animationOut === ctx.disappearanceAnimation.NONE ? "200ms" : "300ms")));
      ɵɵadvance();
      ɵɵproperty("@.disabled", ctx.toastNotificationBelonging.toastCoreConfig.animationIn === ctx.appearanceAnimation.NONE && ctx.toastNotificationBelonging.toastCoreConfig.animationOut === ctx.disappearanceAnimation.NONE)("@boxAnimations", ctx.boxAnimation)("className", ctx.layoutHelper.getBoxClasses(ctx.toastNotificationBelonging.toastCoreConfig.layoutType, "evolve-toast"));
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.toastNotificationBelonging.dispatch.title);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.toastNotificationBelonging.dispatch.message);
      ɵɵadvance(3);
      ɵɵproperty("ngIf", ctx.toastNotificationBelonging.buttons.length);
      ɵɵadvance();
      ɵɵproperty("ngIf", !ctx.toastNotificationBelonging.buttons.length && (ctx.toastNotificationBelonging.toastCoreConfig.declineLabel || ctx.toastNotificationBelonging.toastCoreConfig.confirmLabel));
      ɵɵadvance();
      ɵɵproperty("ngIf", !ctx.buttonsExist && ctx.toastNotificationBelonging.toastCoreConfig.progressBar !== 0);
    }
  },
  dependencies: [NgIf, NgStyle, NgClass, NgForOf],
  encapsulation: 2,
  data: {
    animation: [fadeInOut(), boxAnimations()]
  }
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToastNotificationWrapperComponent, [{
    type: Component,
    args: [{
      selector: "app-toast-notification-wrapper",
      animations: [fadeInOut(), boxAnimations()],
      providers: [LayoutHelperService],
      template: `<div
  class="toast-wrapper standard-toast"
  (dblclick)="onOverlayClicked($event)"
  [@fadeInOut]="{
    value: fadeInOutAnimation,
    params: {
      closeDelay: toastNotificationBelonging.toastCoreConfig.animationOut === disappearanceAnimation.NONE ? '200ms' : '300ms'
    }
  }">
  <div
    [@.disabled]="
      toastNotificationBelonging.toastCoreConfig.animationIn === appearanceAnimation.NONE &&
      toastNotificationBelonging.toastCoreConfig.animationOut === disappearanceAnimation.NONE
    "
    [@boxAnimations]="boxAnimation"
    (mouseover)="mouseOver()"
    (mouseout)="mouseOut()"
    (click)="onToastClicked($event)"
    [className]="layoutHelper.getBoxClasses(toastNotificationBelonging.toastCoreConfig.layoutType, 'evolve-toast')">
    <div class="toast-title-content" #elTitleWrapper *ngIf="toastNotificationBelonging.dispatch.title">
      <div class="dont-break-out">
        <div class="text-wrapper dont-break-out">
          {{ toastNotificationBelonging.dispatch.title }}
          <span class="close-ico icon-times-circle" (click)="closeIcon()" *ngIf="!buttonsExist"></span>
        </div>
      </div>
    </div>

    <div class="content-holder toast-text" #elTextWrapper *ngIf="toastNotificationBelonging.dispatch.message">
      <div class="icon-section" *ngIf="!toastNotificationBelonging.toastCoreConfig.disableIcon">
        <span [className]="getIconClasses()"></span>
      </div>
      <div
        class="text-wrapper-section toast-inner-content"
        [ngStyle]="{
          'text-align': toastNotificationBelonging.toastCoreConfig.textPosition
        }"
        [ngClass]="{
          'only-message': !toastNotificationBelonging.dispatch.title
        }">
        <div class="dont-break-out">
          <div class="text-wrapper dont-break-out" *ngIf="!toastNotificationBelonging.toastCoreConfig.allowHtmlMessage">
            <p>{{ toastNotificationBelonging.dispatch.message }}</p>
          </div>
          <div
            class="text-wrapper"
            *ngIf="toastNotificationBelonging.toastCoreConfig.allowHtmlMessage"
            [innerHTML]="toastNotificationBelonging.dispatch.message"></div>
        </div>
      </div>
      <span
        class="close-ico icon-times-circle"
        (click)="closeIcon()"
        *ngIf="buttonsExist && !toastNotificationBelonging.dispatch.title"></span>
    </div>

    <div class="button-holder" #elButtonWrapper>
      <div
        class="button-section"
        *ngIf="toastNotificationBelonging.buttons.length"
        [ngStyle]="{
          'text-align': toastNotificationBelonging.toastCoreConfig.buttonPosition
        }">
        <button
          #elButton
          *ngFor="let button of toastNotificationBelonging.buttons"
          [disabled]="button.disabled"
          [style.display]="button.hidden ? 'none' : 'inline'"
          (click)="onCustomButton(button)"
          [className]="layoutHelper.getButtonClasses(button.layoutType, 'ed-btn ed-btn-sm')">
          {{ button.label }}
        </button>
      </div>

      <div
        class="button-section"
        [ngStyle]="{
          'text-align': toastNotificationBelonging.toastCoreConfig.buttonPosition
        }"
        *ngIf="
          !toastNotificationBelonging.buttons.length &&
          (toastNotificationBelonging.toastCoreConfig.declineLabel || toastNotificationBelonging.toastCoreConfig.confirmLabel)
        ">
        <button
          #elButton
          *ngIf="toastNotificationBelonging.toastCoreConfig.confirmLabel"
          (click)="onButtonClick('confirm')"
          [className]="
            layoutHelper.getButtonClasses(toastNotificationBelonging.toastCoreConfig.layoutType, 'ed-btn ed-btn-sm', 'auto-button')
          ">
          {{ toastNotificationBelonging.toastCoreConfig.confirmLabel }}
        </button>
        <button
          class="ed-btn ed-btn-sm ed-btn-secondary"
          #elButton
          (click)="onButtonClick('decline')"
          *ngIf="toastNotificationBelonging.toastCoreConfig.declineLabel">
          {{ toastNotificationBelonging.toastCoreConfig.declineLabel }}
        </button>
      </div>
    </div>

    <div class="progress-bar-container" *ngIf="!buttonsExist && toastNotificationBelonging.toastCoreConfig.progressBar !== 0">
      <div
        class="progress-bar"
        [ngStyle]="{
          width: (toastNotificationBelonging.toastCoreConfig.progressBar === 1 ? timer.Progress : timer.Remaining) + '%'
        }"></div>
    </div>
  </div>
</div>
`
    }]
  }], function() {
    return [{
      type: ToastNotificationBelonging,
      decorators: [{
        type: Inject,
        args: ["toastNotificationBelonging"]
      }]
    }, {
      type: GlobalConfigService
    }, {
      type: ChangeDetectorRef
    }, {
      type: LayoutHelperService
    }];
  }, null);
})();
var ToastNotificationService = class {
  constructor(componentFactoryResolver, injector, appRef, toastConfig, gConfigService) {
    this.componentFactoryResolver = componentFactoryResolver;
    this.injector = injector;
    this.appRef = appRef;
    this.toastConfig = toastConfig;
    this.gConfigService = gConfigService;
    this.toastComponentRefList = [];
    this.bufferToastRawList = [];
    this.bufferCheckingIntervalIsReady = true;
  }
  openToast$(_ToastNotificationBelonging) {
    const eventController = _ToastNotificationBelonging.eventsController;
    const toastRawInstance = this.prepareRawToast(eventController, _ToastNotificationBelonging);
    this.listeners(eventController);
    this.internalRouting(toastRawInstance);
    return eventController.afterClosed$;
  }
  internalRouting(_ToastRawInstance) {
    if (this.isRefListAvailable()) {
      this.sendToProduction(_ToastRawInstance);
      return true;
    } else {
      this.sendToBuffer(_ToastRawInstance);
      return false;
    }
  }
  sendToBuffer(_ToastRawInstance) {
    this.bufferToastRawList.push(_ToastRawInstance);
  }
  sendToProduction(_ToastRawInstance) {
    const componentRef = this.getComponentRef(_ToastRawInstance);
    if (componentRef) {
      this.toastComponentRefList.push(componentRef);
      componentRef.instance.toastNotificationBelonging = _ToastRawInstance.toastBelonging;
      this.appendToBodyParentComponent(componentRef);
    }
  }
  isRefListAvailable() {
    return this.toastComponentRefList.length < this.toastConfig.productionConfig.globalSettings.allowedNotificationsAtOnce;
  }
  prepareRawToast(_eventsController, _ToastNotificationBelonging) {
    const weakMap = /* @__PURE__ */ new WeakMap();
    weakMap.set(ToastNotificationeventsController, _eventsController);
    return {
      weakMap,
      toastBelonging: _ToastNotificationBelonging
    };
  }
  getComponentRef(_ToastNotificationRawState) {
    const dialogIndex = this.findDialogIndex(_ToastNotificationRawState.toastBelonging.entityUniqueID);
    if (dialogIndex === -1) {
      let toastUserViewComponent = ToastNotificationWrapperComponent;
      if (_ToastNotificationRawState.toastBelonging.toastCoreConfig.toastUserViewType === ToastUserViewTypeEnum.SIMPLE) {
        toastUserViewComponent = ToastNotificationSimpleWrapperComponent;
      }
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(toastUserViewComponent);
      return componentFactory.create(new DialogInjector(this.injector, _ToastNotificationRawState.weakMap));
    }
    return null;
  }
  listeners(_eventsController) {
    const closeDialogSubscription = _eventsController.afterClosed$.subscribe((response) => {
      this.removeFromBody(response.toastNotificationBelonging.entityUniqueID);
      closeDialogSubscription.unsubscribe();
    });
  }
  appendToBodyParentComponent(_ComponentRef) {
    this.appRef.attachView(_ComponentRef.hostView);
    const toastPosition = _ComponentRef.instance.toastNotificationBelonging.toastCoreConfig.toastPosition;
    const openInElementID = _ComponentRef.instance.toastNotificationBelonging.toastCoreConfig.openInElementID;
    let targetNode;
    if (!openInElementID) {
      this.setToastWrapperNode(_ComponentRef.instance.toastNotificationBelonging.toastCoreConfig.toastPosition, this.setToastOverlayNode());
      targetNode = document.getElementById(`toast-wrapper-${toastPosition}`);
    } else {
      targetNode = document.getElementById(openInElementID);
    }
    const domElem = _ComponentRef.hostView.rootNodes[0];
    const toastEntity = document.createElement("div");
    toastEntity.setAttribute("id", _ComponentRef.instance.toastNotificationBelonging.entityUniqueID);
    toastEntity.className = "toast-entity";
    const split = toastPosition.split("-");
    if (split[1] === "fullwidth") {
      toastEntity.style.width = "93vw";
    } else if (openInElementID) {
      toastEntity.style.width = "100%";
    } else {
      toastEntity.style.width = "300px";
    }
    toastEntity.style.margin = "auto";
    toastEntity.prepend(domElem);
    targetNode.prepend(toastEntity);
  }
  removeFromBody(_entityUniqueID) {
    const modalIndex = this.findDialogIndex(_entityUniqueID);
    if (modalIndex > -1) {
      if (this.bufferToastRawList.length) {
        this.sendToProduction(this.bufferToastRawList[0]);
        this.bufferToastRawList.splice(0, 1);
      }
      this.toastComponentRefList[modalIndex].instance.closeParent$().pipe(tap((item) => {
        const modalIndex2 = this.findDialogIndex(_entityUniqueID);
        if (this.toastComponentRefList[modalIndex2]) {
          const toastEntity = document.getElementById(this.toastComponentRefList[modalIndex2].instance.toastNotificationBelonging.entityUniqueID);
          toastEntity.remove();
          this.appRef.detachView(this.toastComponentRefList[modalIndex2].hostView);
          this.toastComponentRefList[modalIndex2].destroy();
          this.toastComponentRefList.splice(modalIndex2, 1);
        }
      }), take(1)).subscribe();
    }
  }
  findDialogIndex(_DialogUniqueID) {
    return this.toastComponentRefList.findIndex((item) => {
      return _DialogUniqueID === item.instance.toastNotificationBelonging.entityUniqueID;
    });
  }
  setToastOverlayNode() {
    const bodyNode = document.body || document.getElementsByTagName("body")[0];
    if (!bodyNode) {
      return;
    }
    const toastOverlayNode = document.getElementById("toast-overlay-container");
    if (!toastOverlayNode) {
      const toastOverlayNode2 = document.createElement("div");
      toastOverlayNode2.setAttribute("id", "toast-overlay-container");
      toastOverlayNode2.appendChild(document.createTextNode(""));
      toastOverlayNode2.style.position = "fixed";
      toastOverlayNode2.style.top = "0";
      toastOverlayNode2.style.left = "0";
      toastOverlayNode2.style.zIndex = "999999999999";
      bodyNode.appendChild(toastOverlayNode2);
      return toastOverlayNode2;
    }
    return toastOverlayNode;
  }
  setToastWrapperNode(_Position, _ToastOverlayNode) {
    const toastWrapperNode = document.getElementById(`toast-wrapper-${_Position}`);
    if (!toastWrapperNode) {
      const toastWrapper = document.createElement("div");
      toastWrapper.setAttribute("id", "toast-wrapper-" + _Position);
      toastWrapper.appendChild(document.createTextNode(""));
      _ToastOverlayNode.prepend(toastWrapper);
      const split = _Position.split("-");
      if (split[1] === "right" || split[1] === "left") {
        this.gConfigService.getSheet("ngx-awesome-popup-styles").addRule(`#toast-wrapper-${_Position}`, `${split[0]}: 20px; ${split[1]}: 20px; position: fixed; z-index: 999999999;`);
      }
      if (split[1] === "center") {
        this.gConfigService.getSheet("ngx-awesome-popup-styles").addRule(`#toast-wrapper-${_Position}`, `${split[0]}: 20px; width: 100%; position: fixed; z-index: 999999999; pointer-events: none;`);
      }
      if (split[1] === "fullwidth") {
        this.gConfigService.getSheet("ngx-awesome-popup-styles").addRule(`#toast-wrapper-${_Position}`, `${split[0]}: 10px; width: 100%; position: fixed; z-index: 999999999; pointer-events: none;`);
      }
    }
  }
};
ToastNotificationService.ɵfac = function ToastNotificationService_Factory(t) {
  return new (t || ToastNotificationService)(ɵɵinject(ComponentFactoryResolver$1), ɵɵinject(Injector), ɵɵinject(ApplicationRef), ɵɵinject(ToastNotificationConfigService), ɵɵinject(GlobalConfigService));
};
ToastNotificationService.ɵprov = ɵɵdefineInjectable({
  token: ToastNotificationService,
  factory: ToastNotificationService.ɵfac,
  providedIn: "root"
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToastNotificationService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], function() {
    return [{
      type: ComponentFactoryResolver$1
    }, {
      type: Injector
    }, {
      type: ApplicationRef
    }, {
      type: ToastNotificationConfigService
    }, {
      type: GlobalConfigService
    }];
  }, null);
})();
var ToastNotificationInitializer = class {
  constructor() {
    this.toastNotificationCarrier = new ToastNotificationCarrier();
  }
  openToastNotification$() {
    return this.toastNotificationCarrier.openToastNotification$().pipe(map((resp) => {
      const basicToastNotificationResponse = new ToastNotificationResponse();
      const dataControl = new DataControl();
      dataControl.copyValuesFrom(resp, basicToastNotificationResponse);
      return basicToastNotificationResponse;
    }), take(1));
  }
  setButtons(_Buttons) {
    this.toastNotificationCarrier.setButtons(_Buttons);
  }
  setConfig(_ToastNotificationConfig) {
    this.toastNotificationCarrier.setConfig(_ToastNotificationConfig);
  }
  setDispatch(_Title, _Message = null) {
    this.toastNotificationCarrier.setTitle(_Title);
    this.toastNotificationCarrier.setMessage(_Message);
  }
  setTitle(_Title) {
    this.toastNotificationCarrier.setTitle(_Title);
  }
  setMessage(_Message) {
    this.toastNotificationCarrier.setMessage(_Message);
  }
  setButtonLabels(_Confirm, _Decline) {
    this.toastNotificationCarrier.setButtonLabels(_Confirm, _Decline);
  }
};
var ToastNotificationResponse = class extends DataControl {
  constructor() {
    super();
    this.success = null;
    this.clickedButtonID = null;
  }
  setSuccess(_IsSuccess) {
    this.success = _IsSuccess;
  }
  setClickedButtonID(_ClickedButtonID) {
    this.clickedButtonID = _ClickedButtonID;
  }
};
var ToastNotificationeventsController = class {
  constructor(entityUniqueID) {
    this.entityUniqueID = entityUniqueID;
    this._onButtonClick = new Subject();
    this._afterClosed = new Subject();
    this._buttonList = new Subject();
    this.afterClosed$ = this._afterClosed.asObservable();
    this.onButtonClick$ = this._onButtonClick.asObservable();
    this.buttonList$ = this._buttonList.asObservable();
  }
  close(_Response) {
    const response = _Response ? _Response : this.defaultResponse;
    this._afterClosed.next(response);
  }
  onButtonClick(_Button) {
    this.defaultResponse.setClickedButtonID(_Button.ID);
    this._onButtonClick.next(_Button);
  }
  setButtonList(_ButtonList) {
    this._buttonList.next(_ButtonList);
  }
  setDefaultResponse(_Response) {
    this.defaultResponse = _Response;
  }
};
var ToastNotificationDefaultResponse = class extends ToastNotificationResponse {
  constructor() {
    super();
    this.toastNotificationBelonging = null;
  }
  setBelonging(_ToastNotificationBelonging) {
    this.toastNotificationBelonging = _ToastNotificationBelonging;
  }
};
var ToastNotificationCarrier = class {
  constructor() {
    this.toastNotificationBelonging = new ToastNotificationBelonging();
  }
  setButtons(_Buttons) {
    if (_Buttons.length) {
      this.toastNotificationBelonging.buttons = _Buttons;
    }
  }
  setTitle(_Title) {
    this.toastNotificationBelonging.dispatch.title = _Title;
  }
  setMessage(_Message) {
    this.toastNotificationBelonging.dispatch.message = _Message;
  }
  setButtonLabels(_Confirm, _Decline) {
    this.toastNotificationBelonging.toastCoreConfig.confirmLabel = _Confirm;
    this.toastNotificationBelonging.toastCoreConfig.declineLabel = _Decline;
  }
  setConfig(_ToastNotificationBelonging) {
    const dataControl = new DataControl();
    dataControl.copyValuesFrom(_ToastNotificationBelonging, this.toastNotificationBelonging.toastCoreConfig);
  }
  openToastNotification$() {
    if (!this.toastNotificationBelonging.dispatch.title && !this.toastNotificationBelonging.dispatch.message) {
      throw Error("Toast notification can not be without both message and title.");
    }
    const service = ServiceLocator.injector.get(ToastNotificationService);
    return service.openToast$(this.toastNotificationBelonging);
  }
};
var GlobalToastSettings = class {
  constructor() {
    this.allowedNotificationsAtOnce = null;
  }
};
var ResetToastGlobalSettings = class {
  constructor(globalToastConfig) {
    const globalToastConfigService = ServiceLocator.injector.get(ToastNotificationConfigService);
    if (globalToastConfigService) {
      globalToastConfigService.setResetGlobalToastConfig(globalToastConfig);
    } else {
      globalToastConfigService.setResetGlobalToastConfig();
    }
  }
};
var ToastSettings = class {
  constructor() {
    this.buttons = [];
    this.toastCoreConfig = new toastCoreConfig();
    this.dispatch = new dispatch();
    this.globalSettings = new GlobalToastSettings();
  }
};
var ToastCustomStyles = class {
  constructor() {
    this.titleCSS = null;
    this.textCSS = null;
    this.buttonSectionCSS = null;
    this.buttonCSS = null;
  }
};
var toastCoreConfig = class {
  constructor() {
    this.toastPosition = null;
    this.progressBar = null;
    this.toastUserViewType = null;
    this.openInElementID = null;
    this.buttonPosition = null;
    this.textPosition = null;
    this.layoutType = null;
    this.dispatch = null;
    this.confirmLabel = null;
    this.declineLabel = null;
    this.autoCloseDelay = null;
    this.disableIcon = null;
    this.allowHtmlMessage = null;
    this.animationIn = null;
    this.animationOut = null;
    this.customStyles = new ToastCustomStyles();
    this.iconStyleClass = null;
  }
};
var ToastNotificationBelonging = class extends ToastSettings {
  constructor() {
    super();
    this.entityUniqueID = "T" + Math.random().toString(36).substr(2, 9);
    this.eventsController = new ToastNotificationeventsController(this.entityUniqueID);
    const toastNotificationConfigurator = ServiceLocator.injector.get(ToastNotificationConfigService);
    const baseSettings = new ToastSettings();
    const dataControl = new DataControl();
    dataControl.copyValuesFrom(toastNotificationConfigurator.productionConfig.toastCoreConfig, baseSettings.toastCoreConfig);
    this.toastCoreConfig = baseSettings.toastCoreConfig;
    this.buttons = toastNotificationConfigurator.productionConfig.buttons.slice();
  }
};
var NgxAwesomePopupModule = class _NgxAwesomePopupModule {
  constructor(injector) {
    this.injector = injector;
    ServiceLocator.injector = injector;
  }
  static forRoot(globalConfig) {
    return {
      ngModule: _NgxAwesomePopupModule,
      providers: [{
        provide: "cdGlobalConfig",
        useValue: globalConfig
      }]
    };
  }
};
NgxAwesomePopupModule.ɵfac = function NgxAwesomePopupModule_Factory(t) {
  return new (t || NgxAwesomePopupModule)(ɵɵinject(Injector));
};
NgxAwesomePopupModule.ɵmod = ɵɵdefineNgModule({
  type: NgxAwesomePopupModule,
  imports: [CommonModule, BrowserModule, BrowserAnimationsModule]
});
NgxAwesomePopupModule.ɵinj = ɵɵdefineInjector({
  providers: [GlobalConfigService],
  imports: [[CommonModule, BrowserModule, BrowserAnimationsModule]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxAwesomePopupModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, BrowserModule, BrowserAnimationsModule],
      providers: [GlobalConfigService]
    }]
  }], function() {
    return [{
      type: Injector
    }];
  }, null);
})();
var DialogConfigModule = class _DialogConfigModule {
  static forRoot(dialogConfig) {
    return {
      ngModule: _DialogConfigModule,
      providers: [{
        provide: "dialogConfig",
        useValue: dialogConfig
      }, {
        provide: "dialogBelonging",
        useClass: DialogBelonging
      }]
    };
  }
};
DialogConfigModule.ɵfac = function DialogConfigModule_Factory(t) {
  return new (t || DialogConfigModule)();
};
DialogConfigModule.ɵmod = ɵɵdefineNgModule({
  type: DialogConfigModule,
  declarations: [DialogWrapperComponent, DefaultLoaderComponent, InsertionDirective, InsertionLoaderDirective],
  imports: [CommonModule]
});
DialogConfigModule.ɵinj = ɵɵdefineInjector({
  providers: [DialogService, DialogConfigService],
  imports: [[CommonModule]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DialogConfigModule, [{
    type: NgModule,
    args: [{
      declarations: [DialogWrapperComponent, DefaultLoaderComponent, InsertionDirective, InsertionLoaderDirective],
      imports: [CommonModule],
      providers: [DialogService, DialogConfigService],
      entryComponents: [DialogWrapperComponent, DefaultLoaderComponent]
    }]
  }], null, null);
})();
var ConfirmBoxConfigModule = class _ConfirmBoxConfigModule {
  static forRoot(confirmBoxConfig) {
    return {
      ngModule: _ConfirmBoxConfigModule,
      providers: [{
        provide: "confirmBoxConfig",
        useValue: confirmBoxConfig
      }, {
        provide: "confirmBoxBelonging",
        useClass: ConfirmBoxBelonging
      }]
    };
  }
};
ConfirmBoxConfigModule.ɵfac = function ConfirmBoxConfigModule_Factory(t) {
  return new (t || ConfirmBoxConfigModule)();
};
ConfirmBoxConfigModule.ɵmod = ɵɵdefineNgModule({
  type: ConfirmBoxConfigModule,
  declarations: [ConfirmBoxWrapperComponent],
  imports: [CommonModule]
});
ConfirmBoxConfigModule.ɵinj = ɵɵdefineInjector({
  providers: [ConfirmBoxService, ConfirmBoxConfigService],
  imports: [[CommonModule]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfirmBoxConfigModule, [{
    type: NgModule,
    args: [{
      declarations: [ConfirmBoxWrapperComponent],
      imports: [CommonModule],
      providers: [ConfirmBoxService, ConfirmBoxConfigService],
      entryComponents: [ConfirmBoxWrapperComponent]
    }]
  }], null, null);
})();
var ToastNotificationConfigModule = class _ToastNotificationConfigModule {
  static forRoot(toastNotificationConfig) {
    return {
      ngModule: _ToastNotificationConfigModule,
      providers: [{
        provide: "toastNotificationConfig",
        useValue: toastNotificationConfig
      }, {
        provide: "toastNotificationBelonging",
        useClass: ToastNotificationBelonging
      }]
    };
  }
};
ToastNotificationConfigModule.ɵfac = function ToastNotificationConfigModule_Factory(t) {
  return new (t || ToastNotificationConfigModule)();
};
ToastNotificationConfigModule.ɵmod = ɵɵdefineNgModule({
  type: ToastNotificationConfigModule,
  declarations: [ToastNotificationWrapperComponent, ToastNotificationSimpleWrapperComponent],
  imports: [CommonModule]
});
ToastNotificationConfigModule.ɵinj = ɵɵdefineInjector({
  providers: [ToastNotificationService, ToastNotificationConfigService],
  imports: [[CommonModule]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToastNotificationConfigModule, [{
    type: NgModule,
    args: [{
      declarations: [ToastNotificationWrapperComponent, ToastNotificationSimpleWrapperComponent],
      imports: [CommonModule],
      providers: [ToastNotificationService, ToastNotificationConfigService],
      entryComponents: [ToastNotificationWrapperComponent, ToastNotificationSimpleWrapperComponent]
    }]
  }], null, null);
})();
var _ConfirmBoxEvokeService_instances;
var _ConfirmBoxEvokeService_extender;
var ConfirmBoxEvokeService = class {
  constructor() {
    _ConfirmBoxEvokeService_instances.add(this);
  }
  success(title, message, confirmLabel, declineLabel) {
    const confirmBox = __classPrivateFieldGet(this, _ConfirmBoxEvokeService_instances, "m", _ConfirmBoxEvokeService_extender).call(this, title, message, confirmLabel, declineLabel);
    confirmBox.setConfig({
      layoutType: DialogLayoutDisplay.SUCCESS
    });
    return confirmBox.openConfirmBox$();
  }
  info(title, message, confirmLabel, declineLabel) {
    const confirmBox = __classPrivateFieldGet(this, _ConfirmBoxEvokeService_instances, "m", _ConfirmBoxEvokeService_extender).call(this, title, message, confirmLabel, declineLabel);
    confirmBox.setConfig({
      layoutType: DialogLayoutDisplay.INFO
    });
    return confirmBox.openConfirmBox$();
  }
  warning(title, message, confirmLabel, declineLabel) {
    const confirmBox = __classPrivateFieldGet(this, _ConfirmBoxEvokeService_instances, "m", _ConfirmBoxEvokeService_extender).call(this, title, message, confirmLabel, declineLabel);
    confirmBox.setConfig({
      layoutType: DialogLayoutDisplay.WARNING
    });
    return confirmBox.openConfirmBox$();
  }
  danger(title, message, confirmLabel, declineLabel) {
    const confirmBox = __classPrivateFieldGet(this, _ConfirmBoxEvokeService_instances, "m", _ConfirmBoxEvokeService_extender).call(this, title, message, confirmLabel, declineLabel);
    confirmBox.setConfig({
      layoutType: DialogLayoutDisplay.DANGER
    });
    return confirmBox.openConfirmBox$();
  }
  customOne(title, message, confirmLabel, declineLabel) {
    const confirmBox = __classPrivateFieldGet(this, _ConfirmBoxEvokeService_instances, "m", _ConfirmBoxEvokeService_extender).call(this, title, message, confirmLabel, declineLabel);
    confirmBox.setConfig({
      layoutType: DialogLayoutDisplay.CUSTOM_ONE
    });
    return confirmBox.openConfirmBox$();
  }
  customTwo(title, message, confirmLabel, declineLabel) {
    const confirmBox = __classPrivateFieldGet(this, _ConfirmBoxEvokeService_instances, "m", _ConfirmBoxEvokeService_extender).call(this, title, message, confirmLabel, declineLabel);
    confirmBox.setConfig({
      layoutType: DialogLayoutDisplay.CUSTOM_TWO
    });
    return confirmBox.openConfirmBox$();
  }
  customThree(title, message, confirmLabel, declineLabel) {
    const confirmBox = __classPrivateFieldGet(this, _ConfirmBoxEvokeService_instances, "m", _ConfirmBoxEvokeService_extender).call(this, title, message, confirmLabel, declineLabel);
    confirmBox.setConfig({
      layoutType: DialogLayoutDisplay.CUSTOM_THREE
    });
    return confirmBox.openConfirmBox$();
  }
  customFour(title, message, confirmLabel, declineLabel) {
    const confirmBox = __classPrivateFieldGet(this, _ConfirmBoxEvokeService_instances, "m", _ConfirmBoxEvokeService_extender).call(this, title, message, confirmLabel, declineLabel);
    confirmBox.setConfig({
      layoutType: DialogLayoutDisplay.CUSTOM_FOUR
    });
    return confirmBox.openConfirmBox$();
  }
  customFive(title, message, confirmLabel, declineLabel) {
    const confirmBox = __classPrivateFieldGet(this, _ConfirmBoxEvokeService_instances, "m", _ConfirmBoxEvokeService_extender).call(this, title, message, confirmLabel, declineLabel);
    confirmBox.setConfig({
      layoutType: DialogLayoutDisplay.CUSTOM_FIVE
    });
    return confirmBox.openConfirmBox$();
  }
};
_ConfirmBoxEvokeService_instances = /* @__PURE__ */ new WeakSet(), _ConfirmBoxEvokeService_extender = function _ConfirmBoxEvokeService_extender2(title, message, confirmLabel, declineLabel) {
  const confirmBox = new ConfirmBoxInitializer();
  confirmBox.setTitle(title);
  confirmBox.setMessage(message);
  confirmBox.setButtonLabels(confirmLabel, declineLabel);
  return confirmBox;
};
ConfirmBoxEvokeService.ɵfac = function ConfirmBoxEvokeService_Factory(t) {
  return new (t || ConfirmBoxEvokeService)();
};
ConfirmBoxEvokeService.ɵprov = ɵɵdefineInjectable({
  token: ConfirmBoxEvokeService,
  factory: ConfirmBoxEvokeService.ɵfac,
  providedIn: "root"
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfirmBoxEvokeService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var _ToastEvokeService_instances;
var _ToastEvokeService_extender;
var ToastEvokeService = class {
  constructor() {
    _ToastEvokeService_instances.add(this);
  }
  success(title, message, confirmLabel, declineLabel) {
    const toast = __classPrivateFieldGet(this, _ToastEvokeService_instances, "m", _ToastEvokeService_extender).call(this, title, message, confirmLabel, declineLabel);
    toast.setConfig({
      layoutType: DialogLayoutDisplay.SUCCESS
    });
    return toast.openToastNotification$();
  }
  info(title, message, confirmLabel, declineLabel) {
    const toast = __classPrivateFieldGet(this, _ToastEvokeService_instances, "m", _ToastEvokeService_extender).call(this, title, message, confirmLabel, declineLabel);
    toast.setConfig({
      layoutType: DialogLayoutDisplay.INFO
    });
    return toast.openToastNotification$();
  }
  warning(title, message, confirmLabel, declineLabel) {
    const toast = __classPrivateFieldGet(this, _ToastEvokeService_instances, "m", _ToastEvokeService_extender).call(this, title, message, confirmLabel, declineLabel);
    toast.setConfig({
      layoutType: DialogLayoutDisplay.WARNING
    });
    return toast.openToastNotification$();
  }
  danger(title, message, confirmLabel, declineLabel) {
    const toast = __classPrivateFieldGet(this, _ToastEvokeService_instances, "m", _ToastEvokeService_extender).call(this, title, message, confirmLabel, declineLabel);
    toast.setConfig({
      layoutType: DialogLayoutDisplay.DANGER
    });
    return toast.openToastNotification$();
  }
  customOne(title, message, confirmLabel, declineLabel) {
    const toast = __classPrivateFieldGet(this, _ToastEvokeService_instances, "m", _ToastEvokeService_extender).call(this, title, message, confirmLabel, declineLabel);
    toast.setConfig({
      layoutType: DialogLayoutDisplay.CUSTOM_ONE
    });
    return toast.openToastNotification$();
  }
  customTwo(title, message, confirmLabel, declineLabel) {
    const toast = __classPrivateFieldGet(this, _ToastEvokeService_instances, "m", _ToastEvokeService_extender).call(this, title, message, confirmLabel, declineLabel);
    toast.setConfig({
      layoutType: DialogLayoutDisplay.CUSTOM_TWO
    });
    return toast.openToastNotification$();
  }
  customThree(title, message, confirmLabel, declineLabel) {
    const toast = __classPrivateFieldGet(this, _ToastEvokeService_instances, "m", _ToastEvokeService_extender).call(this, title, message, confirmLabel, declineLabel);
    toast.setConfig({
      layoutType: DialogLayoutDisplay.CUSTOM_THREE
    });
    return toast.openToastNotification$();
  }
  customFour(title, message, confirmLabel, declineLabel) {
    const toast = __classPrivateFieldGet(this, _ToastEvokeService_instances, "m", _ToastEvokeService_extender).call(this, title, message, confirmLabel, declineLabel);
    toast.setConfig({
      layoutType: DialogLayoutDisplay.CUSTOM_FOUR
    });
    return toast.openToastNotification$();
  }
  customFive(title, message, confirmLabel, declineLabel) {
    const toast = __classPrivateFieldGet(this, _ToastEvokeService_instances, "m", _ToastEvokeService_extender).call(this, title, message, confirmLabel, declineLabel);
    toast.setConfig({
      layoutType: DialogLayoutDisplay.CUSTOM_FIVE
    });
    return toast.openToastNotification$();
  }
};
_ToastEvokeService_instances = /* @__PURE__ */ new WeakSet(), _ToastEvokeService_extender = function _ToastEvokeService_extender2(title, message, confirmLabel, declineLabel) {
  const toast = new ToastNotificationInitializer();
  toast.setTitle(title);
  toast.setMessage(message);
  toast.setButtonLabels(confirmLabel, declineLabel);
  return toast;
};
ToastEvokeService.ɵfac = function ToastEvokeService_Factory(t) {
  return new (t || ToastEvokeService)();
};
ToastEvokeService.ɵprov = ɵɵdefineInjectable({
  token: ToastEvokeService,
  factory: ToastEvokeService.ɵfac,
  providedIn: "root"
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToastEvokeService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
export {
  AppearanceAnimation,
  ButtonLayoutDisplay,
  ButtonMaker,
  ConfirmBoxConfigModule,
  ConfirmBoxEvokeService,
  ConfirmBoxInitializer,
  DialogBelonging,
  DialogConfigModule,
  DialogInitializer,
  DialogLayoutDisplay,
  DisappearanceAnimation,
  NgxAwesomePopupModule,
  ResetGlobalConfig,
  ResetToastGlobalSettings,
  ToastEvokeService,
  ToastNotificationConfigModule,
  ToastNotificationInitializer,
  ToastPositionEnum,
  ToastProgressBarEnum,
  ToastUserViewTypeEnum
};
/*! Bundled license information:

@angular/platform-browser/fesm2022/animations.mjs:
  (**
   * @license Angular v18.1.1
   * (c) 2010-2024 Google LLC. https://angular.io/
   * License: MIT
   *)
*/
//# sourceMappingURL=@costlydeveloper_ngx-awesome-popup.js.map
