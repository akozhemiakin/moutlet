import {ViewContainerRef, TemplateRef} from "angular2/core";

export interface AuxOutletRef {
  name: string
  viewContainer: ViewContainerRef
  data: TemplateRef
}
