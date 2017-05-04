import React, { Component } from 'react';


class EditForm extends Component {
	constructor(props) {
		super(props);
		
		this.handleChange = this.handleChange.bind(this);	
	}

	handleChange(e, key) {
		e.preventDefault();
		const recipe = this.props.details[key];
		const updatedRecipe = {
			...recipe,
			[e.target.name]: e.target.value,
		}
		this.props.updateRecipe(key, updatedRecipe);
	}



	render() {
		return(
			<form ref={(input) => this.recipeForm = input}>
				<div className="form-group">
					<label htmlFor="recipeName">Recipe Name</label>
					<input 
						className="form-control" 
						id="recipeName" 
						name="name"
						onChange={(e) => this.handleChange(e, this.props.recipeId)}
						ref={(input) => this.name = input}
						type="text" 
						value={this.props.details.name}/>
					<label htmlFor="ingredients">Ingredients</label>
					<input 
						className="form-control" 
						id="ingredients" 
						ref={(input) => this.ingredients = input}
						onChange={(e) => this.handleChange(e, this.props.recipeId)}
						name="ingredients"
						type="text" 
						value={this.props.details.ingredients.join(',')}/>
					<button 
						onClick={this.props.onSave}
						className="btn btn-success">Save
					</button>
				</div>
			</form>
		)
	}
}

export default EditForm;


