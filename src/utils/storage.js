// import React from 'react';
const useStorage = {
  get(key) {
    // 获取 localStorage 对应键值
    let local = window.localStorage.getItem(key);
    // 对取出的数据进行 JSON.parse 处理
    local = local === null ? null : localFormat(local);
    // 对外暴露 react 状态 和 react reducer
    return local;
  },
  set(key, val) {
    // 传入值 是否是 Object 如果是，进行 JSON.stringify 处理
    const value = valueFormat(val);
    // 对应 localStorage 不存在 初始化 localStorage
    // 在页面更新状态后，同步更新 localStorage
    window.localStorage.setItem(key, valueFormat(value));
  },
};

// 对于初始化和更新的值进行处理
function valueFormat(value) {
  if (value instanceof Function) {
    throw new Error('function is not allowed');
  }
  if (typeof value === 'symbol') {
    throw new Error('symbol is not allowed');
  }
  if (typeof value === 'object') {
    return JSON.stringify(value);
  }
  return value;
}
// 对 localStorage 中取出的数据进行处理
function localFormat(value) {
  let reValue;
  try {
    reValue = JSON.parse(value);
  } catch {
    reValue = value;
  }
  return reValue;
}
export default useStorage;