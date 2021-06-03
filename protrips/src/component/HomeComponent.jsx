import React, { Component } from 'react';
import './Trip.css';

class HomeComponent extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            countClub:0,
            countTrek:0,
            countTropic:0,
            totalCount:0
        }
    }
    componentWillMount(){
        console.log(this.props.type);
        if(this.props.type){
            this.setState({totalCount:this.props.count,
                countClub:this.props.type.filter((data)=>(data=="Club")).length,
        countTrek:this.props.type.filter((data)=>(data=="Trek")).length,
        countTropic:this.props.type.filter((data)=>(data=="Tropic")).length,});
        }
    }
    render() {
        return (
            <div class="HomeComponent">
                <div class="heading">
                    {this.state.totalCount}
                </div>
                <div class="listCount">
                    <p>{this.state.countClub} Clubs</p>
                    <p>{this.state.countTrek} Treks</p>
                    <p>{this.state.countTropic} Tropics</p>
                </div>
            </div>
        );
    }
}

export default HomeComponent;