import React, { Component } from 'react';

class Recipe extends Component {
	constructor(props) {
		super(props);

		this.renderRecipe = this.renderRecipe.bind(this);
		this.changeHide = this.changeHide.bind(this);
		this.handleChange = this.handleChange.bind(this)
		this.onEdit = this.onEdit.bind(this);
		this.onSave = this.onSave.bind(this);

		this.state = {
			visible: 'hide',
			edit: true
		}
	}

	componentWillMount() {
		 if (this.props.local[this.props.recipeId]) {
			this.setState({edit: false});
		} 
	}

	onEdit() {
		this.setState({ edit: true });
	}

	onSave() {
		this.setState({ edit: false });
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

	changeHide() {
		this.state.visible === 'hide' ?
			this.setState({ visible: 'show' })
		:
			this.setState({ visible: 'hide' })
	}

	renderEdit() {
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
							defaultValue={this.props.details.name}
							placeholder="Enter the name of your recipe"/>
						<label htmlFor="ingredients">Ingredients</label>
						<input
							className="form-control"
							id="ingredients"
							ref={(input) => this.ingredients = input}
							onChange={(e) => this.handleChange(e, this.props.recipeId)}
							name="ingredients"
							type="text"
							defaultValue={this.props.details.ingredients}
							placeholder="Enter ingredients separated by commas"/>
					</div>
				</form>
				<button
					onClick={() => this.onSave()}
					className="btn btn-success">Save
				</button>
 			</div>
			)
	}

	renderRecipe() {
		return( 
			<div className="recipe">
				<li className="list-group-item">
					<h4 onClick={this.changeHide}>
						{this.props.details.name}
					</h4>
					<ul className={this.state.visible}>
						{
							this.props.details.ingredients.split(',').map((ingredient, i) => {
								return <li key={i}>{ingredient}</li>
							})
						}
					<div className="button-group">
						<button
							onClick={() => this.onEdit()}
							className="btn btn-warning">Edit</button>
						<button
							onClick={() => this.props.removeRecipe(this.props.recipeId)}
							className="btn btn-danger">Delete</button>
					</div>
					</ul>
				</li>
			</div>
		);
	}

	render(){
		
		 	if (this.state.edit) {
		 		return this.renderEdit(); 
 			} else {
			 	return this.renderRecipe();
 			} 
		 
	}
}

export default Recipe
