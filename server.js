var http = require('http');
var express = require('express');
var body = require('body-parser');
var app = express();
var path = require('path');
const request = require('request');
var urlencodedParser = body.urlencoded({ extend: true });
app.use(express.static(path.join(__dirname, 'public')));
app.use(body.urlencoded({ extended: false }));
var ArrayList = require('./ArrayList.js');
var Visitor = require('./Visitor.js');
var calculate = require('./calculate.js');
var MenuList = require('./MenuList.js');
var addcal = require('./addcal.js');
var calculate1;
var TDEE, vName, vAge, vGender, vWeight, vHeight, vFrequency, vOption;
var i;

//Add listอาหาร บน dropdown
var Listname = new ArrayList(100);
var ListValue = new ArrayList(100);
Listname.add("พิซซ่า");
ListValue.add(3);
Listname.add("ข้าวกะเพรา");
ListValue.add(1.95);
Listname.add("ข้าวไก่กระเทียม");
ListValue.add(1.95);
Listname.add("ข้าวไข่เจียว");
ListValue.add(2.70);
Listname.add("ข้าวแกงกะหรี่");
ListValue.add(4.70);
Listname.add("ไก่ย่าง,ไก่อบ");
ListValue.add(3.28);
Listname.add("ข้าวผัดผงกะหรี่");
ListValue.add(3.10);
Listname.add("ข้าวผัด");
ListValue.add(2.20);
Listname.add("ขนมปังแผ่น");
ListValue.add(2.60);
Listname.add("แฮมเบอเกอร์");
ListValue.add(2.2);
Listname.add("ก๋วยเตี๋ยวน้ำ");
ListValue.add(1.10);
Listname.add("ก๋วยเตี๋ยวแห้ง");
ListValue.add(1.80);
Listname.add("ก๋วยจั๊บ");
ListValue.add(2.40);
Listname.add("แกงจืด");
ListValue.add(0.9);
Listname.add("ไก่ทอด");
ListValue.add(2.5);
Listname.add("ขนมจีนน้ำยา");
ListValue.add(1.70);

var menulist = []; //collect visitor eating , menulist is an object array of MenuList class
var count = 0;
var visitorCal = new ArrayList(100); //collect list of visitor eating into array
//Big Head
var Big = '<!DOCTYPE html>'
Big += '<html lang="en">'
Big += '<head>'
    //Head
var head = '<link rel="shortcut icon" href="favicon.ico">';
head += '<link href="https://fonts.googleapis.com/css?family=Roboto:400,100,300,700" rel="stylesheet" type="text/css">';
head += '<link rel="stylesheet" href="./assets/css/Info.css">';
head += '<link rel="stylesheet" href="./assets/css/main.css">';
head += '<link rel="stylesheet" href="./assets/css/cal.css">';
head += '<link href="https://fonts.googleapis.com/css?family=Athiti" rel="stylesheet">'
head += '<link href="https://fonts.googleapis.com/css?family=Rajdhani" rel="stylesheet">'
head += '<link href="https://fonts.googleapis.com/css?family=Major+Mono+Display" rel="stylesheet">'
head += '<link rel="stylesheet" href="./assets/css/result.css">';
head += '<meta charset="utf-8">';
head += '<meta name="viewport" content="width=device-width, initial-scale=1">';
head += '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">';
head += '<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>';
head += '<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>';
head += '<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>';
head += '</head>';

/////////////Home Page/////////////
app.get('/', function(req, res) {
    console.time("Homepage");
    res.sendFile(__dirname + "/" + "index.html");
    console.timeEnd("Homepage")
});

/////////////Login Page/////////////
app.get('/help', function(req, res) {
    console.time("Helppage")
    res.sendFile(__dirname + "/" + "help.html");
    console.timeEnd("Helppage")
});

