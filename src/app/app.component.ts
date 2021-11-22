import { MyLibService } from 'my-lib';
import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'main-project';
  constructor(private myLibService: MyLibService) {}

  ngOnInit() {
    console.log(this.myLibService.getNameService())
  }


}
