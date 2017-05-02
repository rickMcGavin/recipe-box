import React from 'react';

const Recipe = (props) => {
	return (
			<li className="list-group-item">
				<h4>
					{props.details.name}
				</h4>
				<ul>
					{
						props.details.ingredients.map((ingredient, i) => {
							return <li key={i}>{ingredient}</li>
						})
					}
				</ul>
				<div className="button-group">
					<button onClick={props.onEdit} className="btn btn-warning">Edit</button>
					<button className="btn btn-danger">Delete</button>
				</div>
			</li>
	)
}

export default Recipe
