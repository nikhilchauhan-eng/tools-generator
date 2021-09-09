import React, { useState } from 'react';
import { Form, Button, Input, Layout } from 'antd';
import './EncoderAndDecoderTool.css';
import Sidebar from './Sidebar';
import Header from './Header';

function EncoderAndDecoderTool(){

const { TextArea } = Input;
const[showtext, setText] = useState(false);
const[data, setData] = useState(true);

const onFinish = (values) => {
    setData(encodeURI(values.title));
    setText(true); 
 };
 

  const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
  };


    return(
    <>   
      <Header/>
       <Layout>
         <Sidebar/>
           <Layout>
              <div className="encode">
                <Form
                layout="vertical"
                className="metagenerator"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                >
                  <h1 className="encoder">URL Encoder / Decoder</h1>


                  {showtext &&
                    
                    <Form.Item label="Encoded URL :" >   
                              <TextArea  rows={7}  value={data}/>
                    </Form.Item> }

                      <Form.Item
                                  label="Decoded URL:"
                                  name="description"
                                  rules={[{ required: true, message: 'Please input description!' }]}
                                  name="title"
                                  >   
                                <TextArea rows={7}/>
                    </Form.Item>


                    <Form.Item label=" " colon={false}>
                        <Button type="primary" htmlType="submit">
                          submit
                        </Button>
                    </Form.Item>
                </Form>
             </div>
        </Layout>
    </Layout>
  </>
    )
}
export default EncoderAndDecoderTool;