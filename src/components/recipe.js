import React from 'react';

const Recipe = (props) => {
	return (
			<li className="list-group-item">
				<h4>
					{props.details.recipe}
				</h4>
				<ul>
					{
						props.details.ingredients.map((item, index) => {
							return <li key={index}>{item}</li>
						})
					}
				</ul>
				<div className="button-group">
					<div onClick={props.onEdit} className="btn btn-warning">Edit</div>
					<div className="btn btn-danger">Delete</div>
				</div>
			</li>
	)
}

export default Recipe
