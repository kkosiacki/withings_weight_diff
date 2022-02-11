import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatSelectionList, MatSelectionListChange } from '@angular/material/list';
import { ActivatedRoute, Router } from '@angular/router';
import { WithingsAuthService, WithingsMeasurment } from 'src/app/components/withings-auth/withings-auth.service';

@Component({
  selector: 'app-withings-callback',
  template: `
    <p>
      {{ text }}
    </p>

  <mat-toolbar color="accent"><h1>{{result}}</h1></mat-toolbar>
  <mat-card>
  <mat-card-content>
  <mat-selection-list #ms (selectionChange)="selectionChange($event)">
    <mat-list-option [color]="measurment.getAttrib()==0 ? 'primary': 'warn'" *ngFor="let measurment of measurments" [value]="measurment">

    <h3 matLine> {{measurment.getValue()}} {{measurment.getAttrib()}} {{measurment.getAttrib()==0}}</h3>
    <p matLine>
      <span> <b>{{measurment.getCreated() | date:'d LLL h:mm'}}</b> </span>
    </p>
    </mat-list-option>
</mat-selection-list>
  </mat-card-content>
</mat-card>
<p>
  Options selected: {{ms.selectedOptions.selected.length}}
</p>
  `,
  styles: [],
})
export class WithingsCallbackComponent implements OnInit, AfterViewInit {
  public text: string = 'Getting token...';
  public measurments: WithingsMeasurment[] = [];
  public result: string = 'Zaznacz 2 pomiary';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private whithings: WithingsAuthService
  ) {}


  ngAfterViewInit(): void {
    //console.log(this.select);
  }

  selectionChange(event:MatSelectionListChange) {
    //console.log(event);
    let selected = event.source.selectedOptions.selected;
    if(selected.length != 2) {
      this.result = 'Zaznacz 2 pomiary';
    } else {
      this.result ="Wynik:" + Math.abs(selected[0].value.getValue() - selected[1].value.getValue()).toFixed(3);
    }
  }

  ngOnInit(): void {
    if (this.whithings.ifTokenPresent()) {
      this.loadingData();
    } else {
      this.route.queryParams.subscribe((t) => {
        if (t.code) {
          this.getToken(t.code);
        } else {
          this.text = 'No beuno - brak kodu.';
        }
      });
    }
  }
  loadingData() {
    this.text = 'Loading data....';
    this.whithings.getMeasurment().subscribe(t => {this.text = "";this.measurments = t; console.log(t)});


  }

  getToken(code: string) {
    this.whithings.getAuthorizationToken(code).subscribe((t) => {
      this.loadingData();
    });
  }
}
