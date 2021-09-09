import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Slider, InputNumber, Row, Col,Layout } from 'antd';
import { Form, Input, Button } from 'antd';
import './RgbHexaConverter.css';
import Header from './Header';
import Sidebar from './Sidebar';

function RgbHexConverter(){
  const [hexColorCode, setHexColorCode] = useState("");
  const [hslColorCode, setHslColorCode] = useState("");
  const[hexRed, setHexRed] = useState(255);
  const[hexGreen, setHexGreen] = useState(255);
  const[hexBlue, setHexBlue] = useState(255);

   {/* Function for Calculating Hex Code */}
  const RGBToHex = (r,g,b) => {
      r = hexRed.toString(16);
      g = hexGreen.toString(16);
      b = hexBlue.toString(16);
      if (r.length == 1)
        r = "0" + r;
      if (g.length == 1)
        g = "0" + g;
      if (b.length == 1)
        b = "0" + b;

      return "#" + r + g + b;
    }

   {/* Function for Calculating Hsl Code */}
   const  RGBToHsl = (r,g,b) => {

    r = hexRed;
    g = hexGreen;
    b = hexBlue;

    r /= 255;
    g /= 255;
    b /= 255;
    
    let cmin = Math.min(r,g,b),
      cmax = Math.max(r,g,b),
      delta = cmax - cmin,
      h = 0,
      s = 0,
      l = 0;
      if (delta == 0)
      h = 0;

    // Red is max
    else if (cmax == r)
      h = ((g - b) / delta) % 6;
    // Green is max
    else if (cmax == g)
      h = (b - r) / delta + 2;
    // Blue is max
    else
      h = (r - g) / delta + 4;
  
    h = Math.round(h * 60);

    if (h < 0)
    h += 360;

    l = (cmax + cmin) / 2;

    // Calculate saturation
    s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
      
    // Multiply l and s by 100
    s = +(s * 100).toFixed(1);
    l = +(l * 100).toFixed(1);
  
    return "hsl(" + h + "," + s + "," + l + ")";
 }


  {/* Function for Convert RGB in Hex Code */}
    const onConvert = () => {
        let hexColorCode = RGBToHex();
        setHexColorCode(hexColorCode);

        let hslColorCode = RGBToHsl();
        setHslColorCode(hslColorCode);       
    }
 {/* Function for Reset RGB code */}
    const onReset = () => {
      setHexRed(255);
      setHexGreen(255);
      setHexBlue(255);
      setHexColorCode();
      setHslColorCode();
    }
        
    const tailLayout = {
      wrapperCol: { offset: 8, span: 16 },
    };
      
    return(
     <>
     <Header />
      <Layout>
       <Sidebar />
        <Layout>
         <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
          >
            <h1 className="RGBtoHexa-heading">RGB to Hex And Hsl</h1>
               <Form.Item
                  label=" Red color (R):"
                  name="red"
                >
                    <Row>
                      <Col span={4}>
                        <InputNumber
                          min={0}
                          max={255}
                          style={{ margin: '0 16px' }}
                          value={hexRed}
                          onChange={(val) => { setHexRed(val)}}
                        />
                      </Col>
                      <Col span={12}>
                        <Slider
                          className="reds"
                          min={0}
                          max={255}
                          value={hexRed}
                          onChange={(val) => { setHexRed(val)}}
                        
                        />
                      </Col>
                    </Row>
                  </Form.Item>

                      <Form.Item
                        label=" Green color (G):"
                        name="red"
                      >
                        <Row>
                          <Col span={4}>
                            <InputNumber
                              min={0}
                              max={255}
                              style={{ margin: '0 16px' }}
                              value={hexGreen}
                              onChange={(val) => { setHexGreen(val)}}
                            />
                          </Col>
                          <Col span={12}>
                            <Slider
                              min={0}
                              max={255}
                              value={hexGreen}
                              onChange={(val) => { setHexGreen(val)}}
                          
                            />
                          </Col>
                        </Row>
                      </Form.Item>

                      <Form.Item
                        label="Blue color (B):"
                        name="red"
                      >
                        <Row>
                          <Col span={4}>
                            <InputNumber
                              min={0}
                              max={255}
                              style={{ margin: '0 16px' }}
                              value={hexBlue}
                              onChange={(val) => { setHexBlue(val)}}
                            />
                          </Col>
                          <Col span={12}>
                            <Slider
                              min={0}
                              max={255}
                              value={hexBlue}
                              onChange={(val) => { setHexBlue(val)}}
                          
                            />
                          </Col>
                        </Row>
                      </Form.Item>

                      
                       <Form.Item
                          label="Color preview:"
                          name="preview"
                        >
                        <div className="showcolor"
                          style={{ backgroundColor: `rgb( ${hexRed},${hexGreen},${hexBlue} )` }}
                        />
                      </Form.Item> 

                      
                      <Form.Item {...tailLayout}>
                        <Button type="primary" onClick={onConvert}>
                          Convert
                        </Button>
                        <Button onClick={onReset} >
                          Reset
                        </Button>
                     </Form.Item>  

                     <Form.Item  label="Hex color code:">
                       <Input value={hexColorCode}  style={{ width: 500 }}/>
                     </Form.Item>
                     <Form.Item  label="Hsl color code:">
                       <Input value={hslColorCode}  style={{ width: 500 }}/>
                     </Form.Item>
          </Form>
        </Layout> 
        </Layout>
     </>
    )
}
export default RgbHexConverter;