import React from 'react'

import withSidebar from '../../components/layout/withSidebar'

import './index.scss'

function Settings() {
  return (
    <div className="settings">
      Settings Page - Admin only access
    </div>
  );
}

export default withSidebar(Settings);
