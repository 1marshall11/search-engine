import { Component } from '@angular/core';
import { OpenaiService } from './openai.service';

export class textResponse{
  sno:number=1;
  text:string='';
  response:any='';
  clicked: boolean = false;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  data:string=' ';
  textList:textResponse[]=[{sno:1,text:'',response:'', clicked: false}];
  display_string:string='';
 

  constructor(private openaiService: OpenaiService) {}

  generateText() {
    const newResponse: textResponse = { sno: this.textList.length + 1, text: this.data, response: '', clicked: false};
    this.textList.push(newResponse);

    this.openaiService.generateText(this.data).then(text => {
      newResponse.response = text;
      this.display_string = newResponse.response; 

    });
  }
  handleClick()
  {
    this.data = "Hey ChatGpt tell about new technology which are tranding in market "
  }
  handleClick2()
  {
    this.data = "Hey ChatGpt tell Please explain me about A.I and why they are futur "
  }
  handleClick3()
  {
    this.data = "Hey ChatGpt tell about new technology which are tranding in market "
  }
  handleClick4()
  {
    this.data = "Which 10 movie we should watch in 2021"
  }
}
