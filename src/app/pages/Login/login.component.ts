import { HttpErrorResponse } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';
import { ErrorService } from 'src/app/services/error.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';

  constructor(
    private toastr: ToastrService,
    private _userService: UserService,
    private router: Router,
    @Inject(ErrorService) private _errorService: ErrorService
  ) {}

  ngOninit() {
  }

  logIn() {
    if (this.username == '' || this.password == '') {
      this.toastr.error('Por favor ingrese todos los datos');
      return;
    }

    const user: User = {
      username: this.username,
      password: this.password,
    };

    this._userService.logIn(user).subscribe({
      next: (token) => {
        localStorage.setItem('token', token);
        this.router.navigate(['/home']);
      },
      error: (err: HttpErrorResponse) => {
        this._errorService.msjError(err);
        this.toastr.error('Usuario o contraseña incorrectos');
      }
    });
  }

  ngOnInit(): void {}
}
