import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { JavaRemoteEe1SharedModule } from 'app/shared/shared.module';
import { JavaRemoteEe1CoreModule } from 'app/core/core.module';
import { JavaRemoteEe1AppRoutingModule } from './app-routing.module';
import { JavaRemoteEe1HomeModule } from './home/home.module';
import { JavaRemoteEe1EntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ActiveMenuDirective } from './layouts/navbar/active-menu.directive';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    JavaRemoteEe1SharedModule,
    JavaRemoteEe1CoreModule,
    JavaRemoteEe1HomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    JavaRemoteEe1EntityModule,
    JavaRemoteEe1AppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, ActiveMenuDirective, FooterComponent],
  bootstrap: [MainComponent],
})
export class JavaRemoteEe1AppModule {}
