import React, { useState } from 'react';
import { Form, Input, Button, Divider } from 'antd';
function ToDoApp(){

  const [value, setValue] = useState(['']);
  
  const handleAdd = (text) => {
    let valueTemp = [...value, { text }];
    setValue(valueTemp );
    console.log(valueTemp)
  }


  const  handleRemove = (index)=> {
    let valueTemp =[...value];
    valueTemp.splice(index, 1);
    setValue(valueTemp); 
  }
  


return(
<>    
   <h1 style={{ textAlign: 'center' }} >To Do App</h1>
   
    <Form className="todoapp" style={{ textAlign: 'center' }}>
      {value.map((task, index) => (
            
            <Input
            task={task}
            index={index}
            key={index}
            style={{ width: 800 }}
            />
        
        ))}
   
           <Form.Item
            label=" "
            name="rbtbutton"
            colon={false}
            >
            <Button onClick ={handleAdd} >
             Add task
            </Button>

            <Button onClick ={handleRemove}>
              Delete task
            </Button>

            </Form.Item>

       </Form>
       

</>
    )
}
export default ToDoApp;