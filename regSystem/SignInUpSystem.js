var signIn = document.querySelector('.sign-in');
var signUp = document.querySelector('.sign-up');

var userDataUpTaken = {
  nameUser: '',
  passUser: '',
  emailUser: ''
};

userDataInTaken = {
  nameUser: '',
  passUser: ''
};

var userNameArr = [];
var userPassArr = [];
var userEmailArr = [];

var userNameArrTemp = [];
var userPassArrTemp = [];
var userEmailArrTemp = [];

var storingName = localStorage.getItem('username');
var storingPass = localStorage.getItem('password');
var storingEmail = localStorage.getItem('email');

// REMOVE LOCAL DATA

// localStorage.removeItem("username");
// localStorage.removeItem("password");
// localStorage.removeItem("email");

var index = 0;
var x = 0,
  y;

if (storingName.length == undefined) {

} else {
  for (var i = 0; i < storingName.length; i++) {
    if (storingName[i] == ',' || i == storingName.length - 1) {
      y = i;
      for (x; x <= y; x++) {
        if (storingName[x] != ',')
          userNameArrTemp.push(storingName[x]);
      }
      var str = userNameArrTemp.join('');
      userNameArr[index] = str;
      for (var j = 0; j < y; j++) {
        userNameArrTemp.pop();
      }
      index++;
      x = y + 1;
    }
  }
}

index = 0;
x = 0;
for (var i = 0; i < storingPass.length; i++) {
  if (storingPass[i] == ',' || i == storingPass.length - 1) {
    y = i;
    for (x; x <= y; x++) {
      if (storingPass[x] != ',')
        userPassArrTemp.push(storingPass[x]);
    }
    var str = userPassArrTemp.join('');
    userPassArr[index] = str;
    for (var j = 0; j < y; j++) {
      userPassArrTemp.pop();
    }
    index++;
    x = y + 1;
  }
}

index = 0;
x = 0;
for (var i = 0; i < storingEmail.length; i++) {
  if (storingEmail[i] == ',' || i == storingEmail.length - 1) {
    y = i;
    for (x; x <= y; x++) {
      if (storingEmail[x] != ',')
        userEmailArrTemp.push(storingEmail[x]);
    }
    var str = userEmailArrTemp.join('');
    userEmailArr[index] = str;
    for (var j = 0; j < y; j++) {
      userEmailArrTemp.pop();
    }
    index++;
    x = y + 1;
  }
}

function transferData() {
  userDataUpTaken = {
    nameUser: signUp['nameUser'].value,
    passUser: signUp['passUser'].value,
    emailUser: signUp['emailUser'].value
  };
  signedUp();
}

function signedUp() {
  if (userDataUpTaken.nameUser == '' || userDataUpTaken.passUser == '' || userDataUpTaken.emailUser == '') {
    if (document.querySelector('.acceptUp').children.length > 0) {
      document.querySelector('.acceptUp').style.display = 'none';
      document.querySelector('.acceptUp').removeChild(document.querySelector('.acceptUp').childNodes[0]);
    }
    document.querySelector('.errorUp').style.display = 'block';
    document.querySelector('.errorUp').innerHTML = "<p>PLEASE FILL ALL INPUTS</p>";
  } else {
    userNameArr.push(userDataUpTaken.nameUser);
    userPassArr.push(userDataUpTaken.passUser);
    userEmailArr.push(userDataUpTaken.emailUser);
    localStorage.setItem('username', userNameArr);
    localStorage.setItem('password', userPassArr);
    localStorage.setItem('email', userEmailArr);
    if (document.querySelector('.errorUp').children.length > 0) {
      document.querySelector('.errorUp').style.display = 'none';
      document.querySelector('.errorUp').removeChild(document.querySelector('.errorUp').childNodes[0]);
    }
    document.querySelector('.acceptUp').style.display = 'block';
    document.querySelector('.acceptUp').innerHTML = "<p>YOU HAVE SIGNED UP</p>";
  }

  // FIX SECTION HEIGHT
  height = containerBox.scrollHeight
  section.style.height = height + "px";
}

function takeData() {
  section.style.height = height + "px";
  userDataInTaken = {
    nameUser: signIn['nameUser'].value,
    passUser: signIn['passUser'].value
  };
  if (userDataInTaken.nameUser == '' || userDataInTaken.passUser == '') {
    document.querySelector('.errorIn').style.display = 'block';
    document.querySelector('.errorIn').innerHTML = "<p>PLEASE FILL ALL INPUTS</p>";
  } else {
    var flag = false;
    for (var i = 0; i < userNameArr.length; i++) {
      if (userDataInTaken.nameUser == userNameArr[i] && userDataInTaken.passUser == userPassArr[i]) {
        flag = true;
        break;
      }
    }
    if (flag == true) {
      sessionStorage.setItem("signIn", true);
      window.location.href = "../index.html";
    } else {
      console.log("Invalid");
      document.querySelector('.errorIn').style.display = 'block';
      document.querySelector('.errorIn').innerHTML = "<p>INVALID INPUTS</p>";
    }
  }

  // FIX SECTION HEIGHT
  height = containerBox.scrollHeight
  section.style.height = height + "px";
}