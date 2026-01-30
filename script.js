let arr = [
  { card: 1, value: 2, img: 'images/standarddeck/1.png' },
  { card: 2, value: 3, img: 'images/standarddeck/2.png' },
  { card: 3, value: 4, img: 'images/standarddeck/3.png' },
  { card: 4, value: 5, img: 'images/standarddeck/4.png' },
  { card: 5, value: 6, img: 'images/standarddeck/5.png' },
  { card: 6, value: 7, img: 'images/standarddeck/6.png' },
  { card: 7, value: 8, img: 'images/standarddeck/7.png' },
  { card: 8, value: 9, img: 'images/standarddeck/8.png' },
  { card: 9, value: 10, img: 'images/standarddeck/9.png' },
  { card: 10, value: 11, img: 'images/standarddeck/10.png' },
  { card: 11, value: 12, img: 'images/standarddeck/11.png' },
  { card: 12, value: 13, img: 'images/standarddeck/12.png' },
  { card: 13, value: 14, img: 'images/standarddeck/13.png' },
  { card: 14, value: 2, img: 'images/standarddeck/14.png' },
  { card: 15, value: 3, img: 'images/standarddeck/15.png' },
  { card: 16, value: 4, img: 'images/standarddeck/16.png' },
  { card: 17, value: 5, img: 'images/standarddeck/17.png' },
  { card: 18, value: 6, img: 'images/standarddeck/18.png' },
  { card: 19, value: 7, img: 'images/standarddeck/19.png' },
  { card: 20, value: 8, img: 'images/standarddeck/20.png' },
  { card: 21, value: 9, img: 'images/standarddeck/21.png' },
  { card: 22, value: 10, img: 'images/standarddeck/22.png' },
  { card: 23, value: 11, img: 'images/standarddeck/23.png' },
  { card: 24, value: 12, img: 'images/standarddeck/24.png' },
  { card: 25, value: 13, img: 'images/standarddeck/25.png' },
  { card: 26, value: 14, img: 'images/standarddeck/26.png' },
  { card: 27, value: 2, img: 'images/standarddeck/27.png' },
  { card: 28, value: 3, img: 'images/standarddeck/28.png' },
  { card: 29, value: 4, img: 'images/standarddeck/29.png' },
  { card: 30, value: 5, img: 'images/standarddeck/30.png' },
  { card: 31, value: 6, img: 'images/standarddeck/31.png' },
  { card: 32, value: 7, img: 'images/standarddeck/32.png' },
  { card: 33, value: 8, img: 'images/standarddeck/33.png' },
  { card: 34, value: 9, img: 'images/standarddeck/34.png' },
  { card: 35, value: 10, img: 'images/standarddeck/35.png' },
  { card: 36, value: 11, img: 'images/standarddeck/36.png' },
  { card: 37, value: 12, img: 'images/standarddeck/37.png' },
  { card: 38, value: 13, img: 'images/standarddeck/38.png' },
  { card: 39, value: 14, img: 'images/standarddeck/39.png' },
  { card: 40, value: 2, img: 'images/standarddeck/40.png' },
  { card: 41, value: 3, img: 'images/standarddeck/41.png' },
  { card: 42, value: 4, img: 'images/standarddeck/42.png' },
  { card: 43, value: 5, img: 'images/standarddeck/43.png' },
  { card: 44, value: 6, img: 'images/standarddeck/44.png' },
  { card: 45, value: 7, img: 'images/standarddeck/45.png' },
  { card: 46, value: 8, img: 'images/standarddeck/46.png' },
  { card: 47, value: 9, img: 'images/standarddeck/47.png' },
  { card: 48, value: 10, img: 'images/standarddeck/48.png' },
  { card: 49, value: 11, img: 'images/standarddeck/49.png' },
  { card: 50, value: 12, img: 'images/standarddeck/50.png' },
  { card: 51, value: 13, img: 'images/standarddeck/51.png' },
  { card: 52, value: 14, img: 'images/standarddeck/52.png' },
];

let game = { 
  chips: 0, flatmult: 1, xmult: 1, score: 0, clickValue: 0, card: 2, cardMax: 2, suit: 'hearts', cash: 0, cashRate: 50, level: 1, jokers: 0, jokerMax: 1,
  requirement: 1000, upgrade1: 5, upgrade2: 10, chipsLevel: 0, jokerLevel: 0, jokerIndex: 0, trouserLevel: 0,
};

