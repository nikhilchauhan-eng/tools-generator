import { Layout } from 'antd';
import React, { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import { Input } from 'antd';
import './WordcounterTool.css';

 function WordcounterTool(){
  const { TextArea } = Input;

    const [state, setState] = React.useState({
        wordCount: 0, 
     
      });
      
      const handleKeyPress = (e) => {
        const count = e.target.value;
        
        const countWords = (count) => {
          if (count.length === 0) {
            return 0;
          } else {
            count = count.replace(/(^\s*)|(\s*$)/gi,"");
            count = count.replace(/[ ]{2,}/gi," ");
            count = count.replace(/\n /,"\n");
            return count.split(' ').length; 
          }
        }
        
        setState({
          wordCount: countWords(count),
        
        });
      }
    
    return(
    <>
    <Header/>
      <Layout>
        <Sidebar/>
         <Layout>
          <div id='word'>
            <h1 className="wordcount">Word Count: 
              <span className='num'> {state.wordCount}</span> 
            </h1>
                
            <TextArea 
               rows={4}
              placeholder='type text here'
              onChange={handleKeyPress}
              className="wordprint"
            />    
            
          </div>
        </Layout>
     </Layout>
     
    
    </>
    )
}
export default WordcounterTool;