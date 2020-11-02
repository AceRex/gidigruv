import React, { Component, useState } from 'react'
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import './SED.css'
import SameCate from './samecategory/samecategory'
import SameLoc from './samelocation/sameLocation'


  

export default class TabSelect extends Component{
  constructor(){
    super()
    this.state = {
      active: ' ', 
      click: true,     
    }
    this.handleActive = this.handleActive.bind(this)
  }
  handleActive(){
   this.setState({
         active: 'active'
   })
  }
  handleNotActive(){
    this.setState({
      active: 'null'

    })
  }
    render(){
      return(
        <Tabs>
          <TabList className='hello'>
            <Tab className={this.state.active} onClick={this.state.click ? this.handleActive : this.handleNotActive }>Same Category</Tab>
            <Tab className={this.state.active} onClick={this.state.click ? this.handleActive : this.handleNotActive }>Same Location </Tab>
          </TabList>

          <TabPanel>
            <SameCate />
          </TabPanel>
          <TabPanel>
            <SameLoc />
          </TabPanel>
        </Tabs>
    )
    }
    
}
const styles = {
    display: "flex",
    padding: "2rem 0rem",
    listStyleType: "none",
  };

const container = {
    width: '85%',
    margin: 'auto'
}


const activeList = {
    color: '#fff',
    borderbottom: 'solid 2px var(--ColorPink)', 
}