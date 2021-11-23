// 10/19 String Permutations
// https://gist.github.com/toriekim/6366e0e2f3fbaa1c663621f97ad32396

//given string
//return array of all permutations, same length
//elements should e unique and in alphabetical order

function stringPermutations(string) {
  let stringArr = string.split("");
  let result = [[stringArr.shift()]];

  while (stringArr.length) {
    let currLetter = stringArr.shift();
    let tempResults = [];
    result.forEach((curr) => {
      for (let i = 0; i <= curr.length; i++) {
        let temp = curr.slice();
        temp.splice(i, 0, currLetter);
        tempResults.push(temp);
      }
    });
    result = tempResults;
  }

  console.log(
    result
      .map((letterArr) => letterArr.join(""))
      .sort()
      .filter((element, index, array) => array.indexOf(element) === index) //filter checks if it already exists in the array
  );
}

stringPermutations("one");
// should return  [ 'eno', 'eon' 'neo', 'noe', 'oen', 'one']
stringPermutations("app");
// should return  [ 'app','pap','ppa']
stringPermutations("nn"); //should return  [ 'nn' ]
