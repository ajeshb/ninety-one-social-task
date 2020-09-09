import React from 'react'
import './index.scss'
import withSidebar from '../../components/layout/withSidebar';

function Dashboard() {
  return (
    <div className="dashboard">
      Dashboard Page
    </div>
  );
}

export default withSidebar(Dashboard);
