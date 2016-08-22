import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  HostBinding,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';

import {
  TabsEvent
  // TABS_LIST_COMPONENTS
} from '../../components';
import {
  SohoToolbarComponent,
} from '../toolbar';
// import { SohoHeaderRefService } from './header-ref.service';
// import { SohoTabsComponent } from '../tabs';

@Component({
  selector: 'soho-header',
  templateUrl: 'header.component.html'
  // directives: [ TABS_LIST_COMPONENTS ]
})
export class SohoHeaderComponent implements AfterViewInit, OnInit {
  @HostBinding('class.header') get isHeader() { return true; }
  @HostBinding('class.is-personalizable') get isPersonalizable() { return true; };

  @HostBinding('class.has-toolbar') get hasHeaderToolbar() { return !!this.sohoToolbarComponent; };
  // @HostBinding('class.has-tabs') get hasHeaderTabs() { return this.showHeaderTabs; };

  /**
   * use a template variable to find the toolbar element.
   * that way the component user can ptu whatever markup in the
   * header toolbar they want.
   */
  @ViewChild('sohoHeaderToolbar') sohoToolbarComponent: SohoToolbarComponent;

  /**
   * This event is fired when the status of the header is changed.
   * @type {EventEmitter<any>}
   */
  @Output() updated = new EventEmitter<any>();

  /**
   * This event is fired when the status of the header is changed.
   * @type {EventEmitter<TabsEvent>}
   */
  @Output() tabActivated = new EventEmitter<TabsEvent>();

  // Reference to the jQuery element.
  private jQueryElement: any;

  // Reference to the annotated SoHoXi control
  private header: any;

  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    // this.headerRef.instance = this;
  }

  ngAfterViewInit() {
    // Wrap for later.
    this.jQueryElement = jQuery(this.elementRef.nativeElement);

    // Initialise the SoHoXi control.
    this.jQueryElement.header();

    // Once the control is initialised, extract the control
    // plug-in from the element.  The element name is
    // defined by the plug-in, but in this case is 'sohoxiHeader'.
    this.header = this.jQueryElement.data('header');

    // Initialize any event handlers.
    this.jQueryElement.on('updated', (e: any, args: any) => { this.updated.emit(args); });
  }

  onTabActivated(tabEvent: TabsEvent) { this.tabActivated.emit(tabEvent); }

  // onToolbarButtonClicked(toolbarButtonEvent:ToolbarButtonEvent)
  // {
  //   this.console.log(["@BannerHeaderComponent -> onToolbarButtonClicked -> ", toolbarButtonEvent.buttonSpec]);
  //   this.toolbarButtonClicked.emit(toolbarButtonEvent);
  // }
  //
  // onToolbarMenuItemClicked(toolbarMenuItemEvent:ToolbarMenuItemEvent)
  // {
  //   this.console.log(["@BannerHeaderComponent -> onToolbarMenuItemClicked -> Id:", toolbarMenuItemEvent]);
  //   this.toolbarMenuItemClicked.emit(toolbarMenuItemEvent);
  // }
}