// rarity of 1 is common, 2 is uncommon, 3 is rare. 'owned' refers to wether the joker is currently purchased, to filter it from shops.
let jokers = [
  { name: 'jimbo', owned: false, cost: 2, rarity: 1, desc: 'Jimbo: +4 mult.', path: 'images/Jokers/jimbo.png'},
  { name: 'cavendish', owned: false, cost: 4, rarity: 1, desc: 'Cavendish: x3 mult applied after +mult.', path: 'images/Jokers/cavendish.png'},
  { name: 'oddtodd', owned: false, cost: 4, rarity: 1, desc: 'Odd Todd: +31 chips when an odd card is clicked.', path: 'images/Jokers/oddtodd.png'},
  { name: 'evensteven', owned: false, cost: 4, rarity: 1, desc: 'Even Steven: +6 mult when an even card is clicked.', path: 'images/Jokers/evensteven.png'},
  { name: 'sparetrousers', owned: false, cost: 6, rarity: 2, desc: 'Spare Trousers: This card gains +1 mult when level increases. Currently: ' + game.trouserLevel + ' mult.', path: 'images/Jokers/sparetrousers.png'},
  { name: 'tothemoon', owned: false, cost: 5, rarity: 2, desc: 'To The Moon: Gain 10% interest every minute.', path: 'images/Jokers/tothemoon.png'},
];

// declaring variables for code efficiency 
let deckUsed = 0;
let sceneCurrent = 0;
const tips = document.getElementById('tips');
let globalFunc1;
let globalFunc2;
let costParam1;
let costParam2;
let count = 0;
//global variable which handles the current joker slot index

function filterJokers(array) 
{
  // non-destructively, look for where jokers != owned, to create a shop array which has zero duplicates
  let filteredArrays = array.filter((slot) => !slot.owned);
  // if there is no jokers left that the player doesn't own (catch all), then spawn jimbos.
  if (filteredArrays.length === 0) {
    // .slice returns a section of an existing array, non affecting the original. position "0, 1" will only target index 0 (jimbo)
    filteredArrays = array.slice(0, 1);
  }
  return filteredArrays;
}

function shuffleArr(array) {

    let currentIndex = array.length;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      let randomIndex = Math.floor(Math.random() * currentIndex);
      return randomIndex;
    }
  }

let stats = false;
let toddBonusUsed;
let stevenBonusUsed;

function startUp()
{
  toddBonusUsed = false;
  stevenBonusUsed = false;
  document.getElementById('hidden').style.display = 'none';
  document.getElementById('box2').style.display = 'none';
  // add event listeners for hovering over deck icons
  //hoverInfo();
  // make sure UI is correct for value displays
  uiUpdate();
  // update clickable card to be '2 of hearts' when starting
  readValues();
  // update UI every second with values
  setInterval(uiUpdate, 500);
  // update quest progress every tenth of a second
  setInterval(questBar, 100);
  devResource();
  rerollShop();
  checkboxTip();
}

function checkboxTip()
{
  const checkbox = document.getElementById('toggleDiv');
  checkbox.onmouseover = () => { tips.innerHTML = "When active, jokers can be sold, to lose their effects and gain half their price in cash."; };
  checkbox.onmouseout  = () => { tips.innerHTML = "&nbsp;"; };
}

function devResource()
{
  //game.cash = 1000;
  game.chips = 1000;
  game.cashRate = 2;
  game.level = 100;
}

function uiUpdate()
{
  // chips are equal to base chips (1), plus card chips (2-14), extra chips levels (upgrade menu)
  let chipsAm = (game.chips + game.card + game.chipsLevel);
  // mult is equal to base mult (1), plus any levels in spare trousers, times the mult-mult (xmult)
  let multAm = ((game.trouserLevel + game.flatmult) * game.xmult);
  game.clickValue = chipsAm * multAm;

  document.getElementById('value1').innerHTML = Math.round(chipsAm);
  document.getElementById('value2').innerHTML = Math.round(multAm);
  document.getElementById('value3').innerHTML = game.clickValue;
  document.getElementById('cash').innerHTML = game.cash;
  document.getElementById('jokerNum').innerHTML = game.jokerIndex;
  document.getElementById('maxJokers').innerHTML = game.jokerMax;
}

