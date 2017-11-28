import { Component, OnChanges, Input, ViewChild } from '@angular/core';

import postscribe from 'postscribe';

@Component({
  selector: 'gh-gist',
  template: `<div #gist></div>`
})
export class GistComponent implements OnChanges {
  @Input() src;
  @ViewChild('gist') gist;

  constructor() { }

  ngOnChanges() {
    if (this.src) {
      postscribe(this.gist.nativeElement, `<script src="${this.src}"></script>`);
    }
  }
}
