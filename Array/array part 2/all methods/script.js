// to check arrays length... we use arrayName.length method.
document.write(
  "// to check arrays length... we use arrayName.length method. <br><br>"
);
let lengthCount = [10, 12, 15, 78, 19];

document.write(`The length of the ${lengthCount} is ${lengthCount.length}`);

document.write("<br><hr>");
// to add elements in last of arrays length... we use arrayName.push method.
document.write(
  "// to add elements in last of arrays length... we use arrayName.push method. <br><br>"
);
let addEle = [10, 12, 15, 78, 19];

document.write(`The prvious Array is ${addEle} <br>`);

addEle.push(45);

document.write(`The Array  after .push method is ${addEle}`);

document.write("<br><hr>");

// to remove elements in last of arrays length... we use arrayName.pop method.
document.write(
  "// to add elements in last of arrays length and return it... we use arrayName.pop method. <br><br>"
);
let rmEle = [10, 12, 15, 78, 19];

document.write(`The prvious Array is ${rmEle} <br>`);

let returnRm = rmEle.pop(19);

document.write(`The Array  after .pop method is ${rmEle}<br>`);

document.write(`Returned value ${returnRm}`);

document.write("<br><hr>");

// to remove elements from start of arrays length and return it... we use arrayName.shift method.
document.write(
  "// to remove elements from start of arrays length and return it... we use arrayName.shift method. <br><br>"
);
let rmStEle = [10, 12, 15, 78, 19];

document.write(`The prvious Array is ${rmStEle} <br>`);

let returnSt = rmStEle.shift();

document.write(`The Array  after .shift method is ${rmStEle}<br>`);

document.write(`Returned value ${returnSt}`);

document.write("<br><hr>");

// to add elements from start of arrays length ... we use arrayName.unshift method.
document.write(
  "// to add elements from start of arrays length and return it... we use arrayName.unshift method. <br><br>"
);
let addStEle = [10, 12, 15, 78, 19];

document.write(`The prvious Array is ${addStEle} <br>`);

addStEle.unshift(110);

document.write(`The Array  after .unshift method is ${addStEle}<br>`);

document.write("<br><hr>");

// to allocate specific value arrays length ... we use arrayName.at method.
document.write(
    "//to allocate specific value arrays length ... we use arrayName.at method.<br><br>"
  );
  let atEle = [10, 12, 15, 78, 19];
  
  document.write(`The Arrays length is ${atEle} <br>`);
  

  
  document.write(`The value of 2nd index of array is ${atEle.at(2)}`);
  
  document.write("<br><hr>");
   


// to Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements ... we use arrayName.splice method.
document.write(
    "//to Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements. ... we use arrayName.splice method.<br><br>"
  );
  let spliceEle = [10, 12, 15, 78, 19];
  

  

  document.write(`The prvious Array is ${spliceEle} <br>`);

    spliceEle.splice(2,2);
  
  document.write(`The Array  after .splice method is ${spliceEle}<br>`);
  
  
  document.write("<br><hr>");
   


// to Returns a copy of a section of an array. For both start and end, a negative index can be used to indicate an offset from the end of the array. For example, -2 refers to the second to last element of the array. ... we use arrayName.splice method.
document.write(
    "//to Returns a copy of a section of an array. For both start and end, a negative index can be used to indicate an offset from the end of the array. For example, -2 refers to the second to last element of the array ... we use arrayName.splice method.<br><br>"
  );
  let sliceEle = [10, 12, 15, 78, 19];
  

  

  document.write(`The prvious Array is ${sliceEle} <br>`);

    let ele=sliceEle.slice(1,4);
  
  document.write(`The Array  after .splice method is ${ele}<br>`);
  
  
  document.write("<br><hr>");
   

