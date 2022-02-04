import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { SnapType } from '../models/snap-type.enum';
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;
  @Input() readOnlyMode!: boolean;

  constructor(private faceSnapService: FaceSnapsService) { }

  buttonLabel!: string;
  hasSnapped: boolean = false;

  ngOnInit(): void {
    this.buttonLabel = 'Snap!';
  }

  onManageSnap(id: number) {
    if (!this.hasSnapped) {
      this.faceSnapService.snapByFaceSnapId(id, SnapType.SNAP);
      this.buttonLabel = 'Unsnap!';
    } else {
      this.faceSnapService.snapByFaceSnapId(id, SnapType.UNSNAP);
      this.buttonLabel = 'Snap!';
    }
    this.hasSnapped = !this.hasSnapped;
  }



}
