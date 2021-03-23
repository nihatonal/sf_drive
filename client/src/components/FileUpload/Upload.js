import React, { Fragment, useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import Message from './Message';
import axios from 'axios';
import { useHistory } from "react-router-dom";
import CircularStatic from './services/CircularStatic';

import '../../styles/Registration/StepTwo.css';

import { FaArrowLeft } from "react-icons/fa";
import camera from '../../assets/icons/camera.svg';
import trash from '../../assets/icons/trash.svg';
import renew from '../../assets/icons/renew.svg';
import X from '../../assets/icons/x.svg'

const UploadProfileImg = () => {
    const [file, setFile] = useState('');
    const [filename, setFilename] = useState('Choose File');
    const [imgData, setImgData] = useState(null);
    const [uploadedFile, setUploadedFile] = useState({});
    const [loading, setActive] = useState(false);
    const [message, setMessage] = useState(false);
    const [uploadPercentage, setUploadPercentage] = useState(0);
    const inputEl = useRef(null)

    const [hide, setHide] = useState(false);
    const [trashIcon, setTrash] = useState(false);
    const [renewIcon, setReupload] = useState(false);


    let history = useHistory();

    React.useEffect(() => {
      localStorage.setItem('myData', uploadedFile.fileName)
    }, [uploadedFile.fileName]);
    
    const onChangePicture = e => {
      setHide(true)
      setFile(e.target.files[0]);
      setFilename(e.target.files[0].name)
     
      if (e.target.files[0]) {
       console.log("picture: ", e.target.files);

        const reader = new FileReader();

        reader.addEventListener  ("load", () => {
            setImgData(reader.result); 
        });
        reader.readAsDataURL(e.target.files[0]);
            const formData = new FormData();
            formData.append('file', reader.result);

            axios.post('/upload', formData, {
                headers: {
                  'Content-Type': 'multipart/form-data'
                },
                onUploadProgress: progressEvent => {
                  setUploadPercentage(
                    parseInt(
                      Math.round((progressEvent.loaded * 100) / progressEvent.total)
                    )
                  );
                  
                  // Clear percentage
                  setTimeout(() => setUploadPercentage(0), 10000);
                }
            })
              
      }

      
        setTimeout(() => {
              
          setTrash(true);
          }, 5000);
      
    };

    const fetchData = () => {
        setActive(true);

        setTimeout(() => {
            
        setActive(false);
        }, 1000);
    };

    const onSubmit = async e => {
        e.preventDefault();
       
        // const formData = new FormData();
        // formData.append('file', file);
        // console.log(file.name)
       
        // try {
        //   await axios.post('/upload', formData, {
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
        //     console.log('File Uploade')
        //     console.log(response.data)
            
        //     const { fileName, filePath } = response.data;
        //     setUploadedFile({ fileName, filePath });
        //     setTrash(true)
            
        //     setTimeout(() => {
              
        //       history.push("./UploadDocImg")
        //       }, 1500);
            
        //   });
          
        // }
        // catch (err) {
        //   setReupload(true)
        //   if (err.response.status === 500) {
        //     console.log('There was a problem with the server');
        //   } else {
        //     setReupload(true)
        //     console.log(err.response.data.msg);
        //   }
        // }

      };

    
    const Upload = () =>{
    setImgData(null)
    setTrash(false)
    setMessage()
    }

    const onButtonClick = () => {
      inputEl.current.click();
    };

  return (
    <Fragment>
        {renewIcon === true ? <Message msg={message} /> : null}
        
      <form onSubmit={onSubmit} className={"photo__container"}>
            <div className={"photo__container-head"}>
                <p className={"photo__container-head-subtitle"}>Шаг 2 из 3</p>
                <h1 className={"photo__container-head-title"}>Загрузите селфи</h1>
                <p className={"photo__container-head-desc"}>Смотрите прямо в камеру, без солнцезащитных очков и головных уборов.</p>
            </div>
            
            <NavLink to="./RegistrationPage">
                <p className={"photo__container-backArrow"}>
                    <i className={'fa'}><FaArrowLeft /></i>Назад </p>
            </NavLink>

            <div className={"photo__container_"}>
                <div className={"photo__container_wrapper"}>
                    <div className={imgData ? "photo__container_wrapper-item bg-icon" : "photo__container_wrapper-item" }>
                            {!imgData ? (
                            <div>
                                <input className="file-hidden" 
                                    type="file"
                                    name="file"
                                    id='customFile'
                                    onChange={onChangePicture}
                                    ref={inputEl}
                                />
                                <img onClick={onButtonClick} src= {camera} alt={"camera"}/>
                            </div>
                        ): imgData && trashIcon === false && renewIcon=== false ? (<div className="circle-container">
                                        <CircularStatic percentage={uploadPercentage} />
                                        <img src={X} className="circle-text"/>
                                        </div>) : imgData && trashIcon === true && renewIcon=== true ? (
                                          <img onClick={onSubmit} src= {renew} alt={"renew"}/>
                                        ) :
                                    (<div>
                                        <img onClick={Upload} src= {trash} alt={"trash"}/>
                                    </div>) }
                        
                    </div>
                    {imgData ? (

                        <div className="display-container">
                          <div className={renewIcon === false  ? 'bg-black': "bg-light"}></div>                        
                          <img className={hide === true ? 'uploadPhoto': "hide"} src={imgData} alt={filename} />
                        </div>
                       
                    ) : null}
                    
                </div>
            </div>

            <div className={"photo__container-btn-wrapper"}>
                <button type= 'submit'
                onClick={fetchData}
                className={trashIcon === true ? 'photo__container-btn-wrapper-btn active-btn' : 'photo__container-btn-wrapper-btn' }>
                        
                    {loading &&  <i className="fa fa-circle-o-notch fa-spin"></i>}
                        {!loading && "Продолжить"}
                </button>

             </div>

             

        
      </form>
    </Fragment>
  );
};

export default UploadProfileImg;
