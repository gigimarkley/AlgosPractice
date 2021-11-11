//https://www.pramp.com/challenge/AMypWAprdmUlaP2gPVLZ

//given a dictionary/object
//return a flatten dictionary (values should not be an object and concatenate keys)

function flattenDictionary(dict) {
  let newDict = {};
  helper("", dict, newDict);
  return newDict;
}

function helper(initialKey, dict, newDict) {
  for (key in dict) {
    let value = dict[key];
    if (typeof value !== "object") {
      if (initialKey == null || initialKey == "") {
        newDict[key] = value;
      } else if (key === "") {
        newDict[initialKey] = value;
      } else {
        newDict[initialKey + "." + key] = value;
      }
    } else {
      if (initialKey == null || initialKey == "") {
        helper(key, value, newDict);
      } else {
        helper(initialKey + "." + key, value, newDict);
      }
    }
  }
}

const input = {
  Key1: "1",
  Key2: {
    a: "2",
    b: "3",
    c: {
      d: "3",
      e: {
        "": "1",
      },
    },
  },
};

console.log(flattenDictionary(input));