/////////////Info Page/////////////
app.get('/info', urlencodedParser, function(req, res) {
    console.time("Infopage")
    var home = Big + '<title>Information</title>' + head
    home += '<body id="backinfo">'
    home += '<div style="margin-top: 8%;" class="container">'
    home += '<center><h1 id="plzfill">Please Fill Information</h1></center>'
    home += '<div id="backinfo2">'
    home += '<div class="row">'
    home += '<div class="col-md-3"></div>';
    home += '<div class="col-md-6">';
    home += '<form id="cssform" action="/mainmenu" method="post">'

    //Name
    home += '<div class="form-group"><label class="col-md-4">Name : </label>'
    home += '<input class="col-md-8" type="text" class="form-control" name="Name" onkeypress="return (event.charCode >= 65 && event.charCode <= 90) || (event.charCode >= 97 && event.charCode <= 122)" id="fullname" required></div>'
        //age
    home += '<div class="form-group"><label class="col-md-4">Age : </label>'
    home += '<input class="col-md-8" type="text" class="form-control" name="Age" maxlength="3" onkeypress="return event.charCode >= 48 && event.charCode <= 57 || event.charCode == 46" id="age" required></div>'
        //gender
    home += '<div class="form-group"><label class="col-md-4">Gender : </label>'
    home += '<input class="col-md-2" type="radio" name="Gender" value="male" required>Male'
    home += '<input class="col-md-2" type="radio" name="Gender" value="female" required>Female</div>'
        //Weight
    home += '<div class="form-group"><label class="col-md-4">Weight : </label>'
    home += '<input class="col-md-8" type="text" class="form-control" name="Weight" id="weight" required onkeypress="return event.charCode >= 48 && event.charCode <= 57 || event.charCode == 46"></div>'
        //Height
    home += '<div class="form-group"><label class="col-md-4">Height : </label>'
    home += '<input class="col-md-8" type="text" class="form-control" name="Height" id="Height" required onkeypress="return event.charCode >= 48 && event.charCode <= 57 || event.charCode == 46"></div>'
        //Exercise frequency
    home += '<div class="form-group"><span class="col-xs-2"></span><label class="col-xs-2">Exercise frequency : </label>'
    home += '<div class="col-xs-2"><select name="frequency" class="form-control">'
    home += '<option value="0" required>No Activity</option><option value="1" required>1-3 time a week</option><option required value="2">4-5 time a week</option><option required value="3">6-7 time a week</option><option required value="4">14 time a week</option>'
    home += '</select></div></div>'
        //Option
    home += '<div class="form-group"><label class="col-md-4">Purpose : </label><br>'
    home += '<input class="col-md-2" type="radio" name="option" value="gain weight" required>ต้องการเพิ่มน้ำหนัก'
    home += '<input class="col-md-2" type="radio" name="option" value="lose weight" required> ต้องการลดน้ำหนัก</div>'
        //Submit button
        // home += '<button onclick="myFunction()"><a href="/mainmenu">click</a></button>'
    home += '<center><input id="submit-btn" type="submit" value="ENTER" class="btn btn-primary"></center>'
    home += '</form>'
    home += '</div>'
    home += '<div class="col-md-3"></div>';
    home += '</div>'
    home += '</div>'
    home += '</div>'
    home += '</body>';
    res.send(home);
    console.timeEnd("Infopage")
});

/////////////check info and mainmenu page/////////////
app.post('/mainmenu', function(req, res) {
    console.time("Mainmenu")

    visitor = new Visitor(req.body.Name, req.body.Age, req.body.Gender, req.body.Weight, req.body.Height, req.body.frequency, req.body.option);
    vName = visitor.getName();
    vAge = visitor.getAge();
    vGender = visitor.getGender();
    vWeight = visitor.getWeight();
    vHeight = visitor.getHeight();
    vFrequency = visitor.getFrequency();
    vOption = visitor.getOption();
    request('http://10.0.2.150:3000/?name='+vName+'&age=' +vAge+'&gender='+vGender+'&weight='+vWeight+'&height='+vHeight+'&frequency='+vFrequency+'&option='+vOption, function(err, res, body) {
    console.log(body);
    });
    calculate1 = new calculate(vWeight, vHeight, vAge, vGender, vFrequency)
    TDEE = calculate1.getTDEE()

    var menu = Big + '<title>Main Menu</title>' + head
    menu += '<body id="backmain">'
    menu += '<div style="margin-top: 8%;" class="container">'
    menu += '<center><h1 id="plzfill2">แคลอรีที่คุณ ' + vName + ' ควรทานวันนี้ คือ!</h1></center>'
    menu += '<div id="backinfo2">'

    menu += '<h1 id="tdee">' + TDEE + '</h1>'
    menu += '<h1 id="calmain">calories!</h1>'
    menu += '</div>'
    menu += '<center>'
    menu += '<a id="calcal" href="/cal">Calculate Received Calories</a>'
    menu += '<a id="food" href="/fooddetail">Recommended Menu</a></center>'
    menu += '</div>'
    menu += '</body>'
    res.send(menu);
    console.timeEnd("Mainmenu")

});

