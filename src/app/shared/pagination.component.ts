import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'pagination',
    templateUrl: './pagination.component.html'
})
export class PaginationComponent implements OnChanges {

    @Input() items: any[];
    @Input('page-size') pageSize = 10;

    @Output('page-changed') pageChanged = new EventEmitter();

    currentPage: number;
    pages: any[];

    ngOnChanges() {
        if (!this.items)
            this.items = [];
                
        this.pages = [];
        var startIndex = 0;
        while (startIndex < this.items.length) {
            var endIndex = startIndex + this.pageSize - 1 ;
            var pageItems = this.items.slice(startIndex, endIndex);
            this.pages.push(pageItems);
            startIndex = endIndex + 1;
        }

        this.selectPage(1);
    }

    selectPage(pageNumber) {
        this.currentPage = pageNumber;
        var pageItems = this.pages[this.currentPage - 1];
        this.pageChanged.emit({ page: this.currentPage, items: pageItems });
    }

}