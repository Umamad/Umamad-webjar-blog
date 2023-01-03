export default function divider(size, bigArray) {
  var size = 10;
  var arrayOfArrays = [];
  for (var i = 0; i < bigArray.length; i += size) {
    arrayOfArrays.push(bigArray.slice(i, i + size));
  }
  return arrayOfArrays;
}
