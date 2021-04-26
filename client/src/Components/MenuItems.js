import React, { useEffect, useState } from 'react'
import { AiFillGithub } from 'react-icons/ai';
import { CgMediaLive } from 'react-icons/cg';


function MenuItems({ menuItem }) {

    // const [help, setHelp] = useState();

    // const show = (link, title) => {
    //     switch (link) {
    //         case true:
    //             setHelp(`Link to ${title}!`)
    //             break;
    //         case false:
    //             setHelp(`Sorry ${title} is down.`)
    //             break;
    //         case 'Github':
    //             setHelp(`Link to ${title}\'s Repository`)
    //             break;
    //     }
    // }

    return (
        <div className="portfolis">
            {
                menuItem.map((item) => {
                    return <div className="portfolio" key={item.id}>
                        <div className="image-data">
                            <h5>
                                {item.title}
                            </h5>
                            <img src={item.image} alt="" />
                            <ul className="hover-items">
                                <li>
                                    <a href={item.link1}><CgMediaLive size={40} color={(item.live === true) ? "#00FF1A" : "#FF2A00"} /></a>
                                    <a href={item.link2} ><AiFillGithub size={40} /></a>
                                </li>
                                <p></p>
                            </ul>
                        </div>
                        <p>{item.desription}</p>
                    </div>
                })
            }
        </div>
    )
}

export default MenuItems;
