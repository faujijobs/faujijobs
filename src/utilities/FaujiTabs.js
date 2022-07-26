import React from 'react'
import '../styles/FaujiTabs.css'

function FaujiTabs(props) {
    const tabStyle0 = {
        borderBottom: props.tabSelectedIndex === 0 && "2px solid white",
        
    }

    const tabStyle1 = {
        borderBottom: props.tabSelectedIndex === 1 && "2px solid white" 
    }

    return (
        <>
            <div className='tab-panel'>
                <div className='tabs '>
                    <div className='tab' style={tabStyle0} onClick={() => props.setTabSelectedIndex(0)} >
                        {props.tab1}
                    </div>
                    <div className='tab' style={tabStyle1} onClick={() => props.setTabSelectedIndex(1)}>
                        {props.tab2}
                    </div>
                </div>
            </div>
        </>
    )
}

export default FaujiTabs