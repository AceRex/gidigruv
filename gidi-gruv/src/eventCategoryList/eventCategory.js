import React from 'react'
import Items from './eventCateData'
import './eventsCate.css'


export default class EventCat extends React.Component{
    constructor(){
        super();
        this.state = {
            Datas : Items
        }
    }
    render(){
        const Load = this.state.Datas.map(data =>  <span>{data.item}</span>)
        return(
            <>
                <p style={{color:'#141414',width: '85%', margin: 'auto', fontSize: '25px'}}>Categories Of Events</p>

            <div className='other-pages'>
                {Load}
            </div>
            </>
        )
    }
}