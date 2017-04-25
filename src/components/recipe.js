import React from 'react';

const Recipe = () => {
	return (
		<li className="list-group-item">Cheddar Soup
			<ul>
				<li>Cheese</li>
				<li>Broth</li>
				<li>Milk</li>
			</ul>
			<div className="button-group">
				<div className="btn btn-warning">Edit</div>
				<div className="btn btn-danger">Delete</div>
			</div>
	</li>
	)
}

export default Recipe
