import React from "react"
import {useSpring, animated} from 'react-spring'




const Bar = (props) => {

  const aa = useSpring({
    from: { left: '0% ', width: '0%'},
    to: { right: '100%', width: '100%'},
    
  })


  return (
        <div className="bar-layer">
        <div className="bar-to-fill">
          <animated.div style={aa}>
            <div className="bar-filled" style={{"width": props.percent}}>
              <div className="bar-tag">
                <h6 className="text-uppercase text-white">{props.name}</h6>
              </div>
            </div>
          </animated.div>
          <span className="bar-percent">
            <h5 className="text-uppercase">{props.percent}</h5>
          </span>
        </div>
      </div>  
  )
    
  
};

export default Bar;