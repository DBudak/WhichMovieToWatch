import React, {Component} from 'react';



class Main extends Component {
    componentDidMount(){
        this.props.getAPIConfig();
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    {React.cloneElement(this.props.children, this.props)}
                </div>                
            </div>
        );
    }
}

export default Main;