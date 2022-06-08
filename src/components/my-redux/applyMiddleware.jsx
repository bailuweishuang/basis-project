export default function applyMiddleware(...applymiddles) {
  return (creatStore) => (reduce) => {
    const stroe = creatStore(reduce);
    let dispatch = stroe.dispatch;

    const applyChian = {
      getState: stroe.getState,
      dispatch: (action) => dispatch(action),
    };

    const chain = applymiddles.map((applymiddle) => applymiddle(applyChian));
    dispatch = compose(...chain)(stroe.dispatch);
    console.log(compose(...chain), dispatch);
    return {
      ...stroe,
      dispatch,
    };
  };
}

const compose = (...args) => {
  const len = args.length;
  if (len === 0) {
    return (name) => name;
  }
  if (len === 1) {
    return args[0];
  }
  return args.reduce((a, b) => (...ar) => a(b(...ar)));
};
