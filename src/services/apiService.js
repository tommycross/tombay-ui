import axios from 'axios';

const API_BASE_URL = 'http://localhost:5208/api';

export const getItems = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/Inventory`);
    return response.data;
  } catch (error) {
    console.error("Error fetching items:", error);
    throw error;
  }
};

export const getItem = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/inventory/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching item with id ${id}:`, error);
    throw error;
  }
};

export const createItem = async (item) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/inventory`, item);
    return response.data;
  } catch (error) {
    console.error("Error creating item:", error);
    throw error;
  }
};

export const updateItem = async (id, item) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/inventory/${id}`, item);
    return response.data;
  } catch (error) {
    console.error(`Error updating item with id ${id}:`, error);
    throw error;
  }
};

export const deleteItem = async (id) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/inventory/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error deleting item with id ${id}:`, error);
    throw error;
  }
};