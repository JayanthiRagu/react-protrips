import React, { Component } from 'react';
import './Trip.css';

class ListComponent extends Component {
    constructor(props){
        super(props);
        const listArray=[];
        var date=[];
        this.props.date.map((arr,index)=>{
            var month=arr.getMonth()+1;
            var day=arr.getDate();
            var year=arr.getFullYear();
            console.log(month)
            console.log(day)
            console.log(year);
            if(month.length<2)
                month='0'+month;
            if(day.length<2)
                day='0'+day;
            console.log(year+"-"+month+"-"+day);
            date.push(year+"-"+month+"-"+day);
            console.log(arr.date)
        })
        listArray.push({
            date:date,
            place:this.props.place,
            type:this.props.type
        });
        this.state={
            listArray,
        }
    }
    render() {
        return (
            <div class="listComponent">
                <p class="heading">All Trip</p>
                <div class="listDetails">
                    <div>Date</div>
                    <div>Place</div>
                    <div>Type</div>
                    <table>
                     {
                    this.state.listArray.map((arr,index) => {
                    return (<tr key={index}>
                      <td>{arr.date}</td>
                      <td>{arr.place}</td>
                      <td>{arr.type}</td>
                    </tr>)
                    })
                    }
                    </table>
                </div>
            </div>
        );
    }
}

export default ListComponent;