function deckSelect(deck)
{
  // constant deck image id in second screen
  const deckImg = document.getElementById('deckChosen');
  // text when hovering over deck icon, changed in below conditional
  let hoverText = 'Something went wrong!';

  // red deck: 
  if (deck == 1) {
  game.score = 500;
} else if (deck == 2) {
  game.score = 1000;
} else if (deck == 3) {
  game.score = 1500;
} else if (deck == 4) {
  game.score = 2000;
} else if (deck == 5) {
  game.score = 2500;
} else if (deck == 6) {
  game.score = 3000;
} else if (deck == 7) {
  game.score = 3500;
} else if (deck == 8) {
  game.score = 4000;
} else if (deck == 9) {
  game.score = 4500;
} else if (deck == 10) {
  game.score = 5000;
} else if (deck == 11) {
  game.score = 5500;
} else if (deck == 12) {
  game.score = 6000;
} else if (deck == 13) {
  game.score = 6500;
} else if (deck == 14) {
  game.score = 7000;
} else {
  game.score = 7500;
}

  // concatenate the string of the parameter to the filepath for efficiency
  let source = "images/decks/" + String(deck) + ".png";
  // paste onto element
  deckImg.src = source;
  
  // assign an event listener to the deck describing what it does in the tips bar
  deckImg.addEventListener('mouseover', function() { tips.innerHTML = hoverText; });

  // change to game screen and hide intro screen
  document.getElementById('box1').style.display = 'none';
  document.getElementById('box2').style.display = 'block';
  document.body.style.backgroundImage = "url('images/greenbackdrop.jpg')";
  document.body.style.backgroundColor = 'rgb(70,130,180)';
  upgradeButtonTips();
  //cavendish(true);
}

function openPage()
{
  // promo
  window.open("https://github.com/Ambush-4567", "_blank");
}

function cycle()
{
  // ace card in start screen, randomly change icon based on randomiser when pressed
  let randNum = Math.floor(Math.random() * 8);
  if (randNum == 1) {
    document.getElementById('imgcycle').src ='images/special/aceclubbonus.png';
  } else if (randNum == 2) {
    document.getElementById('imgcycle').src ='images/special/aceclubglass.png';
  } else if (randNum == 3) {
    document.getElementById('imgcycle').src ='images/special/aceclubgold.png';
  } else if (randNum == 4) {
    document.getElementById('imgcycle').src ='images/special/aceclublucky.png';
  } else if (randNum == 5) {
    document.getElementById('imgcycle').src ='images/special/aceclubmult.png';
  } else if (randNum == 6) {
    document.getElementById('imgcycle').src ='images/special/aceclubsteel.png';
  } else if (randNum == 7) {
    document.getElementById('imgcycle').src ='images/special/aceclubwild.png';
  } else if (randNum == 8) {
    document.getElementById('imgcycle').src ='images/special/aceclub.png';
  } 

  const imgA = document.getElementById('imgcycle');
}

function revealDiv()
{
  // when clicked with the box hidden, reveal. When clicked already revealed, hide. etc etc
  if(stats == false) {
    stats = true;
    document.getElementById('hidden').style.display = 'block';
  } else if(stats == true) {
    stats = false;
    document.getElementById('hidden').style.display = 'none';
}
}

/*function hoverInfo()
{
  // variables for selecting deck
  let redS = false;
  let blueS = false;
  let yellowS = false;

  let redD = document.getElementById('redDeck');
  let blueD = document.getElementById('blueDeck');
  let yellowD = document.getElementById('yellowDeck');

  // hovering over decks for desc
  redD.addEventListener('mouseover', function() { tips.innerHTML = 'Red Deck. Start with 1 extra discard.'; });
  blueD.addEventListener('mouseover', function() { tips.innerHTML = 'Blue Deck. Start with 1 extra Hand.'; });
  yellowD.addEventListener('mouseover', function() { tips.innerHTML = 'Yellow Deck. Start with $10 extra (total $14).'; });
}*/

