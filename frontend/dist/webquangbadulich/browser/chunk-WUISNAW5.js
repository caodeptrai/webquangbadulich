import {
  HttpClient,
  HttpParams,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-UYQXAGEB.js";

// src/app/core/services/api.service.ts
var API = "http://localhost:3000/api";
var ApiService = class _ApiService {
  http;
  base = API;
  constructor(http) {
    this.http = http;
  }
  // Auth
  login(data) {
    return this.http.post(`${this.base}/auth/login`, data);
  }
  register(data) {
    return this.http.post(`${this.base}/auth/register`, data);
  }
  getProfile() {
    return this.http.get(`${this.base}/auth/profile`);
  }
  updateProfile(data) {
    return this.http.put(`${this.base}/auth/profile`, data);
  }
  changePassword(data) {
    return this.http.put(`${this.base}/auth/change-password`, data);
  }
  // Destinations
  getDestinations(params) {
    let httpParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach((key) => {
        if (params[key] !== null && params[key] !== void 0 && params[key] !== "") {
          httpParams = httpParams.set(key, params[key].toString());
        }
      });
    }
    return this.http.get(`${this.base}/destinations`, { params: httpParams });
  }
  getFeaturedDestinations() {
    return this.http.get(`${this.base}/destinations/featured`);
  }
  getDestination(id) {
    return this.http.get(`${this.base}/destinations/${id}`);
  }
  createDestination(data) {
    return this.http.post(`${this.base}/destinations`, data);
  }
  updateDestination(id, data) {
    return this.http.put(`${this.base}/destinations/${id}`, data);
  }
  deleteDestination(id) {
    return this.http.delete(`${this.base}/destinations/${id}`);
  }
  // Tours
  getTours(params) {
    let httpParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach((key) => {
        if (params[key] !== null && params[key] !== void 0 && params[key] !== "") {
          httpParams = httpParams.set(key, params[key].toString());
        }
      });
    }
    return this.http.get(`${this.base}/tours`, { params: httpParams });
  }
  getFeaturedTours() {
    return this.http.get(`${this.base}/tours/featured`);
  }
  getTour(id) {
    return this.http.get(`${this.base}/tours/${id}`);
  }
  createTour(data) {
    return this.http.post(`${this.base}/tours`, data);
  }
  updateTour(id, data) {
    return this.http.put(`${this.base}/tours/${id}`, data);
  }
  deleteTour(id) {
    return this.http.delete(`${this.base}/tours/${id}`);
  }
  // Articles
  getArticles(params) {
    let httpParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach((key) => {
        if (params[key] !== null && params[key] !== void 0 && params[key] !== "") {
          httpParams = httpParams.set(key, params[key].toString());
        }
      });
    }
    return this.http.get(`${this.base}/articles`, { params: httpParams });
  }
  getFeaturedArticles() {
    return this.http.get(`${this.base}/articles/featured`);
  }
  getRecentArticles() {
    return this.http.get(`${this.base}/articles/recent`);
  }
  getArticle(id) {
    return this.http.get(`${this.base}/articles/${id}`);
  }
  createArticle(data) {
    return this.http.post(`${this.base}/articles`, data);
  }
  updateArticle(id, data) {
    return this.http.put(`${this.base}/articles/${id}`, data);
  }
  deleteArticle(id) {
    return this.http.delete(`${this.base}/articles/${id}`);
  }
  // Reviews
  getReviewsByDestination(id, page = 1) {
    return this.http.get(`${this.base}/reviews/destination/${id}`, { params: { page, limit: 10 } });
  }
  getReviewsByTour(id, page = 1) {
    return this.http.get(`${this.base}/reviews/tour/${id}`, { params: { page, limit: 10 } });
  }
  createReview(data) {
    return this.http.post(`${this.base}/reviews`, data);
  }
  deleteReview(id) {
    return this.http.delete(`${this.base}/reviews/${id}`);
  }
  // Favorites
  getFavorites() {
    return this.http.get(`${this.base}/favorites`);
  }
  addFavorite(destinationId) {
    return this.http.post(`${this.base}/favorites`, { destinationId });
  }
  removeFavorite(destinationId) {
    return this.http.delete(`${this.base}/favorites/${destinationId}`);
  }
  checkFavorite(destinationId) {
    return this.http.get(`${this.base}/favorites/check/${destinationId}`);
  }
  // Inquiries
  getInquiries(params) {
    let httpParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach((key) => {
        if (params[key])
          httpParams = httpParams.set(key, params[key].toString());
      });
    }
    return this.http.get(`${this.base}/inquiries`, { params: httpParams });
  }
  getMyInquiries() {
    return this.http.get(`${this.base}/inquiries/my`);
  }
  createInquiry(data) {
    return this.http.post(`${this.base}/inquiries`, data);
  }
  updateInquiry(id, data) {
    return this.http.put(`${this.base}/inquiries/${id}`, data);
  }
  deleteInquiry(id) {
    return this.http.delete(`${this.base}/inquiries/${id}`);
  }
  // Categories
  getDestinationCategories() {
    return this.http.get(`${this.base}/categories/destinations`);
  }
  getArticleCategories() {
    return this.http.get(`${this.base}/categories/articles`);
  }
  getProvinces() {
    return this.http.get(`${this.base}/categories/provinces`);
  }
  getRegions() {
    return this.http.get(`${this.base}/categories/regions`);
  }
  getTags() {
    return this.http.get(`${this.base}/categories/tags`);
  }
  // Chatbot
  sendMessage(data) {
    return this.http.post(`${this.base}/chatbot`, data);
  }
  getChatHistory() {
    return this.http.get(`${this.base}/chatbot/history`);
  }
  // Recommendations
  getRecommendations(preferences) {
    return this.http.post(`${this.base}/recommendations`, { preferences });
  }
  getPopularRecommendations() {
    return this.http.get(`${this.base}/recommendations/popular`);
  }
  // Dashboard
  getDashboard() {
    return this.http.get(`${this.base}/dashboard`);
  }
  // Users
  getUsers(params) {
    let httpParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach((key) => {
        if (params[key])
          httpParams = httpParams.set(key, params[key].toString());
      });
    }
    return this.http.get(`${this.base}/users`, { params: httpParams });
  }
  toggleUserActive(id) {
    return this.http.put(`${this.base}/users/${id}/toggle-active`, {});
  }
  deleteUser(id) {
    return this.http.delete(`${this.base}/users/${id}`);
  }
  // Upload
  uploadImage(file) {
    const formData = new FormData();
    formData.append("image", file);
    return this.http.post(`${this.base}/upload/image`, formData);
  }
  static \u0275fac = function ApiService_Factory(t) {
    return new (t || _ApiService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ApiService, factory: _ApiService.\u0275fac, providedIn: "root" });
};

export {
  ApiService
};
//# sourceMappingURL=chunk-WUISNAW5.js.map
