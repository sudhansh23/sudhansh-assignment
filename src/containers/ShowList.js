import React, { Component } from 'react';
import DisplayList from '../components/DisplayList/DisplayList';
import ActivityModal from '../components/ActivityModal/ActivityModal';
import './ShowList.css';


class ShowList extends Component{
    state= {
        members: [],
        openModal: false,
        activityPeriod:''
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

    openModal = (userActivity) => {
        console.log(userActivity)
        // const userActivePeriod = userActivity.filter(period => period.activityPeriods.id === memberId);
        this.setState({openModal: true, activityPeriod: userActivity})
    }

    closeModal = () => {
        this.setState({openModal: false})
    }

    render(){
        console.log(this.state.activityPeriod)
        const activityPeriods = this.state.members.map(activityPeriod => {
            return{
                activityPeriods : {
                    id: activityPeriod.id,
                    activityPeriod: activityPeriod.activity_periods
                }
            }
        })
        console.log(activityPeriods);
        
        return(
            <React.Fragment>
                <div className="container">
                    <div className="ShowList">
                    <span className="ListHead">List of People </span>
                    {this.state.members.map(member => {
                        return(
                            <DisplayList
                            key= {member.id} 
                            id={member.id}
                            name= {member.real_name}
                            tz= {member.tz} 
                            openModal= {()=> this.openModal(member.activity_periods)}/>
                        );
                    }
                    )}
                    </div>
                </div>
                { this.state.openModal ? <ActivityModal closeModal={this.closeModal} openModal={this.state.openModal} activityPeriod={this.state.activityPeriod}/> : null}
                
            </React.Fragment>
        );
    }
}

export default ShowList;