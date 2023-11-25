import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ViewService {
  constructor() {}

  public homeSubject = new BehaviorSubject<any>(undefined);
  home$ = this.homeSubject.asObservable();
}
