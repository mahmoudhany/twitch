import { BrowserRouter, Route, Link } from 'react-router-dom';
import StreamCreate from './components/streams/StreamCreate';
import StreamList from './components/streams/StreamList';
import StreamEdit from './components/streams/StreamEdit';
import StreamDelete from './components/streams/StreamDelete';
import StreamShow from './components/streams/StreamShow';
import Header from './components/Header';

import './app.css';
function App() {
  return (
    <div className="ui container">
      <BrowserRouter>
        <>
          <Header />
          <Route path='/' exact component={StreamList} />
          <Route path='/streams/new' exact component={StreamCreate} />
          <Route path='/streams/edit' exact component={StreamEdit} />
          <Route path='/streams/delete' exact component={StreamDelete} />
          <Route path='/streams/show' exact component={StreamShow} />
        </>
      </BrowserRouter>
    </div>
  );
}

export default App;
