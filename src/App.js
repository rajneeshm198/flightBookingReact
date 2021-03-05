import Header from './components/header/header.js';
import Footer from './components/footer/footer.js';
import Dashboard from './components/dashboard/dashboard.js';

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
