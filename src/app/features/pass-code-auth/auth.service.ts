import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, take, toArray} from "rxjs";

interface Todo {
  userId: number,
  id: number,
  title: string,
  completed: boolean
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  fetchTodo() {

      return this.http.get('https://jsonplaceholder.typicode.com/todos').pipe(
        toArray(),
        map(res => {
          const todos = []
          for (let todo of res) {
            todos.push(todo);
          }
          return todos;
        }),
        take(1)
      );
  }
}
