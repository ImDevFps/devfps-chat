import React from "react";
import { ChatEngine } from "react-chat-engine";
import ChatFeed from "./components/ChatFeed";

import "./App.css";
import LoginForm from "./components/LoginForm";

const projectID = "a1a71a31-5145-44a5-b22b-2de784bf8489";

const App = () => {
  if (!localStorage.getItem("username")) return <LoginForm />;

  return (
    <div>
      <ChatEngine
        height='100vh'
        projectID={projectID}
        userName={localStorage.getItem("username")}
        userSecret={localStorage.getItem("password")}
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        onNewMessage={() =>
          new Audio(
            "https://chat-engine-assets.s3.amazonaws.com/click.mp3"
          ).play()
        }
      />
    </div>
  );
};

export default App;
