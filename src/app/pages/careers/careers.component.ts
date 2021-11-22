import { Component, OnInit } from '@angular/core';
import GLightbox from 'glightbox';

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.scss']
})
export class CareersComponent implements OnInit {

  constructor() { }

  lightbox:any;
  ngOnInit(): void {
      this.lightbox = GLightbox({ 
        selector: ".glightbox"
       });
  }  
}
