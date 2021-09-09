import React, { useState } from 'react';
import { Form, Input, Select,Button, Layout} from 'antd';
import './RobotTextGenerator.css';
import Header from './Header';
import Sidebar from './Sidebar';



function RobotTextGenerator(){
    const { Option } = Select;
    const { TextArea } = Input;
    const[showText, setShowText] = useState(false);
    const[result, setResult] = useState('');
 

    const onFinish = (values) => {
        console.log(values)
        let result = '';


        if(values.rbtgoogle){
            result += `User-agent: Googlebot 
         Disallow : ${values.rbtgoogle} \n
            `;
        }
        if(values.rbtgoogleimage){
            result += `User-agent: googlebot-image  
             Disallow : ${values.rbtgoogleimage} \n
            `;
        }
        if(values.rbtgooglemobile){
            result += `User-agent: dgooglrbot-mobile 
                Disallow : ${values.rbtgooglemobile} \n
            `;
        }
        if(values.rbtgooglemsn){
            result += `User-agent: MSN bot 
                Disallow : ${values.rbtgooglemsn} \n
            `;
        }
        if(values.rbtgoogleyahoo){
            result += `User-agent: google yahoo 
                Disallow : ${values.rbtgoogleyahoo} \n
            `;
        }
        if(values.rbtyahoomm){
            result += `User-agent: Yahoo MN 
                Disallow : ${values.rbtyahoomm} \n
            `;
        }
        if(values.rbtyahooblogs){
            result += `User-agent: Yahoo blog 
                Disallow : ${values.rbtdefault} \n
            `;
        }
        if(values.rbtaskteoma){
            result += `User-agent: Teoma 
                Disallow : ${values.rbtaskteoma} \n
            `;
        }
        if(values.rbtgigablast){
            result += `User-agent: Giga blast 
                Disallow : ${values.rbtgigablast} \n
            `;
        }
        if(values.rbtdmoz){
            result += `User-agent: DMOZ 
                Disallow : ${values.rbtdmoz} \n
            `;
        }
        if(values.rbtnutch){
            result += `User-agent: nutch 
                Disallow : ${values.rbtnutch} \n
            `;
        }
        if(values.rbtalexa){
            result += `User-agent: alexa 
                Disallow : ${values.rbtalexa} \n
            `;
        }
        if(values.rbtbaidu){
            result += `User-agent: baidu 
                Disallow : ${values.rbtbaidu} \n
            `;
        }
        if(values.rbtnaver){
            result += `User-agent: Naver 
                Disallow : ${values.rbtnaver} \n
            `;
        }
        if(values.rbtmsnpisearch){
            result += `User-agent: Pi search 
                Disallow : ${values.rbtmsnpisearch} \n
            `;
        }

        if(values.rbtdefault){
            result += `User-agent: * 
                Disallow : ${values.rbtdefault} \n
            `;
        }
        if(values.rbtcrawl){
            result += `crawel delay : ${values.rbtcrawl} \n
            `;
        }
        if(values.rbtsitemap){
            result += `User-agent: default 
                Disallow : ${values.rbtsitemap} \n
            `;
        }

        if(values.rbtrestricted){
            result += `
                Disallow : ${values.rbtrestricted} \n
            `;
        }
        if(values.rbtrestrictedsecond){
            result += `
                Disallow : ${values.rbtrestrictedsecond} \n
            `;
        }
        if(values.rbtrestrictedthird){
            result += `
                Disallow : ${values.rbtrestrictedthird} \n
            `;
        }

         setShowText(true);
         setResult(result);

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
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        className="rbt-form"
        >
            <h1 className="rbt-heading">Robots.txt Generator</h1>

            <Form.Item
            label=" Default - All Robots are:"
            name="rbtdefault"
            style={{ marginLeft: 5 }}
            >
                    <Select placeholder="Same as Default" style={{ width: 190 }}>
                    <Option value="">Same as Default</Option>
                    <Option value=" ">Allowed</Option>
                    <Option value="/">Disallow</Option>
                    </Select>
            </Form.Item>

            <Form.Item
            label="Crawl-Delay:"
            name="rbtcrawl"
            
            >
                <Select placeholder="Default-No Delay" style={{ width: 400 }}>
                <Option value="">Default-No Delay</Option>
                <Option value="5 second">5 Seconds</Option>
                <Option value="10 second">10 Seconds</Option>
                <Option value="20 second">20 Seconds</Option>
                <Option value="60 second">60 Seconds</Option>
                <Option value="100 second">120 Seconds</Option>
                </Select>
            </Form.Item>

            <Form.Item
            label="Sitemap: (leave blank if you don't have):"
            name="rbtsitemap"
            >
              <Input style={{ width: 400 }} placeholder=" http://www.example.com/sitemap.xml" />
            </Form.Item>

            <Form.Item
            label="Search Robots:"
            name="rbtsearch"
            >
               
                    <Form.Item
                    label="	Google:"
                    name="rbtgoogle"
                    style={{ width: 400 }}
                    labelCol={{ span: 6 }}
                    >
                        <Select placeholder="Same as Default" style={{ width: 190 }}>
                        <Option value="">Same as Default</Option>
                        <Option value=" ">Allowed</Option>
                        <Option value="/">Disallow</Option>
                        </Select>
                    </Form.Item>

                   <Form.Item
                    label="	Google Image:"
                    name="rbtgoogleimage"
                    style={{ marginLeft: 1}}
                    >
                        <Select placeholder="Same as Default" style={{ width: 190 }}>
                        <Option value="">Same as Default</Option>
                        <Option value=" ">Allowed</Option>
                        <Option value="/">Disallow</Option>
                        </Select>
                    
                 </Form.Item>
                <Form.Item
                label="	Google Mobile:"
                name="rbtgooglemobile"
                >
                    <Select placeholder="Same as Default" style={{ width: 190 }}>
                    <Option value="">Same as Default</Option>
                    <Option value=" ">Allowed</Option>
                    <Option value="/">Disallow</Option>
                    </Select>
                </Form.Item>

                <Form.Item
                label="	MSN Search:"
                name="rbtgooglemsn"
                style={{ marginLeft: 13}}
                >
                    <Select placeholder="Same as Default" style={{ width: 190 }}>
                    <Option value="">Same as Default</Option>
                    <Option value=" ">Allowed</Option>
                    <Option value="/">Disallow</Option>
                    </Select>
                </Form.Item>

                <Form.Item
                label="Yahoo:"
                name="rbtgoogleyahoo"
                style={{ marginLeft: 53}}
                >
                    <Select placeholder="Same as Default" style={{ width: 190 }}>
                    <Option value="">Same as Default</Option>
                    <Option value=" ">Allowed</Option>
                    <Option value="/">Disallow</Option>
                    </Select>
                </Form.Item>

                <Form.Item
                label="Yahoo MM:"
                name="rbtyahoomm"
                style={{ marginLeft: 25}}
                >
                    <Select placeholder="Same as Default" style={{ width: 190 }}>
                    <Option value="">Same as Default</Option>
                    <Option value=" ">Allowed</Option>
                    <Option value="/">Disallow</Option>
                    </Select>
                </Form.Item>

                <Form.Item
                label="Yahoo Blogs:"
                name="rbtyahooblogs"
                style={{ marginLeft: 20}}
                >
                    <Select placeholder="Same as Default" style={{ width: 190 }}>
                    <Option value="">Same as Default</Option>
                    <Option value=" ">Allowed</Option>
                    <Option value="/">Disallow</Option>
                    </Select>
                </Form.Item>

                <Form.Item
                label="Ask/Teoma:"
                name="rbtaskteoma"
                style={{ marginLeft: 23}}
                >
                    <Select placeholder="Same as Default" style={{ width: 190 }}>
                    <Option value="">Same as Default</Option>
                    <Option value=" ">Allowed</Option>
                    <Option value="/">Disallow</Option>
                    </Select>
                </Form.Item>

                <Form.Item
                label="GigaBlast:"
                name="rbtgigablast"
                style={{ marginLeft: 35}}
                >
                    <Select placeholder="Same as Default" style={{ width: 190 }}>
                    <Option value="">Same as Default</Option>
                    <Option value=" ">Allowed</Option>
                    <Option value="/">Disallow</Option>
                    </Select>
                </Form.Item>

                <Form.Item
                label="DMOZ Checker:"
                name="rbtdmoz"
                style={{ marginLeft: 1}}
                >
                    <Select placeholder="Same as Default" style={{ width: 190 }}>
                    <Option value="">Same as Default</Option>
                    <Option value=" ">Allowed</Option>
                    <Option value="/">Disallow</Option>
                    </Select>
                </Form.Item>

                <Form.Item
                label="Nutch:"
                name="rbtnutch"
                style={{ marginLeft: 55}}
                >
                    <Select placeholder="Same as Default" style={{ width: 190 }}>
                    <Option value="">Same as Default</Option>
                    <Option value=" ">Allowed</Option>
                    <Option value="/">Disallow</Option>
                    </Select>
                </Form.Item>

                <Form.Item
                label="Alexa/Wayback:"
                name="rbtalexa"
                >
                    <Select placeholder="Same as Default" style={{ width: 190 }}>
                    <Option value="">Same as Default</Option>
                    <Option value=" ">Allowed</Option>
                    <Option value="/">Disallow</Option>
                    </Select>
                </Form.Item>

                <Form.Item
                label="Baidu:"
                name="rbtbaidu"
                style={{ marginLeft: 59}}
                >
                    <Select placeholder="Same as Default" style={{ width: 190 }}>
                    <Option value="">Same as Default</Option>
                    <Option value=" ">Allowed</Option>
                    <Option value="/">Disallow</Option>
                    </Select>
                </Form.Item>

                <Form.Item
                label="Naver:"
                name="rbtnaver"
                style={{ marginLeft: 56}}
                >
                    <Select placeholder="Same as Default" style={{ width: 190 }}>
                    <Option value="">Same as Default</Option>
                    <Option value=" ">Allowed</Option>
                    <Option value="/">Disallow</Option>
                    </Select>
                </Form.Item>

                <Form.Item
                label="MSN PicSearch:"
                name="rbtmsnpisearch"
                style={{ marginRight: 26}}
                >
                    <Select placeholder="Same as Default" style={{ width: 190 }}>
                    <Option value="">Same as Default</Option>
                    <Option value=" ">Allowed</Option>
                    <Option value="/">Disallow</Option>
                    </Select>
                </Form.Item>
             
            </Form.Item>

            <Form.Item
            label="Restricted Directories:"
            name="rbtrestricted"
            style={{ marginLeft: 10}}
            >
              <Input style={{ width: 400 }} placeholder=" Please input" />
            </Form.Item>

            <Form.Item
            label=" "
            name="rbtrestrictedsecond"
            style={{ marginLeft: 10}}
            >
              <Input style={{ width: 400 }} placeholder=" Please input" />
            </Form.Item>

            <Form.Item
            label=" "
            name="rbtrestrictedthird"
            style={{ marginLeft: 10}}
            >
              <Input style={{ width: 400 }} placeholder=" Please input" />
            </Form.Item>

            <Form.Item
            label=" "
            name="rbtbutton"
            colon={false}
            >
                    <Button type="primary" htmlType="submit">
                    Create Robots.text
                    </Button>

            </Form.Item>
            
            <Form.Item
            style={{ marginLeft: 280}} 
            >
               <Button type="primary" href={`data:text/plain;charset=utf-11, ${result}`} id="link" download="robots.txt" >
                    Create and save as robot text              
               </Button>
            </Form.Item>        

            <Form.Item>
              <TextArea rows={8} column={5} value={result} className="rbt-textarea" />
            </Form.Item>
                           
      </Form>
      </Layout>
      </Layout>
      </>
    )
}
export default RobotTextGenerator;

