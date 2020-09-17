import React,{useEffect} from 'react'

function Detail(props){
    useEffect(() => {
        const {history,location} = props;
        if(location.state === undefined){
            history.push("/");
        }
    }, [])
    return (
        <span>Hello</span>
    )
}

export default Detail;