import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
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
