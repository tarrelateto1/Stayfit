var ArrayListy = require('../ArrayList.js');
var Visitor = require('../Visitor.js');
var calculate = require('../calculate.js');
var addcal = require('../addcal.js');
var MenuList = require('../MenuList.js');
var assert = require("chai").assert;
//var chai = require('chai');
var mocha = require('mocha');
var describe = mocha.describe;

describe('Test:method', function () {
  var t = new ArrayListy(2);
  var y = new ArrayListy(6);
  var u = new ArrayListy(5);
  //test addidx
  it('test:addidx position 0', function () {
    t.addidx(111, 0)
    assert.strictEqual(111, t.Get(0));
  });

  it('test:addidx out of bound ', function () {
    t.addidx(112, 2)
    assert.strictEqual(undefined, t.Get(2));
  });

  //test add
  it('test:add true', function () {
    var status = t.add(111)
    assert.strictEqual(true, status);
  });

  it('test:add false', function () {
    var data1 =t.add(3);
    var data1 =t.add(4);
    assert.strictEqual(false,data1);
  });

  it('test:add space', function () {
    OB = new Visitor(811);
    y.addidx(OB, 0);
    y.addidx(OB, 2);
    y.addidx(OB, 3);
    y.addidx(OB, 5);
    var status1 = y.add(OB);
    assert.strictEqual(true, status1);
    var status2 = y.add(OB);
    assert.strictEqual(true, status2);
  });

  //test remove
  it('test:remove position 2', function () {
    u.add(1);
    u.add(2);
    u.add(3);
    u.add(4);
    u.add(5);
    var tmp = u.remove(2);
    assert.strictEqual(3, tmp);
  });

  it('test:remove position 10', function () {
    var data = u.remove(10);
    assert.strictEqual(-1, data);
  });

  //test isEmtyp : false
  it('test:isEmtyp : false', function () {
    var data = t.isEmpty();
    assert.strictEqual(false, data);
  });

   //test isEmtyp : true
  it('test:isEmtyp : true', function () {
    var m = new ArrayListy(2)
    var data = m.isEmpty();
    assert.strictEqual(true, data);
  });

  //test clear & isEmpty : true
  it('test:clear', function () {
    t.clear()
    assert.strictEqual(true, t.isEmpty());
  });

  //test:Get
  it('test:Get', function () {
    OB = new Visitor(805);
    t.addidx(OB, 0)
    assert.strictEqual(OB.getName(), t.Get(0).getName());
  });

  //test:Set
  it('test:Set position 0', function () {
    OB = new Visitor(806);
    var data = t.Set(0, OB)
    assert.strictEqual(806, data.getName());
  });

  //test:index of
  it('test:index of', function () {
    OB = new Visitor(806);
    var tt = new ArrayListy(2);
    tt.addidx(OB, 0)
    var data = tt.IndexOf(OB);
    assert.strictEqual(0, data);
  });
  it('test:index of', function () {
    OB = new Visitor(806);
    var tt = new ArrayListy(2);
    tt.addidx(OB,0)
    var data = tt.IndexOf(3);
    assert.strictEqual(-1, data);
  });

  //test:size
  it('test:size', function () {
    var size = t.size();
    assert.strictEqual(2, size);
  });

  //test:trimToSize
  it('test:trimToSize', function () {
    y.clear()
    OB = new Visitor(807);
    y.addidx(OB, 0)
    y.addidx(OB, 2)
    y.trimToSize()
    assert.strictEqual(null, y.Get(2));
  });
});



