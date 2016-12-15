import { NgModule } from '@angular/core';
import { TranslateService } from './translate.service';
import { TranslatePipe } from './translate.pipe';
import { TRANSLATION_PROVIDERS } from './translations';

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
export class TranslateModule { }