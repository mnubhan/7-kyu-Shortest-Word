function findShort(s){
  let newArr = s.split(' ').map(x => x.length).sort((a,b) => a - b);
  return newArr[0];
}

function findShort(s){
  return Math.min.apply(null, s.split(' ').map(w => w.length));
}

function findShort(s){
    return Math.min(...s.split(" ").map (s => s.length));
}
