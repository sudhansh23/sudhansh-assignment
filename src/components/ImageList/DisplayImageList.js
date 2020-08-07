import React, { Component } from 'react';
import Img from './Img';
import './ImageList.css';
import { Redirect, withRouter} from 'react-router-dom';

class DisplayImageList extends Component{

    viewImage = (id, name, handlerName, image, profileImage, downloadImage) => {
        this.props.history.push("/viewimage", {id ,name, handlerName, image, profileImage, downloadImage});
    }

    render() {
        return (
            <React.Fragment>
                <ul className="img-list">
                    {this.props.data.map(img => (
                            <Img 
                                url={img.urls.small} 
                                name={img.user.first_name} 
                                self={img.user.profile_image.small}
                                key={img.id}
                                download={img.links.download_location}
                                viewImage={() => this.viewImage(img.id, 
                                    img.user.first_name, 
                                    img.user.instagram_username, 
                                    img.urls.small, 
                                    img.user.profile_image.small, 
                                    img.links.download
                                )}
                            />
                        ))
                    }
                </ul>
            </React.Fragment>
        )
    }
}

export default withRouter(DisplayImageList);