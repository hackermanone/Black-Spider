import React from 'react';

export default class Card extends React.Component {

    render() {
        let cardInfo = this.props.cardInfo,
            style = cardInfo.style || {width: '18rem'};
        return(
            <div className="card" style={style}>
                <img className="card-img-top" src={cardInfo.src} alt="Card"/>
                <div className="card-body">
                    <h5 className="card-title">{cardInfo.title}</h5>
                    <p className="card-text">{cardInfo.text}</p>
                    {this.renderLink()}
                </div>
                {this.renderFooter()}
            </div>
        )
    }

    /*
        @version 1.0.0
        @author [Ricky Chen](https://github.com/hackermanone)
    */
    renderFooter = () => {
        let cardInfo = this.props.cardInfo;

        if (cardInfo.footer) {
            return (
                <div className="card-footer">
                    <small className="text-muted">{cardInfo.footer}</small>
                </div>
            );
        }
    }

    renderLink = () => {
        let cardInfo = this.props.cardInfo;

        if (cardInfo.link) {
            return (
                <a href={cardInfo.link.url} target={cardInfo.link.target}>{cardInfo.link.text}</a>
            )
        }
    }
}