app.get('/mainmenu', function(req, res) {
    console.time("Mainmenu1")

    var menu = Big + '<title>Main Menu</title>' + head
    menu += '<body id="backmain">'
    menu += '<div style="margin-top: 8%;" class="container">'
    menu += '<center><h1 id="plzfill2">แคลอรีที่คุณ ' + vName + ' ควรทานวันนี้ คือ!</h1></center>'
    menu += '<div id="backinfo2">'

    menu += '<h1 id="tdee">' + TDEE.toFixed(3) + '</h1>'
    menu += '<h1 id="calmain">calories!</h1>'
    menu += '</div>'
    menu += '<center>'
    menu += '<a id="calcal" href="/cal">Calculate Received Calories</a>'
    menu += '<a id="food" href="/fooddetail">Recommended Menu</a></center>'
    menu += '</div>'
    menu += '</body>'

    res.send(menu);
    console.timeEnd("Mainmenu1")

});

var cal
/////////////Cal ที่ทานไป page/////////////
app.get('/cal', urlencodedParser, function(req, res) {
    console.time("Calculate")

    cal = ' ';
    cal += Big + '<title>Received Calories Calculator</title>' + head
    cal += '<body id="backcal">'
    cal += '<div style="margin-top: 8%;" class="container">'
    cal += '<center><h1 id="receivedCalCal">Please Fill Food Quantity</h1></center>'
    cal += '<form action="/cal1" method="post">'
    cal += '<div id="backcal2" class="form-group">'
    cal += '<span class=col-md-2></span>'
    cal += '<center><select class="col-md-4" name="menuIdx" class="form-control">'
    cal += '<option value=" " required>-- Choose Menu Here --</option>'
        //show menu list in dropdown
    for (var j = 0; j < Listname.trim(); j++) {
        cal += '<option required value="' + j + '">' + Listname.Get(j) + '</option>';
    }
    cal += '</select><span class="col-md-2"></span>'
    cal += '<input class="col-md-2" type="text" class="form-control" name="Quantity" onkeypress="return event.charCode >= 48 && event.charCode <= 57 || event.charCode == 46" placeholder="Quantity in grams" required></input>'
    cal += '<span class=col-md-2><input type="submit" class="add-btn" value="Add to list"></span>'
    cal += '</center>'
    cal += '</div><br>'
    cal += '</form><br>'
    cal += '<center><a class="finish-btn" href="/result">Calculate Now!</a><a id="backmenuC" href="/mainmenu">Back to Main Menu</a></center>'
    if(!visitorCal.isEmpty()){
        cal += '<form action="/cal2" method="post">'
        cal += '<div id="backcal3">'
        cal += '<center><table style="width: 100%;"><tr>'
        cal += '<th>Food Name</th><th>Food Quantity (in grams)</th><th>Calories</th><th>Delete</th></tr>'
        for (var k = 0; k < visitorCal.trim(); k++) {
            cal += '<tr><td name="menuName">' + Listname.Get(visitorCal.Get(k).getMenuIdx()) + '</td>'
            cal += '<td>' + visitorCal.Get(k).getQuantity() + '</td>'
            cal += '<td>' + (ListValue.Get(visitorCal.Get(k).getMenuIdx())*visitorCal.Get(k).getQuantity()).toFixed(3) + '</td>'
            cal += '<td><input class="col-md-2" type="radio" name="food" required value="' + k + '" required></td></tr>'
        }
        cal += '</table></center>'
        cal += '<center><input id="del-btn" type="submit" value="Delete"></center>'
        cal += '</div>'
        cal += '</form>'
    }
    cal += '</div>'
    cal += '</body>';
    res.send(cal);
    console.timeEnd("Calculate")

});


