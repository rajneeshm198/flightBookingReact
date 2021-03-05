import Header from './header.js';
import Footer from './footer.js';
import Dashboard from './dashboard.js';

import './App.css';

function App() {
  return (
    <div className="pageContainer">
      <Header></Header>
      <Dashboard>
      </Dashboard>
      <Footer></Footer>
    </div>
  );
}

export default App;
