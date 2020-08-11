function solution(array, commands) {
  let answer = [];
  commands.map((command) => {
    // [2,5,3]
    const start = command[0] - 1;
    const finish = command[1];
    const wanted = command[2] - 1;
    if (start + 1 === finish) {
      answer.push(array[start]);
    } else {
      const slidedArray = array.slice(start, finish);
      slidedArray.sort((a, b) => a - b);

      const result = slidedArray[wanted];
      answer.push(result);
    }
  });
  return answer;
}
// JS에서 sort 메소드는 두 자리수와 한 자리수를 sort할 때 오류가 있는 듯 하다.. return a-b를 해준 모습.
