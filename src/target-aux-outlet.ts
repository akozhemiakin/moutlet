import {Directive} from "angular2/core";
import {ViewContainerRef} from "angular2/core";
import {TemplateRef} from "angular2/core";
import {OnInit} from "angular2/core";
import {OnDestroy} from "angular2/core";
import {MOutletService} from "./moutlet-service";

@Directive({
  selector: '[target-aux-outlet]',
  inputs: ['targetOutlet: target-aux-outlet']
})
export class TargetAuxOutlet implements OnInit, OnDestroy {
  private _targetOutletName: string;

  set targetOutlet(targetOutlet: string) {
    this._targetOutletName = targetOutlet;
  }

  constructor(private _templateRef: TemplateRef,
              private _moutletService: MOutletService) {
  }

  ngOnInit() {
    this._moutletService.attachData(this._targetOutletName, this._templateRef);
  }

  ngOnDestroy() {
    this._moutletService.clearRegion(this._targetOutletName);
  }
}
