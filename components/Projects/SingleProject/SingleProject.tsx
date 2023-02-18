import React, { FC } from 'react';
import css from "./SingleProject.module.scss";

//types
import { SingleProjectProps } from '@/types/projects';

const SingleProject: FC<SingleProjectProps> = ({ item }) => {
    return (
        <div className={css.container}>
            <img src={item.src} alt={item.name} />
        </div>
    )
}

export default SingleProject;