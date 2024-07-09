// src/App.js
import React, { useState } from 'react';
import ParentInput from './components/ParentInput';
import PunnettSquare from './components/PunnettSquare';
import {Button} from '@chakra-ui/react'
  import { Text } from '@chakra-ui/react'
import './App.css';

const App = () => {
    const [parents, setParents] = useState([]);

    return (
        <div className="App" >
            <Text fontSize='7xl' height='h19'>Meu Quadro</Text>
            <ParentInput setParents={setParents} />
            <PunnettSquare parents={parents} />
            <Button colorScheme='blue' height='h1'>Button</Button>
        </div>
    );
};

export default App;
