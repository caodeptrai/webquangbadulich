import {
  Router
} from "./chunk-JTKX4NR3.js";
import {
  computed,
  signal,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-UYQXAGEB.js";

// src/app/core/services/auth.service.ts
var AuthService = class _AuthService {
  router;
  currentUser = signal(null);
  tokenKey = "auth_token";
  userKey = "auth_user";
  user = computed(() => this.currentUser());
  isLoggedIn = computed(() => !!this.currentUser());
  isAdmin = computed(() => this.currentUser()?.role === "admin");
  constructor(router) {
    this.router = router;
    this.loadFromStorage();
  }
  loadFromStorage() {
    const token = localStorage.getItem(this.tokenKey);
    const user = localStorage.getItem(this.userKey);
    if (token && user) {
      try {
        this.currentUser.set(JSON.parse(user));
      } catch {
        this.logout();
      }
    }
  }
  login(token, user) {
    localStorage.setItem(this.tokenKey, token);
    localStorage.setItem(this.userKey, JSON.stringify(user));
    this.currentUser.set(user);
  }
  logout() {
    localStorage.removeItem(this.tokenKey);
    localStorage.removeItem(this.userKey);
    this.currentUser.set(null);
    this.router.navigate(["/"]);
  }
  getToken() {
    return localStorage.getItem(this.tokenKey);
  }
  updateUser(user) {
    localStorage.setItem(this.userKey, JSON.stringify(user));
    this.currentUser.set(user);
  }
  static \u0275fac = function AuthService_Factory(t) {
    return new (t || _AuthService)(\u0275\u0275inject(Router));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthService, factory: _AuthService.\u0275fac, providedIn: "root" });
};

export {
  AuthService
};
//# sourceMappingURL=chunk-PLBN7SNA.js.map
