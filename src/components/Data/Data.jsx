import React,{useEffect,useState} from 'react'
import Form from '../Form/Form'

function Data({step}) {
    const [output,setoutput]=useState([])
   
    let initialData={
        organization_name:"",
        organization_name_fa:"",
        logo_url:"https://1000logos.net/wp-content/uploads/2018/08/Huawei-Logo-768x432.png",
        question:[
        {
            id:"modate ersal",
            text:"از مدت زمان ارسال کالا راضی بودید؟",
            options:[
                {key:1,text:"بله"},
                {key:2,text:"تا حدودی"},
                {key:3,text:"خیر"}

            ],
        },
        {
            id:"barkhorde peyk",
            text:"برخورد پیک با شما چطور بود؟",
            options:[
                {key:1,text:"عالی"},
                {key:2,text:"خوب"},
                {key:3,text:"نه چندان خوب"},
                {key:4,text:"بد"}
            ],
        },
        {
            id:"maske peyk",
            text:"آیا پیک از ماسک استفاده کرده بود؟",
            options:[
                {key:1,text:"بله"},
                {key:2,text:"خیر"},

            ],
        },
        {
            id:"operator",
            text:"کیفیت پاسخگویی اپراتور ها چه قدر بود؟",
            options:[
                {key:1,text:" راضی ام"},
                {key:2,text:"بد نیست"},
                {key:3,text:"بد"},
            ],
        },
    ],
    background_url:"https://images.unsplash.com/photo-1444080748397-f442aa95c3e5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1190&q=80"
    };


useEffect(() => {
console.log(output)
}, [output])

    return (
            <div       style={{
                backgroundImage: `url(${initialData.background_url})`,
                backgroundSize:'cover',
                height:'100vh',
                display:'flex',
                flexDirection:'column',
                justifyContent:"space-around"
              }}>

              
            <Form Data={initialData} output={output} setoutput={setoutput}/>
            </div>
    )
}

export default Data
