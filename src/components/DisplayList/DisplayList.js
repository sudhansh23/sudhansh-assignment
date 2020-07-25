import React from 'react';

const DisplayList = props => {

    return (
        <div class="row">
            <div class="col-6">
                <div class="list-group" id="list-tab" role="tablist">
                    <li key = {props.id}>
                        <div class="list-group-item list-group-item-action" onClick={props.openModal}>
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