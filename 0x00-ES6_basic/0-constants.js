/*
   taskFirst:
   Instantiates variables using const.
*/
export function taskFirst () {
  const task = 'I prefer const when I can.';
  return task;
}

/*
   taskNext:
   Instantiates variables using let.
*/
export function taskNext () {
  let combination = 'But sometimes let';
  combination += getLast();

  return combination;
}

/*
   getLast:
   Returns a string.
*/
export function getLast () {
  return ' is okay';
}
