import { categoryOrkToEng } from 'hooks/useCategory';

export function SortData(data) {
  const sorted = Object.keys(data)
    .sort((a, b) => data[b].total - data[a].total)
    .map(key => ({ [key]: data[key] }));
  let sortedKey = [];
  let total = [];
  sorted.map(el => {
    let arrayKey = Object.keys(el);
    sortedKey.push(arrayKey[0]);

    let arrayValue = Object.values(el);
    total.push(arrayValue[0].total);
    return '';
  });
  let key = sortedKey.map(el => categoryOrkToEng(el));
  const ChartData = {
    x: key,
    y: total,
  };
  return ChartData;
}

export function SortDataSubMenu(data) {
  let sorted;
  data[0].map(el => {
   return sorted = Object.keys(el)
      .sort((a, b) => el[b] - el[a])
      .map(key => ({ [key]: el[key] }));
  });
  const x = [];
  let y = [];
  sorted.map(el => {
    let arrayValue = Object.values(el);
    y.push(arrayValue[0]);
    let arrayKey = Object.keys(el);
    x.push(arrayKey[0]);
    return '';
  });
  x.shift();
  y.shift();
  const ChartData = {
    x: x,
    y: y,
  };
  return ChartData;
}
