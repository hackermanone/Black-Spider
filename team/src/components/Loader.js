import React from 'react';

export default class Loader extends React.Component {

    state = {
        isLoading: true
    }

    componentDidMount() {
        // animation is complete after 4.4s
        setTimeout(
            () => {
                this.setState({isLoading: false});
            }, 
            4400 // css animation spin-circle--clockwise and the counter clock wise are 4.4s long in main.css
        )
    }

    render() {
        return(
            <div>
                {this.state.isLoading === true ? this.renderCircle() : this.renderArrow()}
                {/* Informational text appears after animation is complete */}
                {!this.state.isLoading && <code className="auto" style={{ fontSize:24, textAlign:"center" }}>Press any key to continue</code>}
            </div>
        )
    }


    renderCircle = () => {
        return (
                <svg className="auto" height="100" width="100">
                    <circle className="spin-circle--clockwise" cx="50" cy="50" r="35" stroke="darkblue" strokeWidth="10" style={{fill:"none", strokeDasharray:60}}></circle>
                    <circle className="spin-circle--counter-clockwise" cx="50" cy="50" r="20" stroke="aliceblue" strokeWidth="10" style={{fill:"none", strokeDasharray:30}}></circle>
                </svg>
        )
    }   

    /*
        Uses this.props.goToNextPage
    */
    renderArrow = () => {
        return (
        <svg
            onClick={this.props.goToNextPage}
            className="auto pointer"
            id="svg8"
            version="1.1"
            viewBox="0 0 5.2916665 5.2916668"
            height="100"
            width="100">
           <defs
              id="defs2">
             <linearGradient
                id="linearGradient2287">
               <stop
                  id="stop2283"
                  offset="0"
                  style={{stopColor:"#0000b4", stopOpacity:1}} />
               <stop
                  id="stop2285"
                  offset="1"
                  style={{stopColor:"#0000b4", stopOpacity:0}} />
             </linearGradient>
             <linearGradient
                gradientTransform="translate(-0.12387957,-0.09290968)"
                gradientUnits="userSpaceOnUse"
                y2="294.39135"
                x2="5.0277023"
                y1="294.39135"
                x1="0.6009769"
                id="linearGradient2289"
                href="#linearGradient2287"
                />
           </defs>
           <g
              transform="translate(0,-291.70832)"
              id="layer1">
             <path
                id="path815"
                d="m 0.64452032,292.19645 -0.0334087,4.2095 4.00904298,-2.03793 z"
                style={{"fill":"url(#linearGradient2289)","fillOpacity":"1","stroke":"#0000f6","strokeWidth":"0.265","strokeLinecap":"butt","strokeLinejoin":"miter","strokeOpacity":"1","strokeMiterlimit":"4","strokeDasharray":"none"}} />
           </g>
         </svg>
         )
    }   
}