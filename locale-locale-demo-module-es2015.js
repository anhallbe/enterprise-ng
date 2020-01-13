(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["locale-locale-demo-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/locale/locale-pipe.demo.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/locale/locale-pipe.demo.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row top-padding\">\r\n  <div class=\"two-thirds column\">\r\n    <form [formGroup]=\"demoForm\">\r\n\r\n      <div class=\"field\">\r\n        <label soho-label for=\"locales\">{{'Locales'|sohoTranslate}}</label>\r\n        <select soho-dropdown noSearch name=\"locales\" formControlName=\"locale\">\r\n          <option *ngFor=\"let locale of locales\" [ngValue]=\"locale.value\">{{locale.label}}</option>\r\n        </select>\r\n      </div>\r\n      <div class=\"field\">\r\n        <input soho-textarea [readOnly]=\"true\" value=\"{{demoForm.controls.locale.value}}\"/>\r\n      </div>\r\n      <br/>\r\n      <hr>\r\n      <br/>\r\n      <div class=\"field\">\r\n        <label for=\"datepicker\" class=\"label\">Date</label>\r\n        <input soho-datepicker name=\"datepicker\" formControlName=\"datepicker\" />\r\n      </div>\r\n\r\n      <div class=\"field\">\r\n        <input soho-textarea [readOnly]=\"true\" value=\"{{model.datepicker|sohoFormatDate}}\"/>\r\n        <input soho-textarea [readOnly]=\"true\" value=\"{{model.datepicker|sohoFormatDate:{date:'long'} }}\"/>\r\n        <input soho-textarea [readOnly]=\"true\" value=\"{{model.datepicker|sohoFormatDate:{date:'short'} }}\"/>\r\n        <input soho-textarea [readOnly]=\"true\" value=\"{{model.datepicker|sohoFormatDate:{pattern:'d/M/yyyy HH:mm:ss'} }}\"/>\r\n      </div>\r\n      <br/>\r\n      <hr>\r\n      <br/>\r\n      <div class=\"field\">\r\n          <label soho-label for=\"number\" >Number</label>\r\n          <input id=\"number\" name=\"number\" alignRight=\"true\" soho-input soho-mask [process]=\"'number'\" [integerLimit]=\"5\" formControlName=\"number\" />\r\n      </div>\r\n      <div class=\"field\">\r\n        <input soho-textarea [readOnly]=\"true\" value=\"{{model.number|sohoFormatNumber}}\"/>\r\n        <input soho-textarea [readOnly]=\"true\" value=\"{{model.number|sohoFormatNumber:{style: 'currency'} }}\"/>\r\n        <input soho-textarea [readOnly]=\"true\" value=\"{{model.number|sohoFormatNumber:{style: 'percent'} }}\"/>\r\n      </div>\r\n      <br/>\r\n      <hr>\r\n      <br/>\r\n      <div class=\"field\">\r\n          <label soho-label for=\"resourceKey\">Resource</label>\r\n          <input id=\"resourceKey\" name=\"resourceKey\" soho-input formControlName=\"resourceKey\" />\r\n      </div>\r\n      <div class=\"field\">\r\n        <input soho-textarea [readOnly]=\"true\" value=\"{{model.resourceKey|sohoTranslate}}\"/>\r\n      </div>\r\n      <br/>\r\n      <hr>\r\n      <br/>\r\n      <div style=\"text-align: center;\">\r\n        <button soho-button=\"primary\">{{'Yes'|sohoTranslate}}</button>\r\n        <button soho-button=\"secondary\">{{'No'|sohoTranslate}}</button>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./src/app/locale/locale-demo.module.ts":
/*!**********************************************!*\
  !*** ./src/app/locale/locale-demo.module.ts ***!
  \**********************************************/
/*! exports provided: LocaleDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocaleDemoModule", function() { return LocaleDemoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ids_enterprise_ng__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ids-enterprise-ng */ "./dist/ids-enterprise-ng/fesm2015/ids-enterprise-ng.js");
/* harmony import */ var _locale_pipe_demo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./locale-pipe.demo */ "./src/app/locale/locale-pipe.demo.ts");
/* harmony import */ var _locale_demo_routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./locale-demo.routes */ "./src/app/locale/locale-demo.routes.ts");







let LocaleDemoModule = class LocaleDemoModule {
};
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



/***/ }),

/***/ "./src/app/locale/locale-demo.routes.ts":
/*!**********************************************!*\
  !*** ./src/app/locale/locale-demo.routes.ts ***!
  \**********************************************/
/*! exports provided: LocaleDemoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocaleDemoRoutingModule", function() { return LocaleDemoRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _locale_pipe_demo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./locale-pipe.demo */ "./src/app/locale/locale-pipe.demo.ts");




const routes = [
    {
        path: '',
        component: _locale_pipe_demo__WEBPACK_IMPORTED_MODULE_3__["LocalePipeDemoComponent"],
        children: [
            { path: '', component: _locale_pipe_demo__WEBPACK_IMPORTED_MODULE_3__["LocalePipeDemoComponent"] },
        ]
    }
];
let LocaleDemoRoutingModule = class LocaleDemoRoutingModule {
};
LocaleDemoRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], LocaleDemoRoutingModule);



/***/ }),

/***/ "./src/app/locale/locale-pipe.demo.ts":
/*!********************************************!*\
  !*** ./src/app/locale/locale-pipe.demo.ts ***!
  \********************************************/
/*! exports provided: LocalePipeDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalePipeDemoComponent", function() { return LocalePipeDemoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");



let LocalePipeDemoComponent = class LocalePipeDemoComponent {
    constructor(formBuilder, ref, ngZone) {
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
        this.demoForm.valueChanges.subscribe(() => {
            // ... and assign the data to the model.
            // Ideally this would be sone in the submit, but for the
            // purpose of this demo do it on every change.
            this.model.number = this.demoForm.controls['number'].value;
            this.model.resourceKey = this.demoForm.controls['resourceKey'].value;
            this.ref.markForCheck();
        });
        this.demoForm.controls['datepicker'].valueChanges.subscribe((value) => {
            this.model.datepicker = Soho.Locale.parseDate(value) || new Date();
            this.ref.markForCheck();
        });
        // The locale selector requires the locale to be updated on the
        // Soho Locale object, this is done via a valueChanges listener.
        this.demoForm.controls['locale'].valueChanges.subscribe((value) => {
            /// Really changed?
            if (Soho.Locale.currentLocale.name !== value) {
                // ... as we're calling into jQuery code run outside
                // of angular ...
                this.ngZone.runOutsideAngular(() => {
                    // ... setting the locale, and waiting for the locale to load ...
                    Soho.Locale.set(value).done(() => {
                        // ... once loaded, back into the angular zone ...
                        this.ngZone.run(() => {
                            // ... update the display to ensure all controls are updated with the
                            // new locale.
                            this.ref.markForCheck();
                        });
                    });
                });
            }
        });
    }
};
LocalePipeDemoComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
];
LocalePipeDemoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-locale-pipe-demo',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./locale-pipe.demo.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/locale/locale-pipe.demo.html")).default,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
    })
], LocalePipeDemoComponent);



/***/ })

}]);
//# sourceMappingURL=locale-locale-demo-module-es2015.js.map