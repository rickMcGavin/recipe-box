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
		this.changeHide = this.changeHide.bind(this);
		this.onEdit = this.onEdit.bind(this);
		this.onSave = this.onSave.bind(this);

		this.state = {
			recipes: {},
			edit: true,
			visible: 'hide'
		};
	}

	onEdit() {
		this.setState({ edit: true });
	}

	onSave(e) {
		e.preventDefault();
		this.setState({ edit: false });
	}

	changeHide() {
		this.state.visible === 'hide' ?
			this.setState({ visible: 'show' })
		:
			this.setState({ visible: 'hide' })
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
		const recipes = { ...this.state.recipes };
		recipes[key] = updatedRecipe;
		this.setState({ recipes });
	}

	removeRecipe(key) {
		const recipes = {...this.state.recipes};
		delete recipes[key];
		this.setState({ recipes });
	}

	renderRecipe(key) {
		const recipeKey = `${key}-r`;
		// const divKey = `${key}-div`;
		if (this.state.edit) {
			return <EditForm
						key={key}
						details={this.state.recipes[key]}
						onSave={this.onSave}
						recipeId={key}
						updateRecipe={this.updateRecipe}/>
				} else {
					return <Recipe
						changeHide={this.changeHide}
						details={this.state.recipes[key]}
						hide={this.state.hide}
						key={recipeKey}
						onEdit={this.onEdit}
						onSave={this.onSave}
						recipeId={key}
						removeRecipe={this.removeRecipe}
						visible={this.state.visible}/>
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
