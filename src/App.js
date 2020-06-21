import React, {useState} from 'react';
// import Info from './Info';
import Average from './Average';
// import ReducerCounter from './ReducerCounter';

function App() {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <button onClick={() => setVisible(!visible)}>{visible ? "hide" : "show"}</button>
      <hr />{visible && <Average />}
    </div>
  )
}

export default App;
