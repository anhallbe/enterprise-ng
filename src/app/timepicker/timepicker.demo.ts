import {
  Component,
  OnInit,
  ViewChild
} from '@angular/core';

// @ts-ignore
import { SohoTimePickerComponent } from 'ids-enterprise-ng';

@Component({
  selector: 'app-timepicker-demo',
  templateUrl: 'timepicker.demo.html',
})
export class TimePickerDemoComponent implements OnInit {

  @ViewChild(SohoTimePickerComponent, { static: true }) timepicker?: SohoTimePickerComponent;

  public model = { // tslint:disable-line
    hhmm: '1:23 PM',
    hhmmss: '1:23:43 PM',
    HHmm24: '17:50'
  };
  public showModel = false;
  public timepickerDisabled = false;
  public timepickerReadOnly = false;

  constructor() { }

  ngOnInit() { }

  toggleModel() {
    this.showModel = !this.showModel;
  }

  onChange(_event: Event) {
    console.log('TimepickerDemoComponent.onChange');
  }

  setEnable() {
    (this.timepicker as any).disabled = false;
    this.timepickerDisabled = this.timepicker?.disabled;
    this.timepickerReadOnly = this.timepicker?.readonly;
  }

  setDisable() {
    (this.timepicker as any).disabled = true;
    this.timepickerDisabled = this.timepicker?.disabled;
  }

  setReadonly() {
    (this.timepicker as any).readonly = true;
    this.timepickerReadOnly = this.timepicker?.readonly;
  }
}
