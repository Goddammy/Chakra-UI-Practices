import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Screens/Home';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        {/* <ColorModeSwitcher justifySelf="flex-end" /> */}
        <Routes>
          {/* <Route path="/" element={<Layout />}> */}
          <Route index element={<Home />} />
          {/* <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
          {/* </Route> */}
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
//<ColorModeSwitcher justifySelf="flex-end" />