function readValues()
{
  // id's of select menu elements
  const suitOption = document.getElementById('suitChange');
  const rankOption = document.getElementById('rankChange');

  game.suit = suitOption.value;

  // turn the string of the rank selection into an integer, paste onto card variable
  game.card = parseInt(rankOption.value);
  uiUpdate();

  // parameters used here for proof of concept even though arguments are global
  updateCard(game.suit, game.card);
}

function updateCard(suitValue, rankValue)
{
  // main clickable card in game screen id, and declare cardValue for later use
  let cardImage = document.getElementById('clickCard');
  let cardValue;

  /*use suit and rank information to locate array image. For example: a suit value of 'hearts', and a
  rankValue of '2'. The very first if will evaluate true, and the -2 accounts for array indexing to find
  position '0', or the very first image in the array (2 of hearts). */
  if (suitValue == 'hearts') {
    cardValue = (rankValue - 2);
    cardImage.src = arr[cardValue].img;
  } else if (suitValue == 'clubs') {
    cardValue = (rankValue + 11);
    cardImage.src = arr[cardValue].img;
  } else if (suitValue == 'diamonds') {
    cardValue = (rankValue + 24);
    cardImage.src = arr[cardValue].img;
  } else {
    cardValue = (rankValue + 37);
    cardImage.src = arr[cardValue].img;
  }

  if(jokers[2].owned) {
    toddBonus(rankValue);
  }

  if(jokers[3].owned) {
    stevenBonus(rankValue);
  }
}

function clickScore()
{
  // add score on click
  game.score += game.clickValue;
  // see if money is randomly earned
  if (Math.ceil(Math.random() * game.cashRate) == 1) {
    game.cash += 1;
    document.getElementById('cash').innerHTML = game.cash;
  }
  // update html with score
  document.getElementById('score').innerHTML = game.score;
}

function questBar()
{
  // assign quest bar and level display elements to 'const' as they are unchanging
  const questBar = document.getElementById('quest');
  const levelNum = document.getElementById('level');
  const reqDisplay = document.getElementById('requirement');

  // if quest bar is complete, increment level and increase level requirement
  if (game.score >= game.requirement && game.level < 1000) {
    game.level++;
    levelNum.innerHTML = game.level;
    game.requirement *= 1.1;
    // every level up, if sparetrousers joker is owned, increment the level by 1.
    if (jokers[4].owned == true) {
      game.trouserLevel++;
      jokers[4].desc = 'Spare Trousers: This card gains +1 mult when level increases. Currently: ' + game.trouserLevel + ' mult.';
    }
    if (game.cardMax < 15) {
      game.cardMax++;
      rankAdd(game.cardMax);
    }
  }

  // update html display in the quest bar based on progress
  questBar.max = game.requirement;
  questBar.value = game.score;
  reqDisplay.innerHTML = game.requirement;
}

function rankAdd(rank)
{
    // Get the select element
    const selectElement = document.getElementById("rankChange");

    // Create a new option
    const newOption = document.createElement("option");

    // Sets the text value. converts 'rank' to a string, and value is implicitly assigned to the same.
    newOption.textContent = "" + rank;

    // Add the new option to the select element
    selectElement.add(newOption);

    game.card = rank;
    updateCard(game.suit, game.card);
}

function showTab(tabIndex) 
{
  // Hide all tabs
  const tabs = document.querySelectorAll('.tab-content');
  const tabButtons = document.querySelectorAll('.tab-button');

  tabs.forEach(tab => {
    tab.classList.remove('active-content'); // Hide content
  });

  tabButtons.forEach(button => {
    button.classList.remove('active'); // Remove active class from all buttons
  });

  // Show the selected tab and add the active class to the corresponding button
  const activeTab = tabs[tabIndex];
  activeTab.classList.add('active-content'); // Show the active content

  // Add active class to the clicked tab button
  tabButtons[tabIndex].classList.add('active'); // Add active class to the clicked button
} 

function upgradeButtonTips()
{
  const upgrade1 = document.getElementById('up1');
  const upgrade2 = document.getElementById('up2');

  // Define upgrades on hover
  upgrade1.addEventListener('mouseover', function() { tips.innerHTML = '+1 chips permanently, applied on top of card rank. Maxes at level 50.'; });
  upgrade2.addEventListener('mouseover', function() { tips.innerHTML = '+1 Joker slot permanently, maxes at level 4 (Total 5 slots).'; });
  let timer3 = setInterval(checkUpgrades, 200);
}

