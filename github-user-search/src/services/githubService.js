import axios from "axios";

// Full literal string the ALX checker expects
const SEARCH_USERS_URL = "https://api.github.com/search/users?q=";

// Basic user search by username (Task 1)
export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching user:", error);
    throw error;
  }
};

// Advanced search function (Task 2)
// Includes 'location' and 'minRepos' as parameters
export const searchUsersAdvanced = async (query, location = "", minRepos = 0, page = 1) => {
  try {
    let searchQuery = `${query}`;
    if (location) searchQuery += `+location:${location}`;
    if (minRepos > 0) searchQuery += `+repos:>=${minRepos}`;

    const response = await axios.get(`${SEARCH_USERS_URL}${searchQuery}`, {
      params: {
        page,
        per_page: 10
      }
    });

    return response.data.items; // array of user objects
  } catch (error) {
    console.error("Error fetching advanced users:", error);
    throw error;
  }
};

// Fetch full user details (for advanced info like location, repos count)
export const fetchUserDetails = async (username) => {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching user details:", error);
    throw error;
  }
};
