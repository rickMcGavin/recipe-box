import React, { Component } from 'react';
import Recipe from './recipe';
import RecipeForm from './recipe-form';
import Modal from './modal';
import EditForm from './edit-form';


class RecipesContainer extends Component {
	constructor(props) {
		super(props);

		this.addRecipe = this.addRecipe.bind(this);
		this.removeRecipe = this.removeRecipe.bind(this);
		this.updateRecipe = this.updateRecipe.bind(this);
		this.renderModal = this.renderModal.bind(this);
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
		// console.log(this.state.recipes[key].ingredients);
		const recipes = {...this.state.recipes, ...this.state.recipes[key].ingredients};
		console.log(recipes[key]);
		recipes[key] = updatedRecipe;
		this.setState({ recipes });
	}

	removeRecipe(key) {
		const recipes = {...this.state.recipes};
		delete recipes[key];
		this.setState({ recipes });
	}

	renderModal(key, details) {
			return (
				<Modal>
					<EditForm
						key={key}
						details={this.state.recipes[key]}
						recipeId={key}
						updateRecipe={this.updateRecipe}
				 />
				</Modal>
			)
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
								.map(key => {
									const details = this.state.recipes[key];
									console.log('details:');
									console.log(details);
									const recipeId = key;
									return <div key={key + 1}>
										<Recipe 
											key={key} 
											details={details}
											onEdit={this.onEdit}
											onSave={this.onSave}
											recipeId={recipeId} 
											removeRecipe={this.removeRecipe} 
											renderModal={this.renderModal}
										/>
										<div>
											{
												this.state.edit && 
													this.renderModal(recipeId, details)
											}
										</div>
									</div>
								}
							)
						}
						</ul>
					</div>
				</div>
				
			</div>
		);
	}
}

export default RecipesContainer;