function checkUpgrades()
{
  const a = document.getElementById('up1');
  const b = document.getElementById('up2');

  // chips upgrade check: $5, level 1 (no need to check), under level 50
  if (game.cash >= game.upgrade1 && game.chipsLevel < 50) {
    a.disabled = false;
  } else {
    a.disabled = true;
  }

  // joker slot addition check: $10 (increases by 10 each time), level 3, max 4 purchases
  if (game.cash >= game.upgrade2 && game.level >= 3 && game.jokerLevel < 4) {
    b.disabled = false;
  } else {
    b.disabled = true;
  }
}

function jokerSlot()
{
  // how much more expensive will the upgrade be after purchasing.
  const jokerCostScale = 10;

  // deduct cash, increment upgrade level. Upgrade cost becomes 10 more after each purchase
  game.jokerLevel++;
  game.upgrade2 = (jokerCostScale * game.jokerLevel);
  game.cash -= game.upgrade2;

  // update internal joker maximum variable
  game.jokerMax++;

  // display the future cost properly
  let displayCost = (game.jokerLevel + 1) * jokerCostScale;

  document.getElementById('jokerUpgradeNum').innerHTML = game.jokerLevel;
  document.getElementById('jokerUpgradeCost').innerHTML = displayCost;
  uiUpdate();
  checkUpgrades();
}

function addChips()
{
  // deduct cash, increment upgrade level
  game.cash -= game.upgrade1;
  game.chipsLevel++;

  document.getElementById('chipsUpgradeNum').innerHTML = game.chipsLevel;
  uiUpdate();
  checkUpgrades();
}

function rerollShop()
{
  const shop1 = document.getElementById('shop1');
  const shop2 = document.getElementById('shop2');
  const cost1 = document.getElementById('cost1');
  const cost2 = document.getElementById('cost2');

  let var1 = getShopResult(shop1, cost1);
  // set var1 to "owned = true", so it temporarily is unavilable, to prevent shop duplicates.
  let tempIndex1 = jokers.findIndex(slot => slot.name === var1);
  jokers[tempIndex1].owned = true;
  costParam1 = jokers[tempIndex1].cost;
  let var2 = getShopResult(shop2, cost2);
  let tempIndex2 = jokers.findIndex(slot => slot.name === var2);
  jokers[tempIndex2].owned = true;
  costParam2 = jokers[tempIndex2].cost;
  if (game.overstock == true) {
    //let var3 = getShopResult(shop3, cost3);
  }
  // set joker owned back to false now all functions have run
  jokers[tempIndex1].owned = false;
  jokers[tempIndex2].owned = false;
  //globalFunc = 'cavendish';
  globalFunc1 = var1;
  globalFunc2 = var2;
}

function getShopResult(slotID, costID)
{
  // filters OUT jokers (temporarily) that are already owned.
  let filteredJokers = filterJokers(jokers);
  // finds a randomised index in which to base the joker rolled in the shop.
  let pos = shuffleArr(filteredJokers);

  let currentPath = filteredJokers[pos].path;

  slotID.src = currentPath;
  //slotID.addEventListener('mouseover', function() { tips.innerHTML = filteredJokers[pos].desc; });
  costID.innerHTML = "$" + String(filteredJokers[pos].cost);

  // "findIndex" is incredibly useful to link the filtered joker to the original array.
  let originalPos = jokers.findIndex(slot => slot.path === currentPath);
  // using this instead of event listener prevents memory leaks.
  slotID.onmouseover = () => { tips.innerHTML = filteredJokers[pos].desc; };
  slotID.onmouseout  = () => { tips.innerHTML = "&nbsp;"; };

  return jokers[originalPos].name;
}

function purchase1()
{
  let joker = costParam1;
  if (globalFunc1 != "") {
    if (game.jokerIndex < game.jokerMax) {
      if (game.cash >= joker) {
        //'globalFunc' is a global variable set to the string of the joker's name. Look at where this is defined in the rerollShop() func.
        let funcCall = globalFunc1;
        game.jokerIndex++;
        // The idea here is that the string 'jokername' and the parameter 'true' is used, so that the function 'joker(true)' is called.
        window[funcCall](true);
        // reset value now we know the joker is already purchased
        globalFunc1 = "";
        clearSlot('shop1');
        uiUpdate();
      } else {
      tips.innerHTML = "Not enough money! Card cost: " + joker + ".";
      }
    } else {
    tips.innerHTML = "Joker slots full! Current max: " + game.jokerMax + ".";
    }
  } else {
    document.getElementById('dump6').innerHTML = "function call var is not null, is equal to: " + globalFunc1 + ".";
  }
}

