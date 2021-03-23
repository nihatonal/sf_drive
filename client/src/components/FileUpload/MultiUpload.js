import React, { Fragment, useState,useRef,useCallback } from 'react';
import { NavLink } from 'react-router-dom';
import Message from './Message';
import axios from 'axios';
import { useHistory } from "react-router-dom";
import CircularStatic from './services/CircularStatic';
import CircularStaticMobil from './services/CircularStatic';

import '../../styles/Registration/MultiUpload.css';

import { FaArrowLeft } from "react-icons/fa";
import uploadCloud from '../../assets/icons/uploadCloud.svg';
import { BiTrash } from "react-icons/bi";
import plus from '../../assets/icons/plus.svg';
import trash from '../../assets/icons/trash.svg';
import renew from '../../assets/icons/renew.svg';
import X from '../../assets/icons/x.svg';


const UploadDocImg = () => {

    const [imgData, setImgData] = useState(null); 
    const [loading, setActive] = useState(false);
    const [hide, setHide] = useState(false);
    const [message, setMessage] = useState(false);
    const [uploadPercentage, setUploadPercentage] = useState(0);
    const inputEl = useRef(null)
    const [trashIcon, setTrash] = useState(false);
    const [renewIcon, setReupload] = useState(false);
    ////
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [fileInfos, setFileInfos] = useState([]);
    const [imageUrls, setImageUrls] = useState([]);

    let history = useHistory();

    // ref input for image
    const onButtonClick = () => {
      inputEl.current.click();
    };

    
    //Convert Size of Image
    const formatBytes = (bytes, decimals = 2) => {
      if (bytes === 0) return '0 Bytes';
  
      const k = 1024;
      const dm = decimals < 0 ? 0 : decimals;
      const sizes = ['Bytes', 'KB', 'MB'];
  
      const i = Math.floor(Math.log(bytes) / Math.log(k));
  
      return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
    }

    const onChangePicture = e => {
      setHide(true)
      if (e.target.files) {
      const files = Array.from(e.target.files).map((file) =>
          file
      );

      setFileInfos((prevImages) => prevImages.concat(files))

          Array.from(e.target.files).map(
            (file) => URL.revokeObjectURL(file) // avoid memory leak
          );  
      }

      setTimeout(() => {
              
        setTrash(true);
        }, 5000);


    };

    // Render Preview Images
    const renderPhotos = (source) => {
      console.log("source: ", source);

      return source.map((photo, index) => {

        return              <div className='display_container-item' key={index}>
                                <div className='display_container-item-image'>
                                {/* <div className={renewIcon === false  ? 'bg-black': "bg-light"}></div> */}
                                  <div className={trashIcon ? "" :'bg-black'}></div>
                                  <img className='display_container-item-image-img' src={URL.createObjectURL(photo)} alt={photo.name}/>
                                  
                                  <div className={trashIcon ? "hide":"icon-container-wrapper"}>
                                      <div className="icon-bg"></div>
                                      <div className="icon-image-wrapper">
                                        {fileInfos && trashIcon === false && renewIcon === false ?
                                          (<div className="circle-container">
                                              <div className="circle-wrapper">
                                              <CircularStatic percentage={uploadPercentage} />
                                              </div>

                                              <div className="circle-text-wrapper">
                                                <img src={X} className="circle-text"/>
                                              </div>
                                           </div>
                                            
                                          ) : null
                                          // (<div className="circle-wrapper">
                                          //       <img onClick={() => removeItem(photo.name)} src= {trash} alt={"trash"}/>
                                          // </div>
                                          
                                          // )
                                        }
                                      </div>
                                  </div>
                                    
                                </div>
                                <div className='display_container-item-content'>
                                  <div className='display_container-item-content-wrapper'>
                                    <p  className='display_container-item-content-name'>{photo.name}</p>
                                    <p  className='display_container-item-content-size'>{formatBytes(photo.size)}, {photo.type.slice(6)}</p>
                                  </div>
                                  <div className={trashIcon ? "container-trash" : "hide"} onClick={() => removeItem(photo.name)}>
                                    <BiTrash  className="container-trash-item"/>
                                  </div>
                                  
                                </div>

                                
                            </div>

      });
    };

    const removeItem = useCallback(
      (removeName) =>
        //pass callback to setList so list is not a dependency
        //  of this callback
        setFileInfos((list) =>
          list.filter(({ name }) => name !== removeName)
        ),
      []
    );

    const fetchData = () => {
        setActive(true);

        setTimeout(() => {
            
        setActive(false);
        }, 1000);
    };

    const onSubmit = async e => {
        e.preventDefault();
        const uploaders =fileInfos.map(file => {
          const data = new FormData();
          data.append('file', file);
          
          return axios.post('/upload', data, {
            headers: {
                    'Content-Type': 'multipart/form-data'
                  },
          } )
            .then(response => {
              setImageUrls(response.data.imageUrl, ...imageUrls);
            })
        });
        // Once all the files are uploaded 
          axios.all(uploaders).then(() => {
            console.log('done');
            }).catch(err => alert(err.message));
        // try {
        //   await axios.post('/multiupload', formData, {
        //     headers: {
        //       'Content-Type': 'multipart/form-data'
        //     },
        //     onUploadProgress: progressEvent => {
        //       setUploadPercentage(
        //         parseInt(
        //           Math.round((progressEvent.loaded * 100) / progressEvent.total)
        //         )
        //       );
              
        //       // Clear percentage
        //       setTimeout(() => setUploadPercentage(0), 10000);
        //     }
        //   }).then(response => {
        //     console.log('File Uploaded')
        //     console.log(response.data)
            
        //     setTrash(true)
            
        //     setTimeout(() => {
              
        //       history.push("./UploadDocImg")
        //       }, 1500);
            
        //   });
          
        // }
        // catch (err) {
        //   setMessage("Не удалось продолжить регистрацию. Попробуйте ещё раз")
        //   if (err.response.status === 500) {
        //     console.log('There was a problem with the server');
        //   } else {
        //     console.log(err.response.data.msg);
        //   }
        // }
      };

  return (
    <Fragment>
        {message ? <Message msg={message} /> : null}

      <form onSubmit={onSubmit} className={"photo__container"}>

            <div className={"photo__container-head"}>
                <p className={"photo__container-head-subtitle"}>Шаг 3 из 3</p>
                <h1 className={"photo__container-head-title"}>Загрузите документы</h1>
                <p className={"photo__container-head-desc"}>Разворот паспорта и страницу с пропиской, а также водительское удостоверение с двух сторон</p>
            </div>
            
            <NavLink to="./Upload">
                <p className={"photo__container-backArrow"}>
                    <i className={'fa'}><FaArrowLeft /></i>Назад </p>
            </NavLink>



            <div className={hide !== false ? 'display_container': "hide"} id="display">

                      {renderPhotos(fileInfos)}
                    
                      <div className='display_container-item item-add '>
                        <div className='display_container-item-add' onClick={onButtonClick}>
                            <img className={'mainCloud'} src= {uploadCloud} alt={"uploadCloud"}/>
                            <input className="file-hidden"
                                    multiple
                                    type="file"
                                    name="file"
                                    id='custom'
                                    onChange={onChangePicture}
                                    ref={inputEl}
                                />
                            <p className={'input-desc'}>Добавить ещё файл</p>
                            <p className={'input-sub-desc'}>JPG или PNG, не более 30 мб</p>
                        </div>   
                      </div>

                      <div className='input-desc-wrapper-mobil'>
                            <img className={'plus'} src= {plus} alt={"plus"}/>
                            <div className='input-desc-wrapper-mobil-content' onClick={onButtonClick}>
                                <p className={'input-desc-mobil'}>Загрузить файл</p>
                                <p className={'input-sub-desc'}>JPG или PNG, не более 30 мб</p>
                            </div>
                      </div>
            </div>

  
            <div className={hide === false ? 'multiphoto__container_wrapper': "hide"}  >
                    <div className={"multiphoto__container_wrapper-item"}>
                            
                            <div className={'input-container'}>
                                <input className="file-hidden"
                                    multiple
                                    type="file"
                                    name="file"
                                    id='customFile'
                                    onChange={onChangePicture}
                                    ref={inputEl}
                                />
                                <div className='input-desc-wrapper' onClick={onButtonClick}>
                                    <img className={'mainCloud'} src= {uploadCloud} alt={"uploadCloud"}/>
                                    <p className={'input-desc'}>Перетащите или <span>выберите файл</span></p>
                                    <p className={'input-sub-desc'}>JPG или PNG, не более 30 мб</p>
                                </div>
                                <div className='input-desc-wrapper-mobil' onClick={onButtonClick}>
                                    <img className={'plus'} src= {plus} alt={"plus"}/>
                                    <div className='input-desc-wrapper-mobil-content'>
                                      <p className={'input-desc-mobil'}>Загрузить файл</p>
                                      <p className={'input-sub-desc'}>JPG или PNG, не более 30 мб</p>
                                    </div>
                                </div>
                            </div>
                    </div>
            </div>

            {/* <Progress percentage={uploadPercentage} /> */}

            <div className={"photo__container-btn-wrapper"}>
                <button type= 'submit'
                onClick={fetchData}
                className={imgData ? 'photo__container-btn-wrapper-btn active-btn' : 'photo__container-btn-wrapper-btn' }>
                        
                    {loading &&  <i className="fa fa-circle-o-notch fa-spin"></i>}
                        {!loading && "Зарегистрироваться"}
                </button>

             </div>

             

        
      </form>
    </Fragment>
  );
};

export default UploadDocImg;
