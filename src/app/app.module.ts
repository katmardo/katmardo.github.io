import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ContentComponent } from "./content/content.component";
import { BackgroundComponent } from "./content/background/background.component";
import { FiltersComponent } from "./content/filters/filters.component";
import { HomeComponent } from "./content/home/home.component";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatSelectModule } from "@angular/material/select";
import { MatTooltipModule } from "@angular/material/tooltip";

import { MatCheckboxModule } from "@angular/material/checkbox";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { WelcomeComponent } from "./content/welcome/welcome.component";
import { AboutmeComponent } from "./content/aboutme/aboutme.component";

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    BackgroundComponent,
    FiltersComponent,
    HomeComponent,
    WelcomeComponent,
    AboutmeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatTooltipModule,
    MatCheckboxModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
