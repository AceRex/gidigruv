import React, { Component } from 'react'
import Header from '../components/header'
import { Container } from '@material-ui/core'
import FilterHeader from '../components/filterHeader'
import LiveNowCard from './liveNowCards'


class LiveNow extends Component {
  render() {
    return (
      <div style={mainStyle}>
      <Header/>
      <FilterHeader />
      <LiveNowCard />
      </div>
    )
  }
}

const mainStyle = {
    backgroundColor: "#fff",
}

export default LiveNow
