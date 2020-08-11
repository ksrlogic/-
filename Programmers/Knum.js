function solution(array, commands) {
  let answer = [];
  commands.map((command) => {
    // [2,5,3]

    const start = command[0] - 1;
    const finish = command[1];
    const wanted = command[2] - 1;
    if (start == finish) {
      answer.push(array[start]);
    } else {
      const slideArray = array.slice(start, finish);
      slideArray.sort();

      const result = slideArray[wanted];
      answer.push(result);
    }
  });
  return answer;
}

console.log(
  solution(
    [1, 5, 2, 6, 3, 7, 4],
    [
      [2, 5, 3],
      [4, 4, 1],
      [1, 7, 3],
    ]
  )
);
