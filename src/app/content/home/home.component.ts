import { Component, OnInit } from "@angular/core";
import { ViewService } from "src/app/services/view.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  constructor(private viewService: ViewService) {}

  public selectedBtn = "home";
  public displayFilters: Boolean = false;
  public displayWelcome: Boolean = true;
  public displayAboutMe: Boolean = false;

  ngOnInit(): void {
    this.viewService.homeSubject.subscribe((view) => {
      this.selectedBtn = view;

      if (this.selectedBtn === "home") {
        document.getElementById("homeButton").classList.add("selectedColor");
        document
          .getElementById("homeButton")
          .classList.remove("notSelectedColor");
        document
          .getElementById("resumeButton")
          .classList.add("notSelectedColor");
        document
          .getElementById("aboutButton")
          .classList.add("notSelectedColor");

        this.displayFilters = false;
        this.displayWelcome = true;
        this.displayAboutMe = false;
      }
      if (this.selectedBtn === "resume") {
        document.getElementById("resumeButton").classList.add("selectedColor");

        document
          .getElementById("resumeButton")
          .classList.remove("notSelectedColor");
        document.getElementById("homeButton").classList.add("notSelectedColor");

        document
          .getElementById("aboutButton")
          .classList.add("notSelectedColor");
        this.displayFilters = true;
        this.displayWelcome = false;
        this.displayAboutMe = false;
      }
      if (this.selectedBtn === "about") {
        document.getElementById("aboutButton").classList.add("selectedColor");

        document
          .getElementById("aboutButton")
          .classList.remove("notSelectedColor");
        document.getElementById("homeButton").classList.add("notSelectedColor");

        document
          .getElementById("resumeButton")
          .classList.add("notSelectedColor");

        this.displayFilters = false;
        this.displayWelcome = false;
        this.displayAboutMe = true;
      }
    });
  }
  public changeView(view) {
    this.viewService.homeSubject.next(view);
  }
}
