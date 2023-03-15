import { API_KEY } from "@constants/env";

const getQueryUrl = (URL: string) => `${URL}api_key=${API_KEY}`;

export default getQueryUrl;
