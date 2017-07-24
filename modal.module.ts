import {NgModule, NO_ERRORS_SCHEMA} from "@angular/core";
import {DeModal} from "./modal.component";
import {CommonModule} from "@angular/common";

@NgModule({
  imports:[CommonModule],
  declarations: [DeModal],
  schemas: [ NO_ERRORS_SCHEMA ],
  exports: [DeModal, CommonModule]
})

export class DeModalModule{}
