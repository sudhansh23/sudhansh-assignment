import React from 'react';

const DisplayList = props => {

    return (
        <div className="row">
            <div className="col-6">
                <div className="list-group" id="list-tab" role="tablist">
                    <li key = {props.id}>
                        <div className="list-group-item list-group-item-action" onClick={props.openModal}>
                            {props.name}
                            <div>Time Zone: {props.tz}</div>
                        </div>
                    </li>
                </div>
            </div>
        </div>
    )
}

export default DisplayList;