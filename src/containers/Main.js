import React, {Component} from 'react';



class Main extends Component {
    componentDidMount(){
        this.props.getAPIConfig();
    }

    render() {
        return (
            <div>
                    {React.cloneElement(this.props.children, this.props)}             
            </div>
        );
    }
}

export default Main;