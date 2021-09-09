import React, { useState } from 'react';
import { Form, Select, Input, Button, Checkbox, Layout } from 'antd';
import './MetatagGeneratorTool.css';
import Header from './Header';
import Sidebar from './Sidebar';


function MetatagGeneratorTool(){
    const { TextArea } = Input;
    const[showtext, setText] = useState(false);
    const[data, setData] = useState(true); 
    const[description, setDescription] = useState(true);
    const[keyword, setKeyword] = useState(true);
    const[index, setIndex] = useState(true);
    const[follow, setFollow] = useState(true);
    const[meta, setMeta] = useState(true);
    const[language, setLanguage] = useState(true);

    const onFinish = (values) => {
        console.log('Success:', values);
        setData(values.title);
        setDescription(values.description); 
        setKeyword(values.keyword);
        setIndex(values.index);
        setFollow(values.follow);
        setMeta(values.meta);
        setLanguage(values.language);



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
                    <Form
                    layout="vertical"
                    className="metagenerator"
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                  >

                    <h1 className="matatag">Meta Tag Generator</h1>

                    
                            <Form.Item
                              label="Site Title"
                              name="title"
                              rules={[{ required: true, message: 'Please input title!' }]}
                              className="titlem"
                              value="vertical"
                            > 
                        
                          <Input/>
                            </Form.Item>
                            
                        

                          <Form.Item style={{ marginBottom: 0 }}> 

                                <Form.Item
                                  label="Site Description"
                                  name="description"
                                  rules={[{ required: true, message: 'Please input description!' }]}
                                  style={{ display: 'inline-block', width: "50%"  }}
                                  >   
                                <TextArea />
                                </Form.Item>
                      
                                  { <Form.Item
                                  
                                    label="Site Keywords (Separate with commas)"
                                    name="keyword"
                                    rules={[{ required: true, message: 'Please input keyword!' }]}
                                    style={{ display: 'inline-block', width: "50%" }}
                                  >
                                    <TextArea />
                                  </Form.Item> }

                            </Form.Item>


                          <Form.Item style={{ marginBottom: 0 }}> 
                                {<Form.Item
                                  label="Allow robots to index your website?"
                                  name="index"
                                  rules={[{ required: true, message: 'Please input index!' }]}
                                  style={{ display: 'inline-block', width: "50%"  }}
                                >
                                    <Select placeholder="Yes">
                                    <option value="yes" >Yes</option>
                                    <option value="no">No</option>
                                    </Select>
                                </Form.Item> }
                  
                                {<Form.Item
                                  label="Allow robots to follow all links?"
                                  name="follow"
                                  rules={[{ required: true, message: 'Please input index!' }]}
                                  style={{ display: 'inline-block', width: "50%"  }}
                                >
                                    <Select placeholder="Yes">
                                    <option value="yes" >Yes</option>
                                    <option value="no">No</option>
                                    </Select>
                                </Form.Item> } 
                            </Form.Item>


              
                            <Form.Item style={{ marginBottom: 0 }}>
                                  {<Form.Item
                                    label="What type of content will your site display?"
                                    name="metatype"
                                    rules={[{ required: true, message: 'Please input index!' }]}
                                    style={{ display: 'inline-block', width: "50%" }}
                                  >
                                    <Select placeholder="UTF-8">
                                    <option value="UTF-8" >UTF-8</option>
                                    <option value="UTF-16">UTF-16</option>
                                    <option value="ISO-8859-1" >ISO-8859-1</option>
                                    <option value="WINDOWS-1252">WINDOWS-1252</option>
                                    </Select>
                                  </Form.Item> }

                                  {<Form.Item
                                    label="What is your site primary language?"
                                    name="language"
                                    rules={[{ required: true, message: 'Please input index!' }]}
                                    style={{ display: 'inline-block', width: "50%" }} >
                                    <Select placeholder="English">
                                    <option value="English " >English </option>
                                    <option value="French ">French </option>
                                    <option value="Spanish " >Spanish </option>
                                    <option value="Russion ">Russion </option>
                                      <option value="Arabic"> Arabic </option>
                                      <option value="Hindi"> Hindi </option>
                                      <option value="Korean"> Korean </option>
                                      <option value="Japnes"> Japnes </option>
                                      <option value="no language"> No language </option>  
                                    </Select>
                                  </Form.Item> }
                            </Form.Item>


                    <Form.Item label=" " colon={false}>
                      <Button type="primary" htmlType="submit">
                        Generate Meta tag
                      </Button>
                    </Form.Item>


                  {showtext &&
                  <TextArea rows={8} column={5} value={`
                                            <meta name="data" content="${data}">
                                            <meta name="description" content="${description}">
                                            <meta name="description" content="${keyword}">
                                            <meta name="index" content="${index}">
                                            <meta name="follow" content="${follow}">
                                            <meta name="meta" content="${meta}">
                                            <meta name="language" content="${language}">
                                          `}/>
                  }
                  </Form>
              </Layout>
         </Layout>
      </>
    )
}
export default MetatagGeneratorTool;