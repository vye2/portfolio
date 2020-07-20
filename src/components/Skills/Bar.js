import React from "react"
// import {useSpring, animated} from 'react-spring'
import { Spring } from "react-spring/renderprops";

// import Aos from 'aos';
// import 'aos/dist/aos.css';
// import { useEffect } from "react";
import VisibilitySensor from "react-visibility-sensor";


const Bar = (props) => {


  // useEffect(() => {
  //   Aos.init({ duration: 2000 });
  // }, [])

  // const styles = {
  //   from: { left: '0% ', width: '0%'},
  //   to: { right: '100%', width: '100%'},
  // }


  // const aa = useSpring(styles)

  

  return (
    <VisibilitySensor>
      {({ isVisible }) => (
        <Spring delay={100} to={{ opacity: isVisible?1:0}}>
          {({ opacity }) => (
            <div style={{opacity}} className="bar-layer">
              <div className="bar-to-fill">
                <div className={isVisible ? "slideLeft enter" : "slideLeft"}>
                  <div className="bar-filled" style={{"width": props.percent}}>
                    <div className="bar-tag">
                      <h6 className="text-uppercase text-white">{props.name}</h6>
                    </div>
                  </div>
                </div>
                <span className="bar-percent">
                  <h5 className="text-uppercase">{props.percent}</h5>
                </span>
              </div>
            </div> 
          )}
        </Spring>
      )}
    </VisibilitySensor>

)
    
  
};

export default Bar;