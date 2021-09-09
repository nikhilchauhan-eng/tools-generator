import { Layout, Menu } from 'antd';
import { ToolOutlined  } from '@ant-design/icons';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


function Sidebar(){
    const { SubMenu } = Menu;
    const {  Sider } = Layout;
return(
    <>
   
        <Sider width={200} className="site-layout-background">
        <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
        >
            <SubMenu key="sub1" icon={<ToolOutlined />} title="Tools">
              <Menu.Item key="1"><Link to="/passwordgeneratortool">Password-Generator</Link></Menu.Item>
              <Menu.Item key="2"><Link to="/wordcountertool">Wordcounter</Link></Menu.Item>
              <Menu.Item key="3"><Link to="/metataggeneratortool">Metatag-Generator</Link></Menu.Item>
              <Menu.Item key="4"><Link to="/encoderanddecodertool">Encode</Link></Menu.Item>
              <Menu.Item key="5"><Link to="/browserinfocollector"> Browser Info collector</Link></Menu.Item>
              <Menu.Item key="6"><Link to="/rgbhexconverter">RgbHexConverter</Link></Menu.Item>
              <Menu.Item key="7"><Link to="/robottextgenerator">RobotTextGenerator</Link></Menu.Item>
              <Menu.Item key="8"><Link to="/colorpicker">Color-Picker</Link></Menu.Item>
              <Menu.Item key="9"><Link to="/gradientcolor">GradientColor</Link></Menu.Item>
              <Menu.Item key="10"><Link to="/todoapp">To-doApp</Link></Menu.Item>
              <Menu.Item key="11"><Link to="/tested">tested</Link></Menu.Item>
            </SubMenu>
        </Menu>
        </Sider>
  
    
    
    </>
)
}
export default Sidebar;