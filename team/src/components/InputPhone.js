import React from 'react'

export default class InputPhone extends React.Component {
    state = {
        value: "",
        formatted: false,
    }

    render() {
        return <input { ...this.props.attributes } 
            pattern="[(][0-9]{3}[)] [0-9]{3}-[0-9]{4}"
            onChange={this.handleChange} 
            value={this.state.value}
            className="form-control"
            />
    }

    handleChange = (e) => {
        let regex = /\d{10}/;
        let formatted = this.state.formatted;

        // update set and format the input if its reached 10 characters (# of digits in phone number)
        this.setState(
            { value: e.target.value },
            // callback
            () => {
                if (this.state.value.match(regex) && !formatted) {
                    let string = this.state.value;
                    this.setState({
                        value : "(" + string.slice(0,3) + ") " + string.slice(3,6) + "-" + string.slice(6),
                        formatted: true
                    })
                }
            }
        )
        
        // reset formatted state if it goes blank
        if (e.target.value.length === 0) this.setState( {formatted: false} )
    }



}