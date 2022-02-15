import { APIClient } from '@liskhq/lisk-api-client';
import * as client from 'lisk-client';

const WS_API = import.meta.env.VITE_WS_API;

let clientCache: APIClient;

export const getClient = async () => {
  if (typeof WS_API !== "string" || !WS_API) {
    throw new Error("Invalid RPC endpoint defined");
  }

  if (!clientCache) {
    clientCache = await client.apiClient.createWSClient(WS_API);
  }

  return clientCache;
};
