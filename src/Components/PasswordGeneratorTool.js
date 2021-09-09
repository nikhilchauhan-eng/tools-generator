import React, { useState } from 'react';
import generator from "generate-password";
import {CopyToClipboard} from 'react-copy-to-clipboard';
import './PasswordGeneratorTool.css';
import Header from './Header';
import Sidebar from './Sidebar';
import { Layout } from 'antd';




 function PasswordGeneratorTool(){
 
  const [inputValue, setInputValue] = useState(' ');

  const [password, setPassword] = useState('');
  const [length, setLength] = useState(6);
  const [isSymbols, setIsSymbols] = useState(true);
  const [isNumbers,setIsNumbers] = useState(false);
  const [isLowerCase, setIsLowerCase] = useState(false);
  const [isUpperCase, setIsUpperCase] = useState(false);
  const [quantity, setQuantity] = useState(3);

  const generatePassword = () => {
    const pwd = generator.generateMultiple(quantity,{
      length: length,
      symbols: isSymbols,
      numbers: isNumbers,
      lowercase: isLowerCase,
      uppercase: isUpperCase,
      quantity: quantity


    });
    setPassword(pwd);
  }



  return (
    

  <>
     <Header/>
      <Layout>
        <Sidebar/>
        <Layout style={{ padding: '0 24px 24px' }}>
         <h1 className="title">Secure Password Generator</h1> 

          <div className = "container">

              <div className="col">
                  Password Length:
                  <label>
                    <input type="number"  className="input-len form-control length"  value = {length}  onChange={e => setLength(e.target.value)}  />
                  </label>
              </div>

              <div className="col">
                  Include Symbols:
                  <label className="symbols">
                      <input type="checkbox" className="mr-1 " checked={isSymbols} onChange={() => setIsSymbols(val => !val)} /><span> ( e.g. @#$% )</span>
                    </label>
              </div>

              <div className="col">
                Include Numbers:
                  <label>
                      <input type="checkbox" className="mr-1 number" checked={isNumbers} onChange={() => setIsNumbers(val => !val)} /><span>( e.g. 123456 )</span>
                    </label>
              </div>


              <div className="col">
                    Include Lowercase Characters:
                  <label className="lower">
                      <input type="checkbox" className="mr-1 " checked={isLowerCase} onChange={() => setIsLowerCase(val => !val)} /><span>( e.g. abcdefgh )</span>
                    </label>
              </div>


              <div className="col">
                    Include Uppercase Characters:
                  <label  className="lower">
                      <input type="checkbox" className="mr-1 " checked={isUpperCase} onChange={() => setIsUpperCase(val => !val)} /><span>( e.g. abcdefgh )</span>
                    </label>
              </div>
              


            
              <div className="col">
                  Password Quantity
                  <label>
                    <input type="number"  className="input-len form-control length" value = {quantity}  onChange={e => setQuantity(e.target.value)} />
                  </label>
              </div>




                  <div className="col">
                    <input type="button"  value="Generate Password" onClick={generatePassword} />
                  <div> <br/>
                    
        
                    <div className="result col">
                      Your new  Password: 
                      <input type="text"  className="Clip" value= {password}  onChange = {e => setInputValue(e.target.value)} />
                    </div>

                    <div className="col">
                      <CopyToClipboard text = {password}>
                          <button> copy </button>
                      </CopyToClipboard>
                      </div>
                

                    </div>
                  </div>
        </div>
        </Layout>
     </Layout>

  </>

  )
}

export default PasswordGeneratorTool;