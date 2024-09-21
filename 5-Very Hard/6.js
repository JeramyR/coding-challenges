//title: Escape Velocity I

//tags: math,physics

//url: https://edabit.com/challenge/8JhxAZv9XSuW6QeGo

//Description:
//Escape velocity is the minimum speed needed for a free, non-propelled object to escape from the gravitational influence of a massive body, that is, to achieve an infinite distance from it. Escape velocity is a function of the mass of the body and distance to the center of mass of the body.
//Objective
//Create a function that takes a planet as an argument and returns its escape velocity expressed in m/s, km/h and km/s.
//Data
//In the following table you will find for each planet its mass relative to Earth and its radius relative to Earth:
//Planet	Mass	Radius
//Mercury	0.0558	0.383
//Venus	0.815	0.95
//Earth	1	1
//Mars	0.107	0.532
//Jupiter	318	11.2
//Saturn	95.1	9.41
//Uranus	14.5	4.06
//Neptune	17.2	3.88
//Consider:
//Earth mass = 5.976e24 kg
//Earth equatorial radius = 6378 km
//Gravitational Constant G = 6.67e-11 N*m²/kg²
//Examples
//escapeVelocity("Earth") ➞ "The escape velocity in m/s is: 11179.98. The escape velocity in km/h is: 40247.93. The escape velocity in km/s is: 11.18."
//
//escapeVelocity("Venus") ➞ "The escape velocity in m/s is: 10355.19. The escape velocity in km/h is: 37278.68. The escape velocity in km/s is: 10.36."
//
//escapeVelocity("Mars") ➞ "The escape velocity in m/s is: 5013.92. The escape velocity in km/h is: 18050.11. The escape velocity in km/s is: 5.01."
//Notes
//Round to the nearest hundred the escape velocity in m/s. Using the rounded escape velocity in m/s calculate the escape velocity in km/h and round that number to the nearest hundred. Finally, using the rounded escape velocity in m/s, calculate the escape velocity in km/s and round that number to the nearest hundred.
//Pay special attention to units.
//See part #2 of this series: Escape Velocity II.

//code area
///////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(escapeVelocity('Mercury'), 'The escape velocity in m/s is: 4267.35. The escape velocity in km/h is: 15362.46. The escape velocity in km/s is: 4.27')
//Test.assertEquals(escapeVelocity('Venus'), 'The escape velocity in m/s is: 10355.19. The escape velocity in km/h is: 37278.68. The escape velocity in km/s is: 10.36')
//Test.assertEquals(escapeVelocity('Earth'), 'The escape velocity in m/s is: 11179.98. The escape velocity in km/h is: 40247.93. The escape velocity in km/s is: 11.18')
//Test.assertEquals(escapeVelocity('Mars'), 'The escape velocity in m/s is: 5013.92. The escape velocity in km/h is: 18050.11. The escape velocity in km/s is: 5.01')
//Test.assertEquals(escapeVelocity('Jupiter'), 'The escape velocity in m/s is: 59572.46. The escape velocity in km/h is: 214460.86. The escape velocity in km/s is: 59.57')
//Test.assertEquals(escapeVelocity('Saturn'), 'The escape velocity in m/s is: 35541.55. The escape velocity in km/h is: 127949.58. The escape velocity in km/s is: 35.54')
//Test.assertEquals(escapeVelocity('Uranus'), 'The escape velocity in m/s is: 21128.17. The escape velocity in km/h is: 76061.41. The escape velocity in km/s is: 21.13')
//Test.assertEquals(escapeVelocity('Neptune'), 'The escape velocity in m/s is: 23539.07. The escape velocity in km/h is: 84740.65. The escape velocity in km/s is: 23.54')

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////

//title: Sorting Band Names without Articles

//tags: arrays,regex,strings

//url: https://edabit.com/challenge/8yeRTFQ32JaNfwfMg

//Description:
//Create a function that sorts the given array of band names discounting the articles "The", "A", "An" if the first word of the name categorically belongs to.
//Examples
//bandNamesSort(["The New Yardbirds", "The Beatles", "The Square Roots", "On A Friday", "An Irony"])
//➞ ["The Beatles", "An Irony", "The New Yardbirds", "On A Friday", "The Square Roots"]
//
//bandNamesSort(["The Platters", "A Yard of Yarn", "The Everly Brothers", "A Monster Effect", "The Sex Maggots"])
//➞ ["The Everly Brothers", "A Monster Effect", "The Platters", "The Sex Maggots", "A Yard of Yarn"]
//
//bandNamesSort(["But Myth", "An Old Dog", "Def Leppard", "The Any Glitters", "The Dawn"])
//➞ ["The Any Glitters", "But Myth", "The Dawn", "Def Leppard", "An Old Dog"]
//Notes
//You have to return the sorted full band names.

