import { StrictMode, useState } from "react";
import ReactDOM from "react-dom";
import { ReactFlowProvider } from "react-flow-renderer";

import CampaignProfile from "./CampaignProfile";
import "./styles.css";

import steps from './campaign';

const App = () => {
  const [mode, setMode] = useState('profile');

  return (
    <ReactFlowProvider>
        <CampaignProfile steps={steps} />
      
    </ReactFlowProvider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
