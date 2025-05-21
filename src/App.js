import React from 'react';
import './App.css';
import JobList from './components/JobList';
import jobs from './data/jobs';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Job Board</h1>
        <p>Find your next career opportunity</p>
      </header>
      <main>
        <JobList jobs={jobs} />
      </main>
      <footer>
        <p>&copy; 2025 Job Board. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;