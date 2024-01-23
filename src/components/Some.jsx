import React from 'react'
import { Parallax } from "react-parallax";
import Some2 from '../image/Some2.jpg'
import'./Some.css'
const Some = () => {
  return (
    <div>
    <div className="App">
      <Parallax strength={300} bgImage={Some2} bgClassName="mass">
        <div className="content">
          <div className="weel ">
          
          </div>
        </div>
      </Parallax>
    </div>
  </div>
  )
}

export default Some
