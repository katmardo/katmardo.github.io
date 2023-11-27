import { Component, AfterViewInit } from "@angular/core";
import * as L from "leaflet";
import "leaflet.markercluster";
import { FormControl, FormGroup } from "@angular/forms";
import { MapService } from "src/app/services/map.service";

@Component({
  selector: "app-filters",
  templateUrl: "./filters.component.html",
  styleUrls: ["./filters.component.scss"],
})
export class FiltersComponent implements AfterViewInit {
  constructor(private mapService: MapService) {}

  public zoomToFull() {
    this.mapService.originalExtentSubject.next(true);
  }

  public experienceTypes = [
    { type: "GIS", code: "010" },
    { type: "Programming", code: "001" },
    { type: "Teaching", code: "100" },
  ];
  public programmingSkills = [
    { type: "Python", code: "0" },
    { type: "JavaScript, HTML, CSS", code: "1" },
    { type: "R", code: "2" },
    { type: "Git", code: "3" },
    { type: "SQL", code: "4" },
  ];
  public educatorSkills = [
    { type: "College Education", code: "0" },
    { type: "K-12 Education", code: "1" },
    /* Education", code: "2" }, */
    { type: "Grant Writing", code: "3" },
    { type: "Public Speaking", code: "4" },
  ];
  public gisSkills = [
    { type: "ArcGIS", code: "0" },
    { type: "Web Mapping", code: "1" },
    { type: "Raster Data", code: "2" },
    { type: "Vector Data", code: "3" },
    { type: "Spatial Modeling", code: "4" },
    { type: "Data Collection", code: "5" },
    /* { type: "eCognition", code: "6" },
    { type: "TerrSet", code: "7" }, */
  ];
  public skills = [];
  public showAllPnts = true;

  //Graph options
  selectionsForm = new FormGroup({
    allPts: new FormControl(),
    experience: new FormControl(),
    skills: new FormControl(),
  });

  ngAfterViewInit(): void {
    this.selectionsForm.get("allPts").setValue(true);
    this.mapService.loadNullLayers();
    this.mapService.createMapPoints("111", "0");
  }

  public allPtsChecked(checkbox) {
    const checked = checkbox.checked;
    if (checked) {
      this.showAllPnts = true;

      document.getElementById("searchBtn").classList.remove("btnColorGray");
      document.getElementById("searchBtn").classList.add("btnColorPink");

      document.getElementById("clearBtn").classList.remove("btnColorGray");
      document.getElementById("clearBtn").classList.add("btnColorPink");
    }
    if (!checked) {
      this.showAllPnts = false;
    }
  }

  public populateSkills() {
    let experienceVal = this.selectionsForm.get("experience").value;

    let skillVal = this.selectionsForm.get("skills").setValue("");
    if (experienceVal === "100") {
      this.skills = this.educatorSkills;
    }
    if (experienceVal === "010") {
      this.skills = this.gisSkills;
    }
    if (experienceVal === "001") {
      this.skills = this.programmingSkills;
    }

    document.getElementById("clearBtn").classList.remove("btnColorGray");
    document.getElementById("clearBtn").classList.add("btnColorPink");
  }

  public generateNewCode() {
    let skillVal = this.selectionsForm.get("skills").value;

    if (skillVal) {
      if (skillVal.length > 0) {
        document.getElementById("searchBtn").classList.remove("btnColorGray");
        document.getElementById("searchBtn").classList.add("btnColorPink");
      }
    }
    if (skillVal) {
      if (skillVal.length === 0) {
        document.getElementById("searchBtn").classList.remove("btnColorPink");
        document.getElementById("searchBtn").classList.add("btnColorGray");
      }
    }
    if (!skillVal) {
      document.getElementById("searchBtn").classList.remove("btnColorPink");
      document.getElementById("searchBtn").classList.add("btnColorGray");
    }
  }

  public submitFilters() {
    let experienceVal;
    let skillVal;
    if (!this.showAllPnts) {
      experienceVal = this.selectionsForm.get("experience").value;
      skillVal = this.selectionsForm.get("skills").value;
    }
    if (this.showAllPnts) {
      experienceVal = "111";
      skillVal = "0";
    }

    this.mapService.createMapPoints(experienceVal, skillVal);
  }

  public clearFilters() {
    this.selectionsForm.get("allPts").setValue(false);
    this.selectionsForm.get("experience").setValue("");
    this.selectionsForm.get("skills").setValue("");
    this.mapService.loadNullLayers();

    this.showAllPnts = false;

    this.mapService.resetSubject.next(true);
    document.getElementById("clearBtn").classList.remove("btnColorPink");
    document.getElementById("clearBtn").classList.add("btnColorGray");
    document.getElementById("searchBtn").classList.remove("btnColorPink");
    document.getElementById("searchBtn").classList.add("btnColorGray");
  }
}
