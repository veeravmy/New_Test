// import React Component classes
// Both the classes are used to create the component

import React, {Component} from "react";
import Typography from "@material-ui/core/typography";

class First extends React.Component{

    render(){
        return(
            <div>
                <Typography color="primary" variant="h3">ReactJS</Typography>
                <Typography color="initial" variant="h3">ReactJS</Typography>
                <Typography color="secondary" variant="h3">ReactJS</Typography>
                <Typography color="inherit" variant="h3">ReactJS</Typography>
                <Typography color="textPrimary" variant="h3">ReactJS</Typography>
                <Typography color="textSecondary" variant="h3"> ReactJS</Typography>
                <Typography color="error" variant="h3">ReactJS</Typography>
                <Typography color="primary" variant="h3">ReactJS</Typography>


            </div>
        )
    };

};

export default First;