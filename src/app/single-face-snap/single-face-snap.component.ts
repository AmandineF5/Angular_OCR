import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FaceSnap } from '../models/face-snap.model';
import { SnapType } from '../models/snap-type.enum';
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit {
  faceSnap!: FaceSnap;
  readOnlyMode!: boolean;

  constructor(private faceSnapService: FaceSnapsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.buttonLabel = 'Snap!';
    const snapId = +this.route.snapshot.params['id'];
    this.faceSnap = this.faceSnapService.getFaceSnapById(snapId);
  }

  buttonLabel!: string;
  hasSnapped: boolean = false;

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
