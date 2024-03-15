import { appendResponseHeader, H3Event } from "h3";

export const fetchWithCookie = async (event: H3Event, url: string) => {
  // get the response from the server endpoint
  const res = await $fetch.raw(url);

  // get the cookies from the response
  const cookies = (res.headers.get("set-cookie") || "").split(",");

  // attach each cookie to our incoming request
  for (const cookie of cookies) {
    appendResponseHeader(event, "set-cookie", cookie);
  }

  // return the data of the response
  return res._data;
};
