import React from 'react';
import './ShowImage.css';

const ShowImage = props => {
    return(
        <div className="showImage">
            <div className="image-user-name">
                <img src={props.profileImage} alt=""/>
                <div className="name-handler">
                    <span> {props.name} </span>
                    <span> @{props.handlerName} </span>
                </div>
            </div>
            <div className="image-view">
                <img src={props.image} alt="" />
            </div>
            <div className="load-more">
            <a title="Download photo" href={props.download + "?force=true"} rel="nofollow" download target="_blank"  className="load-more-button">
                <span>Download</span>
            </a>
            </div>
            <div className="close-icon" onClick={props.closeModal}>
                <i className="fa fa-times-circle"></i>
            </div>
            
        </div>
    );
}

export default ShowImage;