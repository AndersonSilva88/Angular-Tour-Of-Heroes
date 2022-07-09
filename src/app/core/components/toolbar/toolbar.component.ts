import { MenuItem } from './../../moldels/menu-item.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent{

  @Input() title = '';
  @Input() menuItems: MenuItem[] = [];


}
