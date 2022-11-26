import { getAllUserPath } from "./apiPaths";



const getAllUserMethod = async (params) => {
  const headersList = {
    Accept: "*/*",
  };

  const url = params ? `${getAllUserPath}?${params}` : getAllUserPath

  const response = await fetch(url, {
    method: "GET",
    headers: headersList,
  });

  return await response.json();
};

export { getAllUserMethod };
