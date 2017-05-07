import React, { Component } from 'react';
import Recipe from './recipe';

class RecipesContainer extends Component {
	constructor(props) {
		super(props);

		this.addRecipe = this.addRecipe.bind(this);
		this.removeRecipe = this.removeRecipe.bind(this);
		this.updateRecipe = this.updateRecipe.bind(this);
		this.createRecipe = this.createRecipe.bind(this);

		this.state = {
			recipes: {},
			local: {}
		};
	}

	componentWillMount() {
		// set an empty object to localStorageRef
		const localStorageRef = {};
		// loop through the keys in the localStorage using Object.keys
 		Object
			.keys(localStorage)
			.map(key => {
				// add the key/value pair to localStorageRef 
				return localStorageRef[key] = JSON.parse(localStorage.getItem(key));
			});

		// check if there is any data in local storage
		// if there is, set it to state	
		if (localStorageRef) {
			this.setState({
				recipes: localStorageRef,
				local: localStorageRef
			});
		}
	}

	createRecipe(e) {
		console.log('making recipe 🍔');
		const recipe = {
			name: '',
			ingredients: ''
		}
		this.addRecipe(recipe);
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
		localStorage.setItem(`${key}`, JSON.stringify(recipes[key]));
		this.setState({ recipes });
	}

	removeRecipe(key) {
		const recipes = {...this.state.recipes};
		localStorage.removeItem(key);
		delete recipes[key];
		this.setState({ recipes });
	}

	render() {
		return(
			<div className="container">
				<div className="container">
					<button
						onClick={this.createRecipe}
						className="btn btn-primary">+ Add Recipe
					</button>
				</div>
				<div className="container">
					<div className="well">
						<ul>
						{
							Object
								.keys(this.state.recipes)
								.map(key => {
									return <Recipe
										details={this.state.recipes[key]}
										local={this.state.local}
										hide={this.state.hide}
										key={key}
										recipeId={key}
										removeRecipe={this.removeRecipe}
										updateRecipe={this.updateRecipe}/>
								})
							}	
						</ul>
					</div>
				</div>
			</div>
		);
	}
}

export default RecipesContainer;
