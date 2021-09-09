import React, { useState,useEffect } from 'react';
import { browserName, osVersion,fullBrowserVersion,osName } from 'react-device-detect';
import axios from 'axios';
import './BrowserInfoCollector.css';
import { Layout } from 'antd';
import Header from "./Header";
import Sidebar from './Sidebar';

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  }

function BrowserInfoCollector(){

 const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions()); 
 
 useEffect(() => {
     console.log(window.screen.height);
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);



 const [ip, setIP] = useState('');
 const getData = async () => {
   const res = await axios.get('https://geolocation-db.com/json/')
   console.log(res.data);
   setIP(res.data.IPv4)
 }
 
 useEffect( () => {

   getData()

 }, [])


    return(
        <>
          <Header/>
            <Layout>
              <Sidebar/>
                <Layout>
                  <table>
                      <tr className="info">
                          <td><b>Browser Name :</b></td>
                          <td>{browserName}{fullBrowserVersion}</td>
                      </tr>
                      <tr className="info">
                          <td><b>O.S :</b></td>
                          <td>{osName}{osVersion}</td>
                      </tr>
                      <tr className="info">
                          <td><b>I.P :</b></td>
                          <td>{ip}</td>
                      </tr>
                      <tr className="info">
                          <td><b>Browser resolution :</b></td>
                          <td>Height:{window.innerHeight}, Width:{window.innerWidth}</td>
                      </tr>
                      <tr className="info">
                          <td><b>Screen resolution:</b></td>
                          <td>Height:{window.screen.height}, Width:{window.screen.width}</td>
                      </tr>

                    </table>
                </Layout>
            </Layout>
        </>
    )
}
export default BrowserInfoCollector;