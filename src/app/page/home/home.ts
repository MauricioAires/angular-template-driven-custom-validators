import {
  Component,
  contentChild,
  ViewChild,
  viewChild,
  viewChildren,
  ViewContainerRef,
} from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { StartsWithValidator } from '../../shared/validators/starts-with.validator';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [FormsModule, StartsWithValidator, JsonPipe],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  // Ref's
  @ViewChild('form', {
    static: true,
  })
  private form!: NgForm;
  // Properties
  protected startWithInput = '';

  protected printForm(): void {
    console.log(this.form);
  }
}
