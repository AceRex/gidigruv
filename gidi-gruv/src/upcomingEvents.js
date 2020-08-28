import React from 'react';
import styles from "styled-components";



function UpcomingEvents(){
    return(
        <Main>
            <p>Coming Events</p>
        </Main>
    )
}


const Main = styles.div`
.body{
    background-color: var(--ColorWhite);
}
`
export default UpcomingEvents;