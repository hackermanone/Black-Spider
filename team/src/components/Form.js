import React from 'react';
import InputPhone from './InputPhone';

/*
    this.props.formInputs : Array of Objects
        Object schema
            attributes : object (direct mapping to attributes for input)
            label : string (label for the input)
            format : string ("phone" is the only supported format)
    this.props.submitValue : string (what text appears for the submit button)
    this.props.onSubmit : function ()
    this.props.error : object
*/

class Form extends React.Component {

    render() {
        return (
            <form onSubmit={this.props.onSubmit}>
                {this.renderItems()}
                <button type="submit" className="btn btn-dark">{this.props.submitValue}</button>
                {this.props.error.show === true ? <div class="error text-danger">{this.props.error.message}</div> : null}
            </form>
           
            )
    }

    renderItems = () => {
        return this.props.formInputs.map((input, index) => {
            let attributes = input.attributes;

                return (  
                    <div key={input.attributes.id}>
                        <label htmlFor={input.attributes.id}>
                            <h6>{input.label}</h6>
                        </label> 
                        {
                            input.format === "phone" ? this.renderInputPhone(input) :
                                <input className="form-control" { ...attributes } />
                        }
                    </div>
                )
        })
    }

    renderInputPhone = (input) => {
        // only format type is phone for now
        return <InputPhone attributes={input.attributes}></InputPhone>
    }
}

export default Form;