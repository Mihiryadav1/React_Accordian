import React, { useState } from 'react'
const accordian = (prop) => {
    const [isvisible, setvisible] = useState(false);
    const{answer}=prop;
    return (
        <>
            <main>
                <div className="container main">
                    <div className="question d-flex">
                        <h2>{prop.question}</h2>
                        <button className="btn" onClick={()=>setvisible(!isvisible)}>{isvisible?'-':'+'}</button>
                    </div>
                  
                      
                 {isvisible&&<p className='info'>{answer}</p>}
                </div>
            </main>
        </>
    )
}

export default accordian