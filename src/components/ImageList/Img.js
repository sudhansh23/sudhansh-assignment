import React from 'react';
import './ImageList.css';

const Img = props => {
    return(
        <li className="img-wrap" onClick={props.viewImage}>
            <img src={props.url} alt=""/>
            <div className="owner-image">       
                <img src={props.self} alt="" />
                <div className="user-name"> Image by <span>{props.name}</span></div>
            </div>
        </li>
    );
};

export default Img;