import { Injectable } from "@angular/core";
import * as L from "leaflet";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class MapService {
  constructor() {}

  public nullPoints;

  public gisPoints;
  public teachingPoints;
  public programmingPoints;
  public defaultPoints;

  public gisMarkerSubject = new BehaviorSubject<any>(undefined);
  gisMarker$ = this.gisMarkerSubject.asObservable();

  public teachingMarkerSubject = new BehaviorSubject<any>(undefined);
  teachingMarker$ = this.teachingMarkerSubject.asObservable();

  public programmingMarkerSubject = new BehaviorSubject<any>(undefined);
  programmingMarker$ = this.programmingMarkerSubject.asObservable();

  public defaultMarkerSubject = new BehaviorSubject<any>(undefined);
  defaultMarker$ = this.programmingMarkerSubject.asObservable();

  public resetSubject = new BehaviorSubject<any>(undefined);
  reset$ = this.resetSubject.asObservable();

  public originalExtentSubject = new BehaviorSubject<any>(undefined);
  originalExtent$ = this.originalExtentSubject.asObservable();

  public createMapPoints(category, filterCode) {
    let newFilterCode = filterCode;
    this.nullPoints = L.markerClusterGroup({
      showCoverageOnHover: false,
      maxClusterRadius: 40,
      spiderfyOnMaxZoom: false,
      iconCreateFunction: function (cluster) {
        var markers = cluster.getAllChildMarkers();
        var html =
          '<div style="text-align: center; margin-top: 7px; color: gray">' +
          markers.length +
          "</div>";
        return L.divIcon({
          html: html,
          className: "clusterMarkerIcon",
          iconSize: L.point(32, 32),
        });
      },
    });

    this.gisPoints = L.markerClusterGroup({
      showCoverageOnHover: false,
      maxClusterRadius: 40,
      spiderfyOnMaxZoom: true,
      iconCreateFunction: function (cluster) {
        var markers = cluster.getAllChildMarkers();
        var html =
          '<div style="text-align: center; margin-top: 7px; color: gray">' +
          markers.length +
          "</div>";
        return L.divIcon({
          html: html,
          className: "clusterMarkerIcon",
          iconSize: L.point(32, 32),
        });
      },
    });
    this.teachingPoints = L.markerClusterGroup({
      showCoverageOnHover: false,
      maxClusterRadius: 40,
      spiderfyOnMaxZoom: true,
      iconCreateFunction: function (cluster) {
        var markers = cluster.getAllChildMarkers();
        var html =
          '<div style="text-align: center; margin-top: 7px; color: gray">' +
          markers.length +
          "</div>";
        return L.divIcon({
          html: html,
          className: "clusterMarkerIcon",
          iconSize: L.point(32, 32),
        });
      },
    });
    this.programmingPoints = L.markerClusterGroup({
      showCoverageOnHover: false,
      maxClusterRadius: 40,
      spiderfyOnMaxZoom: true,
      iconCreateFunction: function (cluster) {
        var markers = cluster.getAllChildMarkers();
        var html =
          '<div style="text-align: center; margin-top: 7px; color: gray">' +
          markers.length +
          "</div>";
        return L.divIcon({
          html: html,
          className: "clusterMarkerIcon",
          iconSize: L.point(32, 32),
        });
      },
    });
    this.defaultPoints = L.markerClusterGroup({
      showCoverageOnHover: false,
      maxClusterRadius: 40,
      spiderfyOnMaxZoom: true,
      iconCreateFunction: function (cluster) {
        var markers = cluster.getAllChildMarkers();
        var html =
          '<div style="text-align: center; margin-top: 7px; color: gray">' +
          markers.length +
          "</div>";
        return L.divIcon({
          html: html,
          className: "clusterMarkerIcon",
          iconSize: L.point(32, 32),
        });
      },
    });

    let defaultPtsJSON = [
      {
        lat: 44.45880383625564,
        lng: -93.15033654477226,
        code: "10101",
        title: "Vice President - Outdoor Club",
        org: "Carleton College",
        start_yr: 2013,
        end_yr: 2015,
        timeframe: "2013-2015 (2 years)",
        location: "Northfield, MN",
        summary:
          "I organized a Wilderness First Responder course, planned events, and led 13 outdoor adventure trips, including a two-week trip to Canyonlands National Park.",
      },
      {
        lat: 44.97193281344055,
        lng: -93.24230085607985,
        code: "10001",
        title: "Teaching Assistant",
        start_yr: 2014,
        end_yr: 2015,
        timeframe: "Fall Semester 2017 & 2018",
        org: "University of Minnesota",
        location: "Minneapolis, MN",
        summary:
          "Weather and Climate TA for two semesters. Taught lab section, graded assignments, held office hours.",
      },
      {
        lat: 44.462481251068304,
        lng: -93.15289502625866,
        code: "10000",
        title: "Teaching Assistant",
        start_yr: 2014,
        end_yr: 2015,
        timeframe: "Fall 2013 & Spring 2014",
        org: "Carleton College",
        location: "Northfield, MN",
        summary:
          "TA for two courses: Advanced Digital Photography and The Digital Landscape. Oversaw open studio time in the photography darkroom and taught Photoshop.",
      },
      {
        lat: 44.98440079580572,
        lng: -93.23199693950936,
        code: "01011",
        title: "Outdoor Leader",
        start_yr: 2015,
        end_yr: 2021,
        org: "Wilderness Inquiry",
        timeframe: "Oct 2015-Nov 2016 & May 2017",
        location: "Minneapolis, MN",
        summary:
          "Facilitated outdoor education programming to over 6,400 participants</li><li>Specialized in programming for individuals with physical and cognitive disabilities</li><li>Traveled with a mobile outdoor education team to lead workshops in Texas, Michigan, Indiana, Illinois, and northern Minnesota",
      },
      {
        lat: 35.59487148667909,
        lng: -82.55368670429266,
        code: "01011",
        title: "Co-founder",
        start_yr: 2016,
        end_yr: 2021,
        org: "Destination SPACE",
        timeframe:
          "Feb 2017-Sept 2020 (active) & Oct 2020-Present (occasional)",
        location: "Asheville, NC",
        summary:
          "I helped develop a 501(c)(3) dedicated to aerospace education, with an emphasis on serving high school students in the southern U.S. from backgrounds underrepresented in the aerospace field.",
      },
      {
        lat: 34.052235,
        lng: -118.243683,
        code: "01000",
        title: "Curriculum Developer",
        start_yr: 2020,
        end_yr: 2020,
        org: "Aerospace Corporation",
        timeframe: "March-July 2020",
        location: "Los Angeles, CA",
        summary:
          "As part of my work with Destination SPACE, I co-developed a week-long aerospace education program for high school students with Aerospace Corporation. I was able to adapt our in-person curriculum to remote format due to the pandemic.",
      },
      {
        lat: 46.78141841676485,
        lng: -92.09817397618207,
        code: "00001",
        title: "Presenter",
        start_yr: 2018,
        end_yr: 2018,
        org: "GIS/LIS Conference",
        timeframe: "Oct 2018",
        location: "Duluth, MN",
        summary:
          "Presented my research on the ecosystem services of groundwater dependent ecosystems in California.",
      },
      {
        lat: 33.94887138080666,
        lng: -118.3853692620103,
        code: "01001",
        title: "Presenter, Student Mentor",
        start_yr: 2018,
        end_yr: 2019,
        org: "Ground Systems Architectures Workshop",
        timeframe: "March 2019 & 2020",
        location: "Los Angeles, CA",
        summary:
          "Took high school students (2 in 2019, 4 in 2020) from Destination SPACE to present their work at an Aerospace Corporation conference.",
      },
      {
        lat: 44.32221144769152,
        lng: -93.97257503072639,
        code: "00001",
        title: "Presenter",
        start_yr: 2018,
        end_yr: 2019,
        org: "Midwest Soil Health Summit",
        timeframe: "March 2019",
        location: "St. Peter, MN",
        summary:
          "I was a research assistant with the Sustainable Farming Association of Minnesota (SFA) for one semester. I interviewed 11 farmers on their soil health practices and designed and wrote <a href='https://conservancy.umn.edu/handle/11299/201784' target='_blank'>a booklet</a> of case studies. I gave an opening talk at SFA's conference.",
      },
      {
        lat: 44.97397451137845,
        lng: -93.23735723880448,
        code: "01001",
        title: "Presenter",
        start_yr: 2017,
        end_yr: 2017,
        org: "Academic High Altitude Conference",
        timeframe: "Sept 2017",
        location: "Minneapolis, MN",
        summary:
          "I presented on my experience incorporating weather balloon launches into a high school education program and wrote <a target='_blank' href='https://www.iastatedigitalpress.com/ahac/article/id/3457/'>a manuscript</a> for the conference proceedings.",
      },
      {
        lat: 45.09534971486348,
        lng: -93.19810548679685,
        code: "11111",
        title: "Software Developer",
        start_yr: 2017,
        end_yr: 2019,
        org: "U.S. Geological Survey",
        timeframe: "Aug 2019-Present",
        location: "Mounds View, MN",
        summary:
          "I started off as a GIS contractor, where I queried data to estimate water use in Minnesota and used raster data to model wetland restoration suitability along the Great Lakes. <br><br> I now work with the Web Informatics and Mapping team, where I develop web apps. <br><br>I use JavaScript/TypeScript and Git on a daily basis, and I occasionally use Python, R, and ArcGIS.",
      },
      {
        lat: 44.46134378859479,
        lng: -93.15608689040835,
        code: "10000",
        title: "B.A. Environmental Studies",
        start_yr: 2014,
        end_yr: 2015,
        org: "Carleton College",
        timeframe: "Sept 2011-June 2015",
        location: "Northfield, MN",
        summary:
          "Related coursework: Introduction to Computer Science (Python), Introduction to GIS (ArcGIS), Remote Sensing of the Environment (TerrSet), Landscape Ecology (ArcGIS).",
      },
      {
        lat: 44.983925982195565,
        lng: -93.18220322894213,
        code: "10111000",
        title: "Intern",
        start_yr: 2014,
        end_yr: 2014,
        org: "Natural Capital Project",
        timeframe: "Summer 2014 (8 weeks)",
        location: "St. Paul, MN",
        summary:
          "I ran spatial water quality and soil health models using InVEST software and created maps in ArcGIS.",
      },
      {
        lat: 44.462519537616174,
        lng: -93.15371041756312,
        code: "10111000",
        title: "Senior Thesis",
        start_yr: 2014,
        end_yr: 2015,
        org: "Carleton College",
        timeframe: "Sept 2014-April 2015",
        location: "Northfield, MN",
        summary:
          "<a target='_blank' href='https://digitalcommons.carleton.edu/comps/2190/'>Modeled the impact</a> of land use change on lake phosphorus concentrations in Dakota County, MN using ArcMap, FRAGSTATS, and iTree Hydro.",
      },
      {
        lat: 44.983925982195565,
        lng: -93.18220322894213,
        code: "10111000",
        title: "Research Assistant",
        start_yr: 2018,
        end_yr: 2019,
        org: "Global Water Initiative",
        location: "St. Paul, MN",
        timeframe: "Jan-Sept 2018 & Jan-May 2019",
        summary:
          "I conducted a spatial analysis of the ecosystem services of groundwater dependent ecosystems in California. These analyses were based on an in-depth literature review of ecosystem services that rely on groundwater.",
      },
      {
        lat: 44.977236584790234,
        lng: -93.25101087312339,
        code: "10111000",
        title: "Independent Contractor",
        start_yr: 2015,
        end_yr: 2016,
        location: "Minneapolis, MN",
        org: "The Nature Conservancy",
        timeframe: "Oct 2015-Jan 2016",
        summary:
          "Estimated the impact of agricultural practices on nutrient exports through spatial modeling.",
      },
      {
        lat: 44.46184426540637,
        lng: -93.15247665355275,
        code: "10010000",
        title: "GIS Lab Assistant",
        start_yr: 2013,
        end_yr: 2015,
        org: "Carleton College",
        timeframe: "2013-2015",
        location: "Northfield, MN",
        summary:
          "I assisted professors' research by editing metadata in ArcCatalog and digitizing features in ArcMap.",
      },
      {
        lat: 44.9718461978676,
        lng: -93.2434756265064,
        code: "10111110",
        title: "Master of Geographic Information Science",
        start_yr: 2017,
        end_yr: 2019,
        org: "University of Minnesota",
        timeframe: "Sept 2017-May 2019",
        location: "Minneapolis, MN",
        summary:
          "<div>Selected courses: <ul><li>Geodesy</li><li>Remote Sensing I & II</li><li>ArcGIS I & II</li><li>Drones</li><li>Geocomputing I & II</li><li>Spatial Computing</li><li>CyberGIS</li></ul></div>",
      },
      {
        lat: 36.975935,
        lng: -82.575711,
        code: "10101000",
        title: "Independent Contractor",
        start_yr: 2016,
        end_yr: 2016,
        org: "NASA DEVELOP",
        location: "Wise, VA",
        timeframe: "Winter 2016 (10 weeks)",
        summary:
          "I used ArcMap and MATLAB to correlate atmospheric variables with the presence of storm-producing clouds.",
      },
      {
        lat: 35.593986910283434,
        lng: -82.55815605079327,
        code: "11101000",
        title: "Independent Contractor",
        start_yr: 2017,
        end_yr: 2021,
        org: "NASA DEVELOP",
        location: "Asheville, NC",
        timeframe: "Winter 2017 (10 weeks)",
        summary:
          "I worked with a team to develop a near real-time map of wildland fire risk in the Missouri River Basin.",
      },
    ];

    let teachingJSON = [
      {
        lat: 44.45880383625564,
        lng: -93.15033654477226,
        code: "10101",
        title: "Vice President - Outdoor Club",
        org: "Carleton College",
        start_yr: 2013,
        end_yr: 2015,
        timeframe: "2013-2015 (2 years)",
        location: "Northfield, MN",
        summary:
          "I organized a Wilderness First Responder course, planned events, and led 13 outdoor adventure trips, including a two-week trip to Canyonlands National Park.",
      },
      {
        lat: 44.97193281344055,
        lng: -93.24230085607985,
        code: "10001",
        title: "Teaching Assistant",
        start_yr: 2014,
        end_yr: 2015,
        timeframe: "Fall Semester 2017 & 2018",
        org: "University of Minnesota",
        location: "Minneapolis, MN",
        summary:
          "Weather and Climate TA for two semesters. Taught lab section, graded assignments, held office hours.",
      },
      {
        lat: 44.462481251068304,
        lng: -93.15289502625866,
        code: "10000",
        title: "Teaching Assistant",
        start_yr: 2014,
        end_yr: 2015,
        timeframe: "Fall 2013 & Spring 2014",
        org: "Carleton College",
        location: "Northfield, MN",
        summary:
          "TA for two courses: Advanced Digital Photography and The Digital Landscape. Oversaw open studio time in the photography darkroom and taught Photoshop.",
      },
      {
        lat: 44.98440079580572,
        lng: -93.23199693950936,
        code: "01011",
        title: "Outdoor Leader",
        start_yr: 2015,
        end_yr: 2021,
        org: "Wilderness Inquiry",
        timeframe: "Oct 2015-Nov 2016 & May 2017",
        location: "Minneapolis, MN",
        summary:
          "Facilitated outdoor education programming to over 6,400 participants</li><li>Specialized in programming for individuals with physical and cognitive disabilities</li><li>Traveled with a mobile outdoor education team to lead workshops in Texas, Michigan, Indiana, Illinois, and northern Minnesota",
      },
      {
        lat: 35.59487148667909,
        lng: -82.55368670429266,
        code: "01011",
        title: "Co-founder",
        start_yr: 2016,
        end_yr: 2021,
        org: "Destination SPACE",
        timeframe:
          "Feb 2017-Sept 2020 (active) & Oct 2020-Present (occasional)",
        location: "Asheville, NC",
        summary:
          "I helped develop a 501(c)(3) dedicated to aerospace education, with an emphasis on serving high school students in the southern U.S. from backgrounds underrepresented in the aerospace field.",
      },
      {
        lat: 34.052235,
        lng: -118.243683,
        code: "01000",
        title: "Curriculum Developer",
        start_yr: 2020,
        end_yr: 2020,
        org: "Aerospace Corporation",
        timeframe: "March-July 2020",
        location: "Los Angeles, CA",
        summary:
          "As part of my work with Destination SPACE, I co-developed a week-long aerospace education program for high school students with Aerospace Corporation. I was able to adapt our in-person curriculum to remote format due to the pandemic.",
      },
      {
        lat: 46.78141841676485,
        lng: -92.09817397618207,
        code: "00001",
        title: "Presenter",
        start_yr: 2018,
        end_yr: 2018,
        org: "GIS/LIS Conference",
        timeframe: "Oct 2018",
        location: "Duluth, MN",
        summary:
          "Presented my research on the ecosystem services of groundwater dependent ecosystems in California.",
      },
      {
        lat: 33.94887138080666,
        lng: -118.3853692620103,
        code: "01001",
        title: "Presenter, Student Mentor",
        start_yr: 2018,
        end_yr: 2019,
        org: "Ground Systems Architectures Workshop",
        timeframe: "March 2019 & 2020",
        location: "Los Angeles, CA",
        summary:
          "Took high school students (2 in 2019, 4 in 2020) from Destination SPACE to present their work at an Aerospace Corporation conference.",
      },
      {
        lat: 44.32221144769152,
        lng: -93.97257503072639,
        code: "00001",
        title: "Presenter",
        start_yr: 2018,
        end_yr: 2019,
        org: "Midwest Soil Health Summit",
        timeframe: "March 2019",
        location: "St. Peter, MN",
        summary:
          "I was a research assistant with the Sustainable Farming Association of Minnesota (SFA) for one semester. I interviewed 11 farmers on their soil health practices and designed and wrote <a href='https://conservancy.umn.edu/handle/11299/201784' target='_blank'>a booklet</a> of case studies. I gave an opening talk at SFA's conference.",
      },
      {
        lat: 44.97397451137845,
        lng: -93.23735723880448,
        code: "01001",
        title: "Presenter",
        start_yr: 2017,
        end_yr: 2017,
        org: "Academic High Altitude Conference",
        timeframe: "Sept 2017",
        location: "Minneapolis, MN",
        summary:
          "I presented on my experience incorporating weather balloon launches into a high school education program and wrote <a target='_blank' href='https://www.iastatedigitalpress.com/ahac/article/id/3457/'>a manuscript</a> for the conference proceedings.",
      },
    ];
    let programmingJSON = [
      {
        lat: 45.09534971486348,
        lng: -93.19810548679685,
        code: "11111",
        title: "Software Developer",
        start_yr: 2017,
        end_yr: 2019,
        org: "U.S. Geological Survey",
        timeframe: "Aug 2019-Present",
        location: "Mounds View, MN",
        summary:
          "I started off as a GIS contractor, where I queried data to estimate water use in Minnesota and used raster data to model wetland restoration suitability along the Great Lakes. <br><br> I now work with the Web Informatics and Mapping team, where I develop web apps. <br><br>I use JavaScript/TypeScript and Git on a daily basis, and I occasionally use Python, R, and ArcGIS.",
      },
      {
        lat: 44.9718461978676,
        lng: -93.2434756265064,
        code: "10001",
        title: "Master of Geographic Information Science",
        start_yr: 2017,
        end_yr: 2019,
        org: "University of Minnesota",
        timeframe: "Sept 2017-May 2019",
        location: "Minneapolis, MN",
        summary:
          "Relevant courses: Spatial Computing (SQL), Geocomputing I & II (Python), CyberGIS (Python)",
      },
      {
        lat: 44.46134378859479,
        lng: -93.15608689040835,
        code: "10000",
        title: "B.A. Environmental Studies",
        start_yr: 2014,
        end_yr: 2015,
        org: "Carleton College",
        timeframe: "Sept 2011-June 2015",
        location: "Northfield, MN",
        summary:
          "Related coursework: Introduction to Computer Science (Python)",
      },
    ];
    let gisJSON = [
      {
        lat: 44.983925982195565,
        lng: -93.18220322894213,
        code: "10111000",
        title: "Intern",
        start_yr: 2014,
        end_yr: 2014,
        org: "Natural Capital Project",
        timeframe: "Summer 2014 (8 weeks)",
        location: "St. Paul, MN",
        summary:
          "I ran spatial water quality and soil health models using InVEST software and created maps in ArcGIS.",
      },
      {
        lat: 44.462519537616174,
        lng: -93.15371041756312,
        code: "10111000",
        title: "Senior Thesis",
        start_yr: 2014,
        end_yr: 2015,
        org: "Carleton College",
        timeframe: "Sept 2014-April 2015",
        location: "Northfield, MN",
        summary:
          "<a target='_blank' href='https://digitalcommons.carleton.edu/comps/2190/'>Modeled the impact</a> of land use change on lake phosphorus concentrations in Dakota County, MN using ArcMap, FRAGSTATS, and iTree Hydro.",
      },
      {
        lat: 44.46134378859479,
        lng: -93.15608689040835,
        code: "10111000",
        title: "B.A. Environmental Studies",
        start_yr: 2014,
        end_yr: 2015,
        org: "Carleton College",
        timeframe: "Sept 2011-June 2015",
        location: "Northfield, MN",
        summary:
          "Related coursework: Introduction to GIS (ArcGIS), Remote Sensing of the Environment (TerrSet), Landscape Ecology (ArcGIS).",
      },
      {
        lat: 44.983925982195565,
        lng: -93.18220322894213,
        code: "10111000",
        title: "Research Assistant",
        start_yr: 2018,
        end_yr: 2019,
        org: "Global Water Initiative",
        location: "St. Paul, MN",
        timeframe: "Jan-Sept 2018 & Jan-May 2019",
        summary:
          "I conducted a spatial analysis of the ecosystem services of groundwater dependent ecosystems in California. These analyses were based on an in-depth literature review of ecosystem services that rely on groundwater.",
      },
      {
        lat: 44.977236584790234,
        lng: -93.25101087312339,
        code: "10111000",
        title: "Independent Contractor",
        start_yr: 2015,
        end_yr: 2016,
        location: "Minneapolis, MN",
        org: "The Nature Conservancy",
        timeframe: "Oct 2015-Jan 2016",
        summary:
          "Estimated the impact of agricultural practices on nutrient exports through spatial modeling.",
      },
      {
        lat: 44.46184426540637,
        lng: -93.15247665355275,
        code: "10010000",
        title: "GIS Lab Assistant",
        start_yr: 2013,
        end_yr: 2015,
        org: "Carleton College",
        timeframe: "2013-2015",
        location: "Northfield, MN",
        summary:
          "I assisted professors' research by editing metadata in ArcCatalog and digitizing features in ArcMap.",
      },

      {
        lat: 35.59487148667909,
        lng: -82.55368670429266,
        code: "00110100",
        title: "Co-founder",
        start_yr: 2017,
        end_yr: 2021,
        org: "Destination SPACE",
        timeframe:
          "Feb 2017-Sept 2020 (active) & Oct 2020-Present (occasional)",
        location: "Asheville, NC",
        summary:
          "I helped develop a 501(c)(3) dedicated to aerospace education, with an emphasis on serving high school students in the southern U.S. from backgrounds underrepresented in the aerospace field.",
      },
      {
        lat: 44.9718461978676,
        lng: -93.2434756265064,
        code: "10111110",
        title: "Master of Geographic Information Science",
        start_yr: 2017,
        end_yr: 2019,
        org: "University of Minnesota",
        timeframe: "Sept 2017-May 2019",
        location: "Minneapolis, MN",
        summary:
          "<div>Selected courses: <ul><li>Geodesy</li><li>Remote Sensing I & II</li><li>ArcGIS I & II</li><li>Drones</li><li>Geocomputing I & II</li><li>Spatial Computing</li><li>CyberGIS</li></ul></div>",
      },
      {
        lat: 36.975935,
        lng: -82.575711,
        code: "10101000",
        title: "Independent Contractor",
        start_yr: 2016,
        end_yr: 2016,
        org: "NASA DEVELOP",
        location: "Wise, VA",
        timeframe: "Winter 2016 (10 weeks)",
        summary:
          "I used ArcMap and MATLAB to correlate atmospheric variables with the presence of storm-producing clouds.",
      },
      {
        lat: 35.593986910283434,
        lng: -82.55815605079327,
        code: "11101000",
        title: "Independent Contractor",
        start_yr: 2017,
        end_yr: 2021,
        org: "NASA DEVELOP",
        location: "Asheville, NC",
        timeframe: "Winter 2017 (10 weeks)",
        summary:
          "I worked with a team to develop a near real-time map of wildland fire risk in the Missouri River Basin.",
      },
    ];
    let kdJSON = {
      locations: [
        {
          lat: 38.544907,
          lng: -121.740517,
          title: "Davis High School",
          start_yr: 2008,
          end_yr: 2011,
          summary:
            "<div class='popupFont'><b>Davis High School,</b>Davis, CA<br/>_Co-founder: Cultural Exchange Club_ <hr>I helped develop a student exchange program between Davis High students and students at Xishan High School in Wuxi, China.</div>",
        },
      ],
    };

    /* for (let i = 0; i < gisJSON.length; i++) {
      let lat = gisJSON[i].lat;
      let lng = gisJSON[i].lng;
      let title = gisJSON[i].title;
      let summary = gisJSON[i].summary;
      L.marker([lat, lng], {
        icon: L.divIcon({
          className: "clusterMarkerIcon",
        }),
      })
        .bindPopup(summary, { maxWidth: 200, maxHeight: 200 })
        .addTo(this.gisPoints);
    } */

    if (category === "100") {
      this.createLayers(teachingJSON, this.teachingPoints, filterCode);
      this.teachingMarkerSubject.next(this.teachingPoints);

      //  this.gisMarkerSubject.next(this.nullPoints);
      //this.programmingMarkerSubject.next(this.nullPoints);
    }
    if (category === "010") {
      this.createLayers(gisJSON, this.gisPoints, filterCode);
      this.gisMarkerSubject.next(this.gisPoints);

      //  this.teachingMarkerSubject.next(this.nullPoints);
      // this.programmingMarkerSubject.next(this.nullPoints);
    }
    if (category === "001") {
      this.createLayers(programmingJSON, this.programmingPoints, filterCode);
      this.programmingMarkerSubject.next(this.programmingPoints);

      // this.gisMarkerSubject.next(this.nullPoints);
      // this.programmingMarkerSubject.next(this.nullPoints);
    }

    if (category === "111") {
      this.createAllPtsLayer(defaultPtsJSON, this.defaultPoints);
      this.defaultMarkerSubject.next(this.defaultPoints);
    }
  }

  public loadNullLayers() {
    this.teachingMarkerSubject.next(this.nullPoints);
    this.gisMarkerSubject.next(this.nullPoints);
    this.programmingMarkerSubject.next(this.nullPoints);
    this.defaultMarkerSubject.next(this.nullPoints);
  }

  public createAllPtsLayer(layerType, emptyLayer) {
    for (let i = 0; i < layerType.length; i++) {
      let currLayer = layerType[i];
      let lat = currLayer.lat;
      let lng = currLayer.lng;
      let summary = currLayer.summary;
      let content =
        "<div class='popupFont'><b>" +
        currLayer.org +
        "</b><br/><i>" +
        currLayer.title +
        "</i><br>" +
        currLayer.location +
        "<br>" +
        currLayer.timeframe +
        "<hr>" +
        summary +
        "</div>";

      L.marker([lat, lng], {
        icon: L.divIcon({
          className: "clusterMarkerIcon",
        }),
      })
        .bindPopup(content, { maxWidth: 300, maxHeight: 600 })
        .addTo(emptyLayer);
    }
  }

  public createLayers(layerType, emptyLayer, filterCode) {
    for (let i = 0; i < layerType.length; i++) {
      let currLayer = layerType[i];
      let lat = currLayer.lat;
      let lng = currLayer.lng;
      let code = currLayer.code;
      let summary = currLayer.summary;
      let content =
        "<div class='popupFont'><b>" +
        currLayer.org +
        "</b><br/><i>" +
        currLayer.title +
        "</i><br>" +
        currLayer.location +
        "<br>" +
        currLayer.timeframe +
        "<hr>" +
        summary +
        "</div>";

      for (let i = 0; i < filterCode.length; i++) {
        let index = filterCode[i];
        if (code[index] === "1") {
          L.marker([lat, lng], {
            icon: L.divIcon({
              className: "clusterMarkerIcon",
            }),
          })
            .bindPopup(content, { maxWidth: 300, maxHeight: 600 })
            .addTo(emptyLayer);
          // i = filterCode.length;
        }
      }
    }
  }
}
