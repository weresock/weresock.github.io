//import abijson from './JSON/abilities.json' assert {type: 'json'};

//const abijson = require(['./JSON/abilities.json']);


// console.log(abijson);
// console.log(abijson.AbilityOptions);
let peripheral = {
  current: 13,
  max: 33,
  tempmax: 40
};

let personal = {
  current: 10,
  max: 13,
  tempmax: 13
};

let abilities = {
  belt: {
    name: "Belt of shadowwalking",
    cost: 5,
    state: "peri",
  },

  harmoniousPresence5: {
    name: "Harmonious Presence Meditation 5",
    cost:3,
    state:"not",
  },

  harmoniousPresence7: {
    name: "Harmonious Presence Meditation 7",
    cost:3,
    state:"not",
  },

  ignored1: {
    name: "Easily-Overlooked Presence Method",
    cost:3,
    state:"not",
  },

  cranestance: {
    name: "Graceful Crane Stance",
    cost:3,
    state:"not",
  },

  disguise1: {
    name: "Flawlessly Impenetrable Disguise",
    cost:6,
    state:"not",
  },
  
  ebonform: {
    name: "Ebon Shadow Form",
    cost:8,
    state:"not",
  },
  shadowform: {
    name: "Belt: Shadowform",
    cost:10,
    state:"not",
  },
};
updateCommitted();
updateEssence();
var committedAbilities = [];

// console.log(abilities.length);
// console.log(Object.keys(abilities).length);

function setCommit(ability,statePick)
{
  let obj = eval("abilities."+ability);
  obj.state = statePick;
  updateCommitted();
}

function updateCommitted()
{

  peripheral.tempmax = peripheral.max;
  personal.tempmax = personal.max;

  for (var property in abilities){
    //console.log(`${property}: ${abilities[property]}`);
    // console.log([property.cost]);
    let obj = eval("abilities."+property);
    console.log(eval("abilities."+property).cost);
    if (obj.state === 'not')
    {
      console.log("hhhwwwaa");
    }
    else if (obj.state === 'peri')
    {
      peripheral.tempmax -= obj.cost;
    }
    else if (obj.state === 'pers')
    {
      personal.tempmax -= obj.cost;
    }

  }

  updateEssence();

}

function essEdit(pool,num)
{
  pool.current = pool.current+num;
  if (pool.current>=pool.tempmax)
  {
    pool.current=pool.tempmax;
  }
  console.log(pool.current);
  updateEssence();
}

function recover(num)
{
  peripheral.current+=num;
  let x = peripheral.current - peripheral.tempmax
  if (x>0)
  {
    peripheral.current = peripheral.tempmax;
    personal.current += x;
    if (personal.current > personal.tempmax)
    {
      personal.current = personal.tempmax;
    }
  }

  updateEssence();
    
}


function updateEssence()
{
  document.getElementById('personalCurrent').innerHTML = personal.current;
  document.getElementById('personalMax').innerHTML = personal.tempmax;
  document.getElementById('peripheralCurrent').innerHTML = peripheral.current;
  document.getElementById('peripheralMax').innerHTML = peripheral.tempmax;

}

function debugEssence()
{
  console.log("personal " +personal.current +"/" +personal.tempmax);
  console.log("peripheral " +peripheral.current +"/" +peripheral.tempmax);
}

function commit (amount,pool)
{
    console.log("aa");
}
/*
myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if(mySrc === 'images/firefox-icon.png') {
    myImage.setAttribute ('src','images/firefox2.png');
  } else {
    myImage.setAttribute ('src','images/firefox-icon.png');
  }
}

// Personalized welcome message code


let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Mozilla is cool, ' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Mozilla is cool, ' + storedName;
}
*/


