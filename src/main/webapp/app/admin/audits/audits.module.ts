import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JavaRemoteEe1SharedModule } from 'app/shared/shared.module';

import { AuditsComponent } from './audits.component';

import { auditsRoute } from './audits.route';

@NgModule({
  imports: [JavaRemoteEe1SharedModule, RouterModule.forChild([auditsRoute])],
  declarations: [AuditsComponent],
})
export class AuditsModule {}
