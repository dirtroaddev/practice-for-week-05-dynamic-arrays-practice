class DynamicArray {

  constructor(defaultSize=4) {

    // Your code here
    this.data = new Array(defaultSize);
    this.capacity = defaultSize;
    this.length = 0;


  }

  read(index) {

    // Your code here
    return this.data[index]
  }

  unshift(val) {

    // Your code here
    
  }

}


module.exports = DynamicArray;