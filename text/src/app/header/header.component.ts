import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { ContactService } from '../contact.service';
import { ChalkComponent } from '../chalk/chalk.component';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLogin = false;
  // chalks: Array<any> = []
  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
    this.auth.checkLogin().onAuthStateChanged(user => {
      if (user) {
        console.log(user);

        this.isLogin = true;

      }
      else
        this.isLogin = false;
    })
  }
  getClick(value) {
    // this.CharkComponent(value);
    console.log(value);

    this.router.navigate(['/chark', value]);
  }
  getSearch(name) {
    var name = document.getElementById("name").value;
    console.log(name)
    this.router.navigate(['/search', name])
  }
  onLogout() {
    this.auth.onLogout().then(res => {
      alert("Dang xuat thanh cong")
    }).catch(err => {
      alert("Dang xuat that bai");
    })
  }
}
