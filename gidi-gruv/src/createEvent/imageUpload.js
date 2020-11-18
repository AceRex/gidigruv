import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import "./createEvent.css";
import { BsImageAlt } from "react-icons/bs";


const img = {
  display: "block",
  width: '100%',
  height: "100%",
};

export default function Previews(props) {
  const [files, setFiles] = useState([]);
  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  const thumbs = files.map((file) => (
    <div className='thumb' key={file.name}>
      <div className='thumbInner'>
        <img src={file.preview}  />
      </div>
    </div>
  ));

  useEffect(
    () => () => {
      // Make sure to revoke the data uris to avoid memory leaks
      files.forEach((file) => URL.revokeObjectURL(file.preview));
    },
    [files]
  );

  return (
    <section className="container">
      <div {...getRootProps({ className: "dropzone" })}>
        <input {...getInputProps()} />
        <aside className='image-container'>{thumbs}</aside>
        <BsImageAlt className="icon" />
        <p> Drag 'n' drop some files here, or click to select files</p>
      </div>
    </section>
  );
}
