import { Component, OnInit, ViewChild } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { DataSource } from '@angular/cdk/collections';
import {MatPaginator,MatTableDataSource} from '@angular/material';
// Table Data for Negotiated Tab Starts
export interface PeriodicElement {
  ratecode: string;
  seq: string;
  startselldate: String;
  endselldate: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {seq: "1", ratecode: 'MICROS', startselldate: "2018-07-04", endselldate: '2018-07-05'},
  {seq: "2", ratecode: 'WHL', startselldate: "2018-07-04", endselldate: '2018-07-06'},
  {seq: "3", ratecode: 'HONEY', startselldate: "2018-07-04", endselldate: '2018-07-07'},
  {seq: "4", ratecode: 'CORP', startselldate: "2018-07-04", endselldate: '2018-07-08'},
  {seq: "5", ratecode: 'BEST', startselldate: "2018-07-04", endselldate: '2018-07-09'},
  {seq: "6", ratecode: 'COMP', startselldate: "2018-07-04", endselldate: '2018-07-10'},
  {seq: "7", ratecode: 'RACK', startselldate: "2018-07-04", endselldate: '2018-07-11'},
  {seq: "8", ratecode: 'MICROS', startselldate: "2018-07-04", endselldate: '2018-07-12'},
  {seq: "9", ratecode: 'BEST', startselldate: "2018-07-04", endselldate: '2018-07-13'},
  {seq: "10", ratecode: 'CORP', startselldate: "2018-07-04", endselldate: '2018-07-14'},
];
// Table Data for Negotiated Tab Ends

// Table Data for RateDetail Tab Starts
export interface RateDetail {
  roomtype: string;
  start: String;
  end: string;
}

const RATE_DETAIL: RateDetail[] = [
  { roomtype: 'MICROS', start: "2018-07-04", end: '2018-07-05'},
  { roomtype: 'WHL', start: "2018-07-04", end: '2018-07-06'},
  { roomtype: 'HONEY', start: "2018-07-04", end: '2018-07-07'},
  { roomtype: 'CORP', start: "2018-07-04", end: '2018-07-08'},
  { roomtype: 'BEST', start: "2018-07-04", end: '2018-07-09'},
  { roomtype: 'COMP', start: "2018-07-04", end: '2018-07-10'},
  { roomtype: 'RACK', start: "2018-07-04", end: '2018-07-11'},
  { roomtype: 'MICROS', start: "2018-07-04", end: '2018-07-12'},
  { roomtype: 'BEST', start: "2018-07-04", end: '2018-07-13'},
  { roomtype: 'CORP', start: "2018-07-04", end: '2018-07-14'},
];
// Table Data for RateDetail Tab Ends
export interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-revenuemanagement',
  templateUrl: './revenuemanagement.component.html',
  styleUrls: ['./revenuemanagement.component.css']
})

export class RevenuemanagementComponent implements OnInit {
  //multiple select drop down
  toppings = new FormControl();
  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
  // table values
  displayedColumns: string[] = ['seq', 'ratecode', 'startselldate', 'endselldate'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  // @ViewChild(MatPaginator) paginator: MatPaginator;
  ratedetailColumns: string[] = ['start','end','roomtype'];
  rateDetail = new MatTableDataSource(RATE_DETAIL);

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  applyFilterRateDetail(filterValue: string) {
    this.rateDetail.filter = filterValue.trim().toLowerCase();
  }
  //drop down value for Rate Code in div with id="ratecode"
  animalControl = new FormControl('', [Validators.required]);
  ratecode: any[] = [
    {ratecode:"MICROS"},
    {ratecode:"WHL"},
    {ratecode:"HONEY"},
    {ratecode:"CORP"},
    {ratecode:"BEST"},
    {ratecode:"COMP"},
    {ratecode:"RACK"}
  ];
  roomtypes:any[] =[
    {name:"KNGS"},
    {name:"SJSN"},
    {name:"SJSS"},
    {name:"KNGN"},
    {name:"SDBN"},
    {name:"KSBN"},
    {name:"KSBS"},
  ];
  currencytype:any[] =[
    {name:"USD"},
    {name:"INR"},
    {name:"EUR"},
    {name:"ZMW"},
    {name:"AUD"},
    {name:"LKR"},
    {name:"MVR"},
  ];
  transactioncode:any[] =[
    {code:"1000"},
    {code:"2000"},
    {code:"3000"},
    {code:"4000"},
    {code:"5000"},
    {code:"6000"},
    {code:"7000"},
  ];
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
  constructor() { }

  ngOnInit() {
  }

}


