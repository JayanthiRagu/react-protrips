import React, { Component } from 'react';
import './Trip.css';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import HomeComponent from './HomeComponent';
import ListComponent from './ListComponent';
import moment from 'moment';


class AddComponent extends Component {
    constructor(){
        super();
        this.state={
            startDate:new Date(),
            place:null,
            type:'Club',
            options: [
                'Club', 'Trek', 'Tropic'
              ],
            defaultOption:'Club' 
        }
        this.onSetDate = this.onSetDate.bind(this);
        this.onPlaceHandler = this.onPlaceHandler.bind(this);
        this.onDropdownSelect = this.onDropdownSelect.bind(this);
        this.onSubmitHandler=this.onSubmitHandler.bind(this);
    }

    onSetDate(e){
            console.log(e);
            console.log(new Date());
            // var month=e.getMonth()+1;
            // var day=e.getDate();
            // var year=e.getFullYear();
            // console.log(month)
            // console.log(day)
            // console.log(year);
            // if(month.length<2)
            //     month="0"+month;
            // if(day.length<2)
            //     day="0"+day;
            // console.log(year+"-"+month+"-"+day);
            this.setState({
                startDate:moment(e).toDate()
            });      
            console.log(this.state.startDate);
    }

    onPlaceHandler(e){
        this.setState({
            place:e.target.value
        });

    }

    onDropdownSelect(e){
        console.log(e);
        this.setState({
            type:e.value
        });
    }
    onSubmitHandler(e){
        var currdate=this.props.date;
        var currplace=this.props.place;
        var currtype=this.props.type;
        currdate.push(this.state.startDate);
        currplace.push(this.state.place);
        currtype.push(this.state.type);
        
        this.props.update(currdate,currplace,currtype);
        
        e.preventDefault();
        alert("Trip is successfully added");
        
    }

    render() {
             
        return (
            <div class="addComponent">
                <p class="heading">Add a Trip</p>
                <form onSubmit={this.onSubmitHandler}>
                    <p class="grid">
                        <span class="label">Date:</span>
                        <span class="input">
                        <DatePicker datefromat="MM/dd/yyyy" selected={this.state.startDate} onChange={this.onSetDate} /><br></br>
                        </span><br></br>
                    </p>
                    <p class="grid">
                        <span class="label">Place:</span>
                        <span class="input">
                            <input type="text" onChange={this.onPlaceHandler}></input><br></br>
                        </span><br></br>
                    </p>
                    <p class="grid">
                        <span class="label">Type:</span>
                        <span class="input">
                        <Dropdown options={this.state.options} onChange={this.onDropdownSelect} value={this.state.defaultOption} placeholder="Select an option" /><br></br>
                        </span><br></br>
                    </p>
                        <button type="submit">Submit</button>
                    </form>
            </div>
        );
    }
}

export default AddComponent;