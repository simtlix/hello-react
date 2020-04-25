import React, { Component } from 'react';
import axios from 'axios';
import AlbumCard from './album-card';
import logo from './logo.svg';


class AlbumPhotoList extends Component {

	

	constructor(props){

		super(props);
		
		this.state = {photos:null};

	}


	  componentDidMount() { 
	    axios.get('https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=6e8a597cb502b7b95dbd46a46e25db8d&photoset_id=72157660115185712&user_id=137290658%40N08&format=json&nojsoncallback=true') 
			.then(({data}) =>  	
				{   console.log(data.photoset);
					this.setState({
					photos:data.photoset.photo
					});
				}
			) 
			.catch(function (error) { 	
				console.log(error); 
			}); 
	  } 


	render(){
		if(!this.state.photos){
			return (
					<div>
						<img src={logo} className="App-logo" alt="loading" />
						<br/>
						Loading...
					</div>
				);
		}

		return this.state.photos.map((photo)=> 
				<AlbumCard key={photo.id} header={photo.title} imageUrl={ 'https://farm'+ photo.farm +'.staticflickr.com/' + photo.server +'/'+ photo.id +'_'+ photo.secret +'.jpg'} title="GO" />
			);


	}


}


export default AlbumPhotoList;
