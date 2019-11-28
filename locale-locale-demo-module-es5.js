(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["locale-locale-demo-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/locale/locale-pipe.demo.html": 
        /*!************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/locale/locale-pipe.demo.html ***!
          \************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row top-padding\">\n  <div class=\"two-thirds column\">\n    <form [formGroup]=\"demoForm\">\n\n      <div class=\"field\">\n        <label soho-label for=\"locales\">{{'Locales'|sohoTranslate}}</label>\n        <select soho-dropdown noSearch name=\"locales\" formControlName=\"locale\">\n          <option *ngFor=\"let locale of locales\" [ngValue]=\"locale.value\">{{locale.label}}</option>\n        </select>\n      </div>\n      <div class=\"field\">\n        <input soho-textarea [readOnly]=\"true\" value=\"{{demoForm.controls.locale.value}}\"/>\n      </div>\n      <br/>\n      <hr>\n      <br/>\n      <div class=\"field\">\n        <label for=\"datepicker\" class=\"label\">Date</label>\n        <input soho-datepicker name=\"datepicker\" formControlName=\"datepicker\" />\n      </div>\n\n      <div class=\"field\">\n        <input soho-textarea [readOnly]=\"true\" value=\"{{model.datepicker|sohoFormatDate}}\"/>\n        <input soho-textarea [readOnly]=\"true\" value=\"{{model.datepicker|sohoFormatDate:{date:'long'} }}\"/>\n        <input soho-textarea [readOnly]=\"true\" value=\"{{model.datepicker|sohoFormatDate:{date:'short'} }}\"/>\n        <input soho-textarea [readOnly]=\"true\" value=\"{{model.datepicker|sohoFormatDate:{pattern:'d/M/yyyy HH:mm:ss'} }}\"/>\n      </div>\n      <br/>\n      <hr>\n      <br/>\n      <div class=\"field\">\n          <label soho-label for=\"number\" >Number</label>\n          <input id=\"number\" name=\"number\" alignRight=\"true\" soho-input soho-mask [process]=\"'number'\" [integerLimit]=\"5\" formControlName=\"number\" />\n      </div>\n      <div class=\"field\">\n        <input soho-textarea [readOnly]=\"true\" value=\"{{model.number|sohoFormatNumber}}\"/>\n        <input soho-textarea [readOnly]=\"true\" value=\"{{model.number|sohoFormatNumber:{style: 'currency'} }}\"/>\n        <input soho-textarea [readOnly]=\"true\" value=\"{{model.number|sohoFormatNumber:{style: 'percent'} }}\"/>\n      </div>\n      <br/>\n      <hr>\n      <br/>\n      <div class=\"field\">\n          <label soho-label for=\"resourceKey\">Resource</label>\n          <input id=\"resourceKey\" name=\"resourceKey\" soho-input formControlName=\"resourceKey\" />\n      </div>\n      <div class=\"field\">\n        <input soho-textarea [readOnly]=\"true\" value=\"{{model.resourceKey|sohoTranslate}}\"/>\n      </div>\n      <br/>\n      <hr>\n      <br/>\n      <div style=\"text-align: center;\">\n        <button soho-button=\"primary\">{{'Yes'|sohoTranslate}}</button>\n        <button soho-button=\"secondary\">{{'No'|sohoTranslate}}</button>\n      </div>\n    </form>\n  </div>\n</div>\n");
            /***/ 
        }),
        /***/ "./src/app/locale/locale-demo.module.ts": 
        /*!**********************************************!*\
          !*** ./src/app/locale/locale-demo.module.ts ***!
          \**********************************************/
        /*! exports provided: LocaleDemoModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocaleDemoModule", function () { return LocaleDemoModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var ids_enterprise_ng__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ids-enterprise-ng */ "./dist/ids-enterprise-ng/fesm2015/ids-enterprise-ng.js");
            /* harmony import */ var _locale_pipe_demo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./locale-pipe.demo */ "./src/app/locale/locale-pipe.demo.ts");
            /* harmony import */ var _locale_demo_routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./locale-demo.routes */ "./src/app/locale/locale-demo.routes.ts");
            var LocaleDemoModule = /** @class */ (function () {
                function LocaleDemoModule() {
                }
                return LocaleDemoModule;
            }());
            LocaleDemoModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [
                        _locale_pipe_demo__WEBPACK_IMPORTED_MODULE_5__["LocalePipeDemoComponent"]
                    ],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                        ids_enterprise_ng__WEBPACK_IMPORTED_MODULE_4__["SohoComponentsModule"],
                        _locale_demo_routes__WEBPACK_IMPORTED_MODULE_6__["LocaleDemoRoutingModule"]
                    ],
                    providers: [],
                    bootstrap: []
                })
            ], LocaleDemoModule);
            /***/ 
        }),
        /***/ "./src/app/locale/locale-demo.routes.ts": 
        /*!**********************************************!*\
          !*** ./src/app/locale/locale-demo.routes.ts ***!
          \**********************************************/
        /*! exports provided: LocaleDemoRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocaleDemoRoutingModule", function () { return LocaleDemoRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _locale_pipe_demo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./locale-pipe.demo */ "./src/app/locale/locale-pipe.demo.ts");
            var routes = [
                {
                    path: '',
                    component: _locale_pipe_demo__WEBPACK_IMPORTED_MODULE_3__["LocalePipeDemoComponent"],
                    children: [
                        { path: '', component: _locale_pipe_demo__WEBPACK_IMPORTED_MODULE_3__["LocalePipeDemoComponent"] },
                    ]
                }
            ];
            var LocaleDemoRoutingModule = /** @class */ (function () {
                function LocaleDemoRoutingModule() {
                }
                return LocaleDemoRoutingModule;
            }());
            LocaleDemoRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], LocaleDemoRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/locale/locale-pipe.demo.ts": 
        /*!********************************************!*\
          !*** ./src/app/locale/locale-pipe.demo.ts ***!
          \********************************************/
        /*! exports provided: LocalePipeDemoComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalePipeDemoComponent", function () { return LocalePipeDemoComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            var LocalePipeDemoComponent = /** @class */ (function () {
                function LocalePipeDemoComponent(formBuilder, ref, ngZone) {
                    var _this = this;
                    this.formBuilder = formBuilder;
                    this.ref = ref;
                    this.ngZone = ngZone;
                    this.locales = [
                        { value: 'en-US', label: 'English (American)' },
                        { value: 'en-GB', label: 'English (British)' },
                        { value: 'zh-CN', label: 'Chinese (Simplified)' },
                        { value: 'pt-BR', label: 'Portugese (Brazillian)' },
                        { value: 'fr-FR', label: 'French (France)' }
                    ];
                    this.model = {
                        locale: '',
                        datepicker: new Date(),
                        number: 1000,
                        resourceKey: 'Ok'
                    };
                    // Make sure the locale is set.
                    this.model.locale = Soho.Locale.currentLocale.name;
                    // Create the demo form, and initialise with the model data.
                    // Normally, this would be a two step process, setting
                    // the data on a load event or via nsxs.
                    this.demoForm = this.formBuilder.group({
                        locale: [this.model.locale],
                        datepicker: [this.model.datepicker],
                        number: [this.model.number],
                        resourceKey: [this.model.resourceKey]
                    });
                    // Listen for changes to the reactive form ...
                    this.demoForm.valueChanges.subscribe(function () {
                        // ... and assign the data to the model.
                        // Ideally this would be sone in the submit, but for the
                        // purpose of this demo do it on every change.
                        _this.model.number = _this.demoForm.controls['number'].value;
                        _this.model.resourceKey = _this.demoForm.controls['resourceKey'].value;
                        _this.ref.markForCheck();
                    });
                    this.demoForm.controls['datepicker'].valueChanges.subscribe(function (value) {
                        _this.model.datepicker = Soho.Locale.parseDate(value) || new Date();
                        _this.ref.markForCheck();
                    });
                    // The locale selector requires the locale to be updated on the
                    // Soho Locale object, this is done via a valueChanges listener.
                    this.demoForm.controls['locale'].valueChanges.subscribe(function (value) {
                        /// Really changed?
                        if (Soho.Locale.currentLocale.name !== value) {
                            // ... as we're calling into jQuery code run outside
                            // of angular ...
                            _this.ngZone.runOutsideAngular(function () {
                                // ... setting the locale, and waiting for the locale to load ...
                                Soho.Locale.set(value).done(function () {
                                    // ... once loaded, back into the angular zone ...
                                    _this.ngZone.run(function () {
                                        // ... update the display to ensure all controls are updated with the
                                        // new locale.
                                        _this.ref.markForCheck();
                                    });
                                });
                            });
                        }
                    });
                }
                return LocalePipeDemoComponent;
            }());
            LocalePipeDemoComponent.ctorParameters = function () { return [
                { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
            ]; };
            LocalePipeDemoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-locale-pipe-demo',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./locale-pipe.demo.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/locale/locale-pipe.demo.html")).default,
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
                })
            ], LocalePipeDemoComponent);
            /***/ 
        })
    }]);
//# sourceMappingURL=locale-locale-demo-module-es2015.js.map
//# sourceMappingURL=locale-locale-demo-module-es5.js.map
//# sourceMappingURL=locale-locale-demo-module-es5.js.map