import { FaceSnap } from "./face-snap.model";

export class Statistic {
    constructor(public postNumber: number,
        public snapsGiven: number,
        public snapsReceived: number,
        public mostSnapped: FaceSnap) { }

}