import { Component, Input, OnInit } from '@angular/core';

import { PortfolioService } from 'src/app/portfolio.service';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.css']
})
export class CareerComponent implements OnInit {

  constructor(private portfolioService: PortfolioService) {

  }

  myCareer: {
    companyName: string,
    duration: string,
    appointment: string,
    description: string
  }[] = [
    {
      companyName: 'Rewolucje online sp. z o.o.',
      duration: this.portfolioService.returnYearsOrMonths(new Date('2018-04-01'), new Date('2018-07-31')),
      appointment: 'Junior Webdeveloper',
      description: "I was modifying woo-commerce themes (PrestaShop, Shoper) for our clients using Javascript, CSS 3 and HTML 5. I had also to use PHP because there was a requirement to make some structural changes in smarty templates."
    },
    {
      companyName: 'Humansoft sp. z o.o.',
      duration: this.portfolioService.returnYearsOrMonths(new Date('2018-11-14'), new Date()),
      appointment: 'Junior Webdeveloper',
      description: "I was developing CodeIgniter MVC-based portal using PHP, Javascript, jQuery, CSS 3 and HTML 5. I was getting data from database via MySQL in model, preparing it in controller and displaying in view. The portal's main purpose was to give user access to view and update their 'human resources and payroll' data - depending on user's role."
    }
  ]


  ngOnInit(): void {
  }
}

