import { useState } from "react";
import {
  searchUsersAdvanced,
  fetchUserDetails,
} from "../services/githubService.js";

function Search() {
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    setUsers([]);
    setPage(1);

    try {
      const data = await searchUsersAdvanced(
        query,
        location,
        minRepos,
        1
      );

      const detailedUsers = await Promise.all(
        data.items.map((user) => fetchUserDetails(user.login))
      );

      setUsers(detailedUsers);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const loadMore = async () => {
    const nextPage = page + 1;
    setLoading(true);

    try {
      const data = await searchUsersAdvanced(
        query,
        location,
        minRepos,
        nextPage
      );

      const detailedUsers = await Promise.all(
        data.items.map((user) => fetchUserDetails(user.login))
      );

      setUsers([...users, ...detailedUsers]);
      setPage(nextPage);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <form
        onSubmit={handleSearch}
        className="grid gap-4 bg-white p-4 rounded shadow"
      >
        <input
          className="border p-2 rounded"
          placeholder="GitHub username"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          required
        />

        <input
          className="border p-2 rounded"
          placeholder="Location (optional)"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

        <input
          type="number"
          className="border p-2 rounded"
          placeholder="Minimum repositories"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
        />

        <button className="bg-blue-600 text-white p-2 rounded">
          Search
        </button>
      </form>

      {loading && <p className="mt-4">Loading...</p>}
      {error && (
        <p className="mt-4 text-red-500">
          Looks like we cant find the user
        </p>
      )}

      <ul className="mt-6 space-y-4">
        {users.map((user) => (
          <li
            key={user.id}
            className="flex items-center gap-4 p-4 border rounded"
          >
            <img
              src={user.avatar_url}
              alt={user.login}
              className="w-16 rounded-full"
            />
            <div>
              <h2 className="font-bold">
                {user.name || user.login}
              </h2>
              <p>Location: {user.location || "N/A"}</p>
              <p>Repos: {user.public_repos}</p>
              <a
                href={user.html_url}
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 underline"
              >
                View Profile
              </a>
            </div>
          </li>
        ))}
      </ul>

      {users.length > 0 && (
        <button
          onClick={loadMore}
          className="mt-6 w-full bg-gray-800 text-white p-2 rounded"
        >
          Load More
        </button>
      )}
    </div>
  );
}

export default Search;
