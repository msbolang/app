import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import { NavController } from 'ionic-angular';

//promise写法
import 'rxjs/add/operator/toPromise';
	
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 listData: Object;
  constructor(public navCtrl: NavController,private http: Http) {
  }
  ionViewDidLoad() {
    // 网络请求
    // this.http.request('http://jsonplaceholder.typicode.com/photos')
	   //  .subscribe((res: Response) => {
	   //    this.listData = res.json();
	   //  });

  //promise写法
  this.http.request('http://jsonplaceholder.typicode.com/photos')
			  .toPromise()
			  .then(
			  	res => { 
			  		this.listData = res.json(); 
			 	}
			  )
			  .catch(
			  	err => { 
			  		console.error(err)
			  	}
			  );

	}

}
