import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'pagination',
    templateUrl: './pagination.component.html'
})
export class PaginationComponent implements OnChanges {

    @Input() items: any[];
    @Input('page-size') pageSize = 10;

    @Output() pageChanged = new EventEmitter();

    currentPage = 1;
    pages = [];

    ngOnChanges() {
        if (!this.items) {
            this.items = [];
            return;
        }
        
        var lastPage = Math.trunc(this.items.length / this.pageSize);
        this.pages = [];
        for (var i = 1; i <= lastPage; i++) {
            this.pages.push(i);
        }

        this.selectPage(1);
    }

    selectPage(page) {
        this.currentPage = page;
        
        var pageIdx = (this.currentPage - 1) * this.pageSize;
        var pageItems = this.items.slice(pageIdx, pageIdx + this.pageSize);

        this.pageChanged.next({ page: this.currentPage, items: pageItems });
    }

}