import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class CardListComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpLWNvbnRyb2xzL3NyYy9saWIvY2FyZC1saXN0L2NhcmQtbGlzdC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy91aS1jb250cm9scy9zcmMvbGliL2NhcmQtbGlzdC9jYXJkLWxpc3QuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7OztBQVF6RCxNQUFNLE9BQU8saUJBQWlCO0lBRTVCO1FBRFMsVUFBSyxHQUFXLEVBQUUsQ0FBQztJQUNaLENBQUM7SUFFakIsUUFBUTtJQUNSLENBQUM7OytHQUxVLGlCQUFpQjttR0FBakIsaUJBQWlCLGlGQ1I5Qix5ZEFhQTs0RkRMYSxpQkFBaUI7a0JBTDdCLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLGVBQWU7b0JBQ3pCLFdBQVcsRUFBRSw0QkFBNEI7b0JBQ3pDLFNBQVMsRUFBRSxDQUFDLDJCQUEyQixDQUFDO2lCQUN6QzswRUFFVSxLQUFLO3NCQUFiLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENhcmQgfSBmcm9tICcuLi9jYXJkJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLWNhcmQtbGlzdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9jYXJkLWxpc3QuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jYXJkLWxpc3QuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIENhcmRMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgY2FyZHM6IENhcmRbXSA9IFtdO1xuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICB9XG5cbn1cbiIsIjxkaXY+IFxuICAgIDxkaXYgY2xhc3M9XCJjYXJkIG0tNFwiICpuZ0Zvcj1cImxldCBjYXJkIG9mIGNhcmRzXCI+XG4gICAgICAgIDxoZWFkZXIgY2xhc3M9XCJjYXJkLWhlYWRlclwiPlxuICAgICAgICAgICAgPHAgY2xhc3M9XCJjYXJkLWhlYWRlci10aXRsZVwiPnt7Y2FyZC50aXRsZX19PC9wPlxuICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtY29udGVudFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIj57e2NhcmQuZGVzY3JpcHRpb259fTwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGZvb3RlciBjbGFzcz1cImNhcmQtZm9vdGVyXCI+XG4gICAgICAgICAgICA8YSBbaHJlZl09XCJjYXJkLmxpbmtcIiBjbGFzcz1cImNhcmQtZm9vdGVyLWl0ZW1cIj5WaWV3IG9uIFdpa2lwZWRpYTwvYT5cbiAgICAgICAgPC9mb290ZXI+XG4gICAgPC9kaXY+XG48L2Rpdj5cbiJdfQ==