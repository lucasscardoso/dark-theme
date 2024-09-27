import { Component } from '@angular/core';
import { ETheme } from '../../ETheme/ETheme.enum';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  public icon:string = ETheme.ETHEME_MOON;
  public texttheme: string = ETheme.DARK_THEME;

  constructor(){}

  ngOnInit(): void{}

  public toggle(){
   const theme =  document.body.classList.toggle('dark-theme');

   if(theme){
    this.texttheme = ETheme.Light_THEME;
    return (this.icon = ETheme.ETHEME_SUN);
   }
   this.texttheme = ETheme.DARK_THEME;
   return (this.icon = ETheme.ETHEME_MOON);
  }
}
