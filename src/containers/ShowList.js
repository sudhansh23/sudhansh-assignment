import React, { Component } from 'react';
import DisplayList from '../components/DisplayList/DisplayList';
import Modal from '../components/UI/Modal/Modal';
import ActivityModal from '../components/ActivityModal/ActivityModal';


class ShowList extends Component{
    state= {
        members: [],
        openModal: false
    }

    componentDidMount(){
        let url = 'https://run.mocky.io/v3/0ee43d2d-1b0b-4407-afdb-ad2d46d28e21';

        fetch(url)
            .then(response => response.json())
            .then(data => { console.log(data)
                this.setState({ members: data.members})
                console.log(this.state.members)
            })
    }

    openModal = () => {
        this.setState({openModal: true})
    }

    closeModal = () => {
        this.setState({openModal: false})
    }

    render(){
        return(
            <React.Fragment>
                <div>Your list
                    {this.state.members.map(member => {
                        return(
                            <DisplayList
                            id= {member.id} 
                            name= {member.real_name}
                            tz= {member.tz} 
                            openModal= {this.openModal}/>
                        );
                    }
                    )}
                </div>
                <Modal show={this.state.openModal}
                    modalClosed={this.closeModal}>
                        <ActivityModal close={this.closeModal} />
               </Modal>
            </React.Fragment>
        );
    }
}

export default ShowList;