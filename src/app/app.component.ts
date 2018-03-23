import { Component } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { MessageService } from './service/message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  message: string;
  subscription: Subscription;
  constructor(public messageService: MessageService) { }
  ngOnInit() {
    this.subscription = this.messageService.message.subscribe(
      (message) => {
        this.message = message;
      }
    );
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
