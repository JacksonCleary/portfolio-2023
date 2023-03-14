interface chainObj {
  time: number;
  callback: () => void;
}

export async function chain(...arr: Array<chainObj>) {
  function delay(t: number) {
    return new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, t);
    });
  }
  //for the length of this array run a delay
  //then log, you could always use a callback here
  for (let i of arr) {
    //pass the items delay to delay function
    await delay(i.time);
    i.callback();
  }
}
