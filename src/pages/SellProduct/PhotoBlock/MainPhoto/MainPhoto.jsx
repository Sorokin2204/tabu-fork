import { URL as SITE_URL } from 'config';
import { useEffect, useRef, useState } from 'react';
import { getUrlExtension } from 'utils/getUrlExtension';
import { imageTypes } from '../PhotoBlock';
import * as S from './Styled';

const MainPhoto = (props) => {
  const hiddenFileInput = useRef(null);
  // const [uploadedFile, setUploadedFile] = useState(null);
  // const [preview, setPreview] = useState(null);
  const img = props.watch(`images[${imageTypes[props.type]}]`);
  // useEffect(() => {
  //   if (uploadedFile) {
  //     // create the preview
  //     const objectUrl = URL.createObjectURL(uploadedFile);
  //     setPreview(objectUrl);

  //     // free memory when ever this component is unmounted
  //     return () => URL.revokeObjectURL(objectUrl);
  //   }
  // }, [uploadedFile]);

  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };

  const handleChange = (event) => {
    const file = event.target.files[0];
    console.log(file);
    const url = URL.createObjectURL(file);
    props.setValue(`images[${imageTypes[props.type]}]`, {
      type: props.type,
      file,
      url,
    });
  };
  return (
    <S.Wrapper {...props}>
      <S.MainPhoto
        onClick={handleClick}
        background={img?.url ? img?.url : img?.oldImage}
        error={props.error}
        style={{
          backgroundColor: img?.file?.type === 'image/png' || getUrlExtension(img?.oldImage) ? '#f6f6f9' : 'none',
          backgroundSize: img?.file?.type == 'image/png' || getUrlExtension(img?.oldImage) === 'png' ? '80%' : '100%',
          border: img?.url || img?.oldImage ? 'none' : `1px dashed ${props.error ? '#D51313' : 'rgba(0, 0, 0, 0.1)'}`,
        }}>
        {!img?.file && !img?.url && !img?.oldImage && (
          <svg width={45} height={33} viewBox="0 0 45 33" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M30.4816 17.8142C30.4816 22.3302 26.8074 25.9911 22.275 25.9911C17.7426 25.9911 14.0684 22.3302 14.0684 17.8142C14.0684 13.2981 17.7426 9.63717 22.275 9.63717C26.8074 9.63717 30.4816 13.2981 30.4816 17.8142ZM28.3713 17.8142C28.3713 21.1689 25.6419 23.8885 22.275 23.8885C18.9081 23.8885 16.1787 21.1689 16.1787 17.8142C16.1787 14.4594 18.9081 11.7398 22.275 11.7398C25.6419 11.7398 28.3713 14.4594 28.3713 17.8142Z"
              fill={props.error ? 'rgba(213, 19, 19, 0.4)' : '#E5E5E5'}
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M31.4308 4.22466L30.6381 2.21981C30.1085 0.880413 28.8106 0 27.3658 0H17.1844C15.7396 0 14.4418 0.880412 13.9121 2.21981L13.1194 4.22467C12.9428 4.67113 12.5102 4.9646 12.0286 4.9646H4.68947C2.09955 4.9646 0 7.05658 0 9.63717V28.3274C0 30.908 2.09955 33 4.68947 33H39.8605C42.4505 33 44.55 30.908 44.55 28.3274V9.63717C44.55 7.05658 42.4504 4.9646 39.8605 4.9646H32.5216C32.04 4.9646 31.6074 4.67113 31.4308 4.22466ZM16.0937 3.07622C16.2702 2.62975 16.7028 2.33628 17.1844 2.33628H27.3658C27.8474 2.33628 28.28 2.62976 28.4566 3.07622L29.2493 5.08108C29.7789 6.42047 31.0768 7.30089 32.5216 7.30089H39.8605C41.1555 7.30089 42.2053 8.34688 42.2053 9.63717V28.3274C42.2053 29.6177 41.1555 30.6637 39.8605 30.6637H4.68947C3.39451 30.6637 2.34474 29.6177 2.34474 28.3274V9.63717C2.34474 8.34688 3.39451 7.30089 4.68947 7.30089H12.0286C13.4734 7.30089 14.7713 6.42047 15.3009 5.08108L16.0937 3.07622Z"
              fill={props.error ? 'rgba(213, 19, 19, 0.4)' : '#E5E5E5'}
            />
            <path
              d="M4.59856 1.97232C4.59856 1.42394 5.04472 0.979399 5.59508 0.979399H9.58762C10.138 0.979399 10.5841 1.42394 10.5841 1.97232C10.5841 2.52069 10.138 2.96524 9.58762 2.96524H5.59508C5.04472 2.96524 4.59856 2.52069 4.59856 1.97232Z"
              fill={props.error ? 'rgba(213, 19, 19, 0.4)' : '#E5E5E5'}
            />
          </svg>
        )}
      </S.MainPhoto>
      <input type="file" onChange={handleChange} ref={hiddenFileInput} style={{ display: 'none' }} accept="image/*" />
    </S.Wrapper>
  );
};

export default MainPhoto;
