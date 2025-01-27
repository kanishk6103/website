import './index.css';

import WebView from "./components/views/webView";
import MobileView from "./components/views/mobileView";


function App() {

  return (
    <div className="App">
    {/* wide screen */}
      <div className="sm:block hidden z-0">
        <WebView />
      </div>
    
    {/* mobile screen */}
      <div className="sm:hidden block z-0">
        <MobileView />
      </div>
    </div>
  );
}

export default App;