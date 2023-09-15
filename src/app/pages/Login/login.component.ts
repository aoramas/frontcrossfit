import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(
    private toastr: ToastrService,
    private _userService: UserService,
    private router: Router
  ) {}

  logIn() {
    if (this.username == ' ' || this.password == ' ') {
      this.toastr.error('Por favor ingrese todos los datos');
      return;
    }

    const user: User = {
      username: this.username,
      password: this.password,
    };

    this._userService.logIn(user).subscribe({
      next: (data) => {
        console.log(data);
      },
    });
  }

  ngOnInit(): void {}
}
