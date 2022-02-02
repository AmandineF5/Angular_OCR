import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  mySnaps!: FaceSnap[];
  mySnap1!: FaceSnap;
  mySnap2!: FaceSnap;

  ngOnInit(): void {

    this.mySnaps = [
      {
        title: 'Bowie',
        description: 'The cat that eats birds',
        imageUrl: 'https://loremflickr.com/320/240/cat',
        createdDate: new Date(), snaps: 0
      },
      {
        title: 'Lex',
        description: 'The dog that loves greasy meat',
        imageUrl: 'https://loremflickr.com/320/240/dog',
        createdDate: new Date(),
        snaps: 3
      },
      {
        title: 'Liliane',
        description: 'The best neighbor',
        imageUrl: 'https://loremflickr.com/320/240/lady',
        createdDate: new Date(),
        snaps: 12
      },
      {
        title: 'Zachary',
        description: 'The clumpsy baby',
        imageUrl: 'https://loremflickr.com/320/240/toddler',
        createdDate: new Date(),
        snaps: 100
      }

    ];

  }

}
