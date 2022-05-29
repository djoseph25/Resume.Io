import { Component, OnInit } from '@angular/core';
import { faCoffee, faRightToBracket, faFolderClosed, faAddressCard, faUserGraduate} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  login = faUserGraduate;
  setting = faFolderClosed
  contactUs = faAddressCard

  constructor() { }


  ngOnInit() {
  }

}
