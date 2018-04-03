import {
  Component,
  OnInit,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'soho-line-demo',
  templateUrl: './line.demo.html',
})
export class LineDemoComponent implements OnInit {

  public lineData = [{
    data: [
      {name: 'Jan | 2018', value: 12, depth: 4},
      {name: 'Jan | 2018', value: 11},
      {name: 'Jan | 2018', value: 14},
      {name: 'Jan | 2018', value: 10},
      {name: 'Jan | 2018', value: 14},
      {name: 'Jan | 2018', value: 8}
    ],
    name: 'Component A',
    id: '1'
  }, {
    data: [
      {name: 'Jan', value: 22},
      {name: 'Feb', value: 21},
      {name: 'Mar', value: 24},
      {name: 'Apr', value: 20},
      {name: 'May', value: 24},
      {name: 'Jun', value: 28}
    ],
    name: 'Component B',
    id: '2'
  }, {
    data: [
      {name: 'Jan', value: 32},
      {name: 'Feb', value: 31},
      {name: 'Mar', value: 34},
      {name: 'Apr', value: 30},
      {name: 'May', value: 34},
      {name: 'Jun', value: 38}
    ],
    name: 'Component C',
    id: '3'
  }];

  constructor() {}

  public xAxis: {};

  ngOnInit() {
    this.xAxis = {
      formatText: function (d) {
        const text = d.split('|');
        let markup = '';
        text.map(function (mapText, i) {
          markup += '<tspan x="0" dy="' + ((i + 1) * .55) + 'em">' + mapText.replace('|', ' ') + '</tspan>';
        });
        return markup;
      }
    };
  }

}
