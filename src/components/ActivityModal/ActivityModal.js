import React, { Component } from 'react';
import Modal from '../UI/Modal/Modal';
import './ActivityModal.css';

const ActivityModal = props => {

    const timings = props.activityPeriod.map(time => {
        return(
            <div class="list-group-item list-group-item-action">
                <div>
                    Date: {time.start_time.substr(0, time.start_time.indexOf("2020")+4)}
                </div>
                <div>
                    Timings: {time.start_time.substr(time.start_time.indexOf("2020")+4)} - {time.end_time.substr(time.start_time.indexOf("2020")+4)} 
                </div>
            </div>
        )
    });
    return(
        <div>
            <Modal show={props.openModal}>
                <div>
                    {timings}
                    <div className="buttonLayout">
                        <button type="button" class="btn btn-info" onClick={props.closeModal}>Close Modal</button>
                        <button type="button" class="btn btn-link">View All</button>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default ActivityModal;