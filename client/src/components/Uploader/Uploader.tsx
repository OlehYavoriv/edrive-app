import React, { useState } from "react";
import Lottie from "lottie-react";
import { IoMdCloseCircle } from "react-icons/io";
import uploadIcon from '../../assets/lottie/upload-icon.json';
import styles from './Uploader.module.scss';

export const Uploader = ({onFileChange}: any) => {
    const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];

        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setSelectedImage(imageUrl);
            onFileChange(file);
        }
    };

    const handleRemoveImage = () => {
        setSelectedImage(undefined);
    };

    const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        const file = event.dataTransfer.files[0];

        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setSelectedImage(imageUrl);
        }
    };

    const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
    };

    return (
        <div className={styles.uploader} onDrop={handleDrop}
             onDragOver={handleDragOver}>
            <label className={styles.uploader__label}>
                <input type="file" name='image' accept="/image*" className={styles.uploader__input} hidden={true}
                       onChange={handleFileChange}
                />
                <div className={styles.image_view}>
                    {selectedImage ? (
                        <>
                            <img className={styles.selected_img} src={selectedImage} alt="Uploaded"/>
                            <button className={styles.remove_btn} onClick={handleRemoveImage}>
                                <IoMdCloseCircle/>
                            </button>
                        </>
                    ) : (
                        <>
                            <Lottie className={styles.placeholder} animationData={uploadIcon} loop={true}
                                    autoplay={true}/>
                            <p>Drag and drop or click here<br/>to upload image</p>
                            <span>Upload any images from desktop</span>
                        </>
                    )}
                </div>
            </label>
        </div>
    );
};
