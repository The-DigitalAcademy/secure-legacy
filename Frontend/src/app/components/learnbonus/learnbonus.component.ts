import { Component, OnInit } from '@angular/core';
import { GptService } from 'src/app/services/gpt.service';

@Component({
  selector: 'app-learnbonus',
  templateUrl: './learnbonus.component.html',
  styleUrls: ['./learnbonus.component.scss']
})
export class LearnbonusComponent implements OnInit {

  constructor(private gptService: GptService) { }

  ngOnInit(): void {
  }


  word: string = '';
  explanation: string = '';
  running = false;
  
  async getMeaningOfWord() {
    try {
      const response = await this.gptService.getMeaningOfWord(this.word).toPromise();
      this.explanation = response.explanation;
    } catch (error) {
      console.error('Error fetching the meaning of the word:', error);
      // Handle error
    }
  }

  onSubmit() {
    this.getMeaningOfWord()
  }

  closeSearch(){
    // this.running = true
    this.explanation = ''
    this.word = ''
  }

  // onSubmit() {
  //   this.gptservice
  //     .learn(this.userInput)
  //     .subscribe(
  //       (data) => {
  //         this.search = data.getExplanationForWord;
  //         console.log(this.userInput)
  //       },
  //       (error) => {
  //         console.error('Error fetching recommendations:', error);
  //       }
  //     );
  // }

}
