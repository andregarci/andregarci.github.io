// components/ConsoleView.jsx
import React from "react";
import { useClipboard } from '../../hooks/useClipboard';
import "./BlogStyle.css";

function ConsoleView({ command }) {
  const { isCopied, copyToClipboard } = useClipboard();

  return (
    <div className="console-view">
      <button
        className="btn btn-outline-light btn-sm copy-button"
        onClick={() => copyToClipboard(command)}
      >
        <i className={`bi ${isCopied ? "bi-check" : "bi-clipboard"}`}></i>
      </button>
      <pre>{command}</pre>
    </div>
  );
}

export default ConsoleView;