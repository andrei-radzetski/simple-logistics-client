import { NgModule } from '@angular/core';
import { TranslateService, TranslatePipe, TRANSLATION_PROVIDERS } from '../translate';

@NgModule({
  declarations: [
    TranslatePipe
  ],
  providers: [
    TranslateService,
    TranslatePipe,
    TRANSLATION_PROVIDERS
  ],
  exports: [TranslatePipe]
})
export class TranslateModule {

}