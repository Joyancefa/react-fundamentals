// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import React, {useState} from 'react';

function UsernameForm({onSubmitUsername}) {
  const [username, setUserName] = useState('');
  const handleChange = event => {
    setUserName(event.target.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();
    onSubmitUsername(username);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input value={username} type="text" onChange={handleChange} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`);
  return <UsernameForm onSubmitUsername={onSubmitUsername} />;
}

export default App;
