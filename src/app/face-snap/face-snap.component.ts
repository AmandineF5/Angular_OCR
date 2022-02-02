import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;

  buttonLabel!: string;
  hasSnapped: boolean = false;

  ngOnInit(): void {

    this.buttonLabel = 'oh snap!';
  }

  onManageSnap() {
    if (!this.hasSnapped) {
      this.faceSnap.snaps++;
      this.buttonLabel = 'Oops un snap!';
    } else {
      this.faceSnap.snaps--;
      this.buttonLabel = 'oh snap!';
    }
    this.hasSnapped = !this.hasSnapped;
  }

}