describe('Test class calculate', () => {
  it('should be success when weight=61,height = 175, age=21,gender= male , acitivity factor =0(no acitivity), expected 1930.5', () => {
    // arrange
    const weight =61;
    const height =175
    const age =20;
    const gender ='male'
    const af=0
    // act
    var cu = new calculate(weight,height,age,gender,af)
    var testcal = cu.getTDEE();
    
    assert.strictEqual(1930.5,testcal);
  });

  it('should be success when weight=61,height = 175, age=21,gender= male , acitivity factor =1(1-3 time a week), expected 2212.03125', () => {
    // arrange
    const weight =61;
    const height =175
    const age =20;
    const gender ='male'
    const af=1
    // act
    var cu = new calculate(weight,height,age,gender,af)
    var testcal = cu.getTDEE();
    testcal.toFixed(2)
    assert.strictEqual(2212.03125,testcal);
  });

  it('should be success when weight=61,height = 175, age=21,gender= male , acitivity factor =2(3-5 time a week), expected 2493.5625', () => {
    // arrange
    const weight =61;
    const height =175
    const age =20;
    const gender ='male'
    const af=2
    // act
    var cu = new calculate(weight,height,age,gender,af)
    var testcal = cu.getTDEE();
    testcal.toFixed(2)
    assert.strictEqual(2493.5625,testcal);
  });

  it('should be success when weight=61,height = 175, age=21,gender= male , acitivity factor =3(5-7 time a week), expected 2775.09375', () => {
      // arrange
      const weight =61;
      const height =175
      const age =20;
      const gender ='male'
      const af=3
      // act
      var cu = new calculate(weight,height,age,gender,af)
      var testcal = cu.getTDEE();
      
      assert.strictEqual(2775.09375,testcal)
  });

  it('should be success when weight=61,height = 175, age=21,gender= male , acitivity factor =4(5-7 time a week), expected 3056.625', () => {
    // arrange
    const weight =61;
    const height =175
    const age =20;
    const gender ='male'
    const af=4
    // act
    var cu = new calculate(weight,height,age,gender,af)
    var testcal = cu.getTDEE();
    assert.strictEqual(3056.625,testcal)
});
it('should be success when weight=61,height = 175, age=21,gender= female , acitivity factor =0(no acitivity), expected 1731.3', () => {
  // arrange
  const weight =61;
  const height =175
  const age =20;
  const gender ='female'
  const af=0
  // act
  var cu = new calculate(weight,height,age,gender,af)
  var testcal = cu.getTDEE();
  assert.strictEqual(1731.3,testcal)
});

it('should be success when weight=61,height = 175, age=21,gender=female , acitivity factor =1(1-3 time a week), expected 1983.78125', () => {
  // arrange
  const weight =61;
  const height =175
  const age =20;
  const gender ='female'
  const af=1
  // act
  var cu = new calculate(weight,height,age,gender,af)
  var testcal = cu.getTDEE();
  assert.strictEqual(1983.78125,testcal)
});

it('should be success when weight=61,height = 175, age=21,gender=female , acitivity factor =2(3-5 time a week), expected 2236.26000000003', () => {
  // arrange
  const weight =61;
  const height =175
  const age =20;
  const gender ='female'
  const af=2
  // act
  var cu = new calculate(weight,height,age,gender,af)
  var testcal = cu.getTDEE();
  testcal.toFixed(2)
  assert.strictEqual(2236.2625000000003,testcal)
});

it('should be success when weight=61,height = 175, age=21,gender=female , acitivity factor =3(5-7 time a week), expected 2488.74375', () => {
    // arrange
    const weight =61;
    const height =175
    const age =20;
    const gender ='female'
    const af=3
    // act
    var cu = new calculate(weight,height,age,gender,af)
    var testcal = cu.getTDEE();
    testcal.toFixed(2)
    assert.strictEqual(2488.74375,testcal)
});

it('should be success when weight=61,height = 175, age=21,gender= female , acitivity factor =4(5-7 time a week), expected 2741.225', () => {
  // arrange
  const weight =61;
  const height =175
  const age =20;
  const gender ='female'
  const af=4
  // act
  var cu = new calculate(weight,height,age,gender,af)
  var testcal = cu.getTDEE();
  assert.strictEqual(2741.225,testcal)
});
});


describe('Test class addcal', () => {
  var cal;
  it('should be success when tdee =1930,height = 175, quantity =100,calfood =3,expected 1630', () => {
    // arrange
    const tdee =1930;
    const calfood =3;
    const quantity =100;
    // act
    var ac = new addcal(tdee,calfood,quantity);
    var testcal = ac.getCalTDEE();
    testcal.toFixed(2)
      // assert
    assert.strictEqual(1630,testcal)
  });
});


describe('Test class Visitor', () => {
  var visitor = new Visitor(1,2,3,4,5,6,7);
  it('test getName()', () => {
    var v = visitor.getName();
    assert.strictEqual(1,v)
  });
  it('test getAge()', () => {
    var v = visitor.getAge();
    assert.strictEqual(2,v)
  });
  it('test getGender()', () => {
    var v = visitor.getGender();
    assert.strictEqual(3,v)
  });
  it('test getWeight()', () => {
    var v = visitor.getWeight();
    assert.strictEqual(4,v)
  });
  it('test getHeight()', () => {
    var v = visitor.getHeight();
    assert.strictEqual(5,v)
  });
  it('test getFrequency()', () => {
    var v = visitor.getFrequency();
    assert.strictEqual(6,v)
  });
  it('test getOption()', () => {
    var v = visitor.getOption();
    assert.strictEqual(7,v)
  });
});

describe('Test class MenuList', () => {
  var menulist = new MenuList(1,2);
  it('test getMenuIdx()', () => {
    var m = menulist.getMenuIdx();
    assert.strictEqual(1,m)
  });
  it('test getQuantity()', () => {
    var m = menulist.getQuantity();
    assert.strictEqual(2,m)
  });
});