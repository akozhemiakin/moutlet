import {Directive} from "angular2/core";
import {ViewContainerRef} from "angular2/core";
import {TemplateRef} from "angular2/core";
import {MOutletService} from "./moutlet-service";
import {OnInit, OnDestroy} from "angular2/core";

@Directive({
  selector: 'aux-outlet',
  inputs: ['auxOutlet: name']
})
export class AuxOutlet implements OnInit, OnDestroy {
  private auxOutletName: string;

  constructor(private _viewContainer: ViewContainerRef,
              private _regionsManager: MOutletService) {
  }

  set auxOutlet(auxOutlet: string) {
    this.auxOutletName = auxOutlet;
  }

  ngOnInit() {
    this._regionsManager.addRegion({
      name: this.auxOutletName,
      viewContainer: this._viewContainer,
      data: null
    })
  }

  ngOnDestroy() {
    this._regionsManager.removeRegion(this.auxOutletName)
  }
}
