
// Import requirement packages
require('chromedriver');
const assert = require('assert');
const {Builder, Key, By, until} = require('selenium-webdriver');


describe('test enter to site', function () {
    let driver;
    before(async function() {
        driver = await new Builder().forBrowser('chrome').build();
    });
    // Next, we will write steps for our test. 
    // For the element ID, you can find it by open the browser inspect feature.
    it('test enter to site', async function() {
        // Load the page
        await driver.get('http://localhost:2581/');

        await driver.findElement(By.id('enter')).click();
        let title = await driver.findElement(By.id('plzfill')).getText()
        console.log(title);
        assert.equal(title, 'Please Fill Information');
        

    });

    it('test help page', async function() {
        // Load the page
        await driver.get('http://localhost:2581/');

        await driver.findElement(By.id('help')).click();
        let title = await driver.findElement(By.id('header-help')).getText()
        console.log(title);
        assert.equal(title, 'StayFit User Manual');
        

    });

    // close the browser after running test
    after(() => driver && driver.quit());
});


describe('test Food detail page', function () {
    let driver;
    before(async function() {
        driver = await new Builder().forBrowser('chrome').build();
    });
    // Next, we will write steps for our test. 
    // For the element ID, you can find it by open the browser inspect feature.
    it('test Food detail page', async function() {
        // Load the page
        await driver.get('http://localhost:2581/mainmenu');

        await driver.findElement(By.id('food')).click();

        let title = await driver.findElement(By.id('foodMenuTitle')).getText()
        console.log(title);
        assert.equal(title, 'Recommended Menu');
    });

    // close the browser after running test
    after(() => driver && driver.quit());
});


describe('test info', function () {
    let driver;
    before(async function() {
        driver = await new Builder().forBrowser('chrome').build();
    });
    // Next, we will write steps for our test. 
    // For the element ID, you can find it by open the browser inspect feature.
    it('test info name', async function() {
        // Load the page
        await driver.get('http://localhost:2581/info');

        await driver.findElement(By.name('Name')).click();
        await driver.findElement(By.name('Name')).sendKeys('Veerayut');

        await driver.findElement(By.name('Age')).click();
        await driver.findElement(By.name('Age')).sendKeys('20');

        await driver.findElement(By.name('Gender')).click();
        await driver.findElement(By.name('Gender')).sendKeys('male');

        await driver.findElement(By.name('Weight')).click();
        await driver.findElement(By.name('Weight')).sendKeys('53');

        await driver.findElement(By.name('Height')).click();
        await driver.findElement(By.name('Height')).sendKeys('170');

        var selectElem = driver.findElement(By.name("frequency"))
        selectElem.click()
        selectElem.findElement(By.css("option[value='0']")).click()

        await driver.findElement(By.name('option')).click();
        await driver.findElement(By.name('option')).sendKeys('gain weight');

        await driver.findElement(By.id('submit-btn')).click();

        let title = await driver.findElement(By.id('plzfill2')).getText()
        console.log(title);
        assert.equal(title, 'แคลอรีที่คุณ Veerayut ควรทานวันนี้ คือ!');
        
    });

    it('test info tdee', async function() {
        // Load the page
        await driver.get('http://localhost:2581/info');

        await driver.findElement(By.name('Name')).click();
        await driver.findElement(By.name('Name')).sendKeys('Veerayut');

        await driver.findElement(By.name('Age')).click();
        await driver.findElement(By.name('Age')).sendKeys('20');

        await driver.findElement(By.name('Gender')).click();
        await driver.findElement(By.name('Gender')).sendKeys('male');

        await driver.findElement(By.name('Weight')).click();
        await driver.findElement(By.name('Weight')).sendKeys('53');

        await driver.findElement(By.name('Height')).click();
        await driver.findElement(By.name('Height')).sendKeys('170');

        var selectElem = driver.findElement(By.name("frequency"))
        selectElem.click()
        selectElem.findElement(By.css("option[value='0']")).click()

        await driver.findElement(By.name('option')).click();
        await driver.findElement(By.name('option')).sendKeys('gain weight');

        await driver.findElement(By.id('submit-btn')).click();

        let title = await driver.findElement(By.id('tdee')).getText()
        console.log(title);
        assert.equal(title, '1797');
        
    });
    // // close the browser after running test
    after(() => driver && driver.quit());
});

