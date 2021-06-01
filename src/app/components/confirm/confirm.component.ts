import { Component } from '@angular/core';
import { SimpleModalComponent } from "ngx-simple-modal";
export interface ConfirmModel {
  personName:string;
  personAddress:string;
  personPhoneNumber:string;
  totalPrice:string;
  inscuprtionText:string;

}
@Component({
    selector: 'confirm',
    template: `
      <div class="modal-content">
        <div class="modal-header">
          <h4>Your Contact Informations</h4>
        </div>
        <div class="modal-body">
          <!-- name  -->
        <div class="row">
            <div class="col-6">
              <p>Your Name:</p>
            </div>
            <div class="col-6">
            <p>{{personName}}</p>
            </div>
          </div>
          <!-- address  -->
          <div class="row">
            <div class="col-6">
            <p>Your Address:</p>
            </div>
            <div class="col-6">
            <p>{{personAddress}}</p>
            </div>
          </div>
          <!-- PhoneNumber  -->
          <div class="row">
            <div class="col-6">
            <p>Your PhoneNumber:</p>
            </div>
            <div class="col-6">
            <p>{{personPhoneNumber}}</p>
            </div>
          </div>
          <!-- price  -->
          <div class="row">
            <div class="col-6">
            <p>Your TotalPrice:</p>
            </div>
            <div class="col-6">
            <p>{{totalPrice}}</p>
            </div>
          </div>
          <!-- text  -->
          <div class="row">
            <div class="col-6">
            <p>Your Inscruption Details:</p>
            </div>
            <div class="col-6">
            <p>{{inscuprtionText}}</p>
            </div>
          </div>

        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-danger" (click)="close()" >Cancel</button>
          <button type="button" class="btn btn-primary" (click)="confirm()">OK</button>
        </div>
      </div>
    `
})
export class ConfirmComponent extends SimpleModalComponent<ConfirmModel, boolean> implements ConfirmModel {
  personName:string;
  personAddress:string;
  personPhoneNumber:string;
  totalPrice:string;
  inscuprtionText:string;

  constructor() {
    super();
  }
  confirm() {
    // we set modal result as true on click on confirm button,
    // then we can get modal result from caller code
    this.result = true;
    this.close();
  }
}
