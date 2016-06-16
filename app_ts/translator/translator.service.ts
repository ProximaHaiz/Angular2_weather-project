import {Injectable} from '@angular/core'
import{Observable} from 'rxjs/Observable'
import{Http} from '@angular/http'
import 'rxjs/Rx';

@Injectable()
export class TranslatorService{
    constructor(private _http:Http){}
    
    translateWord(wordToTransale: string): Observable<any>{
        return this._http.get('http://localhost:8085/get/entity')
            .map(response => response.json()).catch(error =>{
                console.error(error);
                return Observable.throw(error.json())
            });
    }
}
// https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=ru&dt=t&q='
        // +wordToTransale