import React,{useState} from 'react';
import {Link} from "react-router-dom";
import './Navigation.css'

function Navigation() {
    const [page,setPage] = useState(1);

    const onPrevPage = () => {
        if(page > 1){
            setPage(page-1);
        }
        console.log(page);
    }
    const onNextPage = () => {
        setPage(page+1);
        console.log(page);
    }

    return (
        <div className="navigation">
                <Link className="navi_menu" to={{
                    pathname: '/',
                    state: {
                        page:page
                    }
                }}>Home</Link>
                <Link className="navi_menu" to="/about">About</Link>
                <span onClick={onPrevPage} className="navi_menu page_btn">Prev</span>
                <span onClick={onNextPage} className="navi_menu page_btn">Next</span>
        </div>
    )
}

export default Navigation;