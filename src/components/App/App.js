import React from 'react';
import Header from '../header/header'
import PollResult from '../pollResult/pollResult'
import { getSinglePollResult } from '../../model/poll/index'

function App() {
  const pollResultDetails_1 = getSinglePollResult(2001) // Temporary
  const pollResultDetails_2 = getSinglePollResult(52241) // Temporary
  return (
    <div>
      <Header />
      <PollResult pollResultDetails={pollResultDetails_1} />
      <PollResult pollResultDetails={pollResultDetails_2} />
    </div>
        
  );
}

export default App;