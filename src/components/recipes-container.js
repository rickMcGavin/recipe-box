import React, { Component } from 'react';
import Recipe from './recipe';

class RecipesContainer extends Component {
	constructor(props) {
		super(props);

		this.addRecipe = this.addRecipe.bind(this);
		this.state = { recipes: [],
									 ingredients: [] }
	}

	addRecipe() {
		const title = 'Fish';
		const ingredient = 'water,fish,oil'.split(',');
		this.setState({ recipes: [...this.state.recipes, title]});
		this.setState({ ingredients: [...this.state.ingredients, ingredient]});
	}

	renderRecipe() {
		return <li>{this.props.recipes}</li>
	}

	renderRecipes() {
		console.table(this.state.ingredients);
		return this.state.recipes.map((item, index) => {
			return this.state.ingredients.map((ing, j) => {
				return (
					<li className="list-group-item" key={index}>{item}
						<ul>
							<li key={j}>{ing}</li>
						</ul>
					</li>
				);
			})
		});
	}

	render() {
		return (

			<div className="container">
				<div className="container">
					<button 
						onClick={this.addRecipe}
						className="btn btn-primary">+ Add Recipe
					</button>
				</div>
				<div className="container">
					<div className="well">
						<ul className="list-group">
							{this.renderRecipes()}
						</ul>
					</div>
				</div>
			</div>
		);
	}
}

export default RecipesContainer;