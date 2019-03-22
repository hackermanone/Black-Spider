import React from "react";
import RickyChen from "../components/RickyChen";
import Loader from "../components/Loader";

export default class LoadingPage extends React.Component {

    constructor(props) {
        super(props);
        this.ref = React.createRef();
    }

    componentDidMount() {
        this.ref.current.focus();
    }

    render() {
        return(
            <div className="page" onKeyPress={this.goToNextPage} tabIndex="0" ref={this.ref}>
                <RickyChen />
                <Loader goToNextPage={this.goToNextPage}/>
            </div>
        )
    }

    goToNextPage = () => {
        // to go home page
        this.props.history.push('/home')
    }
}