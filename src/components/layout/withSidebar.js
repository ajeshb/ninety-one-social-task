import React, {Component} from 'react'
import Sidebar from './Sidebar'

export default function withSidebar(ChildComponent) {
    return class extends Component{
        
        render(){
            return (
                <div className='side-bar-container' >
                    <Sidebar /> 
                    <ChildComponent {...this.props} />
               </div>
            );
        }
    } 
}

 
