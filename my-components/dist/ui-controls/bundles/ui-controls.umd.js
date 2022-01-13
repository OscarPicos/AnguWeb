(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('ui-controls', ['exports', '@angular/core', '@angular/common'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global["ui-controls"] = {}, global.ng.core, global.ng.common));
})(this, (function (exports, i0, i1) { 'use strict';

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () { return e[k]; }
                    });
                }
            });
        }
        n["default"] = e;
        return Object.freeze(n);
    }

    var i0__namespace = /*#__PURE__*/_interopNamespace(i0);
    var i1__namespace = /*#__PURE__*/_interopNamespace(i1);

    var UiControlsService = /** @class */ (function () {
        function UiControlsService() {
        }
        return UiControlsService;
    }());
    UiControlsService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0__namespace, type: UiControlsService, deps: [], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    UiControlsService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0__namespace, type: UiControlsService, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0__namespace, type: UiControlsService, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], ctorParameters: function () { return []; } });

    var UiControlsComponent = /** @class */ (function () {
        function UiControlsComponent() {
        }
        UiControlsComponent.prototype.ngOnInit = function () {
        };
        return UiControlsComponent;
    }());
    UiControlsComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0__namespace, type: UiControlsComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
    UiControlsComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.14", type: UiControlsComponent, selector: "lib-ui-controls", ngImport: i0__namespace, template: "\n    <p>\n      ui-controls works!\n    </p>\n  ", isInline: true });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0__namespace, type: UiControlsComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'lib-ui-controls',
                        template: "\n    <p>\n      ui-controls works!\n    </p>\n  ",
                        styles: []
                    }]
            }], ctorParameters: function () { return []; } });

    var CardListComponent = /** @class */ (function () {
        function CardListComponent() {
            this.cards = [];
        }
        CardListComponent.prototype.ngOnInit = function () {
        };
        return CardListComponent;
    }());
    CardListComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0__namespace, type: CardListComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
    CardListComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.14", type: CardListComponent, selector: "lib-card-list", inputs: { cards: "cards" }, ngImport: i0__namespace, template: "<div> \n    <div class=\"card m-4\" *ngFor=\"let card of cards\">\n        <header class=\"card-header\">\n            <p class=\"card-header-title\">{{card.title}}</p>\n        </header>\n        <div class=\"card-content\">\n            <div class=\"content\">{{card.description}}</div>\n        </div>\n        <footer class=\"card-footer\">\n            <a [href]=\"card.link\" class=\"card-footer-item\">View on Wikipedia</a>\n        </footer>\n    </div>\n</div>\n", styles: [":host>div{display:grid;grid-auto-flow:column;overflow:auto}.card{width:200px}\n"], directives: [{ type: i1__namespace.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0__namespace, type: CardListComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'lib-card-list',
                        templateUrl: './card-list.component.html',
                        styleUrls: ['./card-list.component.css']
                    }]
            }], ctorParameters: function () { return []; }, propDecorators: { cards: [{
                    type: i0.Input
                }] } });

    var UiControlsModule = /** @class */ (function () {
        function UiControlsModule() {
        }
        return UiControlsModule;
    }());
    UiControlsModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0__namespace, type: UiControlsModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    UiControlsModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0__namespace, type: UiControlsModule, declarations: [UiControlsComponent,
            CardListComponent], imports: [i1.CommonModule], exports: [UiControlsComponent,
            CardListComponent] });
    UiControlsModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0__namespace, type: UiControlsModule, imports: [[i1.CommonModule
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0__namespace, type: UiControlsModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            UiControlsComponent,
                            CardListComponent
                        ],
                        imports: [i1.CommonModule
                        ],
                        exports: [
                            UiControlsComponent,
                            CardListComponent
                        ]
                    }]
            }] });

    /*
     * Public API Surface of ui-controls
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.CardListComponent = CardListComponent;
    exports.UiControlsComponent = UiControlsComponent;
    exports.UiControlsModule = UiControlsModule;
    exports.UiControlsService = UiControlsService;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=ui-controls.umd.js.map
