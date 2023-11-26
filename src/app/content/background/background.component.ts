import { Component, AfterViewInit } from "@angular/core";
import * as L from "leaflet";
import { MapService } from "src/app/services/map.service";

@Component({
  selector: "app-background",
  templateUrl: "./background.component.html",
  styleUrls: ["./background.component.scss"],
})
export class BackgroundComponent implements AfterViewInit {
  constructor(private mapService: MapService) {}

  ngAfterViewInit(): void {
    this.initMap();
    this.mapService.resetSubject.next(false);
  }

  private map;

  private zoomToLayer(currentLayer) {
    this.map.fitBounds(currentLayer.getBounds()); //.pad(0.5));
  }

  private initMap(): void {
    //set the initial map
    this.map = L.map("map", {
      center: [39.8282, -98.5795],
      zoom: 4,
      zoomControl: false,
    });

    //default background
    let CartoDB_VoyagerNoLabels = L.tileLayer(
      "https://{s}.basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}{r}.png",
      {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: "abcd",
        maxZoom: 20,
      }
    );

    //add default background to map
    CartoDB_VoyagerNoLabels.addTo(this.map);

    let gisPts;
    let teachingPts;
    let programmingPts;

    this.mapService.resetSubject.subscribe((reset) => {
      if (reset === true) {
        this.map.setView([39.8282, -98.5795], 4);
        this.mapService.resetSubject.next(false);
      }
    });

    this.mapService.originalExtentSubject.subscribe((extent) => {
      if (extent === true) {
        this.map.setView([39.8282, -98.5795], 4);
        this.mapService.originalExtentSubject.next(false);
      }
    });

    this.mapService.gisMarkerSubject.subscribe((points) => {
      if (points) {
        if (this.map.hasLayer(teachingPts)) {
          teachingPts.removeFrom(this.map);
        }
        if (this.map.hasLayer(programmingPts)) {
          programmingPts.removeFrom(this.map);
        }
        if (this.map.hasLayer(gisPts)) {
          gisPts.removeFrom(this.map);
        }
        gisPts = points;
        gisPts.addTo(this.map);
        this.zoomToLayer(gisPts);
      }
    });
    this.mapService.teachingMarkerSubject.subscribe((points) => {
      if (points) {
        if (this.map.hasLayer(gisPts)) {
          gisPts.removeFrom(this.map);
        }
        if (this.map.hasLayer(programmingPts)) {
          programmingPts.removeFrom(this.map);
        }
        if (this.map.hasLayer(teachingPts)) {
          teachingPts.removeFrom(this.map);
        }
        teachingPts = points;
        teachingPts.addTo(this.map);
        this.zoomToLayer(teachingPts);
      }
    });
    this.mapService.programmingMarkerSubject.subscribe((points) => {
      if (points) {
        if (this.map.hasLayer(gisPts)) {
          gisPts.removeFrom(this.map);
        }
        if (this.map.hasLayer(teachingPts)) {
          teachingPts.removeFrom(this.map);
        }
        if (this.map.hasLayer(programmingPts)) {
          programmingPts.removeFrom(this.map);
        }
        programmingPts = points;
        programmingPts.addTo(this.map);
        this.zoomToLayer(programmingPts);
      }
    });
  }
}
