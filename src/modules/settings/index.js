import React from 'react'

import withSidebar from '../../components/layout/withSidebar'

import './index.scss'

function Settings() {
  return (
    <div className="settings">
      <h4>Settings Page - Admin only access</h4>
    </div>
  );
}

export default withSidebar(Settings);
