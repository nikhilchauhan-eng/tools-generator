import React, { useState } from 'react';
import { SketchPicker } from 'react-color';

function ColorPickers(){
    const [color, setColor] = useState('#fff');
  
    
    return(
    <>
    <SketchPicker
     color={color}
     onChange={(color) => setColor(color.hex)}/>
      <h1> color is :{color}</h1>
      </>
    )
}
export default ColorPickers;

