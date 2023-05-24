const array = [2, 5, 8, 11, 1, 9, 20];

const sortFunc = (a, b) => a - b;

function minMax(array = []) {
  const sortedArray = array.sort(sortFunc);
  return { min: sortedArray[0], max: sortedArray[sortedArray.length - 1] }
}

console.log(minMax(array));

/**
 * 如果不写排序函数，默认使用字母排序，即将数字转换为字符串，再进行排序
 * (a, b) => a - b; 从小到大排序
 */