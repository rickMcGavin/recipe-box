import React, { Component } from 'react';
import Recipe from './recipe';

/*<ul>
	{(() => { 
		return this.state.ingredients.map((item, index) => {
			return <li key={index}>{item}</li>
		});
	})()}
</ul>


{this.state.edit ? this.renderEdit() : this.renderRecipes()}
*/


class RecipesContainer extends Component {
	constructor(props) {
		super(props);

		this.addRecipe = this.addRecipe.bind(this);
		this.renderEdit = this.renderEdit.bind(this);
		this.renderRecipes = this.renderRecipes.bind(this);
		this.onSave = this.onSave.bind(this);
		this.onEdit = this.onEdit.bind(this);

		this.state = { 
			recipes: {},
			edit: false
		}
	}

	addRecipe(recipe) {
		const recipes = {...this.state.recipes};
		const timestamp = Date.now();
		recipes[`recipe-${timestamp}`] = recipe;
		this.setState({recipes});
	}

	onSave() {
		this.setState({edit: false});
		const recipe = {
			recipe: this.recipe.value,
			ingredients: this.ingredients.value.split(',')
		}
		this.addRecipe(recipe);
	}

	renderEdit() {
		return (
			<li className="list-group-item">
				<div className="input-group">
					<input 
						ref={(input) => this.recipe = input} 
						type="text" 
						className="form-control" 
						placeholder="Recipe"/>
					<input 
						ref={(input) => this.ingredients = input} 
						type="text" 
						className="form-control" 
						placeholder="List ingredients separated by commas"/>
					<button onClick={this.onSave} className="btn btn-success">Save</button>
				</div>
			</li>
		);
	}

	renderRecipes() {
		return (
			<ul>
				{
					Object
					.keys(this.state.recipes)
					.map(key => {
						console.log(key);
						
						<Recipe onEdit={this.onEdit} key={key} details={this.state.recipes[key]} />

					})
				}
			</ul>
		);
	}


	onEdit() {
		this.setState({edit: true});
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
						<ul>
							{this.renderRecipes()}
						</ul>
					</div>
				</div>
			</div>
		);
	}
}



export default RecipesContainer;