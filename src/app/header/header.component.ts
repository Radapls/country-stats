import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class HeaderComponent
{
  public selectMode!: boolean;

  @Output()
  public resetCountries = new EventEmitter<void>();

  public changeTheme()
  {
    document.body.classList.toggle('dark-theme');
    this.selectMode = !this.selectMode;
  }

  public onLogoClick()
  {
    this.resetCountries.emit();
  }
}
