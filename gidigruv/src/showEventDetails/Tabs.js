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
          <p>You May Also Like:</p>
          <TabList>
            <Tab>Events from Same Category</Tab>
            <Tab>Events from Same Location </Tab>
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