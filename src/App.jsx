import React from 'react'
import data from './data'
import Accordian from './components/accordian'
const App = () => {
  return (
    <>
      <main>
        <div className="container">
          <h3>FAQ</h3>
          <section className="">
           <h3>
            { data.map((item)=>{
              return(
              <Accordian question={item.question} key={item.id} answer={item.answer}/>
              )
            })
            }
            </h3>
          
          </section>
        </div>
        
      </main>
    </>
  )
}

export default App