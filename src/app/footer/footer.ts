import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { faInstagram, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-footer',
  imports: [FontAwesomeModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  faInstagram = faInstagram;
  faFacebook = faFacebook;
  faLinkedin = faLinkedin;
}
