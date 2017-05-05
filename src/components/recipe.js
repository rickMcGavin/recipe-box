import React, { Component } from 'react';

class Recipe extends Component {

	render(){
		// console.log(this.props.details);
		return (
			<div>
				<li className="list-group-item">
					<h4>
						{this.props.details.name}
					</h4>
					<ul>
						{
							this.props.details.ingredients.map((ingredient, i) => {
								return <li key={i}>{ingredient}</li>
							})
						}
					</ul>
					<div className="button-group">
						<button 
							onClick={() => this.props.onEdit()} 
							className="btn btn-warning">Edit</button>
						<button 
							onClick={() => this.props.removeRecipe(this.props.recipeId)} 
							className="btn btn-danger">Delete</button>
					</div>
				</li>
			</div>
		)
	}
}

export default Recipe
