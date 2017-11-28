import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GistComponent } from './gist.component';

export * from './gist.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    GistComponent
  ],
  exports: [
    GistComponent
  ]
})
export class GistModule {
}
