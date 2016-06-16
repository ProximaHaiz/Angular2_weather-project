import {Component,Input} from '@angular/core';
import{ControlGroup} from '@angular/common'
import{TranslatorService} from './translator.service'
import{TranslatedWord} from './translator-word'


@Component({
    selector:'my-translator',
    template:`
        <section class="weather-search">
        <form (ngSubmit)="onSubmit(fa)"  #fa="ngForm">
               <label for="city">Word</label>
               <input ngControl="locale" type="text" id="lang" required/>
               <button type="submit">Translate</button>
        </form>
        <div>
            <span class="info">City found:</span>{{word}}
        </div>   
    </section>
    `
})
export class TranslatorComponent{
   word:string;
    
    constructor(private _translatorService: TranslatorService){}
   
    
    onSubmit(form: ControlGroup){
      
        this._translatorService.translateWord(form.value.locale)
        .subscribe(
            data=> {
                this.word = data.name;
                const translaredWord = new TranslatedWord(
                    data.name);
                    console.log(this.word)
                    this.word=translaredWord.translatedWord;
            }
        );
    }
}
