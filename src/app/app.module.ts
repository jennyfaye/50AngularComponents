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
import { CalculatorComponent } from "./components/calculator/calculator.component";
import { TextlengthComponent } from "./components/textlength/textlength.component";
import { CurrencyconverterComponent } from "./components/currencyconverter/currencyconverter.component";
import { EvenoddcheckerComponent } from "./components/evenoddchecker/evenoddchecker.component";
import { WordreverserComponent } from "./components/wordreverser/wordreverser.component";
import { ShowdateComponent } from "./components/showdate/showdate.component";
import { ShowusernameComponent } from "./components/showusername/showusername.component";
import { MultiplicationtableComponent } from "./components/multiplicationtable/multiplicationtable.component";
import { SimpleloginComponent } from "./components/simplelogin/simplelogin.component";
import { FahrenheittocelsiusComponent } from "./components/fahrenheittocelsius/fahrenheittocelsius.component";
import { BookmarklistComponent } from "./components/bookmarklist/bookmarklist.component";
import { CharactercounterComponent } from "./components/charactercounter/charactercounter.component";
import { PalindromecheckerComponent } from "./components/palindromechecker/palindromechecker.component";
import { TemperatureconverterComponent } from "./components/temperatureconverter/temperatureconverter.component";
import { ShoppinglistComponent } from "./components/shoppinglist/shoppinglist.component";
import { FactorialcalculatorComponent } from "./components/factorialcalculator/factorialcalculator.component";
import { TodomanagerComponent } from "./components/todomanager/todomanager.component";
import { GuessnumbergameComponent } from "./components/guessnumbergame/guessnumbergame.component";
import { WordcounterComponent } from "./components/wordcounter/wordcounter.component";
import { RandomnumbergeneratorComponent } from "./components/randomnumbergenerator/randomnumbergenerator.component";



const routes: Routes = [
  { path: '1displayhelloword', component: DisplayhelloworldComponent},
  { path: '2showhellobutton', component: ShowhellobuttonComponent},
  { path: '3displayname', component: DisplaynameComponent},
  { path: '4counter', component: CounterComponent},
  { path: '5simpleform', component: SimpleformComponent},
  { path: '6userage', component: UserageComponent},
  { path: '7usergreeting', component: UsergreetingComponent},
  { path: '8calculator', component: CalculatorComponent},
  { path: '9textlength', component: TextlengthComponent},
  { path: '10currencyconverter', component: CurrencyconverterComponent},
  { path: '11evenoddchecker', component: EvenoddcheckerComponent},
  { path: '12wordreverser', component: WordreverserComponent},
  { path: '13showdate', component: ShowdateComponent},
  { path: '14showusername', component: ShowusernameComponent},
  { path: '15multiplicationtable', component: MultiplicationtableComponent},
  { path: '16simplelogin', component: SimpleloginComponent},
  { path: '17fahrenheittocelsius', component: FahrenheittocelsiusComponent},
  { path: '18bookmarklist', component: BookmarklistComponent},
  { path: '19charactercounter', component: CharactercounterComponent},
  { path: '20palindromechecker', component: PalindromecheckerComponent},
  { path: '21temperatureconverter', component: TemperatureconverterComponent},
  { path: '22shoppinglist', component: ShoppinglistComponent},
  { path: '23factorialcalculator', component: FactorialcalculatorComponent},
  { path: '24todomanager', component: TodomanagerComponent},
  { path: '25guessnumbergame', component: GuessnumbergameComponent},
  { path: '26wordcounter', component: WordcounterComponent},
  { path: '27randomnumbergenerator', component: RandomnumbergeneratorComponent},
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
    CalculatorComponent,
    TextlengthComponent,
    CurrencyconverterComponent,
    EvenoddcheckerComponent,
    WordreverserComponent,
    ShowdateComponent,
    ShowusernameComponent,
    MultiplicationtableComponent,
    SimpleloginComponent,
    FahrenheittocelsiusComponent,
    BookmarklistComponent,
    CharactercounterComponent,
    PalindromecheckerComponent,
    TemperatureconverterComponent,
    ShoppinglistComponent,
    FactorialcalculatorComponent,
    TodomanagerComponent,
    GuessnumbergameComponent,
    WordcounterComponent,
    RandomnumbergeneratorComponent,
  ],

  providers: [

  ],

  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
