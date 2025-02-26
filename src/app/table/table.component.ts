import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
  datalist:any[]=[];
constructor(private api:ApiService){ }
ngOnInit(): void{
  this.api.getData().subscribe((data)=>{
    this.datalist=data;
    
  })
}
}
