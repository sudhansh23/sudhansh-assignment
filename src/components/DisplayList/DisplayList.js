import React from 'react';

const DisplayList = props => {

    return (
        <div class="row">
            <div class="col-4">
                <div class="list-group" id="list-tab" role="tablist">
                    <li id = {props.id}>
                        <div class="list-group-item list-group-item-action" onClick={props.openModal}>{props.name}</div>
                    </li>
                </div>
            </div>
        </div>
    )
}

export default DisplayList;