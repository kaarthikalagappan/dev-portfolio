import React from 'react';
import MaterialUIProgressBar from './materialUI'

const ProgressBar = (props) => {
    console.log("props")
    console.log(props)
    return (
        <div class="progress-bar">
            {/* <p class="p-title">{props.title}</p> */}
            <MaterialUIProgressBar variant="determinate" value={props.proficiency}/>
        </div>
    );
}

export default ProgressBar;