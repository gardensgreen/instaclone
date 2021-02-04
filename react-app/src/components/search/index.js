import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './index.css';
export default function Search({ searchTerm, searchBar, searchFoc }) {
	const [results, setResults] = useState([]);

	useEffect(() => {
		(async () => {
			if (!searchTerm.length) return setResults([]);
			let res = await fetch(`/api/users/search/${searchTerm}`);
			res = await res.json();
			setResults(res.searchResults);
		})();
	}, [searchTerm]);

	return (searchFoc && searchTerm.length) ? (
		<div id='searchResults'>
			{results.length ? results.map(({ avatarUrl, username }) => {
				return (
					<NavLink to={`/users/${username}`} key={username}>
						<div
							className='searchResultContainer'
							style={{ width: searchBar.current && searchBar.current.style.width }}
						>
							<img className='searchAvatar' src={avatarUrl} alt='avatar'></img>
							<div>{username}</div>
						</div>
					</NavLink>
				);
			}) : <div 
				className="noResults"
				style={{ width: searchBar.current && searchBar.current.style.width }}
				>No Results</div>}
		</div>
	) : null;
}
