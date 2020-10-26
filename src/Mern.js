import React,{Component} from "react";
import FrontEnd from "./FrontEnd";
import Server from "./Server";
import BackEnd from "./BackEnd";

import Alert from "@material-ui/lab/Alert";

class Mern extends React.Component{
    render(){
        return(
            <div >
                <FrontEnd />
                <Server />
                <BackEnd />
                <Alert color="info">Above skills is called as MERN Stack Development</Alert>
            </div>
        )
    };
};
export default Mern;