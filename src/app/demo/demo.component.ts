import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent 
{
  public strUpper : string = "";
  public strLower : string = "";

  public EventUpper()
  {
    this.strUpper = "MARVELLOUS INFOSYSTEMS";
  }

  public EventLower()
  {
    this.strLower = "marvellous infosystesms";
  }
}
