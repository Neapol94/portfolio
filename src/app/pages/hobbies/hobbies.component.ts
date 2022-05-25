import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.css']
})
export class HobbiesComponent implements OnInit {

  title = 'hobbiesgrid';
  constructor(){}
  list: {
      rows: number, 
      cols: number, 
      data: {
        title: string, 
        image: string
      }
  }[] = [
    { rows: 2, cols: 2, data: {title: "Animals", image: "./assets/images/hobbies/animals.jpg"} },
    { rows: 2, cols: 1, data: {title: "Music", image: "./assets/images/hobbies/classical-music.jpg"} },
    { rows: 2, cols: 1, data: {title: "Politics", image: "./assets/images/hobbies/politics.jpg"} },
    { rows: 1, cols: 2, data: {title: "Board Games", image: "./assets/images/hobbies/board-games.jpg"} },
    { rows: 2, cols: 1, data: {title: "History", image: "./assets/images/hobbies/history.jpg"} },
    { rows: 2, cols: 1, data: {title: "Cars", image: "./assets/images/hobbies/cars.jpg"} },
    { rows: 2, cols: 1, data: {title: "Travelling", image: "./assets/images/hobbies/travelling.jpg"} },
    { rows: 2, cols: 1, data: {title: "Hiking", image: "./assets/images/hobbies/hiking.jpg"} },
    { rows: 2, cols: 2, data: {title: "Cycling", image: "./assets/images/hobbies/cycling.jpg"} },
    { rows: 2, cols: 1, data: {title: "Baking", image: "./assets/images/hobbies/baking.jpg"} },
    { rows: 2, cols: 1, data: {title: "Football", image: "./assets/images/hobbies/football.jpg"} },
    { rows: 1, cols: 1, data: {title: "DIY", image: "./assets/images/hobbies/diy.jpg"} },
    { rows: 2, cols: 1, data: {title: "Garden", image: "./assets/images/hobbies/garden.jpg"} },
    { rows: 1, cols: 3, data: {title: "Geography", image: "./assets/images/hobbies/geography.jpg"} },
  ]

  ngOnInit() {
  }
}