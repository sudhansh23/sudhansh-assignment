import React, { Component } from 'react';
import Modal from '../../components/UI/Modal/Modal';
import ShowImage from '../../components/ShowImage/ShowImage';
import unsplash, {toJson} from 'unsplash-js';

class DisplayImage extends Component{

    state ={
        details:[],
        fetched: false
    }
    componentDidMount(){
        this.setState({ details: this.props.location.state, fetched: true})
        
    }

    closeModal = () => {
        this.setState({ fetched: false});
        this.props.history.push('/homepage');
    }

    render(){
        return(
            <div>
                <Modal show={this.state.fetched}>
                    <ShowImage 
                        id={this.state.details.id}
                        name={this.state.details.name}
                        handlerName={this.state.details.handlerName}
                        profileImage={this.state.details.profileImage}
                        image={this.state.details.image}
                        closeModal={this.closeModal}
                        download={this.state.details.downloadImage}/>
                </Modal>
            </div>
        )
    }
}

export default DisplayImage;