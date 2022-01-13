import * as i0 from '@angular/core';
import { Injectable, Component, Input, NgModule } from '@angular/core';
import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';

class UiControlsService {
    constructor() { }
}
UiControlsService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: UiControlsService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
UiControlsService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: UiControlsService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: UiControlsService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class UiControlsComponent {
    constructor() { }
    ngOnInit() {
    }
}
UiControlsComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: UiControlsComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
UiControlsComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.14", type: UiControlsComponent, selector: "lib-ui-controls", ngImport: i0, template: `
    <p>
      ui-controls works!
    </p>
  `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: UiControlsComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-ui-controls',
                    template: `
    <p>
      ui-controls works!
    </p>
  `,
                    styles: []
                }]
        }], ctorParameters: function () { return []; } });

class CardListComponent {
    constructor() {
        this.cards = [];
    }
    ngOnInit() {
    }
}
CardListComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: CardListComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
CardListComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.14", type: CardListComponent, selector: "lib-card-list", inputs: { cards: "cards" }, ngImport: i0, template: "<div> \n    <div class=\"card m-4\" *ngFor=\"let card of cards\">\n        <header class=\"card-header\">\n            <p class=\"card-header-title\">{{card.title}}</p>\n        </header>\n        <div class=\"card-content\">\n            <div class=\"content\">{{card.description}}</div>\n        </div>\n        <footer class=\"card-footer\">\n            <a [href]=\"card.link\" class=\"card-footer-item\">View on Wikipedia</a>\n        </footer>\n    </div>\n</div>\n", styles: [":host>div{display:grid;grid-auto-flow:column;overflow:auto}.card{width:200px}\n"], directives: [{ type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: CardListComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-card-list',
                    templateUrl: './card-list.component.html',
                    styleUrls: ['./card-list.component.css']
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { cards: [{
                type: Input
            }] } });

class UiControlsModule {
}
UiControlsModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: UiControlsModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
UiControlsModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: UiControlsModule, declarations: [UiControlsComponent,
        CardListComponent], imports: [CommonModule], exports: [UiControlsComponent,
        CardListComponent] });
UiControlsModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: UiControlsModule, imports: [[CommonModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: UiControlsModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        UiControlsComponent,
                        CardListComponent
                    ],
                    imports: [CommonModule
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

export { CardListComponent, UiControlsComponent, UiControlsModule, UiControlsService };
//# sourceMappingURL=ui-controls.js.map
