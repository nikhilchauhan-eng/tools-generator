
import React, { useState } from 'react';
import {  Button,  Divider, InputNumber,Row, Layout } from 'antd';
import { SketchPicker } from 'react-color';
import './Gradientcolor.css';
import Header from "./Header";
import Sidebar from './Sidebar';

function GradientColor(){
  const[angle, setAngle] = useState('160');
  const defaultList = [ "#d03131","#2997c7"]; 
  const[color, setColor] = useState(defaultList);
  const [randomDigit, setRandomDigit] = useState();

  const handleAdd = () => {
    let colorTemp = [...color, '#fff']
    setColor(colorTemp );
    console.log(colorTemp)
  }
 
 const  handleRemove = (index)=> {
    let colorTemp =[...color];
    colorTemp.splice(index, 1);
    setColor(colorTemp); 
  }

  const handleChange = (index, newColor) => {
    let colorTemp = color; 
    colorTemp[index] = newColor;
    setColor(colorTemp);
    setRandomDigit(Math.random());
    console.log(colorTemp)
  }
return(
<>  
 <Header/>
  <Layout> 
   <Sidebar/>
    <Layout>
    <h1 className="gradientheading">GradientColor-Generator</h1>
    
      <div className="gradient" style={{background: `linear-gradient(${angle}deg ,${color})`}} >
         <Divider type="vertical" />
           <Button 
           onClick ={handleAdd}
           >
            Add color
           </Button>

         <Divider type="vertical" />
           <Button
           onClick ={handleRemove}
           >
             Remove Color
           </Button>

         <Divider type="vertical" />
        
           <InputNumber
              min={1}
              max={360}
              defaultValue={160}
              style={{ margin: '0 16px' }}
              onChange={(val) => {setAngle(val)}}
              
            />
           <Divider type="vertical" />

             <h1>{`linear-gradient(${angle}deg,${color})`}</h1>
          <Row>
               {color.map((item,index) =>
               <>
                  <SketchPicker
                  name={item}
                  color={color[index]}
                  onChange={(colorOutput) => handleChange(index, colorOutput.hex)}
                  />
                 <br/>
                  
               </>
               )}
          </Row>    
          
      </div> 
      </Layout>
    </Layout>    
</>
    )
}
export default GradientColor;