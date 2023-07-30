import React,{ useState,useCallback } from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {

    const  [value, setValue] = useState();

    const navigate = useNavigate();

    const handleJoinRoom = useCallback(()=>{
        navigate(`/room/${value}`);
    },[navigate, value]);
 
    return(
        <div>
        <div className="form">
            <input 
            value={value} 
            onChange={(e)=>setValue(e.target.value)}  
            type="text"   
            placeholder="Enter Room Code"
            className="field" />
            <button onClick={handleJoinRoom}>Join</button>
        </div>
        <p className="copy">&copy; Sumu Ahmed</p>
        </div>
    )
};

export default HomePage;