describe('test MAIN MENU', function () {
    let driver;
    before(async function() {
        driver = await new Builder().forBrowser('chrome').build();
    });
    // Next, we will write steps for our test. 
    // For the element ID, you can find it by open the browser inspect feature.
    it('test MAIN received', async function() {
        // Load the page
        await driver.get('http://localhost:2581/info');

        await driver.findElement(By.name('Name')).click();
        await driver.findElement(By.name('Name')).sendKeys('Veerayut');

        await driver.findElement(By.name('Age')).click();
        await driver.findElement(By.name('Age')).sendKeys('20');

        await driver.findElement(By.name('Gender')).click();
        await driver.findElement(By.name('Gender')).sendKeys('male');

        await driver.findElement(By.name('Weight')).click();
        await driver.findElement(By.name('Weight')).sendKeys('53');

        await driver.findElement(By.name('Height')).click();
        await driver.findElement(By.name('Height')).sendKeys('170');

        var selectElem = driver.findElement(By.name("frequency"))
        selectElem.click()
        selectElem.findElement(By.css("option[value='0']")).click()

        await driver.findElement(By.name('option')).click();
        await driver.findElement(By.name('option')).sendKeys('gain weight');

        await driver.findElement(By.id('submit-btn')).click();

        await driver.findElement(By.id('calcal')).click()

        let title = await driver.findElement(By.id('receivedCalCal')).getText()
        console.log(title);
        assert.equal(title, 'Please Fill Food Quantity');
        
    });

    it('test Add menu', async function() {
        // Load the page
        await driver.get('http://localhost:2581/info');
        await driver.findElement(By.name('Name')).click();
        await driver.findElement(By.name('Name')).sendKeys('Veerayut');
        await driver.findElement(By.name('Age')).click();
        await driver.findElement(By.name('Age')).sendKeys('20');
        await driver.findElement(By.name('Gender')).click();
        await driver.findElement(By.name('Gender')).sendKeys('male');
        await driver.findElement(By.name('Weight')).click();
        await driver.findElement(By.name('Weight')).sendKeys('53');
        await driver.findElement(By.name('Height')).click();
        await driver.findElement(By.name('Height')).sendKeys('170');
        var selectElem2 = driver.findElement(By.name("frequency"))
        selectElem2.click()
        selectElem2.findElement(By.css("option[value='0']")).click()

        await driver.findElement(By.name('option')).click();
        await driver.findElement(By.name('option')).sendKeys('gain weight');
        await driver.findElement(By.id('submit-btn')).click();
        await driver.findElement(By.id('calcal')).click();

        var selectElem = driver.findElement(By.name("menuIdx"))
        selectElem.click()
        selectElem.findElement(By.css("option[value='2']")).click()

        await driver.findElement(By.name('Quantity')).click();
        await driver.findElement(By.name('Quantity')).sendKeys('200');
        await driver.findElement(By.className('add-btn')).click();
        let title = await driver.findElement(By.name('menuName')).getText()
        console.log(title);
        assert.equal(title, 'ข้าวไก่กระเทียม');
    });


    it('test finish btn', async function() {
        // Load the page
        await driver.get('http://localhost:2581/info');

        await driver.findElement(By.name('Name')).click();
        await driver.findElement(By.name('Name')).sendKeys('Veerayut');
        await driver.findElement(By.name('Age')).click();
        await driver.findElement(By.name('Age')).sendKeys('20');
        await driver.findElement(By.name('Gender')).click();
        await driver.findElement(By.name('Gender')).sendKeys('male');
        await driver.findElement(By.name('Weight')).click();
        await driver.findElement(By.name('Weight')).sendKeys('53');
        await driver.findElement(By.name('Height')).click();
        await driver.findElement(By.name('Height')).sendKeys('170');
        var selectElem2 = driver.findElement(By.name("frequency"))
        selectElem2.click()
        selectElem2.findElement(By.css("option[value='0']")).click()
        await driver.findElement(By.name('option')).click();
        await driver.findElement(By.name('option')).sendKeys('gain weight');
        await driver.findElement(By.id('submit-btn')).click();
        await driver.findElement(By.id('calcal')).click();
        var selectElem = driver.findElement(By.name("menuIdx"))
        selectElem.click()
        selectElem.findElement(By.css("option[value='2']")).click()

        await driver.findElement(By.name('Quantity')).click();
        await driver.findElement(By.name('Quantity')).sendKeys('200');
        await driver.findElement(By.className('add-btn')).click();
        await driver.findElement(By.className('finish-btn')).click();
        
        let title = await driver.findElement(By.id('resulth1')).getText()
        console.log(title);
        assert.equal(title, 'RESULT');
    });

    it('test back to menu button in Calculate page', async function() {
        // Load the page
        await driver.get('http://localhost:2581/info');
        await driver.findElement(By.name('Name')).click();
        await driver.findElement(By.name('Name')).sendKeys('Veerayut');
        await driver.findElement(By.name('Age')).click();
        await driver.findElement(By.name('Age')).sendKeys('20');
        await driver.findElement(By.name('Gender')).click();
        await driver.findElement(By.name('Gender')).sendKeys('male');
        await driver.findElement(By.name('Weight')).click();
        await driver.findElement(By.name('Weight')).sendKeys('53');
        await driver.findElement(By.name('Height')).click();
        await driver.findElement(By.name('Height')).sendKeys('170');
        var selectElem2 = driver.findElement(By.name("frequency"))
        selectElem2.click()
        selectElem2.findElement(By.css("option[value='0']")).click()
        await driver.findElement(By.name('option')).click();
        await driver.findElement(By.name('option')).sendKeys('gain weight');
        await driver.findElement(By.id('submit-btn')).click();
        await driver.findElement(By.id('calcal')).click();
        var selectElem = driver.findElement(By.name("menuIdx"))
        selectElem.click()
        selectElem.findElement(By.css("option[value='2']")).click()
        await driver.findElement(By.name('Quantity')).click();
        await driver.findElement(By.name('Quantity')).sendKeys('200');
        await driver.findElement(By.className('add-btn')).click();
        await driver.findElement(By.id('backmenuC')).click();
        let title = await driver.findElement(By.id('plzfill2')).getText()
        console.log(title);
        assert.equal(title, 'แคลอรีที่คุณ Veerayut ควรทานวันนี้ คือ!');
    });
    // close the browser after running test
    after(() => driver && driver.quit());
});

