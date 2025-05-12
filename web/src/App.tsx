import '@lynx-js/web-core/index.css';
import '@lynx-js/web-elements/index.css';
import '@lynx-js/web-core';

import './App.css';

const App = () => {
  return (
    // @ts-ignore
    <lynx-view style={{ height: '100vh', width: '100vw' }} url="/main.web.bundle"></lynx-view>
  );
};

export default App;
