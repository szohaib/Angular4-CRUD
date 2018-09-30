import { Component, OnInit } from '@angular/core';
import { PersonData } from 'src/app/personData';
import { Persons } from 'src/app/mock-persons';
@Component({
  selector: 'app-crud-table',
  templateUrl: './crud-table.component.html',
  styleUrls: ['./crud-table.component.css']
})
export class CrudTableComponent implements OnInit {

  constructor() {

  }

  ngOnInit() {

  }


  persons = Persons;
  selectedPerson: PersonData
  showEditBox: boolean;
  showAddBox: boolean
  m: number;
  addedName: string;
  addedAge: number;
  addNew(): void {
    this.showAddBox = true

  }

  saveNew(): void {
    this.persons.push({ age: this.addedAge, name: this.addedName })
    this.showAddBox = false;
  }

  onEdit(index): void {
    this.m = index
    this.showEditBox = true
    this.selectedPerson = this.persons[index]
  }

  onDelete(index): void {
    this.persons.splice(index, 1)
  }


  saveEditedPerson(i): void {
    this.persons[this.m].name = this.selectedPerson.name
    this.showEditBox = false
  }


}
