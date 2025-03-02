import React from "react";
import "./App.css";
import AppNavigator from "./navigation/AppNavigator";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <AppNavigator />
      </div>
    </AuthProvider>
  );
}

export default App;
