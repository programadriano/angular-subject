import { Component } from '@angular/core';
import { MessageService } from '../../service/message.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(public messageService:MessageService) { }
  setMessage(event) {
    console.log(event.value);
    this.messageService.setMessage(event.value);
  }
}
