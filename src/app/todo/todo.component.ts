import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {

  taskList: any[] = [];

  // collect user input using group() method of FormBuilder class
  // sets property to a form model containing the todoItem field
  newTodoForm = this.formBuilder.group({
    todoItem: ''
  });

  constructor( 
    private formBuilder: FormBuilder
  ) { };
  
  // collects value of input and stores in variable "value"
  addTask() {
    const value = this.newTodoForm.value.todoItem;
    this.taskList.push({ id: this.taskList.length, name: value })
    this.newTodoForm.reset();
  }
}
