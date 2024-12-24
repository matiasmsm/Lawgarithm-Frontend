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

export const get_user_todo = async () => {
  try {
    const response = await backendAPIWithCookies.get('users/todo');
    return response;
  } catch (error: any) {
    throw new Error((error as AxiosError)?.response?.data?.message || 'Get industry types failed');
  }
};

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

//Businesses
export const get_all_userbusinesses = async () => {
  try {
    const response = await backendAPI.get(`businesses/all/user_businesses`); // Adjust the endpoint URL
    return response; // Return the response data, assuming you want to handle it elsewhere
  } catch (error: any) {
    throw new Error((error as AxiosError)?.response?.data?.message || 'Get businesses types failed');
  }
};

export const get_business_types = async (industry_id: string) => {
  try {
    const response = await backendAPI.get(`businesses/types/${industry_id}`); // Adjust the endpoint URL
    return response; // Return the response data, assuming you want to handle it elsewhere
  } catch (error: any) {
    throw new Error((error as AxiosError)?.response?.data?.message || 'Get businesses types failed');
  }
};

//User Businesses
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

//Templates
export const create_template = async (title: string, type: string, nodes: any, edges: any, businessId: number)=> {
  try {
    console.log("Creating template");
    const response = await backendAPIWithCookies.post(`templates/create/`, { title, type, nodes, edges, businessId });
    return response;
  } catch (error) {
    console.error('Error creating template:', error);
    throw error; // Rethrow the error for handling in your component or context
  }
};

export const get_user_templates = async () => {
  try {
    const response = await backendAPIWithCookies.get('templates/user_templates');
    return response;
  } catch (error: any) {
    throw new Error((error as AxiosError)?.response?.data?.message || 'Get user templates failed');
  }
};

export const get_user_template = async (templateId: number)=> {
  try {
    const response = await backendAPIWithCookies.get('templates/user_template', {
      params: { templateId }
    });
    return response;
  } catch (error: any) {
    throw new Error((error as AxiosError)?.response?.data?.message || 'Get user template failed');
  }
};

export const edit_template = async (templateId: number)=> {
  try {
    const response = await backendAPIWithCookies.put('templates/user_template', {
      params: { templateId }
    });
    return response;
  } catch (error: any) {
    throw new Error((error as AxiosError)?.response?.data?.message || 'Edit user template failed');
  }
};

export const delete_template = async (templateId: number)=> {
  try {
    const response = await backendAPIWithCookies.delete(`templates/delete/${templateId}`);
    return response;
  } catch (error: any) {
    throw new Error((error as AxiosError)?.response?.data?.message || 'Delete user template failed');
  }
};

export const get_businesstype_templates = async (businessId: number) => {
  try {
    const response = await backendAPIWithCookies.get(`/templates/businesstype/${businessId}`);
    return response;
  } catch (error: any) {
    throw new Error((error as AxiosError)?.response?.data?.message || 'Get business templates failed');
  }
};

export const save_template = async (templateId: number, nodes: any, edges: any)=> {
  try {
    console.log("Saving template");
    const response = await backendAPIWithCookies.put(`templates/save/`, { templateId, nodes, edges});
    return response;
  } catch (error) {
    console.error('Error saving template:', error);
    throw error; // Rethrow the error for handling in your component or context
  }
};


export const set_template = async (templateId: number, userBusinessId: number)=> {
  try {
    const response = await backendAPIWithCookies.post(`templates/settemplate/`, { templateId, userBusinessId });
    return response;
  } catch (error) {
    console.error('Error creating template:', error);
    throw error; // Rethrow the error for handling in your component or context
  }
};

export const get_userbusiness_template = async (userBusinessId: number) => {
  try {
    const response = await backendAPIWithCookies.get(`/templates/userbusinesstemplate/${userBusinessId}`);
    return response;
  } catch (error: any) {
    throw new Error((error as AxiosError)?.response?.data?.message || 'Get user templates failed');
  }
};

export const get_alluserbusiness_templates = async (userBusinessId: number) => {
  try {
    const response = await backendAPIWithCookies.get(`/templates/alluserbusinesstemplates/${userBusinessId}`);
    return response;
  } catch (error: any) {
    throw new Error((error as AxiosError)?.response?.data?.message || 'Get user templates failed');
  }
};

export const get_templates = async () => {
  try {
    const response = await backendAPIWithCookies.get(`templates/all`);
    return response;
  } catch (error: any) {
    throw new Error((error as AxiosError)?.response?.data?.message || 'Get templates failed');
  }
};


//Products
export const create_product = async (userBusinessId: number, description: string)=> {
  try {
    const response = await backendAPIWithCookies.post(`products/create/`, { userBusinessId, description });
    return response;
  } catch (error) {
    console.error('Error creating template:', error);
    throw error; // Rethrow the error for handling in your component or context
  }
};

export const get_user_business_product_types = async (businessId: number) => {
  try {
    const response = await backendAPIWithCookies.get(`products/types/user_business/${businessId}`); // Adjust the endpoint URL
    return response; // Return the response data, assuming you want to handle it elsewhere
  } catch (error: any) {
    throw new Error((error as AxiosError)?.response?.data?.message || 'Get products types failed');
  }
};

export const get_user_business_products = async (businessId: number) => {
  try {
    const response = await backendAPIWithCookies.get(`products/business_products/${businessId}`); // Adjust the endpoint URL
    return response; // Return the response data, assuming you want to handle it elsewhere
  } catch (error: any) {
    throw new Error((error as AxiosError)?.response?.data?.message || 'Get products types failed');
  }
};

//Other
const COUNTRIES_API_URL = 'https://restcountries.com/v3.1/all';

export const get_countries = async () => {
  try {
    const response = await axios.get(COUNTRIES_API_URL);
    return response;
  } catch (error) {
    console.error('Error fetching countries:', error);
    throw error;
  }
};

const GEO_API_URL = 'http://api.geonames.org/';
const USERNAME = 'deepco'; // You need to sign up at GeoNames to get a username.

export const getLocations = async (countryCode: string) => {
    try {
        const response = await axios.get(`${GEO_API_URL}searchJSON`, {
            params: {
                country: countryCode,
                username: USERNAME,
                maxRows: 10 // Number of rows you want to fetch
            }
        });
        return response.data.geonames;
    } catch (error) {
        console.error('Error fetching locations:', error);
        throw error;
    }
};





export default backendAPI;