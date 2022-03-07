import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HelloWorld from './ReactChallenges/HelloWorld';
import CaptureUserClicks from './ReactChallenges/CaptureUserClicks';
import Buttons from './ReactChallenges/Buttons';
import Counter from './ReactChallenges/Counter';
import Mapping from './ReactChallenges/Mapping';
import Animals from './ReactChallenges/Animals';
import Form from './ReactChallenges/Form';
import Json from './ReactChallenges/Json';
import CV from './Screens/CV';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        {/* <ColorModeSwitcher justifySelf="flex-end" /> */}
        <Routes>
          {/* <Route path="/" element={<Layout />}> */}

          <Route index element={<CV />} />
          {/* <Route index element={<HelloWorld />} /> */}
          {/* <Route index element={<CaptureUserClicks />} /> */}
          {/* <Route index element={<Buttons />} /> */}
          {/* <Route index element={<Counter />} /> */}
          {/* <Route index element={<Mapping />} /> */}
          {/* <Route index element={<Animals />} /> */}
          {/* <Route index element={<Form />} /> */}
          {/* <Route index element={<Json />} /> */}

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
