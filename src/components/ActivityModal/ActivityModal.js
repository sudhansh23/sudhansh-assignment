import React, { Component } from 'react';

class ActivityModal extends Component{
    render(){
        return(
            <button onClick={this.props.close}>Close Modal</button>
        )
    }
}

export default ActivityModal;