import * as LR from '@uploadcare/blocks';
import { PACKAGE_VERSION } from '@uploadcare/blocks';
import React, { useEffect, useRef, useState } from 'react';
import { Image } from 'antd';
import st from './styles.module.css';
import { pubKey } from '@/components/constant/uploadcarePubKey';

LR.registerBlocks(LR);

function UploadcareUploader() {
  const [files, setFiles] = useState([]);
  const ctxProviderRef = useRef(null);

  useEffect(() => {
    const ctxProvider = ctxProviderRef.current;
    if (!ctxProvider) return;

    const handleChangeEvent = (e) => {
      console.log('change event payload:', e);

      setFiles([...e.detail.allEntries.filter(f => f.status === 'success')]);
    };

    /*
      Note: Event binding is the main way to get data and other info from File Uploader.
      There plenty of events you may use.

      See more: https://uploadcare.com/docs/file-uploader/events/
     */
    ctxProvider.addEventListener('change', handleChangeEvent);
    return () => {
      ctxProvider.removeEventListener('change', handleChangeEvent);
    };
  }, [setFiles]);

  return (
    <div className={st.pageWrapper}>
      
      <hr className={st.separator}/>

      <lr-config
        ctx-name="my-uploader"
        pubkey= {pubKey}
        sourceList="local, url, camera, dropbox"
      ></lr-config>
      <lr-file-uploader-regular
        ctx-name="my-uploader"
        css-src={`https://cdn.jsdelivr.net/npm/@uploadcare/blocks@${PACKAGE_VERSION}/web/lr-file-uploader-regular.min.css`}
      ></lr-file-uploader-regular>
      <lr-upload-ctx-provider
        ctx-name="my-uploader"
        ref={ctxProviderRef}
      ></lr-upload-ctx-provider>

      <div className={st.previews}>
        {files.map((file) => (
          <div key={file.uuid} className={st.previewWrapper}>
            <Image
              className={st.previewImage}
              key={file.uuid}
              src={`${file.cdnUrl}/-/preview/-/resize/x400/`}
              width="200"
              height="200"
              alt={file.fileInfo.originalFilename || ''}
              title={file.fileInfo.originalFilename || ''}
            />
            {console.log(file.uuid)}
            <p className={st.previewData}>
              {file.fileInfo.originalFilename}
            </p>
            <p className={st.previewData}>
              {formatSize(file.fileInfo.size)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UploadcareUploader;

function formatSize(bytes) {
  if (!bytes) return '0 Bytes';

  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return `${parseFloat((bytes / k ** i).toFixed(2))} ${sizes[i]}`;
}