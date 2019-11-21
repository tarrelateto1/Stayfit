class MenuList {
    constructor(menuIdx,quantity) {
      this.menuIdx = menuIdx;
      this.quantity = quantity;
    }
  
    getMenuIdx() {
      return this.menuIdx;
    }
    
    getQuantity() {
        return this.quantity;
    }
    
  }
  
  module.exports = MenuList;