import React, { useState } from 'react';
import apiService from '../services/api';
import { Link } from 'react-router-dom';



const SignupForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    // dateOfBirth: '',
    gender: '',
    // address: '',
    // churchRole: 'member'
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    if (formData.phone && !/^[\+]?[1-9][\d]{0,15}$/.test(formData.phone)) {
      newErrors.phone = 'Invalid phone number';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!validateForm()) {
      return newErrors.form = 'fill in your details';
    }

    setLoading(true);


    try {
      // Remove confirmPassword from data sent to API
      const { confirmPassword, ...signupData } = formData;

      const response = await apiService.signupMember(signupData);

      if (response.success) {
        // Store token
        // localStorage.setItem('authToken', response.data.token);

        setSuccess(true);
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          password: '',
          confirmPassword: '',
          // dateOfBirth: '',
          gender: '',
          // address: '',
          // churchRole: 'member'
        });

        // Redirect to dashboard or login page
        setTimeout(() => {
          window.location.href = '/login';
        }, 5000);
      }

    } catch (error) {
      console.error(error.message);
      setErrors({
        general: error.message || 'Registration failed. Please try again.'
      });
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-h-screen mx-auto bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl grid grid-col-1 items-stretch justify-center font-bold mb-3 text-center text-gray-800">
        <img src="/ChatGPT_Image_Jun_3__2025__04_38_53_PM-removebg-preview 1.png" alt="" />
        <p>Create Account</p>
      </h2>

      {success && (
        <div className="mb-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
          Registration successful! Redirecting to login...
        </div>
      )}

      {errors.general && (
        <div className="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
          {errors.general}
        </div>
      )}

      {errors.form && (
        <div className="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
          {errors.form}
        </div>
      )}

      <div className='flex items-center justify-around '>
        <form onSubmit={handleSubmit} className="space-y-4 w-xl">
          {/* First Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              First Name *
            </label>
            <input
              type="text"
              name="firstName"
              autoComplete='firstName'
              value={formData.firstName}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.firstName ? 'border-red-500' : 'border-gray-300'}`
              }
              placeholder="Enter your first name"
            />
            {errors.firstName && (
              <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
            )}
          </div>

          {/* Last Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Last Name *
            </label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.lastName ? 'border-red-500' : 'border-gray-300'
                }`}
              placeholder="Enter your last name"
            />
            {errors.lastName && (
              <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email *
            </label>
            <input
              type="email"
              name="email"
              autoComplete='email'
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.email ? 'border-red-500' : 'border-gray-300'
                }`}
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              autoComplete='phone-number'
              value={formData.phone}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.phone ? 'border-red-500' : 'border-gray-300'
                }`}
              placeholder="+234 123 456 7890"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password *
            </label>
            <input
              type="password"
              name="password"
              autoComplete='new-password'
              value={formData.password}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.password ? 'border-red-500' : 'border-gray-300'
                }`}
              placeholder="Enter your password"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Confirm Password *
            </label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'
                }`}
              placeholder="Confirm your password"
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>
            )}
          </div>

          {/* Gender */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Gender
            </label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="others">Others</option>
              <option value="miscilleaneous">miscilleaneous</option>
            </select>
          </div>

          {/* Church Role */}
          {/* <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Church Role
          </label>
          <select
            name="churchRole"
            value={formData.churchRole}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="member">Member</option>
            <option value="volunteer">Volunteer</option>
            <option value="leader">Leader</option>
            <option value="pastor">Pastor</option>
          </select>
        </div> */}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-orange-400 text-white py-2 px-4 rounded-2xl hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition duration-200"
          >
            {loading ? 'Registering...' : 'Register'}
          </button>
        </form>

        <div className='flex items-stretch h-[37rem] justify-g'>
          <img src="/Mask group.png" alt="" />
          <img src="/Mask group2.png" alt="" />
          <img src="/Mask group1.png" alt="" />
        </div>
      </div>

      <p className="mt-4 text-center text-sm text-gray-600">
        Already have an account?{' '}
        <Link to="/login" className="text-blue-600 hover:text-blue-800">
          Sign in here
        </Link>
      </p>
    </div>
  );
};

export default SignupForm;