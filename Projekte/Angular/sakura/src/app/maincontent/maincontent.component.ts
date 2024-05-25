import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LandingPageComponente } from './landingPage/landingPage.component';
import { OurMenuComponent } from './our-menu/our-menu.component';
import { HowtoComponent } from './howto/howto.component';

@Component({
  selector: 'app-maincontent',
  standalone: true,
  imports: [CommonModule, LandingPageComponente, HowtoComponent ,OurMenuComponent],
  templateUrl: './maincontent.component.html',
  styleUrl: './maincontent.component.scss',
})
export class MaincontentComponent {}
