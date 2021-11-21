import './App.css';
import { ChatEngine } from 'react-chat-engine'
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
// chatengine.io docs

import './App.css'

function App() {

  if (!localStorage.getItem('username')) return <LoginForm />

  return (
    <ChatEngine
      height='100vh'
      projectID='fd041467-411b-401a-b41c-b02d996ce061'
      userName={localStorage.getItem('username')} //batsy_ //John_Wick //Frozen
      userSecret={localStorage.getItem('password')} //123123 //321321 //123123
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
}

export default App;
