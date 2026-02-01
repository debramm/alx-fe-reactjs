import axios from 'axios';

// Axios instance for GitHub API
const githubApi = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    Authorization: `token ${import.meta.env.VITE_APP_GITHUB_API_KEY}`,
  },
});

// Search GitHub users by query
export const searchUsers = async (query) => {
  try {
    const response = await githubApi.get(`/search/users?q=${query}`);
    return response.data.items; // returns an array of user objects
  } catch (error) {
    console.error('Error fetching users:', error);
    return [];
  }
};
