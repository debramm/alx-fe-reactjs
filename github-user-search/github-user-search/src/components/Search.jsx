import React, { useState } from 'react';
import { searchUsers } from '../services/githubService';

function Search() {
  const [query, setQuery] = useState('');
  const [users, setUsers] = useState([]);

  const handleSearch = async () => {
    const results = await searchUsers(query);
    setUsers(results);
  };

  return (
    <div>
      <input 
        type="text" 
        value={query} 
        onChange={(e) => setQuery(e.target.value)} 
        placeholder="Search GitHub users"
      />
      <button onClick={handleSearch}>Search</button>

      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <a href={user.html_url} target="_blank" rel="noreferrer">
              {user.login}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Search;

