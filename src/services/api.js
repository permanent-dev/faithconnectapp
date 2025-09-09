
import { createClient } from '@supabase/supabase-js'
import axios from 'axios'


const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY
const supabase = createClient(supabaseUrl, supabaseKey)


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
    if (options.body) {
      config.data = JSON.parse(options.body);
    }

    try {
      const response = await axios(url, config);
      // Axios automatically parses JSON, no need for response.json()
      return response.data;

    } catch (error) {

      if (error.response) {
        throw new Error(error.response.data.message || 'Request Failed');
      }

      throw error;
    }
  }

  // Member signup
  async signupMember(memberData) {
    return this.request('/members/signup', {
      method: 'POST',
      body: memberData,
    });
  }

  // Member login
  async loginMember(credentials) {
    return this.request('/members/login', {
      method: 'POST',
      body: credentials,
    });
  }

  // Get member profile
  async getMemberProfile() {
    return this.request('/members/profile');
  }
}

const apiService = new ApiService();
export default apiService;