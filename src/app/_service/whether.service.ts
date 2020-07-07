import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class WhetherService {

  constructor(private http:HttpClient) { }

  ger_whether(cityname) {
    
    let obj = {
      key :'25er2112ed12ad49c09301615d1da7d72863f6',
      city: cityname
    }
    // 6
    let somthing_key=obj.key.substr(6)
    let path=`https://api.openweathermap.org/data/2.5/weather?q=${obj.city}&units=metric&appid=${somthing_key}`;

    
    return this.http.get(path);
  }

}
