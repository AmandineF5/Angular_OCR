import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Statistic } from '../models/statistic.model';
import { StatisticService } from '../services/statistic.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  statistic!: Statistic;

  constructor(private router: Router, private statisticService: StatisticService) { }

  ngOnInit(): void {
    this.statistic = this.statisticService.getStatistic();
  }

  goToSnaps(): void {
    this.router.navigateByUrl('facesnaps');
  }

}
