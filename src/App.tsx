import { useState } from "react";
import styled from "styled-components";

import { btsType } from "./App.const";
import { Display } from "./components/Display";
import { InputValue } from "./components/InputValue";

const BonChae = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: colunm;
  width: 400px;
  height: 45rem;
  background: #191507;
  box-shadow: 3px 3px 13px 13px #d6d6d6;
  border-radius: 2%;
  position: relative;
`;

function App() {
  const [hyeonJaeGab, setHyeonJaeGab] = useState<btsType[]>([]);

  return (
    <BonChae>
      <Display hyeonJaeGab={hyeonJaeGab} setHyeonJaeGab={setHyeonJaeGab} />
      <InputValue hyeonJaeGab={hyeonJaeGab} setHyeonJaeGab={setHyeonJaeGab} />
    </BonChae>
  );
}

export default App;