describe('test Result page', function () {
    let driver;
    before(async function() {
        driver = await new Builder().forBrowser('chrome').build();
    });
    // Next, we will write steps for our test. 
    // For the element ID, you can find it by open the browser inspect feature.


    it('test back to menu button in result page', async function() {
        // Load the page
        await driver.get('http://localhost:2581/info');
        await driver.findElement(By.name('Name')).click();
        await driver.findElement(By.name('Name')).sendKeys('Veerayut');
        await driver.findElement(By.name('Age')).click();
        await driver.findElement(By.name('Age')).sendKeys('20');
        await driver.findElement(By.name('Gender')).click();
        await driver.findElement(By.name('Gender')).sendKeys('male');
        await driver.findElement(By.name('Weight')).click();
        await driver.findElement(By.name('Weight')).sendKeys('53');
        await driver.findElement(By.name('Height')).click();
        await driver.findElement(By.name('Height')).sendKeys('170');
        var selectElem2 = driver.findElement(By.name("frequency"))
        selectElem2.click()
        selectElem2.findElement(By.css("option[value='0']")).click()
        await driver.findElement(By.name('option')).click();
        await driver.findElement(By.name('option')).sendKeys('gain weight');
        await driver.findElement(By.id('submit-btn')).click();
        await driver.findElement(By.id('calcal')).click();
        var selectElem = driver.findElement(By.name("menuIdx"))
        selectElem.click()
        selectElem.findElement(By.css("option[value='2']")).click()
        await driver.findElement(By.name('Quantity')).click();
        await driver.findElement(By.name('Quantity')).sendKeys('200');
        await driver.findElement(By.className('add-btn')).click();
        await driver.findElement(By.className('finish-btn')).click();
        await driver.findElement(By.id('backmenu')).click();
        let title = await driver.findElement(By.id('plzfill2')).getText()
        console.log(title);
        assert.equal(title, 'แคลอรีที่คุณ Veerayut ควรทานวันนี้ คือ!');
    });
    // close the browser after running test
    after(() => driver && driver.quit());
});