app.post('/cal1', urlencodedParser, function(req, res) {
    console.time("Calculate1")

    if(req.body.menuIdx != ' '){
        //collect visitor eating
        menulist[count] = new MenuList(req.body.menuIdx, req.body.Quantity);
        //Add visitor eating into array
        visitorCal.add(menulist[count])
        count += 1;
    }
    var cal2 = Big + '<title>Received Calories Calculator Page</title>' + head
    cal2 += '<body id="backcal">'
    if (req.body.menuIdx == ' '){
        cal2 += '<script>alert("Please Choose Menu!");</script>'
    }
    cal2 += '<div style="margin-top: 8%;" class="container">'
    cal2 += '<center><h1 id="receivedCalCal">Please Fill Food Quantity</h1></center>'
    cal2 += '<form action="/cal1" method="post">'
    cal2 += '<div id="backcal2" class="form-group">'
    cal2 += '<span class=col-md-2></span>'
    cal2 += '<center><select class="col-md-4" name="menuIdx" class="form-control">'
    cal2 += '<option value=" " required>-- Choose Menu Here --</option>'
        //show menu list in dropdown
    for (var j = 0; j < Listname.trim(); j++) {
        cal2 += '<option required value="' + j + '">' + Listname.Get(j) + '</option>';
    }
    cal2 += '</select><span class="col-md-2"></span>'
    cal2 += '<input class="col-md-2" type="text" class="form-control" name="Quantity" onkeypress="return event.charCode >= 48 && event.charCode <= 57 || event.charCode == 46" placeholder="Quantity in grams" required></input>'
    cal2 += '<span class=col-md-2><input type="submit" class="add-btn" value="Add to list"></span>'
    cal2 += '</center>'
    cal2 += '</div><br>'
    cal2 += '</form><br>'

    cal2 += '<center><a class="finish-btn" href="/result">Calculate Now!</a><a id="backmenuC" href="/mainmenu">Back to Main Menu</a></center>'
    if(!visitorCal.isEmpty()){
        cal2 += '<form action="/cal2" method="post">'
        cal2 += '<div id="backcal3">'
        cal2 += '<center><table style="width: 100%;"><tr>'
        cal2 += '<th>Food Name</th><th>Food Quantity (in grams)</th><th>Calories</th><th>Delete</th></tr>'
        for (var k = 0; k < visitorCal.trim(); k++) {
            cal2 += '<tr><td name="menuName">' + Listname.Get(visitorCal.Get(k).getMenuIdx()) + '</td>'
            cal2 += '<td>' + visitorCal.Get(k).getQuantity() + '</td>'
            cal2 += '<td>' + (ListValue.Get(visitorCal.Get(k).getMenuIdx())*visitorCal.Get(k).getQuantity()).toFixed(3) + '</td>'
            cal2 += '<td><input class="col-md-2" type="radio" name="food" required value="' + k + '" required></td></tr>'
        }
        cal2 += '</table></center>'
        cal2 += '<center><input id="del-btn" type="submit" value="Delete"></center>'
        cal2 += '</div>'
        cal2 += '</form>'
    }

    cal2 += '</div>'
    cal2 += '</body>';
    res.send(cal2);
    console.timeEnd("Calculate1")

});

