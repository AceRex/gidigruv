import React from "react";
import Header from "../components/header";
import Sidebar from './sidebar'
import { userData } from "./userData";

export default class Dashboard extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Sidebar />
        
      </>
    );
  }
}
