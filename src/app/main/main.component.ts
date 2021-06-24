import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  
  authors: any;
  titles: any = null;
  content: any = null;
  body: any = null;

  constructor(private api: ApiService) { }

  ngOnInit(): void {


    this.api.getUsers().subscribe(
      (data)=>{
        this.authors = data;
      }
    );
  }

  getTitles(id:any){
    this.api.getTitles(id).subscribe(
      (data)=>{
        this.titles = data;
      }
    );
  }

  getContent(id:any){
    this.api.getBody(id).subscribe(
      (data)=>{
        this.content = JSON.parse(JSON.stringify(data));
        this.body = this.content.body;
      }
    );
  }

  showBody(id:any){
    this.getContent(id);
  }

}
