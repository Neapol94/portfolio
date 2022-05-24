import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  toggleClasses(event: any){
    const searchValue = "-legend";
    const searchedClass = event.srcElement.dataset.level;
    const elementsSelected = document.getElementsByClassName(searchedClass);
    
    for (let index = 0; index < elementsSelected.length; index++) {
      if(elementsSelected[index].classList.contains("show"))
      {
        elementsSelected[index].classList.remove("show")
        elementsSelected[index].classList.add("hide")
        event.srcElement.classList.remove(event.srcElement.dataset.level+searchValue)
      }else{
        elementsSelected[index].classList.remove("hide")
        elementsSelected[index].classList.add("show")
        event.srcElement.classList.add(event.srcElement.dataset.level+searchValue)
      }
    }
  }
}
