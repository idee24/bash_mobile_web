import React,{Component} from 'react';
// import {Nav} from './components';
import Header from './components/Header/Header';
import EventImage from './components/EventImage/EventImage';
import Boxes from './components/Boxes/Boxes';
import Attendees from './components/Attendees/Attendees';
import Features from './components/Features/Features';


export default class App extends Component{
  render(){
    return(
      <div>
        <Header />
        <EventImage />
        {/* <Features /> */}
        <Boxes />
        <Attendees />
        {/* <Nav lists={[{name:'Home',link:'/'},{name:'AboutUs',link:'/about-us'}]}/> */}
      </div>
    )
  }
}

