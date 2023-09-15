import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/interfaces/user';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

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
      next:(data)=>{
        console.log(data)
      }
    });
  }

  ngOnInit(): void {}
}
export class LoginComponent {
  form = this.formBilder.nonNullable.group({
    // email: ['', [Validators.email, Validators.required]],
    // password: ['', Validators.required, Validators.minLength(6)],
  });
  showPassword = false;
  status: string = 'init';

  constructor(
    private formBilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private route: ActivatedRoute
  ) {}

  doLogin() {}
}
