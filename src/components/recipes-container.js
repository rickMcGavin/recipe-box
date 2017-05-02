import React, { Component } from 'react';
import Recipe from './recipe';
import RecipeForm from './recipe-form';

class RecipesContainer extends Component {
	constructor(props) {
		super(props);

		this.addRecipe = this.addRecipe.bind(this);
		this.removeRecipe = this.removeRecipe.bind(this);
		
		this.state = {
			recipes: {},
		};
	}

	addRecipe(recipe) {
		// update state

		// copies existing state and puts it in new const
		const recipes = {...this.state.recipes}; 
		const timestamp = Date.now();
		recipes[`recipe-${timestamp}`] = recipe;
		// set state
		this.setState({ recipes });
	}

	removeRecipe(key) {
		const recipes = {...this.state.recipes};
		delete recipes[key];
		this.setState({ recipes });
	}

	render() {
		return(
			<div className="container">
				<div className="container">
					<RecipeForm addRecipe={this.addRecipe}/>					
				</div>
				<div className="container">
					<div className="well">
						<ul>
						{
							Object
								.keys(this.state.recipes)
								.map(key => <Recipe key={key} recipeId={key} removeRecipe={this.removeRecipe} details={this.state.recipes[key]} />)
						}
						</ul>
					</div>
				</div>
			</div>
		);
	}
}

export default RecipesContainer;