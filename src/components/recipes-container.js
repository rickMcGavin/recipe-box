import React, { Component } from 'react';
import Recipe from './recipe';
import RecipeForm from './recipe-form';
import EditForm from './edit-form';


class RecipesContainer extends Component {
	constructor(props) {
		super(props);

		this.addRecipe = this.addRecipe.bind(this);
		this.removeRecipe = this.removeRecipe.bind(this);
		this.updateRecipe = this.updateRecipe.bind(this);
		this.renderRecipe = this.renderRecipe.bind(this);
		this.onEdit = this.onEdit.bind(this);
		this.onSave = this.onSave.bind(this);
		
		this.state = {
			recipes: {},
			edit: false
		};
	}

	onEdit() {
		this.setState({ edit: true });
	}

	onSave() {
		this.setState({ edit: false });
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

	updateRecipe(key, updatedRecipe) {
		const recipes = {...this.state.recipes, ...this.state.recipes[key].ingredients};
		recipes[key] = updatedRecipe;
		this.setState({ recipes });
	}

	removeRecipe(key) {
		const recipes = {...this.state.recipes};
		delete recipes[key];
		this.setState({ recipes });
	}

	renderRecipe(key) {
		if (this.state.edit) {
			console.log('Edit: ');
			console.log(this.state.recipes[key]);
			return (
				<EditForm
						key={key}
						details={this.state.recipes[key]}
						recipeId={key}
						updateRecipe={this.updateRecipe}
				 />
				)
		} else {
			console.log('Recipe: ');
			console.log(this.state.recipes[key]);
			return (
				<Recipe 
					details={this.state.recipes[key]}
					key={key} 
					onEdit={this.onEdit}
					onSave={this.onSave}
					recipeId={key} 
					removeRecipe={this.removeRecipe} 
					renderModal={this.renderModal}
				/>
			)
		}
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
								.map(key => this.renderRecipe(key))
						}
						</ul>
					</div>
				</div>
				
			</div>
		);
	}
}

export default RecipesContainer;