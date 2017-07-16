import React,{Component} from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component{
	
	renderWeather(cityData){
		const name=cityData.city.name;
		const temps=cityData.list.map(weather=>weather.main.temp);
		const pressure=cityData.list.map(weather=>weather.main.pressure);
		const humidity=cityData.list.map(weather=>weather.main.humidity);
		const speed=cityData.list.map(weather=>weather.wind.speed);
		const { lon, lat }=cityData.city.coord;

		//console.log(temps);
		return(
			<tr key={name}>
			 <td className="img-resposive"><GoogleMap  lon={lon} lat={lat}/></td>
			 <td className="img-resposive">
			 	<Chart data={temps} color="red" units="K"/>
			 </td>
			 <td className="img-resposive">
			 	<Chart data={pressure} color="blue" units="hpa"/>
			 </td>
			 <td className="img-resposive">
			 	<Chart data={humidity} color="green" units="%"/>
			 </td>
			 <td className="img-resposive">
			 	<Chart data={speed} color="purple" units="mph"/>
			 </td>
			  
             
			</tr>

			
			);
	}

	render(){
		return(
		  <div className="container">
		  
		   <div className="row">
		   <div className="col-md-12 col-sm-12 col-xs-12">

			<table className="table table-hover">
			 <thead>
			  <tr>
			   <th>City</th>
			   <th>Temparature(K)</th>
			   <th>Pressure(hpa)</th>
			   <th>Humidity(%)</th>
			   <th>Wind(mph)</th>
			  </tr>
			 </thead>

			 <tbody className="img-resposive">
			  {this.props.weather.map(this.renderWeather)}
			 </tbody>
			</table>
			</div>
			</div>
			</div>
	        
			);
	}
}
function mapStateToProps({ weather }){
	return{weather};


}


export default connect(mapStateToProps)(WeatherList);