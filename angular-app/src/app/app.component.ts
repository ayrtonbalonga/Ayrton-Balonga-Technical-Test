import { HttpClient } from '@angular/common/http';
import { AppServiceService } from './app-service.service';
import { Component, OnInit } from '@angular/core';

//import { ApiService } from './app.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'angular-app';

  Root_url :string = 'http://localhost:8080/getFullPath';
posts: any;
data :any;
  constructor(private service : AppServiceService, private http : HttpClient){

  }

  ngOnInit(){
    this.getDataFromAPI();

  }


display(){
  console.log(this.data);
  return this.data;
}
  getDataFromAPI(){
    this.service.getData().subscribe((response) =>{


          this.data  = JSON.stringify(response);
         // console.log("data :",+ response);
          var sample = JSON.stringify(response.toString());
          console.log("data :",+ sample);


    },(error) => {
      console.log('error is ',error)
    }
    )
  }


  getPosts(){
    this.posts = this.http.get(this.Root_url );

  }


}
