import React, { Component } from 'react';
import axios from 'axios';
import AlbumCard from './album-card';
import logo from './logo.svg';


class AlbumCardList extends Component {

	

	constructor(props){

		super(props);
		
		this.state = {albums:null};

	}


	  componentDidMount() { 
	    axios.get('https://api.flickr.com/services/rest/?method=flickr.photosets.getList&api_key=6e8a597cb502b7b95dbd46a46e25db8d&user_id=137290658%40N08&format=json&nojsoncallback=1') 
			.then(({data}) =>  	
				{   console.log(data);
					this.setState({
					albums:data.photosets.photoset
					});
				}
			) 
			.catch(function (error) { 	
				console.log(error); 
			}); 
	  } 


	render(){
		if(!this.state.albums){
			return (
					<div>
						<img src={logo} className="App-logo" alt="loading" />
						<br/>
						Loading...
					</div>
				);
		}

		return this.state.albums.map((album)=> 
				<AlbumCard key={album.id} header={album.title._content} imageUrl={logo} title="GO" number={album.photos}/>
			);


	}


}


export default AlbumCardList;
