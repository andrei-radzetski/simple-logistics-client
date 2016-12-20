import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderModule } from '../shared/header/header.module';
import { ApplyComponent } from './apply.component';
import { applyRouting } from './apply.routing';
import { TranslateModule } from '../shared/translate/translate.module';
import { ApplyTypeComponent } from './type/apply.type.component';
import { ApplyAttributesComponent } from './attributes/apply.attributes.component';
import { ApplyPointsComponent } from './points/apply.points.component';
import { ApplySecurityComponent } from './security/apply.security.component';
import { ApplyExtraComponent } from './extra/apply.extra.component';
import { DragulaModule } from 'ng2-dragula';
import { BusyModule } from '../shared/components/busy/busy.module';
import { BusyComponent } from '../shared/components/busy/busy.component';
import { ApplyService } from './apply.service';

@NgModule({
  imports: [
    FormsModule,
    BusyModule,
    applyRouting,
    HeaderModule,
    TranslateModule,
    DragulaModule,
    CommonModule
  ],
  declarations: [
    ApplyComponent,
    ApplyTypeComponent,
    ApplyAttributesComponent,
    ApplyPointsComponent,
    ApplySecurityComponent,
    ApplyExtraComponent
  ],
  entryComponents: [
    BusyComponent
  ],
  providers: [
    ApplyService
  ] 
})
export class ApplyModule {

}