// src/pages/Dashboard.js

import React from 'react';

const Dashboard = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.welcome}>Welcome</h1>
    </div>
  );
};

const styles = {
  container: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f2f5',
  },
  welcome: {
    fontSize: '48px',
    color: '#007BFF',
  },
};

export default Dashboard;
