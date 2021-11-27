import React from 'react'
import { Data } from '../data/data'
import { SingleMenuItem } from '../Reference-import'

const Menu = () => {
    return (
        <div className="menu">
            <h1 className="menuTitle">Our Menu</h1>
            <div className="menuList">
                {Data.map((e, key) => {
                    return (
                        <SingleMenuItem
                            key={key}
                            image={e.image}
                            name={e.name}
                            price={e.price}
                        />
                    )
                })}

            </div>
        </div>
    )
}

export default Menu
