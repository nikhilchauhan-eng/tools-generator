import { Layout, Menu} from 'antd';

function Header(){
    const { SubMenu } = Menu;
    const { Header } = Layout;
return(
    <Layout>
            <Header className="header">
            <div className="logo" value="Swap Tools" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                <Menu.Item key="1">Tools</Menu.Item>

            </Menu>
            </Header>
    </Layout>
)
}
export default Header;