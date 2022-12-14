import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

class TestClass {
  async testFunction() {
    console.log('Promise reject ========');
    return new Promise((reject) => {
      reject(
        new HttpErrorResponse({
          error: { error: { message: 'Internal Error' } },
        })
      );
    });
  }
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  async ngOnInit(): Promise<void> {
    const test = new TestClass();
    try {
      var response = await test.testFunction();
      console.log('in try', response);
    } catch (error) {
      console.log('in catch', error);
    }
  }
}
