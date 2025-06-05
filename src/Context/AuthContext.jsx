import React, { createContext, useContext, useState, useEffect } from 'react';
import ApiService from '../services/api';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Check if user is already logged in
    const token = ApiService.getAuthToken();
    const userData = ApiService.getUserData();
    
    if (token && userData) {
      setUser(userData);
    }
    setIsLoading(false);
  }, []);

  const login = async (credentials) => {
    try {
      setIsLoading(true);
      setError(null);
      
      const response = await ApiService.login(credentials);
      
      if (response.success) {
        const { token, user } = response;
        
        // Store auth data
        ApiService.setAuthToken(token);
        ApiService.setUserData(user);
        
        setUser(user);
        return { success: true, user };
      }
    } catch (error) {
      setError(error.message);
      return { success: false, error: error.message };
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (userData) => {
    try {
      setIsLoading(true);
      setError(null);
      
      const response = await ApiService.register(userData);
      
      if (response.success) {
        const { token, user } = response;
        
        // Store auth data
        ApiService.setAuthToken(token);
        ApiService.setUserData(user);
        
        setUser(user);
        return { success: true, user };
      }
    } catch (error) {
      setError(error.message);
      return { success: false, error: error.message };
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    ApiService.removeAuthToken();
    setUser(null);
    setError(null);
  };

  const forgotPassword = async (email) => {
    try {
      setIsLoading(true);
      setError(null);
      
      const response = await ApiService.forgotPassword(email);
      return { success: true, message: response.message };
    } catch (error) {
      setError(error.message);
      return { success: false, error: error.message };
    } finally {
      setIsLoading(false);
    }
  };

  const resetPassword = async (token, passwordData) => {
    try {
      setIsLoading(true);
      setError(null);
      
      const response = await ApiService.resetPassword(token, passwordData);
      
      if (response.success) {
        // Auto login after password reset
        ApiService.setAuthToken(response.token);
        const userData = ApiService.getUserData();
        if (userData) {
          setUser(userData);
        }
        return { success: true };
      }
    } catch (error) {
      setError(error.message);
      return { success: false, error: error.message };
    } finally {
      setIsLoading(false);
    }
  };

  const updateProfile = async (profileData) => {
    try {
      setIsLoading(true);
      setError(null);
      
      const response = await ApiService.updateProfile(profileData);
      
      if (response.success) {
        const updatedUser = response.user;
        ApiService.setUserData(updatedUser);
        setUser(updatedUser);
        return { success: true, user: updatedUser };
      }
    } catch (error) {
      setError(error.message);
      return { success: false, error: error.message };
    } finally {
      setIsLoading(false);
    }
  };

  const value = {
    user,
    isLoading,
    error,
    login,
    register,
    logout,
    forgotPassword,
    resetPassword,
    updateProfile,
    isAuthenticated: !!user,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};