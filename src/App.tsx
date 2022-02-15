import { useEffect } from 'react';

import { getClient } from './utils/api';

function App() {
  useEffect(() => {
    const testApi = async () => {
      const api = await getClient();

      if (api) {
        const nodeInfo = await api.node.getNodeInfo();

        window.alert(`Seems to be working! Network identifier: ${nodeInfo.networkIdentifier}`);

        console.log(api);
      }
    };

    testApi();
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "10em" }}>
      <h1>Vote lemii!</h1>
    </div>
  );
}

export default App;
