# [@sgbj/angular-gist](https://www.npmjs.com/package/@sgbj/angular-gist)

Embed GitHub Gists in your Angular apps without an iframe.

## Installation

To install this library, run:

```bash
$ npm install @sgbj/angular-gist --save
```

## Consuming your library

Once you have published your library to npm, you can import your library in any Angular application by running:

```bash
$ npm install @sgbj/angular-gist
```

and then from your Angular `AppModule`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import your library
import { GistModule } from '@sgbj/angular-gist';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    // Specify your library as an import
    GistModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Once your library is imported, you can use its components, directives and pipes in your Angular application:

```ts
@Component({
  selector: 'app',
  template: `<gh-gist src="https://gist.github.com/sgbj/95ab8e2e77150318e7bd25b8d00a3248.js"></gh-gist>`
})
class AppComponent {
}
```

[View demo.](https://stackblitz.com/edit/angular-dnbv3e)

## Development

To generate all `*.js`, `*.d.ts` and `*.metadata.json` files:

```bash
$ npm run build
```

To lint all `*.ts` files:

```bash
$ npm run lint
```

## License

MIT © [sgbj](mailto:scott@batary.io)
