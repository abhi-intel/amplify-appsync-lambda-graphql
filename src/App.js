import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';

import Home from './pages/Home';
import './App.css';

function App() {
  return (
    <div className="App">
      <AmplifySignOut />
      <Home />
    </div>
  );
}

export default withAuthenticator(App, { includeGreetings: true });
