import { connect } from 'react-redux';
import './store'

function App(props) {
  console.log(props);
  return (
    <div className="App">
      App
    </div>
  );
}

export default connect()(App);
