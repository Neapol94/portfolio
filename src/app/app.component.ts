import { BreakpointObserver } from '@angular/cdk/layout';
import { OverlayContainer } from '@angular/cdk/overlay';
import { Component, HostBinding, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { FormControl } from '@angular/forms';
import { NavigationEnd, Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { delay, filter } from 'rxjs/operators';

@UntilDestroy()
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Portfolio - Bartłomiej Bielawski';

  @HostBinding('class') className = '';
  toggleControl = new FormControl(false);

  @ViewChild(MatSidenav) sidenav!: MatSidenav;
  

  constructor(
    private observer: BreakpointObserver, 
    private router: Router,
    private overlay: OverlayContainer,
    ) {

  }

  ngOnInit(): void {
    this.toggleControl.valueChanges.subscribe((darkMode) => {
      const darkClassName = 'darkMode';
      this.className = darkMode ? darkClassName : '';
      if (darkMode) {
        this.overlay.getContainerElement().classList.add(darkClassName);
        document.body.classList.add(darkClassName);
      } else {
        this.overlay.getContainerElement().classList.remove(darkClassName);
        document.body.classList.remove(darkClassName);
      }
    });
  }

  ngAfterViewInit() {
    this.observer
      .observe(['(max-width: 800px)'])
      .pipe(delay(1), untilDestroyed(this))
      .subscribe((res) => {
        if(res.matches) {
          this.sidenav.mode = 'over';
          this.sidenav.close();
        } else {
          this.sidenav.mode = 'side';
          this.sidenav.open();
        }
      });
      this.router.events.pipe(
        filter(event => event instanceof NavigationEnd),
        untilDestroyed(this)
      ).subscribe(() => {
        if(this.sidenav.mode === 'over'){
          this.sidenav.close();
        }
      });
  }
}
