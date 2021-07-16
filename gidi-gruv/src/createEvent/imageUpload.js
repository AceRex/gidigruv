import React, { useState } from 'react';
import { Upload, message } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import { saveStorageData } from '../authentication/AuthData'


export default function Demo() {

  const { Dragger } = Upload;
  const videoProps = {
    name: "image",
    multiple: false,
    action: "https://api.gidigruv.com/api/event/uploadMedia",
    headers: {
        Authorization: `Bearer ${document.cookie}`,
        'Access-Control-Allow-Origin': '*'
    },
    onChange(info) {
        const { status } = info.file;
        if (status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (status === 'done') {
            message.success(`${info.file.name} file uploaded successfully.`);
            saveStorageData("bannerUrl", info.file.name)
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
        <p className="ant-upload-text">{'Uload image'}</p>
        <p className="ant-upload-hint">
          Drag and drop image here
        </p>
      </Dragger>
    </>
  );
};

