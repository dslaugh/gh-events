import { useState } from 'react';

import HelpArea from './HelpArea';

function MainContent() {
  const [helpVisible, setHelpVisible] = useState(false);

  function toggleHelp() {
    setHelpVisible((isVisible) => !isVisible);
  }

  return (
    <main>
      <div id="testing-div" data-testid="testing-div">Hello</div>
      <div id="testing-div2" data-testid="testing-div2">Hello</div>
      <div id="testing-div3" data-testid="testing-div3">Hello</div>
      <button onClick={toggleHelp}>{helpVisible ? 'Hide' : 'Show'} Help</button>
      {helpVisible && <HelpArea />}
    </main>
  );
}

export default MainContent;
