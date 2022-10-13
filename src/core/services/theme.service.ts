import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class ThemeService
{
    constructor() { }

    private messageSource = new BehaviorSubject<boolean>(false);
    currentMessage = this.messageSource.asObservable();

    changeMessage(message: boolean)
    {
        this.messageSource.next(message);
    }
    /*  toggleDark() {
        this.setTheme(darkTheme);
      }
      toggleLight() {
        this.setTheme(lightTheme);
      }
      private setTheme(theme: {}) {
        Object.keys(theme).forEach(k =>
          document.documentElement.style.setProperty(`--${k}`, theme[k])
        );
      }*/
}