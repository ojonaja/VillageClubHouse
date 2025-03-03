import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent {
  constructor(private router: Router) {}

  goHome() {
    this.router.navigate(['/home']).then(() => {
      window.location.reload(); // รีเฟรชหลังจากเปลี่ยนหน้า
    });
  }

  goReg() {
    this.router.navigate(['/reg']);
  }
}
