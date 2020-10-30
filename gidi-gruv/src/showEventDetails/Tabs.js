import React, { useState } from 'react'
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import './SED.css'
import SameCate from './samecategory/samecategory'
import SameLoc from './samelocation/sameLocation'


  

export default function TabSelect(){
    const[active, setActive] = useState('#ffffff6e')

    const handleActive = (active) => {
        setActive('#fff');
    }

    const list = {
        marginRight: "2rem",
        fontSize: 25,
        borderbottom: 'solid 2px transparent', 
        color: `${active}`,
        cursor: 'pointer',
    
      };
    return(
        <Tabs>
          <TabList style={styles}>
            <Tab style={list} >Events by Category</Tab>
            <Tab style={list} >Events by Location </Tab>
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