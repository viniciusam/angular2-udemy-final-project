import { Component, Input } from '@angular/core';

@Component({
    selector: 'spinner',
    template: '<i class="fa fa-spinner fa-pulse fa-2x fa-fw" *ngIf="visible"></i>'
})
export class SpinnerComponent {
    @Input() visible = false;
}
