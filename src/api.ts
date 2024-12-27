import axios, { AxiosError } from 'axios';

// https://safe-fjord-27405-b237b154a713.herokuapp.com/api/
// http://localhost:8000/api/

export const backendAPI = axios.create({
  baseURL: 'http://localhost:5000/api/',
});

// Axios instance with cookie support
export const backendAPIWithCookies = axios.create({
  baseURL: 'http://localhost:5000/api/',
  withCredentials: true, // Send cookies with cross-origin requests
});


//Authentication
export const login = async (email: string, password: string) => {
  try {
    const response = await backendAPIWithCookies.post('auth/login/', { email, password });
    return response;
  } catch (error: any) {
    throw new Error((error as AxiosError)?.response?.data?.message || 'Login failed');
  }
};

export const signup = async (name: string, email: string, password: string, country: string, goal: string) => {
  try {
    const response = await backendAPIWithCookies.post('auth/signup/', { name, email, country, password, goal });
    return response;
  } catch (error: any) {
    throw new Error((error as AxiosError)?.response?.data?.message || 'Signup failed');
  }
};

export const logout = async () => {
  try {
    const response = await backendAPIWithCookies.post('auth/logout/');
    return response.data;
  } catch (error: any) {
    throw new Error((error as AxiosError)?.response?.data?.message || 'Logout failed');
  }
};

export const checkAuthentication = async (userId: string) => {
  try {
    const response = await backendAPIWithCookies.get('auth/check_auth');
    return response.data;
  } catch (error: any) { // Specify error type as any
    const axiosError = error as AxiosError; // Cast error to AxiosError
    throw new Error(axiosError.response?.data?.message || 'Authentication check failed');
  }
};

//User
export const get_user = async () => {
  try {
    const response = await backendAPIWithCookies.get('users/current');
    return response;
  } catch (error: any) {
    throw new Error((error as AxiosError)?.response?.data?.message || 'Get industry types failed');
  }
};

export const get_user_activity = async () => {
  try {
    const response = await backendAPIWithCookies.get('users/activity');
    return response;
  } catch (error: any) {
    throw new Error((error as AxiosError)?.response?.data?.message || 'Get industry types failed');
  }
};

// Regulations
export const get_regulations = async (page: number, pageSize: number) => {
  try {
    // Append the page and pageSize query parameters to the URL
    const response = await backendAPI.get('regulations/all', {
      params: {
        page,       // current page number
        pageSize    // number of items per page
      }
    });

    return response;  // Ensure you're returning the actual data from the response

  } catch (error: any) {
    throw new Error((error as AxiosError)?.response?.data?.message || 'Get industry types failed');
  }
};

export const get_regulations_country = async (country: string, page: number, pageSize: number) => {
  try {
    const response = await backendAPI.get('regulations/country', {
      params: {
        country,
        page,
        pageSize,
      },
    });
    return response;
  } catch (error: any) {
    throw new Error((error as AxiosError)?.response?.data?.message || 'Fetching regulations for a country failed');
  }
};


export const get_countries = async () => {
  try {
    const response = await backendAPI.get('regulations/countries');
    return response;
  } catch (error: any) {
    throw new Error((error as AxiosError)?.response?.data?.message || 'Get countries failed');
  }
}

//Chat
export const chat_query = async (text: string) => {
  try {
    const response = await backendAPIWithCookies.post('chat/', { text });
    return response;
  } catch (error: any) {
    throw new Error((error as AxiosError)?.response?.data?.message || 'Chat query failed');
  }
};

//Industries
export const get_industries = async () => {
  try {
    const response = await backendAPI.get('industries/');
    return response;
  } catch (error: any) {
    throw new Error((error as AxiosError)?.response?.data?.message || 'Get industry types failed');
  }
};


//User Businesses
export const get_all_userbusinesses = async () => {
  try {
    const response = await backendAPI.get(`businesses/all/user_businesses`); // Adjust the endpoint URL
    return response; // Return the response data, assuming you want to handle it elsewhere
  } catch (error: any) {
    throw new Error((error as AxiosError)?.response?.data?.message || 'Get businesses types failed');
  }
};

export const create_business = async (title: string, businessId: string, location: string) => {
  try {
    const response = await backendAPIWithCookies.post('businesses/create/', { title, location, businessId});
    return response;
  } catch (error: any) {
    throw new Error((error as AxiosError)?.response?.data?.message || 'Login failed');
  }
};

export const edit_business = async (title: string, businessId: string, location: string) => {
  try {
    const response = await backendAPIWithCookies.post('businesses/create/', { title, location, businessId});
    return response;
  } catch (error: any) {
    throw new Error((error as AxiosError)?.response?.data?.message || 'Login failed');
  }
};

export const get_user_businesses = async () => {
  try {
    const response = await backendAPIWithCookies.get('businesses/user_businesses');
    return response;
  } catch (error: any) {
    throw new Error((error as AxiosError)?.response?.data?.message || 'Get user businesses failed');
  }
};




export default backendAPI;