// Importing decode function from jwt-decode library to decode JWT tokens
import decode from 'jwt-decode';

class AuthService {
  // Get user data from the decoded token
  getProfile() {
    return decode(this.getToken());
  }

  // Check if the user is logged in
  loggedIn() {
    const token = this.getToken();
    // If there is a token and it's not expired, return true
    return token && !this.isTokenExpired(token) ? true : false;
  }

  // Check if the token is expired
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

  // Retrieve token from localStorage
  getToken() {
    return localStorage.getItem('id_token');
  }

  // Save token to localStorage and reload page to homepage
  login(idToken) {
    localStorage.setItem('id_token', idToken);
    window.location.assign('/');
  }

  // Clear token from localStorage and reload page to homepage
  logout() {
    localStorage.removeItem('id_token');
    window.location.assign('/');
  }
}

export default new AuthService();