import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: [ './header.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent
{
  public selectMode!: boolean;

  public changeTheme()
  {
    document.body.classList.toggle('dark-theme');
    this.selectMode = !this.selectMode;
  }

}
