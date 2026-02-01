
import axios from 'axios';

// Advanced search users
export const searchUsersAdvanced = async (query, location = '', minRepos = 0) => {
  try {
    let searchQuery = `${query}`;
    if (location) searchQuery += `+location:${location}`;
    if (minRepos > 0) searchQuery += `+repos:>=${minRepos}`;

    const response = await axios.get(`https://api.github.com/search/users?q=${searchQuery}`, {
      headers: {
        Authorization: `token ${import.meta.env.VITE_APP_GITHUB_API_KEY}`,
      },
    });

    return response.data.items; // array of users
  } catch (error) {
    console.error('Error fetching advanced search users:', error);
    throw error;
  }
};
