import { Component, Input, ViewContainerRef } from '@angular/core';
import { SohoContextualActionPanelService } from 'ids-enterprise-ng';
import { InspectorDialogComponent } from '../inspector-dialog/inspector-dialog.component';

@Component({
  selector: 'app-inspector',
  templateUrl: './inspector.component.html',
  styleUrls: ['./inspector.component.css']
})
export class InspectorComponent {

  /**
   * Path to file, excluding extensions.
   * @example listview/listview
   */
  @Input() path: string;

  constructor(private capService: SohoContextualActionPanelService, private viewRef: ViewContainerRef) { }

  inspect() {
    const cap = this.capService.contextualactionpanel(InspectorDialogComponent, this.viewRef);
    cap.title(`Inspecting Sample ${this.path}`);
    cap.apply(component => {
      component.samplePath = this.path;
    });
    cap.modalSettings({ fullsize: 'responsive', breakpoint: 'phablet' });
    cap.buttons([{
      text: 'Close',
      cssClass: 'btn',
      icon: '#icon-close',
      click: () => {
        cap.close(true);
      },
      isDefault: true
    }]);
    cap.open();
  }
}
