import React from 'react';
import Form from '../components/Form';
import Card from '../components/bootstrap/Card';
import ProgressBar from '../components/ProgressBar';
import axios from 'axios';
import { connect } from 'react-redux';
import { addPercentage } from '../redux/actions/profileActions';
import NavBar from '../components/NavBar';

// const ADD_USERS_URL = "http://localhost:8080/profile/adduser";

class HomePage extends React.Component {

    componentDidMount() {
        console.log(this.props);
    }

    state = {
        error: {
            show: false,
            message: ""
        },
        // Array of objects describing each input of the form
        form : [
            {
                attributes: {
                    id: "fname", 
                    name: "fname", 
                    type: 'text', 
                    placeholder: 'Boncie', 
                    autoComplete: "given-name"
                }, 
                label: 'First Name'
            },
            {
                attributes: {
                    id: "lname", 
                    name: "lname", 
                    type: 'text', 
                    placeholder: 'Reyes', 
                    autoComplete: "family-name"
                }, 
                label: 'Last Name'
            },
            {
                attributes: {
                    id: "phone", 
                    name: "phone", 
                    type: 'tel', 
                    placeholder: '4162333234', 
                    autoComplete: "tel", 
                    maxLength: 14, 
                    title: "Please use the following format \n (###) ###-####", 
                }, 
                format: 'phone',
                label: 'Phone Number'
            },
            {
                attributes: {
                    id: "email", 
                    name: "email", 
                    type: 'email', 
                    placeholder: 'example123@hotmail.com', 
                    autoComplete: "email", 
                    required : true
                }, 
                label: 'Email'
            },
        ],

        cards : {
            bill : {
                src: require("../assets/images/mario.png"),
                title: "Bill",
                text: "Hi my Name is BiLl, TrEaT mE tO sOmE MAcDonaLdS, PlEasE anD thank You HaHA",
                footer: "Powered by express",
                link: {
                    url: "https://github.com/hackermanone",
                    text: "Yo Wassup Homie",
                    target: "_blank"
                },
                style: {width: '19rem', display: 'inline-block', marginLeft: '10px'}
            },
            boncie : {
                src: require("../assets/images/rilakuma.png"),
                title: "Boncie",
                text: "Hi my Name is BonCie, TrEaT mE tO sOmE BinG BaI BuNf, PlEasE anD thank You HaHA",
                footer: "Made by Luke"
            },
            matthew : {
                src: require("../assets/images/eyes.png"),
                title: "Matthew",
                text: "Hi my Name is BatTheW, TrEaT mE tO sOmE KfC, PlEasE anD thank You HaHA",
                footer: "Made by Luke"
            },
            luke : {
                src: require("../assets/images/waffles.jpg"),
                title: "Luke",
                text: "Hi my Name is LuKE, TrEaT mE tO sOmE BaffLeS, PlEasE anD thank You HaHA",
                footer: "Made by Ricky"
            }
        }
    };

    render() {
        return(
            <div className="page">
                <NavBar />
                <h5 className="mx-3 my-3">Progress</h5>
                <ProgressBar percentage={this.props.percentage}/>
                <Form formInputs={this.state.form} submitValue="Send me that BILL" onSubmit={this.handleSubmit} error={this.state.error}></Form>
                {/* <button onClick={this.handleClick}>Click me</button> */}
                <div className="card-deck">
                    <Card cardInfo={this.state.cards.bill}/>
                    <Card cardInfo={this.state.cards.boncie}/>
                    <Card cardInfo={this.state.cards.matthew}/>
                    <Card cardInfo={this.state.cards.luke}/>
                </div>
            </div>
        );
    }

    // handleClick = () => {
    //     this.props.dispatch(addPercentage(25,this.props.percentage));
    // }

//     handleSubmit = (event) => {
//         event.preventDefault();
//         let body = {};
//         const data = new FormData(event.target);

//         for (let key of data.keys()) {
//             // compute property name for body object
//             body[key] = data.get(key);
//         }

//         axios.post('http://localhost:8080/profile/adduser', body)
//         .then((response)=>{console.log("response form server", response)})
//         .catch((err)=>{
//             this.setState({error: { show: true, message: "Something went wrong! oh no"}})
//         })

//         axios.post('http://localhost:8080/profile/sendmail', body)
//         .then((response) => {console.log("sent email")})
//         .catch((err) => {
//             this.setState({error: {show: true, message: "Failed sending you an email"}})
//         })
//     }
}

function mapStateToProps(state) {
    return { 
        percentage: state.percentage,
        formInputs: state.formInputs,
    };
}

export default connect(mapStateToProps)(HomePage);