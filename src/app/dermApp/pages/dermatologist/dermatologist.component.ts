import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-dermatologist',
  templateUrl: './dermatologist.component.html',
  styleUrls: ['./dermatologist.component.css']
})
export class DermatologistComponent implements OnInit {


  imgCollection:Array<object> =[
    {
      image:'src/app/dermApp/pages/img/patient-files1.png',
      thumbImage:'src/app/dermApp/pages/img/patient-files1.png'

    }

  ]


  week:any =[
    "M",
    "T",
    "W",
    "T",
    "F",
    "S",
    "S"
  ];

  // monthSelect!:any[];
  // dateSelect:any;




  constructor() { }

  ngOnInit(): void {

    // this.getDaysFromDate(11,2020);
  }

  // getDaysFromDate(month, year){
  //   const startDate = moment.utc(`${year}/${month}/01`);
  //   const endDate = startDate.clone().endOf('month');
  //   this.dateSelect = startDate;
  //
  //   const diffDays=endDate.diff(startDate,'days',true);
  //
  //   const numberDays = Math.round(diffDays); //31
  //
  //   const arrayDays=Object.keys([...Array(numberDays)]).map((a:any)=>{
  //       console.log(a);
  //   });
  //
  //
  // }

}
