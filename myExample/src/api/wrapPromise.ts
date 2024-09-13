function wrapPromise(promise) {
  let status = "pending";
  let response: any;

  interface IResponse {
    res: string;
    err: string;
  }

  const suspender = promise.then(
    (res: IResponse) => {
      status = "success";
      response = res;
    },

    (err: IResponse) => {
      status = "error";
      response = err;
    },
  );

  const read = () => {
    switch (status) {
      case "pending":
        throw suspender;

      case "error":
        throw response;

      default:
        return response;
    }
  };

  return { read };
}

export default wrapPromise;
