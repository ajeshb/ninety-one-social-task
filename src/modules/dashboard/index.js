import React, { Component } from 'react'
import { connect } from 'react-redux'
import withSidebar from '../../components/layout/withSidebar'

import './index.scss'
import { getCompanyInfo } from '../../redux/actions';
import { STATUS } from '../../redux/constants';
import { toast } from 'react-toastify';
import CompanyInfo from './CompanyInfo';

class Dashboard extends Component {

  componentDidMount = () => {
    this.props.dispatch(getCompanyInfo())
  }

  componentWillReceiveProps = nextProps => {
    if(nextProps.info.status === STATUS.ERROR && nextProps.info.status !== this.props.info.status) {
      toast.error('Faild to fetch company details. Please try again')
    }
  }

  render() {
    const { info } = this.props
    console.log('info', info)
    return (
      <div className="dashboard">
        <CompanyInfo details={info.data} />
      </div>
    );
  }
  
}

function mapStateToProps (state) {
  return {  info: state.dashboard.info  }
}

export default connect(mapStateToProps)(withSidebar(Dashboard));
