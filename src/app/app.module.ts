import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './pages/home/home.component';
import { WithingsCallbackComponent } from './pages/withings-callback/withings-callback.component';
import { WithingsAuthComponent } from './components/withings-auth/withings-auth.component';
import { AppMaterialModule } from './app-material.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WithingsCallbackComponent,
    WithingsAuthComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NoopAnimationsModule,
    AppMaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
