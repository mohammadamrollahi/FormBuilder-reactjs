import React from 'react'
import "./Start.scss"
function Start({Data,handleNext}) {
    return (
        <div>
            <p className="startText"> فرم نظرسنجی و ارتقای کیفیت</p>
            <div className="startImg-div">
            <img src={Data.logo_url} alt="" className="startImg"/>
            <button className="startButton" onClick={()=>handleNext()}>شروع</button>
            </div>          
        </div>
    )
}

export default Start
