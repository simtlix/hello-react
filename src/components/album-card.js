import React, { Component } from 'react';
import Badge from './badge';


class AlbumCard extends Component {


	render()
	{
		return (<div className="col-sm-6 col-md-4">
        <div className="thumbnail">
          <img src={this.props.imageUrl} alt="..."></img>
          <div className="caption">
            <h3>{this.props.header}</h3>
            <p>{this.props.description}</p>
            <p>
              {(() => {
                if(this.props.number)
                  return <Badge title={this.props.title} number={this.props.number}/>
                else
                  return <Badge title={this.props.title}/>
              })()}
            </p>
          </div>
        </div>
      </div>)
	}

}

export default AlbumCard;