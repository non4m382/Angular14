import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public age = 15;
  public traiCay = ['Táo', 'Nho', 'oo'];

  public traiCay2 = [
    { ten: 'Táo', gia: 12, haGia: true },
    { ten: 'Nho', gia: 15, haGia: false },
    { ten: 'Cam', gia: 34.5, haGia: false },
    { ten: 'Quýt', gia: -44, haGia: true },
  ];

  public vietNam = [
    {
      city: 'Chon thanh pho',
      district: ['Quan/Huyen'],
    },

    {
      city: 'An Giang',
      district: ['Quan Hoan Nam', 'Quan Cau Quan', 'Quan Ba Doan',],
    },
    {
      city: 'Ha Noi',
      district: ['Quan My Dinh 1', 'Quan Cau Giay', 'Quan Hai Ba Trung', 'Ho',],
    },
  ];

  public districts: string[] = [];

  constructor() { }

  ngOnInit(): void {
    console.log('trai cay = ', this.traiCay);
    console.log('cities = ', this.vietNam);
    this.districts = this.vietNam[0].district;
  }

  public changeCity(event: any) {
    const city = event.target.value.trim();

    if (!city) {
      return;
    }

    //Cách 1
    // console.log('event:', city);
    // const search = this.vietNam.filter(data => data.city === city);
    // console.log('search', search);
    // // this.districts = search;
    // if (search && search.length > 0) {
    //   this.districts = search[0].district;
    // }

    //Cách 2
    this.districts = this.vietNam.filter((data) => data.city === city)[0]?.district || [];
  }
}
