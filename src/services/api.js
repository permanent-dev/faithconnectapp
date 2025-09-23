

import axios from 'axios'


const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080';

class ApiService {
  constructor() {
    this.baseURL = API_BASE_URL;
  }

  async request(endpoint, options = {}) {
    const url = `${this.baseURL}${endpoint}`;
    const token = localStorage.getItem('authToken');

    const config = {
      headers: {
        'Content-Type': 'application/json',
        ...(token && { Authorization: `Bearer ${token}` }),
        ...options.headers,
      },
      method: options.method || 'GET',
      ...options,
    };


    // For POST requests, use data instead of body with axios
    if (options.data) {
      config.data = options.data;
    }

    try {
      const response = await axios(url, config);
      // Axios automatically parses JSON, no need for response.json()
      return response.data;

    } catch (error) {
      console.error('server response:', error.response?.data);

      if (error.response) {
        throw new Error(error.response.data.message || 'Request Failed');
      }

      throw error;
    }
  }

  // Member signup
  async signupMember(memberData) {
    // Log the data being sent
    // console.log('Sending signup data:', memberData);

    return this.request('/members/signup', {
      method: 'POST',
      data: memberData,
    });
  }

  // Member login
  async loginMember(credentials) {

    return this.request('/members/login', {
      method: 'POST',
      data: credentials,
    });
  }

  // Get member profile
  async getMemberProfile() {
    return this.request('/members/profile'
      // {
      //   method: 'GET',
      //   Headers:`BEARER ${token}`
      // }
    );
  }
}

const apiService = new ApiService();
export default apiService;