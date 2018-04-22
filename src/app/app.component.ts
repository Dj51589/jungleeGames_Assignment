import { Component } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';
import { MessageService } from './message.service';

declare var $ :any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Junglee Games';

  constructor(private router: Router, private messageService: MessageService) {
    router.events.subscribe((val) => {
        this.messageService.clear();
    });
  }

  ngOnInit() {
  }

}
