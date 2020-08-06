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

    downloadImage = (id) => {
        // let url = 'https://api.unsplash.com/photos/?downloads&client_id=Utvc1kHVV3vU_qJhxJYVVLm4jqOJFj9CJaNM1UlDqRg';
        // fetch(url)
        // .then(data => {
        //     console.log(data)
        // })
        console.log(id)
        unsplash.photos.getPhoto("DYAf-8UTFN8")
            .then(toJson)
            .then(json => {
                unsplash.photos.downloadPhoto(json);
            });
    }
    render(){
        console.log(this.state.details)
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
                        download={this.state.details.downloadImage}
                        downloadImage={() => this.downloadImage(this.state.details.id)}/>
                </Modal>
            </div>
        )
    }
}

export default DisplayImage;