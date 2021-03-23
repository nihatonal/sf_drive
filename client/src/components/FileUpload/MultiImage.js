import React, { Fragment, useState, useEffect  } from 'react';
import { NavLink } from 'react-router-dom';
import Message from './Message';
import Progress from './Progress';
import axios from 'axios';
import { useHistory } from "react-router-dom";

import '../../styles/Registration/StepTwo.css';

import { FaArrowLeft } from "react-icons/fa";
import camera from '../../assets/icons/camera.svg';
import trash from '../../assets/icons/trash.svg';
import renew from '../../assets/icons/renew.svg';

const MultiImage = () => {
    const [file, setFile] = useState('');
    const [filename, setFilename] = useState('Choose File');
    const [imgData, setImgData] = useState(null); 
   // const [uploadedFile, setUploadedFile] = useState({});
    const [loading, setActive] = useState(false);
    const [hide, setHide] = useState(false);
    const [message, setMessage] = useState(false);
    const [uploadPercentage, setUploadPercentage] = useState(0);
    const [image, multerImamge ] = useState("");
    const [defaultimage, baseImage ] = useState("");

    let history = useHistory();
    
    const setDefaultImage = (uploadType) => {
        if(uploadType === "mutter") {
            multerImamge("DefaultImage")
        } else{
            baseImage("")
        }
    }


     const onChangePicture = async e => {
        
      setHide(true)
   
        setFile(e.target.files[0])
        console.log(e.target.files[0].type)
 
            let imageFormObj = new FormData();

            imageFormObj.append("imageName", "multer-image-" + Date.now());
            imageFormObj.append("imageData", e.target.files);

           // console.log(imageFormObj.get('imageData'))
        
            multerImamge(URL.createObjectURL(e.target.files[0]));

         return await axios.post('http://localhost:5000/app/uploadimage', imageFormObj )
                .then((response) =>{
                    if(response.data.success) {
                        alert("Image has been uploaded");
                        setDefaultImage("multer");
                    }
                })
                .catch((err) =>{
                    alert("Error while uploading")
                    setDefaultImage("multer");
                })
        
     
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
        //    await axios.post('/upload', formData, {
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
        //     console.log(response.data)
            
        //     setTimeout(() => {
              
        //       history.push("./RegistrationPage")
        //       }, 2000);
            
        //   });
        //   console.log('File Uploaded')
          
        // }
        // catch (err) {
        //   if (err.response.status === 500) {
        //     console.log('There was a problem with the server');
        //   } else {
        //     console.log(err.response.data.msg);
        //   }
        // }

      };

    

    const Upload = () =>{
    setImgData(null)
    setMessage()
  }
  return (
    <Fragment>
        {message ? <Message msg={message} /> : null}
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

            <div className={"photo__container_wrapper"}>
                <div className={"photo__container_wrapper"}>
                    <div className={imgData ? "photo__container_wrapper-item bg-black" : "photo__container_wrapper-item" }>
                            {!imgData ? (
                            <div>
                                <input className="file-hidden" 
                                    type="file"
                                    name="file"
                                    id='customFile'
                                    onChange={(e) => onChangePicture(e, 'multer')}
                                />
                                <img src= {camera} alt={"camera"}/>
                            </div>
                        ): imgData && message !== '' ? (<div>
                                <img onClick={onSubmit} src= {renew} alt={"renew"}/>
                            </div>) : (<div>
                                <img onClick={Upload} src= {trash} alt={"trash"}/>
                            </div>) }
                        
                    </div>
                    <img src={image} className='uploadPhoto'/>
                    {imgData ? (
                        <img className={hide === true ? 'uploadPhoto': "hide"} src={imgData} alt={filename} />
                    ) : null}
                </div>
            </div>

            <Progress percentage={uploadPercentage} />

            <div className={"photo__container-btn-wrapper"}>
                <button type= 'submit'
                onClick={fetchData}
                className={imgData ? 'photo__container-btn-wrapper-btn active-btn' : 'photo__container-btn-wrapper-btn' }>
                        
                    {loading &&  <i className="fa fa-circle-o-notch fa-spin"></i>}
                        {!loading && "Продолжить"}
                </button>

             </div>

             

        
      </form>
    </Fragment>
  );
};

export default MultiImage;
