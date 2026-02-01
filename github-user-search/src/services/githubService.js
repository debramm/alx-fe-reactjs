import axios from "axios";

const API_URL = "https://api.github.com/search/users";

// Advanced user search
export const searchUsersAdvanced = async (
  query,
  location,
  minRepos,
  page = 1
) => {
  let q = query;

  if (location) q += `+location:${location}`;
  if (minRepos) q += `+repos:>=${minRepos}`;

  const response = await axios.get(API_URL, {
    params: {
      q,
      page,
      per_page: 10,
    },
  });

  return response.data;
};

// Fetch full user details (for location & repos)
export const fetchUserDetails = async (username) => {
  const response = await axios.get(
    `https://api.github.com/users/${username}`
  );
  return response.data;
};
