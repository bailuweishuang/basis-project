/*
 * @Author: your name
 * @Date: 2021-08-09 16:17:10
 * @LastEditTime: 2022-02-15 11:30:36
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \basis-project\src\components\my-redux\index.jsx
 */

export default function creatStore(reduce, applymiddle) {
  if (applymiddle) {
    return applymiddle(creatStore)(reduce);
  }
  let defaultStatus,
    subscribeList = [];
  const getState = () => {
    return defaultStatus;
  };

  const dispatch = (action) => {
    defaultStatus = reduce(defaultStatus, action);
    console.log(defaultStatus);

    subscribeList.forEach((item) => item());
  };
  const subscribe = (lister) => {
    subscribeList.push(lister);
    return () => {
      subscribeList = subscribeList.filter((i) => i !== lister);
    };
  };
  dispatch({ type: "AQZWSX" });
  return {
    getState,
    dispatch,
    subscribe,
  };
}
