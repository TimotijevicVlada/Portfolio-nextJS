import React, { useState } from 'react';
import css from "./HeaderIcon.module.scss";

//router
import { useRouter } from 'next/router';

//types
import { HeaderIconProps } from '@/types/header';

const HeaderIcon: React.FC<HeaderIconProps> = ({ item }) => {

    const router = useRouter();
    const currentPage = router.pathname;

    const handleClick = () => {
        const isHome = item.name === "home";
        router.push(`/${isHome ? "" : item.name}`);
    }

    return (
        <div className={`${css.container} ${currentPage === item.route ? css.active : ""}`}
            onClick={handleClick}>
            <span>{item.name}</span>
            {item.icon}
        </div>
    )
}

export default HeaderIcon;