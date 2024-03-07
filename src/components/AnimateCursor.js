import React from 'react'
import AnimatedCursor from 'react-animated-cursor'

const AnimateCursor = () => {
  return (
    <div>
        <AnimatedCursor
        innerSize={20}
        outerSize={35}
        color='213,116,232'
      outerAlpha={0.2}
      innerScale={0.7}
      outerScale={3}
        clickables={[
            'button',
            'h1'
          ]}
        />
    </div>
  )
}

export default AnimateCursor