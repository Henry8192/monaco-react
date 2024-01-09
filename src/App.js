import React, { useEffect } from 'react';
import * as monaco from 'monaco-editor';
// or import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';
// if shipping only a subset of the features & languages is desired


function MonacoEditor() {

  useEffect(() => {
    monaco.editor.create(document.getElementById('container'), {
      value: ['function x() {', '\tconsole.log("Hello world!");', '}'].join('\n'),
      language: 'javascript'
    });
  }, []);

  return <div id="container"  style={{ height: '100vh' , width:'100vw'}} />;
}

function App() {
  return (
    <div className="App">
      <MonacoEditor />
    </div>
  );
}

export default App;
