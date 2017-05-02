import React, { Component } from 'react';

class RecipeForm extends Component {
	constructor(props) {
		super(props);
		
		this.createRecipe = this.createRecipe.bind(this);

	}

	createRecipe(e) {
		e.preventDefault();
		console.log('making recipe 🍔');
		const recipe = {
			name: this.name.value,
			ingredient: this.ingredients.value.split(',')
		}
		this.props.addRecipe(recipe);
		this.recipeForm.reset();
	}



	render() {
		return(
			<form ref={(input) => this.recipeForm = input}>
				<div className="form-group">
					<label htmlFor="recipeName">Recipe Name</label>
					<input 
						ref={(input) => this.name = input}
						type="text" 
						className="form-control" 
						id="recipeName" 
						placeholder="Enter Recipe Name"/>
					<label htmlFor="ingredients">Ingredients</label>
					<input 
						ref={(input) => this.ingredients = input}
						type="text" 
						className="form-control" 
						id="ingredients" 
						placeholder="Enter Ingredients Seperated by a Comma"/>
					<button 
						onClick={this.createRecipe}
						className="btn btn-primary">+ Add Recipe
					</button>
				</div>
			</form>
		);
	}
}

export default RecipeForm;