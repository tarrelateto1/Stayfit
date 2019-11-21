class ArrayList {

    constructor(size) {
      this.array = new Array(size);
      this.cur = -1;
    }
  
    addidx(data, idx) {
      if (this.array[idx] == null && idx < this.array.length && idx > -1) {
        this.array[idx] = data;
        this.cur = idx;
      }
    }
  
    add(data) {
      for (let i = 0; i < this.array.length; i++) {
        if (this.array[i] == null) {
          this.cur = i;
          this.array[this.cur] = data;
          return true;
        }
      }
      return false;
    }
  
    remove(idx) {
      if (idx < this.array.length && idx > -1) {
        var tmp = this.array[idx];
        var k;
        var j;
        for(j = idx; j < this.cur ;j++){
          k=parseInt(j)
          this.array[j] = this.array[(k+1)];
        }
        this.array[this.cur] = null;
        this.cur = this.cur - 1
      return tmp;
      }
      return -1;
    }


  
    isEmpty() {
      for (let i = 0; i < this.array.length; i++) {
        if (!(this.array[i] == null)) {
          return false;
        }
      }
  
      return true;
    }
  
    clear() {
      for (let i = this.array.length - 1; i >= 0; i--) {
        this.array[i] = null;
        this.cur = i - 1;
      }
    }
  
    Get(idx) {
      return this.array[idx];
    }
  
    Set(idx, ob) {
      this.array[idx] = ob;
      this.cur = idx;
      return this.array[idx];
    }
  
    IndexOf(ob) {
      var find = -1;
  
      for (let i = 0; i < this.array.length; i++) {
        if (this.array[i] == ob){
          return i;
        }
      }
      return find;
    }
  
    size() {
      return this.array.length;
    }
  
    trim() {
      var listCur = 0;
      for (let i = 0; i < this.array.length; i++) {
        if (this.array[i] != null) {
          listCur = listCur + 1;
        }
      }
      return listCur;
    }
  
    trimToSize() {
      var tmp = new Array(this.trim());
      var cnt = 0;
      for (let i = 0; i < this.array.length; i++) {
        if (this.array[i] != null) {
          tmp[cnt] = this.array[i]
          cnt++;
        }
      }
      this.clear();
      for (let i = 0; i < tmp.length; i++) {
        this.array[i] = tmp[i];
      }
    }
  
  
  }
  
  module.exports = ArrayList; 