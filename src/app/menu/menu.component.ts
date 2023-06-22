import {Component} from '@angular/core';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { DialogPizzaComponent } from '../dialogs/dialog-pizza/dialog-pizza.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],

})
export class MenuComponent {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(DialogPizzaComponent);
  }
}

