import { Injectable } from "@angular/core";
import { Statistic } from "../models/statistic.model";

@Injectable({ providedIn: 'root' })

export class StatisticService {
    statistic: Statistic = {
        postNumber: 4,
        snapsGiven: 2,
        snapsReceived: 8,
        mostSnapped:
        {
            id: 4,
            title: 'Zachary',
            description: 'The clumpsy baby',
            imageUrl: 'https://loremflickr.com/320/240/toddler',
            createdDate: new Date(),
            snaps: 100
        }
    };

    getStatistic(): Statistic {
        return this.statistic;
    }
}