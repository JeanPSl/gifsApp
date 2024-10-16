import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class GifsService {

  public _tagHistory: string[] = [];

  constructor() { }

  get tagHistory(){
    return [...this._tagHistory];
  }

  public searchTag(tag: string): void{
    this._tagHistory.unshift(tag);
    console.log(this._tagHistory);
  }
}
