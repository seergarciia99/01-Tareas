import { Component, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {

  @Input({required:true}) name!: string ;
  @Input({required:true}) userId!: string ;


  tasks = [{id:'t1',userId:'u1', title:'Master AAngular', summary:'Aprender', dueDate:'2025-12-31'},
    {id:'t2',userId:'u2', title:'Master AAngular', summary:'Aprender', dueDate:'2025-12-31'},
    {id:'t3',userId:'u3', title:'Master AAngular', summary:'Aprender', dueDate:'2025-12-31'},
  ];


  get selectedUserTasks(){
    return this.tasks.filter(t => t.userId === this.userId);
  }

  onCompleteTask(id:string){

    this.tasks = this.tasks.filter((task)=> task.id !== id);

  }

}
