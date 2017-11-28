/**
 * This is only for local test
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Component } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { GistModule }  from '@sgbj/angular-gist';

@Component({
  selector: 'app',
  template: `<gh-gist src="https://gist.github.com/sgbj/95ab8e2e77150318e7bd25b8d00a3248.js"></gh-gist>`
})
class AppComponent {}

@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [ AppComponent ],
  imports: [ BrowserModule, GistModule ]
})
class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