//code area
///////////////////////////////////////////////////////////////////////////
class ArrayList {
  constructor() {
    let array = [];
    let cycle = [];
    this.insert = function (item) {
      array.push(item);
    };
    this.view = function () {
      return array;
    };
    this.cycleUp = function () {
      let split = array.map((e) => e.split(" "));
      array = [];
      for (let j = 0; j < split.length; j++) {
        if (
          split[j][0] === "The" ||
          split[j][0] === "An" ||
          split[j][0] === "A"
        ) {
          cycle.push(split[j].shift());
          split[j].push(cycle.pop());
          array.push(split[j].join(" "));
        } else array.push(split[j].join(" "));
      }
      return array;
    };
    this.cycleDown = function () {
      let split = array.map((e) => e.split(" "));
      array = [];
      for (let j = 0; j < split.length; j++) {
        let end = split[j][split[j].length - 1];
        if (end === "The" || end === "An" || end === "A") {
          cycle.push(split[j].pop());
          split[j].unshift(cycle.pop());
          array.push(split[j].join(" "));
        } else array.push(split[j].join(" "));
      }
      return array;
    };
    // sorting method insertion, bubble, merge, quick
    this.insertionSort = function () {
      let length = array.length,
        j,
        temp;
      for (let i = 1; i < length; i++) {
        j = i;
        temp = array[i];
        while (j > 0 && array[j - 1] > temp) {
          array[j] = array[j - 1];
          j--;
        }
        array[j] = temp;
      }
    };
    // these use swap function
    this.bubbleSort = function () {
      let length = array.length;
      for (let i = 0; i < length; i++) {
        for (let j = 0; j < length - 1 - i; j++) {
          if (array[j] > array[j + 1]) {
            swap(j, j + 1);
          }
        }
      }
    };
    this.selectionSort = function () {
      let length = array.length,
        indexMin;
      for (let i = 0; i < length - 1; i++) {
        indexMin = i;
        for (let j = i; j < length; j++) {
          if (array[indexMin] > array[j]) {
            indexMin = j;
          }
        }
        if (i !== indexMin) {
          swap(i, indexMin);
        }
      }
    };
    let swap = (index1, index2) => {
      let aux = array[index1];
      array[index1] = array[index2];
      array[index2] = aux;
    };
    // END^^^^^^^^^^^^^^^^^^^^


    // merge sort functions
    this.mergeSort = function () {
      array = mergeSortRec(array);
    };
    let mergeSortRec = (array) => {
      let length = array.length;
      if (length === 1) {
        return array;
      }
      let mid = Math.floor(length / 2),
        left = array.slice(0, mid),
        right = array.slice(mid, length);
      return merge(mergeSortRec(left), mergeSortRec(right));
    };
    let merge = (left, right) => {
      let result = [],
        il = 0,
        ir = 0;
      while (il < left.length && ir < right.length) {
        if (left[il] < right[ir]) {
          result.push(left[il++]);
        } else {
          result.push(right[ir++]);
        }
      }
      while (il < left.length) {
        result.push(left[il++]);
      }
      while (ir < right.length) {
        result.push(right[ir++]);
      }
      return result;
    };
    // END^^^^^^^^^^^^^^^^
    // Quick sort functions
    this.quickSort = function () {
      quick(array, 0, array.length - 1);
    };
    let quick = (array, left, right) => {
      let index;
      if (array.length > 1) {
        index = partition(array, left, right);
        // console.log(index)
        if (left < index - 1) {
          quick(array, left, index - 1);
        }
        if (index < right) {
          quick(array, index, right);
        }
      }
    };
    let partition = (array, left, right) => {
      let pivot = array[Math.floor((right + left) / 2)],
        i = left,
        j = right;
      while (i <= j) {
        while (array[i] < pivot) {
          i++;
        }
        while (array[j] > pivot) {
          j--;
        }
        if (i <= j) {
          swapQuickSort(array, i, j);
          i++;
        }
      }
      return i;
    };
    let swapQuickSort = (array, index1, index2) => {
      let aux = array[index1];
      array[index1] = array[index2];
      array[index2] = aux;
    };
    // END^^^^^^^^^^^^^^^^^
  }
}
const bandNamesSort = (arr) => {
  const fillArray = (filler) => {
    let arrayList = new ArrayList();
    filler.map((element) => arrayList.insert(element));
    return arrayList;
  };
  let array = fillArray(arr);
  // array.cycleUp();
  // array.insertionSort()

  // array.bubbleSort()
  // array.selectionSort()

  // array.mergeSort();

  array.quickSort()
  // array.cycleDown();
  // console.log('arr', array.view())
  return array.view();
};
//////////////////////////////////////////////////////////////////////////

