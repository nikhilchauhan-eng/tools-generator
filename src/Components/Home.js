import { Layout } from "antd";
import Header from "./Header";
import Sidebar from "./Sidebar";
import './Home.css';

function Home(){
 

return(
<>
<Header/>
<Layout>
  <Layout>
 <Sidebar/>
 <h1 className="displaytext" >Welcome <br/> To <br/>Tools House</h1>
  </Layout>
</Layout>

</>

  
    )
}
export default Home;