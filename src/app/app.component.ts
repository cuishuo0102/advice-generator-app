import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Slip } from './slip';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private http: HttpClient) {}

  num = 117;
  content = 'It is easy to sit up and take notice, what\'s difficult is getting up and taking action.';

  nextAdvice() {
    this.http.get<{ slip: Slip }>('https://api.adviceslip.com/advice')
      .subscribe((data) => {
        this.num = data.slip.id;
        this.content = data.slip.advice;
      })
  }

  ngOnInit() {
    this.nextAdvice();
  }
}
