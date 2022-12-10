import { useState } from "react";
import React from "react";
import ReactQuill from "react-quill";
import EditorToolbar, { modules, formats } from "./quilltoolbar";
import "react-quill/dist/quill.snow.css";
import { useDispatch } from "react-redux";
import { setPost } from "../../actions";

export const Editor = () => {
  const [convertedText, setConvertedText] = useState("");
  const dispatch=useDispatch();
  dispatch(setPost(convertedText));

  return (
    <div className="text-editor">
      <EditorToolbar/>
      <ReactQuill
        theme="snow"
        value={convertedText}
        onChange={setConvertedText}
        placeholder={'Write something'}
        modules={modules}
        formats={formats}
      />
    </div>
  );
};

export default Editor;