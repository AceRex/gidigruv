import React, { useState, useEffect } from 'react'


function ScrollToToponMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return null
}


function Overview() {
  
  return (
    <div className='account__'>
      <ScrollToToponMount />
      <div className="profile">
          <h3>Created Events</h3>


      </div>
      <div className="profile">
      <h3>Interested Events</h3>
       
      </div>
    </div>
  )
}

export default Overview;