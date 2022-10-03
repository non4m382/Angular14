import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public age = 15;
  public traiCay = ['Táo', 'Nho', 'oo'];

  public traiCay2 = [
    {ten: 'Táo', gia: 12, haGia: true},
    {ten: 'Nho', gia: 15, haGia: false},
    {ten: 'Cam', gia: 34.5, haGia: false},
    {ten: 'Quýt', gia: -44, haGia: true},
  ]

  constructor() { }

  ngOnInit(): void {
    console.log('trai cay = ', this.traiCay);
  }

}
