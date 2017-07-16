import React,{ Component } from 'react';
import {connect} from 'react-redux';
import{bindActionCreators} from 'redux';
import {fetchWeather} from '../actions/index';
class SearchBar extends Component{
 	constructor(props){
 		super(props);
 		this.state={ term:' '};
 		this.onInputChange=this.onInputChange.bind(this);
 		this.onFormSubmit=this.onFormSubmit.bind(this);
}


// creating the function for the onInputChange
onInputChange(event){
	
this.setState({term:event.target.value});

}
// creating the onsubmitform methods
onFormSubmit(event){
event.preventDefault();
// we need to fetch the weather data here
this.props.fetchWeather(this.state.term);
this.setState({term:''});


}
	render(){
		return(
			<form  onSubmit={this.onFormSubmit} className="input-group">
			 <input placeholder="enter the city name"
			 className="form-control"
			 value={this.state.term}
			 onChange={this.onInputChange} />
	         <span className="input-group-btn">
			 <button type="submit" className="btn btn-secondary">submit</button>
			 </span>
			</form>
			);
	}
}

// connecting the searchbar to actio creator
function mapDispatchToProps(dispatch){
	return bindActionCreators({fetchWeather}, dispatch);

}
export default connect( null,mapDispatchToProps)(SearchBar);