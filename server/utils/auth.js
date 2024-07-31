const jwt = require('jsonwebtoken');
const decode = require('jwt-decode');

class AuthService {
  getProfile() {
    return decode(this.getToken());
  }

  loggedIn() {
    const token = this.getToken();
    return token && !this.isTokenExpired(token);
  }

  isTokenExpired(token) {
    try {
      const decoded = decode(token);
      if (decoded.exp < Date.now() / 1000) {
        return true;
      } else {
        return false;
      }
    } catch (err) {
      return false;
    }
  }

  getToken() {
    // Safely return null if localStorage is not available (server-side)
    return typeof localStorage !== 'undefined' ? localStorage.getItem('id_token') : null;
  }

  login(idToken) {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('id_token', idToken);
      window.location.assign('/');
    }
  }

  logout() {
    if (typeof localStorage !== 'undefined') {
      localStorage.removeItem('id_token');
      window.location.assign('/');
    }
  }
}

module.exports = new AuthService();