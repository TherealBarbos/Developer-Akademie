import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { NavbarComponent } from './navbar/navbar.component';

@Component ({
    selector:'app-landingPage',
    standalone: true,
    imports: [CommonModule, NavbarComponent],
    template: `    
    <section>
        <div><app-navbar></app-navbar></div>
        <h1>SAKURA RAMEN</h1>
        <h2>Best Rahmen in Town</h2>
        </div>
    </section> 
    `,
    styleUrls:['./landingPage.component.scss'],

})
export class LandingPageComponente {}