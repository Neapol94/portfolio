import { Component, Input, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/portfolio.service';

@Component({
  selector: 'app-schooling',
  templateUrl: './schooling.component.html',
  styleUrls: ['./schooling.component.css']
})
export class SchoolingComponent implements OnInit {

  constructor(private portfolioService: PortfolioService){}

  mySchooling: {
    schoolName: string,
    duration: string,
    developmentDegree: string,
    description: string
  }[] = [
    {
      schoolName: 'ZSE Elektronik, Radom',
      duration: this.portfolioService.returnYearsOrMonths(new Date('2010-09-01'), new Date('2014-06-30')),
      developmentDegree: 'ICT technician',
      description: "ICT technicians install, maintain, repair and operate information systems and any ICT related equipment (laptops, desktops, servers, tablets, smart phones, communications equipment, printers and any piece of computer related peripheral networks), and any type of software (drivers, operating systems, applications)."
    },
    {
      schoolName: 'UTH, Radom',
      duration: this.portfolioService.returnYearsOrMonths(new Date('2014-10-01'), new Date('2018-06-30')),
      developmentDegree: 'Informatics Engineer',
      description: "Computer engineers manage and design the computer hardware and software systems of a company. These skilled individuals may specialize in hardware or software and are often referred to as programmers. Their duties include developing software systems, updating hardware, and designing new equipment."
    }
  ]

  ngOnInit(): void {
  }

}
