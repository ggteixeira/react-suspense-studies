import wrapPromise from "./wrapPromise";

function fetchData(url: string): { read: () => any } {
  const promise = fetch(url).then((res: Response) => res.json());

  return wrapPromise(promise);
}

export default fetchData;
