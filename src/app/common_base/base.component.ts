import { HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { LoginService } from '../shared/services/login.service';
import * as CONFIG from './../app.config';

export class BaseComponent {

    constructor(
        public router: Router,
        public loginService: LoginService) {
        this.isLogin();
    }

    setTokenFromLocalStorage(value: string) {
        localStorage.setItem(CONFIG.localStorageKey, value);
    }

    isLogin() {
        const tokenData = this.getTokenFromLocalStorage();
        if (tokenData && tokenData !== 'null') {
        } else {
            this.setTokenFromLocalStorage('');
            this.router.navigateByUrl('/login');
        }
    }
    private getTokenFromLocalStorage() {
        return localStorage.getItem(CONFIG.localStorageKey);
    }

    public setTokenLocalStorageWhenLogout() {
        localStorage.removeItem(CONFIG.localStorageKey);
    }

    private getHeader(): HttpHeaders {
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Credentials': 'true',
            'Access-Control-Allow-Headers': '*',
            'Access-Control-Allow-Methods': '*',
            'Access-Control-Allow-Origin': '*',
            Authorization: 'Bearer ' + this.getTokenFromLocalStorage()
        });
        return headers;
    }

}
