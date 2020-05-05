import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { TodoService } from '../service/data/todo.service';
import { Todo } from '../todo-list/todo-list.component';

@Component({
  selector: 'app-todo-update',
  templateUrl: './todo-update.component.html',
  styleUrls: ['./todo-update.component.css']
})
export class TodoUpdateComponent implements OnInit {

  constructor(
    private route : ActivatedRoute,
    private todoService:TodoService,
    private router:Router

  ) { }

  id;
  username=""
  description="";
  date;
  todo
  
  ngOnInit(): void {
    this.id=this.route.snapshot.params['id']

    if(this.id != -1)
    {
      this.fetchDataForUpdate()
    } 
  }

  fetchDataForUpdate()
  {
      this.todoService.fetechTodoForUpdate(this.id).subscribe(

        response=>{
           this.todo = response;
           this.username=this.todo.username;
           this.description=this.todo.description;
           this.date=this.todo.date;

        }
      )
  }

  updateTodo()
  {
    
    
    if(this.id != -1)
    {
      this.todo.username = this.username;
      this.todo.description = this.description;
      this.todo.date = this.date;
      
      this.todoService.updateTodo(this.id, this.todo).subscribe(
  
        data=>{
          console.log(data)
          this.router.navigate(['todo'])
        }
      )
    }

    else{

      this.todoService.addTodo(  new Todo(-1,this.username,this.description,this.date,true) ).subscribe(
        response=>{
          console.log(response);
          this.router.navigate(['todo'])
        }
      )

    }
   
  }

}
