import React, { Component } from 'react';


class EditForm extends Component {
	constructor(props) {
		super(props);

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e, key) {
		e.preventDefault();
		const recipe = this.props.details;
		const updatedRecipe = {
			...recipe,
			[e.target.name]: e.target.value
		}
		this.props.updateRecipe(key, updatedRecipe);
	}



	render() {
		return(
			<div className="recipe-form">
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
							defaultValue={this.props.details.name}/>
						<label htmlFor="ingredients">Ingredients</label>
						<input
							className="form-control"
							id="ingredients"
							ref={(input) => this.ingredients = input}
							onChange={(e) => this.handleChange(e, this.props.recipeId)}
							name="ingredients"
							type="text"
							defaultValue={this.props.details.ingredients}/>
					</div>
				</form>
				<button
					onClick={(e) => this.props.onSave(e)}
					className="btn btn-success">Save
				</button>
			</div>
		)
	}
}

export default EditForm;
