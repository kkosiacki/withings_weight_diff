import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { WithingsAuthService } from './withings-auth.service';

@Component({
  selector: 'app-withings-auth',
  template: `
    <form *ngIf="!isConnected" #form ngNoForm action="{{withingsUrl}}" method="get">
   <input type="hidden" name="response_type" value="code">
   <input type="hidden" name="client_id" value="{{clientId}}">
   <input type="hidden" name="scope" value="user.metrics">
   <input type="hidden" name="state" value="abc123">
   <input type="hidden" name="redirect_uri" value="{{callbackUrl}}">

   <button mat-flat-button type="submit" color="primary">
     <span>Connect with your Withings Account</span>
     <mat-progress-bar *ngIf="showProgress" color="warn" mode="indeterminate">
  </mat-progress-bar>
   </button>
 </form>
   <button *ngIf="isConnected" mat-flat-button  routerLink="/withings" color="primary">Get data from your Withings account</button>

  `,
  styles: [
  ]
})
export class WithingsAuthComponent implements OnInit {

  public isConnected:boolean = false;
  public showProgress:boolean = false;
  public clientId:string = environment.client_id;
  public withingsUrl:string = environment.withings_auth_url
  public callbackUrl:string = environment.redirect_url;

  constructor(private withingsAuthService:WithingsAuthService) {
        this.withingsAuthService.connected.subscribe(t => this.isConnected = t);
        this.withingsAuthService.checkConnection();
   }

  ngOnInit(): void {
  }

}
