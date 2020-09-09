import React, { Component } from 'react'
import { connect } from 'react-redux'
import withSidebar from '../../components/layout/withSidebar'

import './index.scss'
import { toast } from 'react-toastify'

import MissionCard from './MissionCard'

import { getMissionList } from '../../redux/actions'
import { STATUS } from '../../redux/constants'

class Missions extends Component {

  componentDidMount = () => {
    this.props.dispatch(getMissionList())
  }

  componentWillReceiveProps = nextProps => {
    if(nextProps.missions.status === STATUS.ERROR && nextProps.missions.status !== this.props.missions.status) {
      toast.error('Faild to fetch missions. Please try again')
    }
  }

  render() {
    const { missions } = this.props
    return (
      <div className="missions">
        <h4>Our Missions</h4>
        <div className='mission-list'>
          { missions.status === STATUS.READY ?  
             missions.data.map( mission => <MissionCard key={mission.id} details={mission} /> ) 
          : null}
        </div>
      </div>
    );
  }
  
}

function mapStateToProps (state) {
  return {  missions: state.missions.list  }
}

export default connect(mapStateToProps)(withSidebar(Missions));
