import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from "@angular/forms";
import { DisplayhelloworldComponent } from "./components/displayhelloworld/displayhelloworld.component";
import { ShowhellobuttonComponent } from "./components/showhellobutton/showhellobutton.component";
import { DisplaynameComponent } from "./components/displayname/displayname.component";
import { CounterComponent } from "./components/counter/counter.component";
import { SimpleformComponent } from "./components/simpleform/simpleform.component";
import { UserageComponent } from "./components/userage/userage.component";
import { UsergreetingComponent } from "./components/usergreeting/usergreeting.component";

const routes: Routes = [
  { path: '1displayhelloword', component: DisplayhelloworldComponent},
  { path: '2showhellobutton', component: ShowhellobuttonComponent},
  { path: '3displayname', component: DisplaynameComponent},
  { path: '4counter', component: CounterComponent},
  { path: '5simpleform', component: SimpleformComponent},
  { path: '6userage', component: UserageComponent},
  { path: '7usergreeting', component: UsergreetingComponent},

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,

  ],

  declarations: [
    AppComponent,
    DisplayhelloworldComponent,
    ShowhellobuttonComponent,
    DisplaynameComponent,
    SimpleformComponent,
    UserageComponent,
    UsergreetingComponent,
  ],

  providers: [

  ],

  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
