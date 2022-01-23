// import ReactQuill from "react-quill"
// import 'react-quill/dist/quill.snow.css';
import { useState } from "react";

// const Editor=()=> {
//   const [convertedText, setConvertedText] = useState("Some default content");//custom hooks data existing ekkda edit krnne nattm aluth ekkda kyla blnda hadanna one
  

//   return (
//     <div>
//         <p>{convertedText}</p>
//       <ReactQuill
//         theme='snow'
//         value={convertedText}
//         onChange={setConvertedText}
//         style={{minHeight: '300px'}}
//       />
//        <div dangerouslySetInnerHTML={{__html: convertedText}}></div>
//     </div>
//   );
// }

// export default Editor;


import React from "react";
import ReactQuill from "react-quill";
import EditorToolbar, { modules, formats } from "./quilltoolbar";
import "react-quill/dist/quill.snow.css";
// import "./styles.css";

export const Editor = () => {
  const [convertedText, setConvertedText] = useState("");
  return (
    <div className="text-editor">
      <p>{convertedText}</p>
      <EditorToolbar />
      <ReactQuill
        theme="snow"
        value={convertedText}
        onChange={setConvertedText}
        placeholder={'Write something'}
        modules={modules}
        formats={formats}
      />
      <div dangerouslySetInnerHTML={{__html: convertedText}}></div>
    </div>
  );
};

export default Editor;