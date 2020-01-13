function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["accordion-accordion-demo-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/accordion/accordion-dynamic.demo.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/accordion/accordion-dynamic.demo.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAccordionAccordionDynamicDemoHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\r\n  <div class=\"twelve columns\">\r\n    <h2 class=\"fieldset-title\">Dynamic Accordion</h2>\r\n    <div class=\"field1\">\r\n      <button soho-button (click)=\"addMore()\">Add Header</button>\r\n      <button soho-button (click)=\"toggleAllowOnePane()\">Set 'AllowOnePane' to {{this.allowOnePane ? \"false\" : \"true\"}}</button>\r\n    </div>\r\n  </div>\r\n</div>\r\n<br /><br /><br />\r\n<soho-accordion [allowOnePane]=\"allowOnePane\" (expand)=\"onExpand($event)\" (collapse)=\"onCollapse($event)\">\r\n  <ng-container *ngFor=\"let item of sampleData\">\r\n    <ng-container *ngTemplateOutlet=\"accordionDynamicDemoTemplate; context: {item: item}\"></ng-container>\r\n  </ng-container>\r\n</soho-accordion>\r\n\r\n<ng-template #accordionDynamicDemoTemplate let-item=\"item\">\r\n    <soho-accordion-header [id]=\"item.id\" [isExpanded]=\"item.expanded\">\r\n        <span>{{ item.header }}</span>\r\n    </soho-accordion-header>\r\n    <soho-accordion-pane>\r\n      <div class=\"accordion-content\">{{ item.content }}</div>\r\n    </soho-accordion-pane>\r\n</ng-template>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/accordion/accordion-panels.demo.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/accordion/accordion-panels.demo.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAccordionAccordionPanelsDemoHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\r\n  <div class=\"twelve columns\">\r\n    <h2 class=\"fieldset-title\">Default</h2>\r\n    <soho-accordion\r\n      [allowOnePane]=\"true\"\r\n      [hasPanels]=\"true\"\r\n      (beforeexpand)=\"onBeforeExpand($event)\"\r\n      (beforecollapse)=\"onBeforeCollapse($event)\"\r\n      (beforeselect)=\"onBeforeSelect($event)\"\r\n      (afterexpand)=\"onAfterExpand($event)\"\r\n      (selected)=\"onSelected($event)\"\r\n      (followlink)=\"onFollowlink($event)\"\r\n      (expand)=\"onExpand($event)\"\r\n      (collapse)=\"onCollapse($event)\"\r\n      (aftercollapse)=\"onAfterCollapse($event)\"\r\n    >\r\n      <ng-container *ngTemplateOutlet=\"AccordionContent\"></ng-container>\r\n    </soho-accordion>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n  <div class=\"twelve columns\">\r\n    <h2 class=\"fieldset-title\">Alternate</h2>\r\n    <soho-accordion\r\n      [allowOnePane]=\"true\"\r\n      [hasPanels]=\"true\"\r\n      [alternate]=\"true\"\r\n      (beforeexpand)=\"onBeforeExpand($event)\"\r\n      (beforecollapse)=\"onBeforeCollapse($event)\"\r\n      (beforeselect)=\"onBeforeSelect($event)\"\r\n      (afterexpand)=\"onAfterExpand($event)\"\r\n      (selected)=\"onSelected($event)\"\r\n      (followlink)=\"onFollowlink($event)\"\r\n      (expand)=\"onExpand($event)\"\r\n      (collapse)=\"onCollapse($event)\"\r\n      (aftercollapse)=\"onAfterCollapse($event)\"\r\n    >\r\n      <ng-container *ngTemplateOutlet=\"AccordionContent\"></ng-container>\r\n    </soho-accordion>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n  <div class=\"twelve columns\">\r\n    <h2 class=\"fieldset-title\">Inverse</h2>\r\n    <soho-accordion\r\n      [allowOnePane]=\"true\"\r\n      [hasPanels]=\"true\"\r\n      [inverse]=\"true\"\r\n      (beforeexpand)=\"onBeforeExpand($event)\"\r\n      (beforecollapse)=\"onBeforeCollapse($event)\"\r\n      (beforeselect)=\"onBeforeSelect($event)\"\r\n      (afterexpand)=\"onAfterExpand($event)\"\r\n      (selected)=\"onSelected($event)\"\r\n      (followlink)=\"onFollowlink($event)\"\r\n      (expand)=\"onExpand($event)\"\r\n      (collapse)=\"onCollapse($event)\"\r\n      (aftercollapse)=\"onAfterCollapse($event)\"\r\n    >\r\n      <ng-container *ngTemplateOutlet=\"AccordionContent\"></ng-container>\r\n    </soho-accordion>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n  <div class=\"twelve columns\">\r\n    <h2 class=\"fieldset-title\">All headers expanded on initial load</h2>\r\n    <soho-accordion\r\n      [allowOnePane]=\"false\"\r\n      [hasPanels]=\"true\"\r\n      (beforeexpand)=\"onBeforeExpand($event)\"\r\n      (beforecollapse)=\"onBeforeCollapse($event)\"\r\n      (beforeselect)=\"onBeforeSelect($event)\"\r\n      (afterexpand)=\"onAfterExpand($event)\"\r\n      (selected)=\"onSelected($event)\"\r\n      (followlink)=\"onFollowlink($event)\"\r\n      (expand)=\"onExpand($event)\"\r\n      (collapse)=\"onCollapse($event)\"\r\n      (aftercollapse)=\"onAfterCollapse($event)\"\r\n    >\r\n      <soho-accordion-header [isExpanded]=\"true\">Warehouse Location A</soho-accordion-header>\r\n      <soho-accordion-pane>\r\n        <soho-accordion-header>Item 1</soho-accordion-header>\r\n        <soho-accordion-header>Item 2</soho-accordion-header>\r\n      </soho-accordion-pane>\r\n      <soho-accordion-header [isExpanded]=\"true\">Warehouse Location B</soho-accordion-header>\r\n      <soho-accordion-pane>\r\n        <soho-accordion-header>Item 1</soho-accordion-header>\r\n        <soho-accordion-header>Item 2</soho-accordion-header>\r\n      </soho-accordion-pane>\r\n    </soho-accordion>\r\n  </div>\r\n</div>\r\n\r\n<ng-template #AccordionContent>\r\n  <soho-accordion-header>Warehouse Location A</soho-accordion-header>\r\n  <soho-accordion-pane>\r\n    <soho-accordion-header>Item 1</soho-accordion-header>\r\n    <soho-accordion-header>Item 2</soho-accordion-header>\r\n  </soho-accordion-pane>\r\n  <soho-accordion-header>Warehouse Location B</soho-accordion-header>\r\n  <soho-accordion-pane>\r\n    <soho-accordion-header>Item 1</soho-accordion-header>\r\n    <soho-accordion-header>Item 2</soho-accordion-header>\r\n  </soho-accordion-pane>\r\n</ng-template>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/accordion/accordion.demo.html":
  /*!*************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/accordion/accordion.demo.html ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAccordionAccordionDemoHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\r\n  <div class=\"twelve columns\">\r\n\r\n    <h2 class=\"fieldset-title\">Accordion</h2>\r\n\r\n    <div class=\"field1\">\r\n      <button soho-button (click)=\"expandAll()\">Expand All</button>\r\n      <button soho-button (click)=\"collapseAll()\">Collapse All</button>\r\n      <button soho-button (click)=\"toggle()\">Toggle</button>\r\n      <button soho-button (click)=\"expand()\">Expand</button>\r\n      <button soho-button (click)=\"collapse()\">Collapse</button>\r\n      <button soho-button (click)=\"update()\">Update</button>\r\n      <button soho-button (click)=\"disable()\">Disable</button>\r\n      <button soho-button (click)=\"enable()\">Enable</button>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n<br><br><br>\r\n\r\n<soho-accordion [allowOnePane]=\"false\"\r\n  (beforeexpand)=\"onBeforeExpand($event)\"\r\n  (beforecollapse)=\"onBeforeCollapse($event)\"\r\n  (beforeselect)=\"onBeforeSelect($event)\"\r\n  (afterexpand)=\"onAfterExpand($event)\"\r\n  (selected)=\"onSelected($event)\"\r\n  (followlink)=\"onFollowlink($event)\"\r\n  (expand)=\"onExpand($event)\"\r\n  (collapse)=\"onCollapse($event)\"\r\n  (aftercollapse)=\"onAfterCollapse($event)\"\r\n  >\r\n  <soho-accordion-header>Warehouse Location</soho-accordion-header>\r\n  <soho-accordion-pane>\r\n    <div class=\"accordion-content\">Remix, optimize, \"B2B, iterate?\" Best-of-breed efficient beta-test; social cutting-edge: rich magnetic tagclouds front-end infomediaries viral authentic incentivize sexy extensible functionalities incentivize. Generate killer authentic grow vertical blogospheres, functionalities ecologies harness, \"tag solutions synergies exploit data-driven B2C open-source e-markets optimize create, enhance convergence create.\" Out-of-the-box strategize best-of-breed back-end, deploy design markets metrics. Content web services enhance leading-edge Cluetrain, deliverables dot-com scalable. User-centric morph, back-end, synthesize mesh, frictionless, exploit next-generation tag portals, e-commerce channels; integrate; recontextualize distributed revolutionize innovative eyeballs.</div>\r\n  </soho-accordion-pane>\r\n  <soho-accordion-header [isExpanded]=\"true\">Sort By</soho-accordion-header>\r\n  <soho-accordion-pane>\r\n    <div class=\"accordion-content\">\r\n      <div class=\"field\">\r\n        <input soho-radiobutton id=\"sort-recent\" type=\"radio\" name=\"sort\" value=\"sort-recent\" />\r\n        <label soho-label for=\"sort-recent\" forRadioButton=\"'true'\">Recently Added</label>\r\n        <br>\r\n        <input soho-radiobutton id=\"sort-price-low-high\" type=\"radio\" name=\"sort\" value=\"price-low-high\" />\r\n        <label soho-label for=\"sort-price-low-high\" forRadioButton=\"'true'\">Price: Low – High</label>\r\n        <br>\r\n        <input soho-radiobutton id=\"sort-price-high-low\" type=\"radio\" name=\"sort\" value=\"sort-price-high-low\" />\r\n        <label soho-label for=\"sort-price-high-low\" forRadioButton=\"'true'\">Price: High – Low</label>\r\n        <br>\r\n        <input soho-radiobutton id=\"sort-alphabetical\" type=\"radio\" name=\"sort\" value=\"sort-alphabetical\" />\r\n        <label soho-label for=\"sort-alphabetical\" forRadioButton=\"'true'\">Alphabetical</label>\r\n        <br>\r\n        <input soho-radiobutton id=\"sort-stock\" type=\"radio\" name=\"sort\" value=\"sort-stock\" />\r\n        <label soho-label for=\"sort-stock\" forRadioButton=\"'true'\">In Stock</label>\r\n      </div>\r\n    </div>\r\n  </soho-accordion-pane>\r\n  <soho-accordion-header>Brand Name</soho-accordion-header>\r\n  <soho-accordion-pane>\r\n    <div class=\"accordion-content\">Magnetic holistic, integrate envisioneer value podcasting leverage, \"granular supply-chains systems supply-chains repurpose transform rss-capable seamless; robust disintermediate.\" Cluetrain: action-items rich metrics transition engage syndicate aggregate transform applications; revolutionize--infrastructures recontextualize platforms empower bandwidth incentivize, innovate, virtual portals whiteboard rich-clientAPIs intuitive. Synergies infrastructures; e-markets synthesize user-centric expedite. ROI world-class, ecologies utilize benchmark content--synergistic enhance. Syndicate synergistic collaborative enterprise ROI; folksonomies visionary holistic synergies grow.</div>\r\n  </soho-accordion-pane>\r\n  <soho-accordion-header>Material</soho-accordion-header>\r\n  <soho-accordion-pane>\r\n    <div class=\"accordion-content\">Revolutionize implement infrastructures social front-end, world-class bricks-and-clicks extensible recontextualize? User-contributed e-business relationships widgets bleeding-edge transform, \"viral world-class, unleash sexy embrace cross-media best-of-breed wireless, functionalities.\" Markets, \"transition architectures, redefine infomediaries world-class back-end harness, mindshare blogospheres; schemas disintermediate rich,\" benchmark integrated markets blogging synergies dynamic social back-end convergence. Reinvent A-list A-list B2C rss-capable, mesh bandwidth mission-critical disintermediate strategize networks distributed integrated bleeding-edge rss-capable partnerships incubate, web-enabled e-markets. A-list channels enhance citizen-media, value solutions beta-test platforms enable interfaces, transition interfaces one-to-one expedite scalable.</div>\r\n  </soho-accordion-pane>\r\n</soho-accordion>\r\n";
    /***/
  },

  /***/
  "./src/app/accordion/accordion-demo.module.ts":
  /*!****************************************************!*\
    !*** ./src/app/accordion/accordion-demo.module.ts ***!
    \****************************************************/

  /*! exports provided: AccordionDemoModule */

  /***/
  function srcAppAccordionAccordionDemoModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AccordionDemoModule", function () {
      return AccordionDemoModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var ids_enterprise_ng__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ids-enterprise-ng */
    "./dist/ids-enterprise-ng/fesm2015/ids-enterprise-ng.js");
    /* harmony import */


    var _accordion_demo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./accordion.demo */
    "./src/app/accordion/accordion.demo.ts");
    /* harmony import */


    var _accordion_dynamic_demo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./accordion-dynamic.demo */
    "./src/app/accordion/accordion-dynamic.demo.ts");
    /* harmony import */


    var _accordion_panels_demo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./accordion-panels.demo */
    "./src/app/accordion/accordion-panels.demo.ts");
    /* harmony import */


    var _accordion_demo_routes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./accordion-demo.routes */
    "./src/app/accordion/accordion-demo.routes.ts");

    var AccordionDemoModule = function AccordionDemoModule() {
      _classCallCheck(this, AccordionDemoModule);
    };

    AccordionDemoModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_accordion_demo__WEBPACK_IMPORTED_MODULE_5__["AccordionDemoComponent"], _accordion_dynamic_demo__WEBPACK_IMPORTED_MODULE_6__["AccordionDynamicDemoComponent"], _accordion_panels_demo__WEBPACK_IMPORTED_MODULE_7__["AccordionPanelsDemoComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], ids_enterprise_ng__WEBPACK_IMPORTED_MODULE_4__["SohoComponentsModule"], _accordion_demo_routes__WEBPACK_IMPORTED_MODULE_8__["AccordionDemoRoutingModule"]],
      providers: [],
      bootstrap: []
    })], AccordionDemoModule);
    /***/
  },

  /***/
  "./src/app/accordion/accordion-demo.routes.ts":
  /*!****************************************************!*\
    !*** ./src/app/accordion/accordion-demo.routes.ts ***!
    \****************************************************/

  /*! exports provided: AccordionDemoRoutingModule */

  /***/
  function srcAppAccordionAccordionDemoRoutesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AccordionDemoRoutingModule", function () {
      return AccordionDemoRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _accordion_demo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./accordion.demo */
    "./src/app/accordion/accordion.demo.ts");
    /* harmony import */


    var _accordion_dynamic_demo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./accordion-dynamic.demo */
    "./src/app/accordion/accordion-dynamic.demo.ts");
    /* harmony import */


    var _accordion_panels_demo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./accordion-panels.demo */
    "./src/app/accordion/accordion-panels.demo.ts");

    var routes = [{
      path: '',
      component: _accordion_demo__WEBPACK_IMPORTED_MODULE_3__["AccordionDemoComponent"]
    }, {
      path: 'dynamic',
      component: _accordion_dynamic_demo__WEBPACK_IMPORTED_MODULE_4__["AccordionDynamicDemoComponent"]
    }, {
      path: 'panels',
      component: _accordion_panels_demo__WEBPACK_IMPORTED_MODULE_5__["AccordionPanelsDemoComponent"]
    }];

    var AccordionDemoRoutingModule = function AccordionDemoRoutingModule() {
      _classCallCheck(this, AccordionDemoRoutingModule);
    };

    AccordionDemoRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AccordionDemoRoutingModule);
    /***/
  },

  /***/
  "./src/app/accordion/accordion-dynamic.demo.ts":
  /*!*****************************************************!*\
    !*** ./src/app/accordion/accordion-dynamic.demo.ts ***!
    \*****************************************************/

  /*! exports provided: AccordionDynamicDemoComponent */

  /***/
  function srcAppAccordionAccordionDynamicDemoTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AccordionDynamicDemoComponent", function () {
      return AccordionDynamicDemoComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var ids_enterprise_ng__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ids-enterprise-ng */
    "./dist/ids-enterprise-ng/fesm2015/ids-enterprise-ng.js");

    var AccordionDynamicDemoComponent =
    /*#__PURE__*/
    function () {
      function AccordionDynamicDemoComponent() {
        _classCallCheck(this, AccordionDynamicDemoComponent);

        this.sampleData = [{
          id: 1,
          header: 'Header 1',
          content: 'This is the content of header 1',
          expanded: false
        }, {
          id: 2,
          header: 'Header 2',
          content: 'This is the content of header 2',
          expanded: true
        }];
        this.allowOnePane = true;
      }

      _createClass(AccordionDynamicDemoComponent, [{
        key: "addMore",
        value: function addMore() {
          var _this = this;

          this.sampleData.forEach(function (d) {
            d.expanded = false;
          });
          var idx = this.sampleData.length + 1;
          this.sampleData.push({
            id: idx,
            header: 'Header ' + idx,
            content: 'I\'ve added some more header ' + idx,
            expanded: true
          }); // The updates must be called after the add has ocurred to allow for the view to be updated view, otherwise
          // the widget does not see the changes.  Consider changing the

          setTimeout(function () {
            _this.accordion.updated();
          });
        }
      }, {
        key: "toggleAllowOnePane",
        value: function toggleAllowOnePane() {
          var _this2 = this;

          this.allowOnePane = !this.allowOnePane; // If only one pane is allowed, then collapse them.

          if (this.allowOnePane) {
            var collapse = false;
            this.sampleData.forEach(function (d) {
              if (d.expanded && !collapse) {
                collapse = true;
              } else {
                d.expanded = false;
              }
            });
          }

          setTimeout(function () {
            _this2.accordion.updated();
          });
        }
      }, {
        key: "onExpand",
        value: function onExpand(event) {
          var _this3 = this;

          var header = this.sampleData.find(function (h) {
            return "".concat(h.id) === event.anchor[0].parentElement.id;
          });

          if (header) {
            this.headers.forEach(function (h) {
              return _this3.accordion.collapse(h);
            }); // this.accordion.collapse(header)

            header.expanded = true;
          }
        }
      }, {
        key: "onCollapse",
        value: function onCollapse(event) {
          var header = this.sampleData.find(function (h) {
            return "".concat(h.id) === event.anchor[0].parentElement.id;
          });

          if (header) {
            header.expanded = false;
          }
        }
      }]);

      return AccordionDynamicDemoComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"])(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
      return ids_enterprise_ng__WEBPACK_IMPORTED_MODULE_2__["SohoAccordionHeaderComponent"];
    }))], AccordionDynamicDemoComponent.prototype, "headers", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"])(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
      return ids_enterprise_ng__WEBPACK_IMPORTED_MODULE_2__["SohoAccordionPaneComponent"];
    }))], AccordionDynamicDemoComponent.prototype, "panes", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(ids_enterprise_ng__WEBPACK_IMPORTED_MODULE_2__["SohoAccordionComponent"], {
      static: true
    })], AccordionDynamicDemoComponent.prototype, "accordion", void 0);
    AccordionDynamicDemoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'accordion-dynamic-demo',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./accordion-dynamic.demo.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/accordion/accordion-dynamic.demo.html")).default
    })], AccordionDynamicDemoComponent);
    /***/
  },

  /***/
  "./src/app/accordion/accordion-panels.demo.ts":
  /*!****************************************************!*\
    !*** ./src/app/accordion/accordion-panels.demo.ts ***!
    \****************************************************/

  /*! exports provided: AccordionPanelsDemoComponent */

  /***/
  function srcAppAccordionAccordionPanelsDemoTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AccordionPanelsDemoComponent", function () {
      return AccordionPanelsDemoComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var ids_enterprise_ng__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ids-enterprise-ng */
    "./dist/ids-enterprise-ng/fesm2015/ids-enterprise-ng.js");

    var AccordionPanelsDemoComponent =
    /*#__PURE__*/
    function () {
      function AccordionPanelsDemoComponent() {
        _classCallCheck(this, AccordionPanelsDemoComponent);
      }

      _createClass(AccordionPanelsDemoComponent, [{
        key: "onBeforeCollapse",
        value: function onBeforeCollapse(args) {
          console.log('Collapsed!', args);
        }
      }, {
        key: "onBeforeExpand",
        value: function onBeforeExpand(args) {
          console.log('Expanded!', args);
        }
      }, {
        key: "onBeforeSelect",
        value: function onBeforeSelect(args) {
          console.log('Selected!', args);
        }
      }, {
        key: "onAfterExpand",
        value: function onAfterExpand(args) {
          console.log('onAfterExpand!', args);
        }
      }, {
        key: "onSelected",
        value: function onSelected(args) {
          console.log('onSelected!', args);
        }
      }, {
        key: "onFollowlink",
        value: function onFollowlink(args) {
          console.log('onFollowlink!', args);
        }
      }, {
        key: "onExpand",
        value: function onExpand(args) {
          console.log('onExpand!', args);
        }
      }, {
        key: "onCollapse",
        value: function onCollapse(args) {
          console.log('onExpand!', args);
        }
      }, {
        key: "onAfterCollapse",
        value: function onAfterCollapse(args) {
          console.log('onAfterCollapse!', args);
        }
      }]);

      return AccordionPanelsDemoComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(ids_enterprise_ng__WEBPACK_IMPORTED_MODULE_2__["SohoAccordionComponent"], {
      static: true
    })], AccordionPanelsDemoComponent.prototype, "accordion", void 0);
    AccordionPanelsDemoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'accordion-panels-demo',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./accordion-panels.demo.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/accordion/accordion-panels.demo.html")).default
    })], AccordionPanelsDemoComponent);
    /***/
  },

  /***/
  "./src/app/accordion/accordion.demo.ts":
  /*!*********************************************!*\
    !*** ./src/app/accordion/accordion.demo.ts ***!
    \*********************************************/

  /*! exports provided: AccordionDemoComponent */

  /***/
  function srcAppAccordionAccordionDemoTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AccordionDemoComponent", function () {
      return AccordionDemoComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var ids_enterprise_ng__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ids-enterprise-ng */
    "./dist/ids-enterprise-ng/fesm2015/ids-enterprise-ng.js");

    var AccordionDemoComponent =
    /*#__PURE__*/
    function () {
      function AccordionDemoComponent() {
        _classCallCheck(this, AccordionDemoComponent);
      }

      _createClass(AccordionDemoComponent, [{
        key: "onBeforeCollapse",
        value: function onBeforeCollapse(args) {
          console.log('Collapsed!', args);
        }
      }, {
        key: "onBeforeExpand",
        value: function onBeforeExpand(args) {
          console.log('Expanded!', args);
        }
      }, {
        key: "onBeforeSelect",
        value: function onBeforeSelect(args) {
          console.log('Selected!', args);
        }
      }, {
        key: "onAfterExpand",
        value: function onAfterExpand(args) {
          console.log('onAfterExpand!', args);
        }
      }, {
        key: "onSelected",
        value: function onSelected(args) {
          console.log('onSelected!', args);
        }
      }, {
        key: "onFollowlink",
        value: function onFollowlink(args) {
          console.log('onFollowlink!', args);
        }
      }, {
        key: "onExpand",
        value: function onExpand(args) {
          console.log('onExpand!', args);
        }
      }, {
        key: "onCollapse",
        value: function onCollapse(args) {
          console.log('onExpand!', args);
        }
      }, {
        key: "onAfterCollapse",
        value: function onAfterCollapse(args) {
          console.log('onAfterCollapse!', args);
        }
      }, {
        key: "collapseAll",
        value: function collapseAll() {
          this.accordion.collapseAll();
        }
      }, {
        key: "expandAll",
        value: function expandAll() {
          this.accordion.expandAll();
        }
      }, {
        key: "toggle",
        value: function toggle() {
          this.accordion.toggle(this.accordion.getHeader(1));
        }
      }, {
        key: "expand",
        value: function expand() {
          this.accordion.expand(this.accordion.getHeader(1));
        }
      }, {
        key: "collapse",
        value: function collapse() {
          this.accordion.collapse(this.accordion.getHeader(1));
        }
      }, {
        key: "disable",
        value: function disable() {
          this.accordion.getHeader(1).isDisabled = true; //    this.accordion.disable();
        }
      }, {
        key: "enable",
        value: function enable() {
          this.accordion.getHeader(1).isDisabled = false; // this.accordion.enable();
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {}
      }, {
        key: "update",
        value: function update() {
          if (this.accordion.displayChevron === undefined) {
            this.accordion.displayChevron = false;
          } else {
            this.accordion.displayChevron = !this.accordion.displayChevron;
          }
        }
      }]);

      return AccordionDemoComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(ids_enterprise_ng__WEBPACK_IMPORTED_MODULE_2__["SohoAccordionComponent"], {
      static: true
    })], AccordionDemoComponent.prototype, "accordion", void 0);
    AccordionDemoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'accordion-demo',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./accordion.demo.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/accordion/accordion.demo.html")).default
    })], AccordionDemoComponent);
    /***/
  }
}]);
//# sourceMappingURL=accordion-accordion-demo-module-es5.js.map