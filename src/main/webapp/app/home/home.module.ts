import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { JavaRemoteEe1SharedModule } from 'app/shared/shared.module';
import { HOME_ROUTE } from './home.route';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [JavaRemoteEe1SharedModule, RouterModule.forChild([HOME_ROUTE])],
  declarations: [HomeComponent],
})
export class JavaRemoteEe1HomeModule {}
