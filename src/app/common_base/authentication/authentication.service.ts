import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserDTO } from 'src/app/models/UserDTO';
import { LoginService } from 'src/app/shared/services/login.service';
import * as CONFIG from '../../app.config';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private currentUserSubject: BehaviorSubject<UserDTO>;
  public currentUser: Observable<UserDTO>;

  constructor(private http: HttpClient, private loginService: LoginService, ) {
    this.currentUserSubject = new BehaviorSubject<UserDTO>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }
  public get currentUserValue(): UserDTO {
    return this.currentUserSubject.value;
  }

  public getTokenFromLocalStorage() {
    return localStorage.getItem(CONFIG.localStorageKey);
  }

  public setTokenFromLocalStorage(value: string) {
    localStorage.setItem(CONFIG.localStorageKey, value);
  }

  public login(loginDto) {
    this.loginService.getToken(loginDto).subscribe(response => {
      if (response && response.Data && response.Data !== 'null') {
        this.setTokenFromLocalStorage(response.Data);
        this.getUser();
      }
    });
    return this.currentUser;
  }

  private getUser() {
    this.loginService.getUser().subscribe(response => {
      if (response.Status === false) {
        return;
      }
      if (response && response.Data) {
        localStorage.setItem('currentUser', JSON.stringify(response.Data));
        this.currentUserSubject.next(response.Data);
      }
    });
  }

  public logout() {
    // remove user from local storage to log user out
    this.setTokenFromLocalStorage('');
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }

}
