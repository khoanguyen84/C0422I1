import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import ClassService from './../../services/classService';

function MenuLeft() {
    const [menus, setMenus] = useState([]);
    const [selectMenu, setSelectMenu] = useState();

    useEffect(() => {
        try {
            async function getData() {
                let classList = await ClassService.getClass();
                setMenus(classList.data);
            }
            getData();

        } catch (error) {

        }
    }, [])
    return (
        <div className="col-3">
            <div className="list-group" id="myList" role="tablist">
                {
                    menus.map(menu => (
                        <Link key={menu.id} 
                            className={`list-group-item list-group-item-action ${selectMenu === menu.classname ? 'active' : ''}`} 
                            data-bs-toggle="list" to={`/student/${menu.id}`} role="tab"
                            onClick={() => setSelectMenu(menu.classname)}
                        >{menu.classname}</Link>
                    ))
                }
            </div>
        </div>
    )
}

export default MenuLeft