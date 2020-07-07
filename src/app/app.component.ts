import { Component } from '@angular/core';
import {WhetherService } from './_service/whether.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  all:any=[];
  cityname:any;
  myDate = new Date();
  main;
  temp;
  photo='../assets/q7.jpg';
  search_show=true;
  NotFound_show=false;
  city;
  country;
  humidity;
 
  ob={
    "margin-top":"300px",
    "padding":"10px"
  }    

  constructor(private whether:WhetherService) {
  }

  title = 'whether';

  search() {
   
    this.whether.ger_whether(this.cityname).subscribe(
      res =>{
        this.ob["margin-top"]="0px";
        this.search_show=false;
        this.NotFound_show=false;

        this.all=res;
        this.city=this.all.name                   //city name
        this.country=this.all.sys.country;        //country
        this.temp=Math.round(this.all.main.temp); //temp
        this.humidity=this.all.main.humidity;     //humidity

        this.main=this.all.weather[0].main;       // weather


        if(this.main=='Clouds') {
          this.photo='../assets/q2.gif';
        }else if(this.main=='Rain') {
          this.photo='../assets/q3.gif';
        } else if(this.main=='Clear') {
          this.photo='../assets/q1.jpg';
        }else if(this.main=='Haze'){
          this.photo='../assets/q5.jpg';
        }else if(this.main=='Smoke'){
          this.photo='../assets/q4.jpg';
        }else {
          this.photo='../assets/q6.jpg';
        }
      },
      error => {
        if(error)
        {
          this.ob["margin-top"]="300px";
          this.photo='../assets/q7.jpg';

          this.city=false;
          this.search_show=false;
          this.NotFound_show=true;
        }
      }
    )
  }

}
