import React, { useState } from "react";
import axios from "axios";

const projectID = "a1a71a31-5145-44a5-b22b-2de784bf8489";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const authObject = {
      "Project-ID": projectID,
      "User-Name": username,
      "User-Secret": password,
    };

    try {
      await axios.get("https://api.chatengine.io/chats", {
        headers: authObject,
      });

      localStorage.setItem("username", username);
      localStorage.setItem("password", password);

      window.location.reload();
      setError("");
    } catch (err) {
      setError("Oops, incorrect credentials.");
    }
  };

  return (
    <div className='wrapper'>
      <div className='form'>
        <h1 className='title'> Chat Application</h1>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            className='input'
            required
            value={username}
            placeholder='Enter Your username'
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type='password'
            className='input'
            required
            value={password}
            placeholder='Enter Your password'
            onChange={(e) => setPassword(e.target.value)}
          />
          <div align='center'>
            <button type='submit' className='button'>
              <span>Start Chatting</span>
            </button>
          </div>
          <h2 className='error'>{error}</h2>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
