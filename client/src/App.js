
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Examplehook from './Examplehook';
import Translate from './Translate';
import Test from './Test';

function App() {
  return (
    <div>
      <Header />
      <Examplehook/>
      <center><h1>Main content</h1></center>
      <Translate />
      <Footer/>
      <Test />
    </div>
  );
}

export default App;
