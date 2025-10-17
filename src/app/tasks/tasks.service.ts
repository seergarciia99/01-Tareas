import { Injectable } from "@angular/core";
import { NewTaskData } from "./task/task.model";

@Injectable({
    providedIn: 'root'
})
export class TasksService {
  private tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master AAngular',
      summary: 'Aprender',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u2',
      title: 'Master AAngular',
      summary: 'Aprender',
      dueDate: '2025-12-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Master AAngular',
      summary: 'Aprender',
      dueDate: '2025-12-31',
    },
  ];

  constructor() {

    const tasks = localStorage.getItem('tasks');
    if (tasks) {
      this.tasks = JSON.parse(tasks);
    }
  }



  getUserTasks(userId: string) {
    return this.tasks.filter((t) => t.userId === userId);
  }

  addTask(taskData: NewTaskData, userId: string) {

       this.tasks.unshift({
      id:new Date().getTime().toString(),
      userId:userId,
      title:taskData.title,
      summary:taskData.summary,
      dueDate:taskData.date,
    })
    this.saveTasks();
  }

  removeTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    this.saveTasks();
  }

  private saveTasks(){

    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }


}
