import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Todo } from 'src/app/todo-list/todo-list.component';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(

    private http:HttpClient
  ) { }

  getAllTodo(username)
  {
    return this.http.get<Todo[]>(`http://localhost:8080/users/${username}/todos`)
  }

  fetechTodoForUpdate(id)
  {
    return this.http.get(`http://localhost:8080/fetechTodoForUpdate/${id}`)
  }

  updateTodo(id, todo)
  {
    return this.http.put(`http://localhost:8080/updateTodo/${id}`, todo)
  }
  deleteTodo(id)
  {
    return this.http.delete(`http://localhost:8080/deleteTodo/${id}`)
  }

  addTodo(todo)
  {
    return this.http.post(`http://localhost:8080/addTodo`,todo);
  }
}
