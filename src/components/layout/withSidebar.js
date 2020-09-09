import React, {Component} from 'react'
import Sidebar from './Sidebar'

export default function withSidebar(ChildComponent) {
    return class extends Component{
        constructor(props) {
            super(props);
        }
        
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

 
