import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  numbers = [1, 2, 3, 4, 5];
  evenNumbers = [2,4];
  oddNumbers = [1,3,5];
  randomColor = ['blue','purple','red','pink']
  onlyOdd = false;
  highlightColor:string = '';
  valueNumber:number = 1;
  ngOnInit(){
      this.highlightColor = this.randomColor[Math.floor(Math.random() * 4)]
  }


}
