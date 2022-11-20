import React, { useEffect } from "react";
import { useGetUserLazyQuery } from "generated/graphql";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

function App() {
  const [getUser, { data }] = useGetUserLazyQuery();

  // firebase google login check
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      const uid = user?.uid;
      console.log(user);
      if (uid) return getUser({ variables: { uid } });
      // setTimeout(() => setRender(true), 200);
    });
  }, []);

  console.log(data);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
