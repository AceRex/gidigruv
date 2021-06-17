import React, { useState } from 'react';
import { Upload } from 'antd';
import ImgCrop from 'antd-img-crop';
import { saveStorageData } from '../authentication/AuthData'
import axios from 'axios'





export default function Demo() {
React.useEffect(() => {
  setCookie(document.cookie)
})
const [cookie, setCookie] = useState()

  const BASEURL = "https://api.gidigruv.com/api/event"
axios.defaults.headers.common['Authorization'] = 'Bearer ' + cookie

// const instance = axios.create({
//   baseURL: 'https://api.gidigruv.com/api/event',
//   timeout: 1000,
//   headers: {'X-Custom-Header': 'foobar'}
// });
  const [fileList, setFileList] = useState([
    {
      uid: '-1',
      name: 'image.png',
      status: 'done',
    },
  ]);

  saveStorageData("bannerUrl", fileList)


  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
    saveStorageData("bannerUrl", fileList)

  };

  const onPreview = async file => {
    let src = file.url;
    if (!src) {
      src = await new Promise(resolve => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow.document.write(image.outerHTML);
  };

  return (
    <ImgCrop rotate>
      <Upload
        action={BASEURL}
        listType="picture-card"
        fileList={fileList}
        onChange={onChange}
        onPreview={onPreview}
      >
        {fileList.length < 1 && '+ Upload'}
      </Upload>
    </ImgCrop>
  );
};

