import React, {Component} from 'react';

import { Link } from 'react-router';

class Main extends Component {

    constructor(){
        super();
    }

    componentDidMount(){
        this.props.getAPIConfig();
    }

    render() {
        return (
            <div className="main-wrapper">
                <div className="presentation">
                    {React.cloneElement(this.props.children, this.props)}
                </div>                
            </div>
        );
    }
}

export default Main;