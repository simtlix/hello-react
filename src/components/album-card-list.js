import React, { Component } from 'react';
import axios from 'axios';
import AlbumCard from './album-card';
import logo from './logo.svg';


class AlbumCardList extends Component {

	

	constructor(props){

		super(props);
		const albumsResponse = {
	"photosets": {
		"page": 1,
		"pages": 1,
		"perpage": 3,
		"total": 3,
		"photoset": [{
			"id": "72157675030263626",
			"primary": "22356251255",
			"secret": "029f8e1281",
			"server": "5718",
			"farm": 6,
			"photos": 2,
			"videos": 0,
			"title": {
				"_content": "prueba"
			},
			"description": {
				"_content": ""
			},
			"needs_interstitial": 0,
			"visibility_can_see_set": 1,
			"count_views": "7",
			"count_comments": "0",
			"can_comment": 0,
			"date_create": "1476306576",
			"date_update": "1476306577"
		}, {
			"id": "72157660115185712",
			"primary": "22343185752",
			"secret": "ed4f2a6f51",
			"server": "582",
			"farm": 1,
			"photos": 3,
			"videos": 0,
			"title": {
				"_content": "Album 1"
			},
			"description": {
				"_content": ""
			},
			"needs_interstitial": 0,
			"visibility_can_see_set": 1,
			"count_views": "4",
			"count_comments": "0",
			"can_comment": 0,
			"date_create": "1445426958",
			"date_update": "1445427559"
		}, {
			"id": "72157660115126402",
			"primary": "22343185752",
			"secret": "ed4f2a6f51",
			"server": "582",
			"farm": 1,
			"photos": 3,
			"videos": 0,
			"title": {
				"_content": "Album 2"
			},
			"description": {
				"_content": "Estes es un album"
			},
			"needs_interstitial": 0,
			"visibility_can_see_set": 1,
			"count_views": "5",
			"count_comments": "0",
			"can_comment": 0,
			"date_create": "1445426832",
			"date_update": "1445428332"
		}]
	},
	"stat": "ok"
}
		this.state = {albums:albumsResponse.photosets.photoset};

	}

	render(){
		return this.state.albums.map((album)=> 
				<AlbumCard key={album.id} header={album.title._content} imageUrl={logo} title="GO" number={album.photos}/>
			);


	}


}


export default AlbumCardList;
