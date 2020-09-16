import React from 'react'
import Header from '../components/header'
import { userData } from './userData'

export default class Dashboard extends React.Component{
    render(){
        return(
            <>
            <Header />
            <h3>Dashboard</h3>
            </>
        )
    }
}