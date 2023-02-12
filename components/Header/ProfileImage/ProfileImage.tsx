import React from 'react';
import css from "./ProfileImage.module.scss";

//assets
import ProfilePhoto from "svg/profile_photo.jpg";
import CloseIcon from "svg/close.svg";

//types
import { ProfileImageProps } from '@/types/header';

const ProfileImage: React.FC<ProfileImageProps> = ({ closeAction }) => {
    return (
        <div className={css.container} onClick={(e) => e.stopPropagation()}>
            <div className={css.closeWrapper} onClick={closeAction}>
                <CloseIcon />
            </div>
            <img src={ProfilePhoto.src} alt="profile" />
        </div>
    )
}

export default ProfileImage;