import React from 'react';

class ProgressBar extends React.Component {

    componentDidMount() {
    }

    state = {
        percentage: 50,
    }

    render() {
        return(
            <div className="progress-bar my-5">
                <div className={"dot-marks " + (this.props.percentage >= 15 ? 'dot-marks--highlighted' : '')} title="funny" style={{marginLeft: '25%'}}></div>
                <div className={"dot-marks " + (this.props.percentage >= 50 ? 'dot-marks--highlighted' : '')} style={{marginLeft: '50%' }}></div>
                <div className={"dot-marks " + (this.props.percentage >= 65 ? 'dot-marks--highlighted' : '')} style={{marginLeft: '75%' }}></div>
                <div className={"dot-marks " + (this.props.percentage >= 100 ? 'dot-marks--highlighted' : '')} style={{marginLeft: '100%' }}></div>

                <div className="dot" style={{marginLeft: `${this.props.percentage }%`, zIndex: 3}}></div>
                <div className="filler" style={{width: `${this.props.percentage }%`}}></div>
            </div>
        );
    }

}

export default ProgressBar;
