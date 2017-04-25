import React, { Component } from 'react';
import Recipe from './recipe';

class RecipesContainer extends Component {
	constructor(props) {
		super(props);

		this.state = { recipes: [] }
	}

	render() {
		return (
			<div className="container">
				<div className="container">
					<button className="btn btn-primary">+ Add Recipe</button>
				</div>
				<div className="container">
					<div className="well">
						<ul className="list-group">
							<Recipe />
						</ul>
					</div>
				</div>
			</div>
		);
	}
}

export default RecipesContainer;