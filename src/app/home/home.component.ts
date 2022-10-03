import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public age = 15;
  public traiCay = ['Táo', 'Nho', 'oo'];

  constructor() { }

  ngOnInit(): void {
    console.log('trai cay = ', this.traiCay);
  }

}
