import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ReactMarkdown from "react-markdown";
import type { Components } from "react-markdown";


export default function MarkdownEditor(): JSX.Element {
 const [markdown, setMarkdown] = useState<string>(
"# Hello Markdown\n\nType **bold**, *italic*, or `code` here."
);


  const components: Components = {
    h1: ({ node, ...props }) => (
     <h1 className="md-h1" {...props} />
    ),
   };

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="editor-container">
        <h1 className="app-title">Markdown Editor</h1>
        <div className="panes">
         <div className="pane input-pane">
            <h2>Input</h2>
            <textarea 
              value={markdown}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                setMarkdown(e.target.value)
              }
           />
      </div>

      <div className="pane output-pane">
        <h2>Output</h2>
        <div className="preview">
          <ReactMarkdown components={components}>{markdown}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  </div>
  </>
  )
}


