import React, {Component} from 'react';

import { Link } from 'react-router';

class Main extends Component {

    constructor(){
        super();
    }

    componentDidMount(){
        
    }

    render() {
        return (
            <div className="main-wrapper">
                Main Component
                <div className="presentation">
                    {React.cloneElement(this.props.children, this.props)}
                </div>                
            </div>
        );
    }
}

export default Main;