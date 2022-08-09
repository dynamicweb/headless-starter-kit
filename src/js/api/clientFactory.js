import { baseUrl } from "../../../config";

export const createClient = (ClientType) => new ClientType(baseUrl);