"use client";

import React, { useState } from 'react'
import styles from "./links.module.css"
import NavLink from './navLink/navLink';


const Links = () => {

    const [open, setOpen] = useState(false);

    const links = [
        {
            title: "Homepage",
            path: "/"
        },
        {
            title: "About",
            path: "/about"
        },
        {
            title: "Contact",
            path: "/contact"
        },
        {
            title: "Blog",
            path: "/posts"
        },
    ];

    //Temporary fix
    const session = false;
    const isAdmin = true;

    return (
        <div className="styles.container">

            <div className={styles.links}>

                {links.map(link => (
                    <NavLink
                        item={link}
                        key={link.title}
                    />
                ))}{
                    session ? (
                        <>
                            {isAdmin && (<NavLink item={{ title: "Admin", path: "/admin" }} />)}
                            <buton className={styles.logout}>Logout</buton>
                        </>
                    ) : (

                        <>
                            <NavLink item={{ title: "Login", path: "/login" }} />
                        </>
                    )
                }
            </div>
            <button className={styles.menuButton} onClick={
                () => {
                    setOpen(!open);
                }
            }
            >Menu</button>
            {
                open && <div className={styles.mobileLinks}>

                    {links.map(link => (
                        <NavLink item={link} key={link.title} />
                    ))}

                </div>
            }
        </div>
    )
}

export default Links