//tests:
bandNamesSort(
  [
    "The Plot in You",
    "The Devil Wears Prada",
    "Pierce the Veil",
    "Norma Jean",
    "The Bled",
    "Say Anything",
    "The Midway State",
    "We Came as Romans",
    "Counterparts",
    "Oh, Sleeper",
    "A Skylit Drive",
    "Anywhere But Here",
    "An Old Dog"
  ])
// Test.assertSimilar(bandNamesSort(
//   [
//     "The Plot in You",
//     "The Devil Wears Prada",
//     "Pierce the Veil",
//     "Norma Jean",
//     "The Bled",
//     "Say Anything",
//     "The Midway State",
//     "We Came as Romans",
//     "Counterparts",
//     "Oh, Sleeper",
//     "A Skylit Drive",
//     "Anywhere But Here",
//     "An Old Dog"
//   ]),
//   [
//     "Anywhere But Here",
//     "The Bled",
//     "Counterparts",
//     "The Devil Wears Prada",
//     "The Midway State",
//     "Norma Jean", "Oh, Sleeper",
//     "An Old Dog",
//     "Pierce the Veil",
//     "The Plot in You",
//     "Say Anything",
//     "A Skylit Drive",
//     "We Came as Romans"
//   ])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////

//title: Nearest Chapter

//tags: loops,math,objects

//url: https://edabit.com/challenge/E5kxeJA782rNX2bch

//Description:
//Create a function that returns which chapter is nearest to the page you're on. If two chapters are equidistant, return the chapter with the higher page number.
//Examples
//nearestChapter({
//  "Chapter 1" : 1,
//  "Chapter 2" : 15,
//  "Chapter 3" : 37
//}, 10) ➞ "Chapter 2"
//
//
//nearestChapter({
//  "New Beginnings" : 1,
//  "Strange Developments" : 62,
//  "The End?" : 194,
//  "The True Ending" : 460
//}, 200) ➞ "The End?"
//
//
//nearestChapter({
//  "Chapter 1a" : 1,
//  "Chapter 1b" : 5
//}, 3) ➞ "Chapter 1b"
//Notes
//All page numbers in the dictionary will be valid integers.
//Return the higher page number if ever two pages are equidistant (see last test case).

//code area
///////////////////////////////////////////////////////////////////////////
// const nearestChapter = (obj, num) => {
//     let objArr = Object.entries(obj)
//     let numArr = []

//     for (let i = 0; i < objArr.length; i++) {
//         numArr.push(Math.abs(num - objArr[i][1]))
//     }

//     let x = numArr[0]
//     for (let j = 0; j < numArr.length - 1; j++) {
//         x < numArr[j + 1] ? x = x : x = numArr[j + 1]
//     }

//     let index = numArr.indexOf(x)
//     let indicies = []
//     while (index !== -1) {
//         indicies.push(index)
//         index = numArr.indexOf(x, index + 1)
//     }

//     let i = indicies.pop()
//     return objArr[i][0]
// }
//////////////////////////////////////////////////////////////////////////

//tests:

// let [actualParam, expectedParam] = [[
//     [{ "Chapter 1": 1, "Chapter 2": 15, "Chapter 3": 37 }, 10],
//     [{ "New Beginnings": 1, "Strange Developments": 62, "The End?": 194, "The True Ending": 460 }, 200],
//     [{ "Chapter 1a": 1, "Chapter 1b": 5 }, 3],
//     [{ "Chapter 1a": 1, "Chapter 1b": 5, "Chapter 1c": 50, "Chapter 1d": 100 }, 75],
//     [{ "Chapter 1a": 1, "Chapter 1b": 5, "Chapter 1c": 50, "Chapter 1d": 100, "Chapter 1e": 200 }, 150],
//     [{ "Chapter 1a": 1, "Chapter 1b": 5, "Chapter 1c": 50, "Chapter 1d": 100, "Chapter 1e": 200 }, 74],
//     [{ "Chapter 1a": 1, "Chapter 1b": 5, "Chapter 1c": 50, "Chapter 1d": 100, "Chapter 1e": 200, "Chapter 1f": 400 }, 300],
//     [{ "Chapter Four": 46, "Chapter Five": 54 }, 50],
// ], [
//     "Chapter 2", "The End?", "Chapter 1b", "Chapter 1d", "Chapter 1e", "Chapter 1c", "Chapter 1f", "Chapter Five"
// ]]
// for (let i in actualParam) Test.assertEquals(nearestChapter(actualParam[i][0], actualParam[i][1]), expectedParam[i])

