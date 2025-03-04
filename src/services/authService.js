import axios from "axios";

const API_URL = "http://localhost:6000";

export const login = async (employeeId, password) => {
  try {
    const response = await axios.post(`${API_URL}/auth/login`, {
      employeeId,
      password,
    });
    if (response.data.token) {
      localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data;
  } catch (error) {
    console.error(
      "Login error:",
      error.response ? error.response.data : error.message
    );
    throw new Error("Invalid credentials");
  }
};

export const logout = () => {
  localStorage.removeItem("user");
};

export const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};
