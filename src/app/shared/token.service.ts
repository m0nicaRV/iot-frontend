import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private issuer = {
    login: 'http://127.0.0.1:8000/api/login',
    register: 'http://127.0.0.1:8000/api/register'
  };

  constructor() { }
  
  handleData(token: string): void {
    localStorage.setItem('auth_token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('auth_token');
  }

  isValidToken(): boolean {
    const token = this.getToken();
    if (token) {
      const payload = this.payload(token);
      if (payload && payload.iss) {
        // Comprueba que el emisor (iss) del token esté entre los valores válidos
        return Object.values(this.issuer).indexOf(payload.iss) > -1;
      }
    }
    return false;
  }

  payload(token: string): any {
    try {
      const parts = token.split('.');
      if (parts.length !== 3) {
        console.error('El token no tiene el formato JWT correcto.');
        return null;
      }
      const jwtPayload = parts[1];
      return JSON.parse(atob(jwtPayload));
    } catch (error) {
      console.error('Error al decodificar el payload del token:', error);
      return null;
    }
  }

  isLoggedIn(): boolean {
    return this.isValidToken();
  }

  removeToken(): void {
    localStorage.removeItem('auth_token');
  }
}
