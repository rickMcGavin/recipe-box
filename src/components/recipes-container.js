import React, { Component } from 'react';
import Recipe from './recipe';

class RecipesContainer extends Component {
	constructor(props) {
		super(props);
		this.addRecipe = this.addRecipe.bind(this);
		
		this.state = {
			recipes: {},
			edit: false
		}
	}

	addRecipe(e) {
		e.preventDefault();
		this.setState({edit: !this.state.edit});
		this.form
	}

	render() {
		return(
			<div className="container">
				<div className="container">
					<form ref={(input) => this.recipeForm = input}>
						<div className="form-group">
							<label htmlFor="recipeName">Recipe Name</label>
							<input type="text" className="form-control" id="recipeName" placeholder="Enter Recipe Name"/>
							<label htmlFor="ingredients">Ingredients</label>
							<input type="text" className="form-control" id="ingredients" placeholder="Enter Ingredients Seperated by a Comma"/>
							<button 
								onClick={this.addRecipe}
								className="btn btn-primary">+ Add Recipe
							</button>
						</div>
					</form>
				</div>
				<div className="container">
					<div className="well">
						<ul>
						{this.state.edit && <li>Hello</li>}
						</ul>
					</div>
				</div>
			</div>
		);
	}
}

export default RecipesContainer;