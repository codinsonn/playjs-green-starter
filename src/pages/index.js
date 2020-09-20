import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';

/* --- Styles ------------------------------- */

const S = {};

S.Hello = styled(Text)`
  font-weight: bold;
`;

/* --- <App/> ------------------------------- */

const App = (props) => {
  
  // - Render -
  
  return (
    <S.Hello>Hello World!</S.Hello>
  );
  
}

/* --- Exports ------------------------------ */ 

export default App;
