import { Injectable } from "@angular/core"
import { FaceSnap } from "../models/face-snap.model"
import { SnapType } from "../models/snap-type.enum";

@Injectable({ providedIn: 'root' })

export class FaceSnapsService {
    faceSnaps: FaceSnap[] = [{
        id: 1,
        title: 'Bowie the cat',
        description: 'The cat that eats birds',
        imageUrl: 'https://loremflickr.com/320/240/cat',
        createdDate: new Date(), snaps: 0
    },
    {
        id: 2,
        title: 'Lex',
        description: 'The dog that loves greasy meat',
        imageUrl: 'https://loremflickr.com/320/240/dog',
        createdDate: new Date(),
        snaps: 3
    },
    {
        id: 3,
        title: 'Liliane',
        description: 'The best neighbor',
        imageUrl: 'https://loremflickr.com/320/240/lady',
        createdDate: new Date(),
        snaps: 12
    },
    {
        id: 4,
        title: 'Zachary',
        description: 'The clumpsy baby',
        imageUrl: 'https://loremflickr.com/320/240/toddler',
        createdDate: new Date(),
        snaps: 100
    }];

    getAllFaceSnaps(): FaceSnap[] {
        return this.faceSnaps;
    }

    getFaceSnapById(id: number): FaceSnap {
        const faceSnap = this.faceSnaps.find((snap) => snap.id === id);
        if (!faceSnap) {
            throw new Error('FaceSnap not found');
        } else {
            return faceSnap;
        }
    }

    snapByFaceSnapId(id: number, type: SnapType): void {
        const faceSnap = this.getFaceSnapById(id);
        type === SnapType.SNAP ? faceSnap.snaps++ : faceSnap.snaps--;
    }

}