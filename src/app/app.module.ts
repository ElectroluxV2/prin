import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { ListComponent } from './list/list.component';
import { MatDividerModule } from '@angular/material/divider';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { SettingsComponent } from './settings/settings.component';
import { ThreadComponent } from './thread/thread.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    LoginComponent,
    SettingsComponent,
    ThreadComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatRippleModule,
    MatCardModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    RouterModule.forRoot([{
      path: 'friends',
      component: ListComponent
    }, {
      path: 'login',
      component: LoginComponent
    }, {
      path: 'settings',
      component: SettingsComponent
    }, {
      path: 'thread/:id',
      component: ThreadComponent
    }, {
      path: '**',
      redirectTo: 'login'
    }], {
      onSameUrlNavigation: 'reload'
    }),
    ReactiveFormsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
