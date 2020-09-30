
exports.min = function min (array) {
  const reducer = (accumulator, currentValue) =>   currentValue < accumulator ? currentValue  : accumulator ;
  if(!Array.isArray(array) || array.length === 0) return 0;
    return array.reduce(reducer);
}

exports.max = function max (array) {
  const reducer = (accumulator, currentValue) =>   currentValue > accumulator ? currentValue  : accumulator ;
  if(!Array.isArray(array) || array.length === 0) return 0;
  return array.reduce(reducer);
}

exports.avg = function avg (array) {
  const reducer = (accumulator, currentValue) =>   currentValue + accumulator;
  if(!Array.isArray(array) || array.length === 0) return 0;
  return (array.reduce(reducer) / array.length);
}
