import { NgModule } from '@angular/core';
import { HeaderModule } from '../shared/header/header.module';
import { ApplyComponent } from './apply.component';
import { applyRouting } from './apply.routing';
import { TranslateModule } from '../shared/translate/translate.module';
import { ApplyTypeComponent } from './type/apply.type.component';
import { ApplyAttributesComponent } from './attributes/apply.attributes.component';
import { ApplyPointsComponent } from './points/apply.points.component';
import { ApplySecurityComponent } from './security/apply.security.component';
import { ApplyExtraComponent } from './extra/apply.extra.component';

@NgModule({
  imports: [
    applyRouting,
    HeaderModule,
    TranslateModule
  ],
  declarations: [
    ApplyComponent,
    ApplyTypeComponent,
    ApplyAttributesComponent,
    ApplyPointsComponent,
    ApplySecurityComponent,
    ApplyExtraComponent
  ]
})
export class ApplyModule {

}