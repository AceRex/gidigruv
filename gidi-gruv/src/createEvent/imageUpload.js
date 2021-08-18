import React, { useState } from 'react';
import { Upload, message } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import { getStorageData, saveStorageData, StorageKeys } from '../authentication/AuthData'
import { BASEURL } from '../authentication/AuthO';


export default function Demo() {

  const { Dragger } = Upload;
  const videoProps = {
    name: "image",
    multiple: false,
    action:   `${BASEURL}/event/uploadMedia`,
    headers: {
        Authorization: `Bearer ${getStorageData(StorageKeys.tokenkey) }`,
        'Access-Control-Allow-Origin': '*'
    },
    onChange(info) {
        const { status } = info.file;
        if (status !== 'uploading') {          
            console.log("uploading");
        }
        if (status === 'done') {
            message.success(`${info.file.name} file uploaded successfully.`); 
            saveStorageData("bannerUrl", info.file.response.image_url)
        } else if (status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    },
}

  return (
    <>
      <Dragger
        {...videoProps}
      >
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">{'Upload image'}</p>
        <p className="ant-upload-hint">
          Drag and drop image here
        </p>
      </Dragger>
    </>
  );
};

