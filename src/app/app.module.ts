import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterbuttonComponent } from './components/counterbutton/counterbutton.component';
import { CounterDisplayComponent } from './components/counter-display/counter-display.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { CustomCounterComponent } from './components/custom-counter/custom-counter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { BlogComponent } from './components/blog/blog.component';
import { appState } from './shared/store/global/app.state';
import { AddblogComponent } from './components/addblog/addblog.component';
import { MenuHeaderComponent } from './components/menu-header/menu-header.component';
import { CounterComponent } from './components/counter/counter.component';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { BlogEffects } from './shared/store/blog/blog.effects';

@NgModule({
  declarations: [
    AppComponent,
    CounterbuttonComponent,
    CounterDisplayComponent,
    CustomCounterComponent,
    BlogComponent,
    AddblogComponent,
    MenuHeaderComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    StoreModule.forRoot(appState),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    EffectsModule.forRoot([BlogEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
