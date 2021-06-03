import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import React from 'react';
import AddComponent from './component/AddComponent';
import HomeComponent from './component/HomeComponent';
import ListComponent from './component/ListComponent';
import
{
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

class App extends React.Component {
  constructor(){
    super();
    this.state={
      arrdate:[],
      arrplace:[],
      arrtype:[]
    }
  }
  update=(date,place,type)=>{              
    this.setState({arrdate:date,arrplace:place,arrtype:type});
  }
  render()
  {
  return (
    <React.Fragment>
      <Router>
          <Header/>
        <div className="App">
            <Switch>
                <Route exact path="/">
                    <HomeComponent count={this.state.arrdate.length}  type={this.state.arrtype}></HomeComponent>
                </Route>
                <Route path="/add">
                    <AddComponent date={this.state.arrdate} place={this.state.arrplace} type={this.state.arrtype} update={this.update}></AddComponent>
                </Route>
                <Route path="/list">
                    <ListComponent date={this.state.arrdate} place={this.state.arrplace} type={this.state.arrtype}></ListComponent>
                </Route>
            </Switch>
        </div>
      </Router>
    </React.Fragment>
  );
}
}

export default App;
