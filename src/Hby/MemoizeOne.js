// memoizeOne :: forall a. a -> a
exports.memoizeOnce = (f) => {
  return memoize_once(f);

  function memoize_once(fn, cacheArg, cacheResult) {
    if (typeof fn !== "function") return fn;
    return (arg) => {
      if (arguments.length != 1) throw new Error("不能缓存多参数调用的函数");
      if (arg !== cacheArg) {
        map = new Map();
        var value = fn(arg);
        var result = null;
        if (typeof value === "function") {
          result = memoize_once(value);
        } else {
          result = value;
        }
        cacheResult = result;
      }
      return cacheResult;
    };
  }
};