function plusMinus(arr) {
  // Write your code here
  let pos = 0,
    neg = 0,
    neut = 0,
    n = arr.length;

  for (let i = 0; i < arr.length; i++) {
    arr[i] > 0 ? pos++ : arr[i] < 0 ? neg++ : neut++;
  }
  let val1 = pos / n,
    val2 = neg / n,
    val3 = neut / n;

  console.log(`\n${val1.toPrecision(6)}\n${val2.toPrecision(6)}\n${val3.toPrecision(6)}`);

}

// plusMinus([1, 2, 3, 4, -1, -2, 0]);

function staircase(n) {
  // Write your code here
  let x = n - 1, y = 1
  while (y < n + 1) {
    console.log(" ".repeat(x) + '#'.repeat(y))
    x--
    y++
  }
}
// staircase(5)
//     #
//    ##
//   ###
//  ####
// #####



/*
class ArrayList {
    constructor () {
        this.array = [];
    }
    insert (item) {
        this.array.push(item);
    }
    view () {
        return this.array;
    }
    insertion () {
        let j, current;

        for (let i = 1; i < this.array.length; i++) {
            j = i;
            current = this.array[i];

            while (j > 0 && (this.array[j - 1].value > current.value || (this.array[j - 1].value === current.value && (this.array[j - 1].order || 0) > (current.order || 0)))) {
                this.array[j] = this.array[j - 1];
                j--;
            }
            this.array[j] = current;
        }
    }
}

const insertionSort = arr => {
    const fillArr = item => {
        let arrayList = new ArrayList();
        item.map(element => arrayList.insert(element));
        return arrayList;
    }
    let result = fillArr(arr);

    result.insertion();
    return result.view();
};

insertionSort([{value: 10}, {value: 5, order: 1}, {value: 5, order: 2}]);
*/

/*
const insertionSort = (array, comparator) => {
    let length = array.length;
    let j, current;

    const compare = comparator || ((a, b) =>{
        if (a.value !== b.value) {
            return a.value - b.value;
        }
        return (a.order || 0) - (b.order || 0);
    });

    for (let i = 1; i < length; i++) {
        j = i;
        current = array[i];
        if (comparator) {
            while (j > 0 && compare(array[j - 1], current) > 0) {
                array[j] = array[j - 1];
                j--;
            }
        } else {
            while (j > 0 &&
            (array[j - 1].value > current.value ||
            (array[j - 1].value === current.value &&
            (array[j - 1].order || 0) > (current.order || 0)))) {
                array[j] = array[j - 1];
                j--;
            }
        }
        array[j] = current;
    }
    return array;

    [{value: 10}, {value: 5, order: 1}, {value: 5, order: 2}]
      1) Extra credit should sort intuitively if no comparator is passed:

      AssertionError: expected [ Array(8) ] to deeply equal [ Array(8) ]
      + expected - actual

           "i": 0
           "value": 0
         }
         {
      +    "i": 4
      +    "value": []
      +  }
      +  {
           "i": 1
           "value": 1
         }
         {
      -    "i": 2
      -    "value": "a"
      -  }
      -  {
           "i": 3
           "value": ";"
         }
         {
      -    "i": 4
      -    "value": []
      -  }
      -  {
           "i": 5
           "value": {}
         }
         {
      +    "i": 2
      +    "value": "a"
      +  }
      +  {
           "i": 6
           "value": [undefined]
         }
         {

      at Context.<anonymous> (test/unit_tests_spec.js:165:18)
}*/

/*
const quickSort = array => {
    const quick = (array, left , right) => {
        if (array.length > 1) {
            const index = partition(array, left, right);
            if (left < index - 1) {
                quick(array, left, index - 1);
            }
            if (right > index) {
                quick(array, index, right);
            }
        }
    };

    quick(array, 0, array.length - 1);
    return array;
};

const partition = (array, left, right) => {
    let pivot = array[Math.floor((left + right) / 2)], i = left, j = right;
    while (i < j) {
        while (array[i] < pivot) {
            i++
        }
        while (array[j] > pivot) {
            j--;
        }
        if (i <= j) {
            swap(array, i , j);
            i++;
        }
    }
    return i;
};

const swap = (array, index1, index2) => {
    let store = array[index1];
    array[index1] = array[index2];
    array[index2] = store;
};
*/