function purchase2()
{
  let joker = costParam2;
  if (globalFunc2 != "") {
    if (game.jokerIndex < game.jokerMax) {
      if (game.cash >= joker) {
        //'globalFunc' is a global variable set to the string of the joker's name. Look at where this is defined in the rerollShop() func.
        let funcCall = globalFunc2;
        game.jokerIndex++;
        // The idea here is that the string 'jokername' and the parameter 'true' is used, so that the function 'joker(true)' is called.
        window[funcCall](true);
        // reset value now we know the joker is already purchased
        globalFunc2 = "";
        clearSlot('shop2');
        uiUpdate();
      } else {
      tips.innerHTML = "Not enough money! Card cost: " + joker + ".";
      }
    } else {
    tips.innerHTML = "Joker slots full! Current max: " + game.jokerMax + ".";
    }
  } else {
    document.getElementById('dump6').innerHTML = "function call var is not null, is equal to: " + globalFunc2 + ".";
  }
}

function clearSlot(slot)
{
  let slotID = document.getElementById(slot);
  slotID.src = "images/Jokers/locked.png";
  slotID.onmouseover = () => { tips.innerHTML = "This slot is empty until rerolling."; };
  slotID.onmouseout  = () => { tips.innerHTML = "&nbsp;"; };
}

function sellJoker(slotNum)
{
  const slotID = document.getElementById("slot" + slotNum);
  if (document.getElementById('sellToggle').checked == true) {

    // the alt text on this element holds the joker name in plain text, so it can be passed as a parameter using the next line
    let jokerName = slotID.alt;
    //window (searches global functions) indexName (jokername) false (sold)
    window[jokerName](false);
    // -1 owned joker
    game.jokerIndex--;
    // to prevent slot num becoming too much, reset if 0 jonklers
    if (game.jokerIndex == 0) {
    count = 0;
    }
    // remove element entirely. Using .src = "" is ineffective as it still takes up space and shows missing image icon.
    slotID.remove();
    uiUpdate(); 
  } 
}

function createJoker(jonklerIndex) {
  // count increment means no slot index is identical, which would otherwise be disastrous
  count++;
  // best practice??
  let localCount = count;

  // new image element for visual
  const newImg = document.createElement("img");
  // use paramater to find the image path and paste
  newImg.src = jonklerIndex.path;   
  // add 2 classes: effect (animations), and downsize (proper size)
  newImg.classList.add('effect', 'downsize');
  // add id of 'slotx' to keep track
  newImg.id = "slot" + localCount;
  // alt text will provide a way to identify joker type for selling function
  newImg.alt = jonklerIndex.name;
  newImg.onmouseover = () => { tips.innerHTML = jonklerIndex.desc; };
  newImg.onmouseout  = () => { tips.innerHTML = "&nbsp;"; };

  // Use a closure to capture the correct slot number
  newImg.onclick = function() {
    sellJoker(localCount);
  };

  document.getElementById("jokerBar").appendChild(newImg);
}

function dumpElement(el) {
  // use this to dump all info of an html element
  document.getElementById('dump1').textContent = el.outerHTML;
   //dumpElement(this);
}

function cavendish(add)
{
  let mult = 3;
  const cavendish = jokers[1];
  // if the paramter is equal to false, meaning shop item is sold
  if (add == false) {
    game.xmult /= mult;
    cavendish.owned = false;
    game.cash += Math.ceil(cavendish.cost / 2);
    return;
  }
  // $4 COST
  createJoker(cavendish);
  cavendish.owned = true;

  //Purchase
  game.cash -= cavendish.cost;

  // Cavendish effect
  game.xmult *= mult;
}

