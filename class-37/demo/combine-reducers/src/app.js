import Status from './components/status';
import VoteCounter from './components/vote-counter';
import VoteCounterWithHooks from './components/vote-counter-v2';
import './style.css';
function App() {
  return (
    <>
      <Status />
      {/* <VoteCounter /> */}
      <VoteCounterWithHooks />
    </>
  );
}

export default App;
