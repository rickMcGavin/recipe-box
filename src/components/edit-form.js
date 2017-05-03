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
			[e.target.ingredients]: e.target.value.split(',')
		}
		this.props.updateRecipe(key, updatedRecipe);
	}



	render() {
		return(
			<div className="modal" tabIndex="-1" role="dialog">
			  <div className="modal-dialog" role="document">
			    <div className="modal-content">
			      <div className="modal-header">
			        <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
			        <h4 className="modal-title">Modal title</h4>
			      </div>
			      <div className="modal-body">
			        <p>One fine body&hellip;</p>
			      </div>
			      <div className="modal-footer">
			        <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
			        <button type="button" className="btn btn-primary">Save changes</button>
			      </div>
			    </div>
			  </div>
			</div>
		)
	}
}

export default EditForm;


// <form ref={(input) => this.recipeForm = input}>
// 				<div className="form-group">
// 					<label htmlFor="recipeName">Recipe Name</label>
// 					<input 
// 						className="form-control" 
// 						id="recipeName" 
// 						onChange={(e) => this.handleChange(e, this.props.recipeId)}
// 						ref={(input) => this.name = input}
// 						type="text" 
// 						value={this.props.details.name}/>
// 					<label htmlFor="ingredients">Ingredients</label>
// 					<input 
// 						className="form-control" 
// 						id="ingredients" 
// 						ref={(input) => this.ingredients = input}
// 						type="text" 
// 						value={this.props.details.ingredients.join(',')}/>
// 					<button 
// 						onClick={this.props.onSave}
// 						className="btn btn-success">Save
// 					</button>
// 				</div>
// 			</form>