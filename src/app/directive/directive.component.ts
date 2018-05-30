import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent implements OnInit {

  public type: string = 'text';
  public text: string = '';

  public status: boolean = true;

  public texts: Array<string> = ['un', 'deux', 'trois'];

  public showConsole(): void {
    console.log("click");
  }



  constructor() { }

  ngOnInit() {
  }

}
