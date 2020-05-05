import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private helloWorldService: WelcomeDataService
  ) { }

  userName = ''
  messageResponse:string

  ngOnInit(): void {

    this.userName = this.route.snapshot.params['name']
  }

  getWelcomeMessage() {

    this.helloWorldService.getHelloWorldService().subscribe(
      response => this.printResponse(response)
    );

  }


  printResponse(response) {
    this.messageResponse = response.message;
  }
}
