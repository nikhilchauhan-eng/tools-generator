import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';
import Home from "./Components/Home";
import PasswordGeneratorTool from "./Components/PasswordGeneratorTool";
import WordcounterTool from "./Components/WordcounterTool";
import MetatagGeneratorTool from "./Components/MetatagGeneratorTool";
import Tested from "./Components/Tested";
import EncoderAndDecoderTool from "./Components/EncoderAndDecoderTool";
import BrowserInfoCollector from "./Components/BrowserInfoCollector";
import RgbHexConverter from './Components/RgbHexConverter';
import RobotTextGenerator from './Components/RobotTextGenerator';
import ColorPicker from './Components/ColorPicker';
import GradientColor from './Components/GradientColor';
import ToDoApp from './Components/ToDoApp';

function App() {
  return (
   <BrowserRouter>
      <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/passwordgeneratortool" component={PasswordGeneratorTool} />
      <Route path="/wordcountertool" component={WordcounterTool} />
      <Route path="/metataggeneratortool" component={MetatagGeneratorTool} />
      <Route path="/encoderanddecodertool" component={EncoderAndDecoderTool} />
      <Route path="/browserinfocollector" component={BrowserInfoCollector} />
      <Route path="/rgbhexconverter" component={RgbHexConverter} />
      <Route path="/robottextgenerator" component={RobotTextGenerator} />
      <Route path="/colorpicker" component={ColorPicker} />
      <Route path="/gradientcolor" component={GradientColor} />
      <Route path="/todoapp" component={ToDoApp} />
      <Route path="/tested" component={Tested} />
    </Switch>
  </BrowserRouter>
  
  );
}

export default App;