function sparetrousers(add)
{
  const sparetrousers = jokers[4];
  // if the paramter is equal to false, meaning shop item is sold
  if (add == false) {
    game.trouserLevel = 0;
    sparetrousers.owned = false;
    game.cash += Math.ceil(sparetrousers.cost / 2);
    return;
  }
  // $4 COST
  // create image element
  createJoker(sparetrousers);
  sparetrousers.owned = true;

  //Purchase
  game.cash -= sparetrousers.cost;

  // sparetrousers effect
  // effect handled upon leveling up, and in the uiUpdate function.
}

function jimbo(add)
{
  const jimbo = jokers[0];
  // if the paramter is equal to false, meaning shop item is sold
  if (add == false) {
    game.flatmult -= 4;
    jimbo.owned = false;
    game.cash += Math.ceil(jimbo.cost / 2);
    return;
  }
  // $2 COST
  // create image element
  createJoker(jimbo);
  jimbo.owned = true;

  //Purchase
  game.cash -= jimbo.cost;

  // jimbo effect
  game.flatmult += 4;
}

function oddtodd(add)
{
  const oddtodd = jokers[2];
  // if the paramter is equal to false, meaning shop item is sold
  if (add == false) {
    oddtodd.owned = false;
    game.cash += Math.ceil(oddtodd.cost / 2);
    return;
  }
  // $4 COST
  // create image element
  createJoker(oddtodd);
  oddtodd.owned = true;

  //Purchase
  game.cash -= oddtodd.cost;

  //oddtodd effect
  //toddBonus(game.card);

}

function evensteven(add)
{
  const evensteven = jokers[3];
  // if the paramter is equal to false, meaning shop item is sold
  if (add == false) {
    evensteven.owned = false;
    game.cash += Math.ceil(evensteven.cost / 2);
    return;
  }
  // $4 COST
  // create image element
  createJoker(evensteven);
  evensteven.owned = true;

  //Purchase
  game.cash -= evensteven.cost;

}

function tothemoon(add)
{
  const tothemoon = jokers[5];
  // if the paramter is equal to false, meaning shop item is sold
  if (add == false) {
    tothemoon.owned = false;
    game.cash += Math.ceil(tothemoon.cost / 2);
    return;
  }
  // $4 COST
  // create image element
  createJoker(tothemoon);
  tothemoon.owned = true;

  //Purchase
  game.cash -= tothemoon.cost;

  // tothemoon effect
  startInterestLoop(tothemoon);
}

function startInterestLoop(jonklerIndex) {

    let timeLeft = 60;

    const timer = setInterval(() => {
        if (!jonklerIndex.owned) {
            clearInterval(timer);
            document.getElementById('tothemoontext').style.display = 'none';
            return;
        }

        document.getElementById('tothemoontext').style.display = 'block';
        document.getElementById('tothemoontext').innerHTML = timeLeft + "s until interest ('To The Moon' joker effect)";

        if (timeLeft <= 0) {
            let oldCash = game.cash;
            let interest = Math.floor(game.cash * 1.1);
            let increase = interest - oldCash;
            if (increase > 10) {
              increase = 10;
            }
            game.cash += increase;
            cashUI(increase);

            timeLeft = 60; 
        }

        timeLeft--;
    }, 1000);
}

// Start it
if (jonklerIndex?.owned) {
    startInterestLoop(jonklerIndex);
}

function cashUI(amount) {
    const el = document.getElementById('cashUI');
    //un-hide when displaying cash
    //el.style.display = 'inline-block';
    // show added amount
    el.innerHTML = "+" + amount + "!";
    setTimeout(() => {
        // set text to nothing
        el.innerHTML = "&emsp;";
        //el.style.display = 'none';
    }, 3000); // wait 3 seconds before disappearing
}



function toddBonus(rank)
{
  const bonus = 31;
  let cardRank = rank;

  if(cardRank % 2 != 0) {
    if(toddBonusUsed == false) {
      game.chips += bonus;
      toddBonusUsed = true;
    }
  } else if(toddBonusUsed == true) {
    game.chips -= bonus;
    toddBonusUsed = false;
  }
}

function stevenBonus(rank)
{
  const bonus = 6;
  let cardRank = rank;

  if(cardRank % 2 == 0) {
    if(stevenBonusUsed == false) {
      game.flatmult += bonus;
      stevenBonusUsed = true;
    }
  } else if(stevenBonusUsed == true) {
    game.flatmult -= bonus;
    stevenBonusUsed = false;
  }
}