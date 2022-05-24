import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-characteristic',
  templateUrl: './characteristic.component.html',
  styleUrls: ['./characteristic.component.css']
})
export class CharacteristicComponent implements OnInit {

  characteristicsList: string[] = ["Prompt", "Uncomplaining", "Scrupulous", "Deal with time pressure", "Polite", "No addictions", "Keen to selfdevelopment", "Keen to learn new technologies", "Keen on new challenges"].sort(() => 0.5 - Math.random());
  constructor() { }

  ngOnInit(): void {
  }

  getRandomColor() {
    var color = Math.floor(0x1000000 * Math.random()).toString(16);
    return '#' + ('000000' + color).slice(-6);
  }
}
