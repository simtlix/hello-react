import React, { Component } from 'react';

class Badge extends Component {

	render (){
		return <button className="btn btn-primary" type="button">
        {this.props.title} 
		{(() => {
			if(this.props.number)	
        		return <span className="badge">{this.props.number}</span>
        	else
        		return null;
        })()}
      </button>;
	}

}

export default Badge;