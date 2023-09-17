import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHealthState } from './shared/app.main-state';
import { NgxsModule } from '@ngxs/store';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin'
import { StartDataService } from './shared/start-data.service';
import { FormsModule } from '@angular/forms';
import { WelcomeModule } from './welcome/welcome.module';
import { HumanModule } from './human/human.module';
import { HttpClientModule } from '@angular/common/http';
import { MainHttpService } from './shared/main-http.service';
import { MainPageModule } from './main-page/main-page.module';
import { FinalModule } from './final/final.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    WelcomeModule,
    HumanModule,
    HttpClientModule,
    MainPageModule,
    FinalModule,
    NgxsModule.forRoot([AppHealthState]),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot(),
  ],
  providers: [
    StartDataService,
    MainHttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