app.post('/cal2', urlencodedParser, function(req, res) {
    console.time("Calculate2")

    visitorCal.remove(req.body.food)
    var cal2 = Big + '<title>Received Calories Calculator Page</title>' + head
    cal2 += '<body id="backcal">'
    cal2 += '<div style="margin-top: 8%;" class="container">'
    cal2 += '<center><h1 id="receivedCalCal">Please Fill Food Quantity</h1></center>'
    cal2 += '<form action="/cal1" method="post">'
    cal2 += '<div id="backcal2" class="form-group">'
    cal2 += '<span class=col-md-2></span>'
    cal2 += '<center><select class="col-md-4" name="menuIdx" class="form-control">'
    cal2 += '<option value=" " required>-- Choose Menu Here --</option>'
        //show menu list in dropdown
    for (var j = 0; j < Listname.trim(); j++) {
        cal2 += '<option required value="' + j + '">' + Listname.Get(j) + '</option>';
    }
    cal2 += '</select><span class="col-md-2"></span>'
    cal2 += '<input class="col-md-2" type="text" class="form-control" name="Quantity" onkeypress="return event.charCode >= 48 && event.charCode <= 57 || event.charCode == 46" placeholder="Quantity in grams" required></input>'
    cal2 += '<span class=col-md-2><input type="submit" class="add-btn" value="Add to list"></span>'
    cal2 += '</center>'
    cal2 += '</div><br>'
    cal2 += '</form><br>'

    cal2 += '<center><a class="finish-btn" href="/result">Calculate Now!</a><a id="backmenuC" href="/mainmenu">Back to Main Menu</a></center>'
    if(!visitorCal.isEmpty()){
        cal2 += '<form action="/cal2" method="post">'
        cal2 += '<div id="backcal3">'
        cal2 += '<center><table style="width: 100%;"><tr>'
        cal2 += '<th>Food Name</th><th>Food Quantity (in grams)</th><th>Calories</th><th>Delete</th></tr>'
        for (var k = 0; k < visitorCal.trim(); k++) {
            cal2 += '<tr><td>' + Listname.Get(visitorCal.Get(k).getMenuIdx()) + '</td>'
            cal2 += '<td>' + visitorCal.Get(k).getQuantity() + '</td>'
            cal2 += '<td>' + (ListValue.Get(visitorCal.Get(k).getMenuIdx())*visitorCal.Get(k).getQuantity()).toFixed(3) + '</td>'
            cal2 += '<td><input class="col-md-2" type="radio" name="food" required value="' + k + '" required></td></tr>'
        }
        cal2 += '</table></center>'
        cal2 += '<center><input id="del-btn" type="submit" value="Delete"></center>'
        cal2 += '</div>'
        cal2 += '</form>'
    }
    
    cal2 += '</div>'
    cal2 += '</body>';
    res.send(cal2);
    console.timeEnd("Calculate2")

});
app.get('/result', urlencodedParser, function(req, res) {
    console.time("Result")

    var result = Big + '<title>Result Page</title>' + head;
    var TDEE_remain = TDEE;
    for (i = 0; i < visitorCal.trim(); i++) {

        quantitycal = visitorCal.Get(i).getQuantity();
        calcal = ListValue.Get(visitorCal.Get(i).getMenuIdx());
        var add = new addcal(TDEE_remain, calcal, quantitycal);
        TDEE_remain = add.getCalTDEE();
        // result += '<p>result = '+visitorCal.Get(i).getMenuIdx()+' , '+visitorCal.Get(i).getQuantity()+'</p>';
    }
    TDEE = TDEE_remain;
    result += '<body id="back">'
    result += '<div class="container">'
    result += '<div id="showresult"><h1 id="resulth1">RESULT</h1></div>'

    result += '<div id="back2">'
    result += '<h2 id="remain">ปริมาณแคลอรี่ที่ควรทานวันนี้ คงเหลือ</h2>';
    result += '<h1 id="recal">' + TDEE_remain.toFixed(3) + '</h1>'
    result += '<h1 id="cal">calories!</h1>'
    result += '</div>'
    if(TDEE_remain>1000){
        result += '<p id="receivedCalCal">กินข้าวอีกสักจานไหมครับ เดี๋ยวผอมนะ</p>'
    }else if(TDEE_remain>500){
        result += '<p id="receivedCalCal">กินอาหารได้นิดนึง อีกนิดสิครับวันนี้ เดี๋ยวผอมนะ</p>'
    }else if(TDEE_remain>0){
        if(vOption=='lose weight'){
            result += '<p id="receivedCalCal">กินของทานเล่นอีกนิดสิครับวันนี้ เดี๋ยวผอมนะ</p>'
        }else{
            result += '<p id="receivedCalCal">กินข้าวอีกสักจานไหมครับ จะได้ปั๊วะๆ</p>'
        }
    }else if(-500<TDEE_remain<0){
        if(vOption=='lose weight'){
            result += '<p id="receivedCalCal">หยุดกินได้แล้วจ้าาาาา จะอ้วนแล้วนะ</p>'
        }else{
            result += '<p id="receivedCalCal">กินของทานเล่นอีกนิดสิครับวันนี้ ปังๆ</p>'
        }
    }else if(TDEE_remain<-500){
        if(vOption=='lose weight'){
            result += '<p id="receivedCalCal">หยุดกินได้แล้วจ้าาาาา จะอ้วนแล้วนะ</p>'
        }else{
            result += '<p id="receivedCalCal">วันนี้ปังแล้วนะ หยุดกินได้แล้วจ้าาาาา</p>'
        }
    }
    result += '<center><a id="backmenu" href="/mainmenu">Back to Main Menu</a></center>'
    result += '</div>'
    result += '</body>'

    visitorCal.clear();
    res.send(result);
    console.timeEnd("Result")

});

/////////////Recommended Menu Page/////////////
app.get('/fooddetail', function(req, res) {
    console.time("Food rec")

    res.sendFile(__dirname + "/" + "fooddetail.html");
    console.timeEnd("Food rec")

});
app.listen(2581);