import {Injectable} from "angular2/core";
import {AuxOutletRef} from "./moutlet-util";
import {TemplateRef} from "angular2/core";

@Injectable()
export class MOutletService {
  private _regions: Array<AuxOutletRef> = [];

  addRegion(region: AuxOutletRef) {
    this._regions.push(region);
  }

  removeRegion(name: string) {
    let i = this._regions.findIndex((el) => el.name === name);
    if (i !== -1) {
      this._regions.splice(i, 1)
    }
  }

  attachData(regionName: string, data: TemplateRef) {
    let region: AuxOutletRef = this._regions.find(x => x.name === regionName);
    if (region) {
      region.data = data;
      region.viewContainer.createEmbeddedView(data)
    }
  }

  clearRegion(regionName: string) {
    let region: AuxOutletRef = this._regions.find(x => x.name === regionName);
    if (region) {
      region.data = null;
      region.viewContainer.clear()
    }
  }
}
