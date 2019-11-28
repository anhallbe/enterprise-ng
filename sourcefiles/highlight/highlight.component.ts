import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { highlight } from 'highlight.js';

@Component({
  selector: 'app-highlight',
  templateUrl: './highlight.component.html',
  styleUrls: ['./highlight.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HighlightComponent implements OnInit {

  @Input() language: string;
  @Input() set content(content: string) {
    if (content) {
      this.highlighted = highlight(this.language, content).value;
    } else {
      this.highlighted = '';
    }
  }
  highlighted: string;

  constructor() { }

  ngOnInit() {
  }
}
