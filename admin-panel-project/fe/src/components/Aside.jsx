import React from "react";
import axios from "axios";
import { useState } from "react";

function FileUpload() {
  const [file, setFile] = useState();

  const saveFile = (e) => {
    setFile(URL.createObjectURL(e.target.files[0]));
  };

  const uploadFile = async (e) => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(file),
    };
    const FETCHED_DATA = await fetch("http://localhost:8080/upload", options); // hervee options bhq bol default oor get method yvuuldag
    const FETCHED_JSON = await FETCHED_DATA.json();
  };

  return (
    <form className="App" onSubmit={uploadFile}>
      <input type="file" onChange={saveFile} />
      <button>Upload</button>
    </form>
  );
}

export default FileUpload;
