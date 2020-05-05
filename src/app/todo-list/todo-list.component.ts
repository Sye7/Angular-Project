import { Component, OnInit } from '@angular/core';
import { TodoService } from '../service/data/todo.service';
import { Router } from '@angular/router';


export class Todo {

  constructor(
    public id: number,
    public username: string,
    public description: string,
    public date: Date,
    public done: boolean
  ) {

  }

}

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})



export class TodoListComponent implements OnInit {

  todos = [];
  public deleteStatus: string
  public isDelete: boolean

  constructor(
    private todoService: TodoService,
    private route: Router
  ) { }

  ngOnInit(): void {
    this.refreshTodo();
  }

  refreshTodo() {
    this.todoService.getAllTodo("yasir").subscribe(
      response => {
        this.todos = response

      }
    )
  }

  updateTodo(id) {
    this.route.navigate(['update', id]);
  }


  addTodo() {
    this.route.navigate(['update', -1]);
  }

  deleteTodo(id) {
    this.todoService.deleteTodo(id).subscribe(

      response => {
        console.log(response);
        this.deleteStatus = `Todo with id ${id} Successfully deleted`
        this.isDelete = true
        this.refreshTodo();
      }
    )
  }

}
