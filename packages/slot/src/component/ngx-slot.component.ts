import { Component } from "@angular/core";
import { useSlotContext } from "../provider/slot.provider";
const {
  injectSlotConfig
} = useSlotContext();

@Component({
  selector: 'lib-ngx-slot',
  standalone: true,
  imports: [],
  templateUrl: './ngx-slot.component.html',
  styleUrl: './ngx-slot.component.scss',
  providers: [
  ]
})
export class NgxSlotComponent {
  protected readonly config = injectSlotConfig();
  constructor() {
    console.log(this.config)
  }
}