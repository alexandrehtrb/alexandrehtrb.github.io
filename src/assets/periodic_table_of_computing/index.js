// Global variable for the dialog close
var DialogTrigger;

function ParseElements(data, elmID, lang) {
  //try {
    // Use this if the JSON is coming over the wire
    // var JSONdata = JSON.parse(data);
    var JSONdata = data;
    // Get the container that will hold our table
    var theContainer = document.getElementById(elmID);
    // Clear the placeholder non-JS content
    theContainer.innerHTML = "";
    // Create an <ol> to contain it all and add it to the page
    var ol = document.createElement("ol");
    ol.setAttribute("id","Table");
    theContainer.appendChild(ol);
    // Grab the JSON nodes
    var filteredNodes = JSONdata;
    // Blank category array
    var catLookup = {};
    var catArray = [];
    // Loop through the elements nodes
    for (var a = 0; a < filteredNodes.length; a++) {
      var json = filteredNodes[a];
      // Create the <li>, give it an id and row/col info
      var elementNode = document.createElement("li");
      elementNode.setAttribute("id",json.symbol);
      elementNode.classList.add("row" + json.ypos);
      elementNode.classList.add("col" + json.xpos);
      // Get the category and concatenate into the class
      var rawCat = json.category;
      var stringCat = rawCat;
      stringCat = stringCat.split(' ').join('_');
      stringCat = stringCat.split(',').join('');
      elementNode.classList.add("cat-" + stringCat);
      // Make the atomic number container
      var numberDiv = document.createElement("div");
      numberDiv.innerHTML = json.number;
      // Make the name container and give it an id
      var nameDiv = document.createElement("div");
      nameDiv.setAttribute("id","name" + json.symbol);
      nameDiv.innerHTML = json.name;
      // Make tye symbol container
      var symbolDiv = document.createElement("div");
      symbolDiv.innerHTML = json.symbol;
      // Make the atomic mass container
      //var massDiv = document.createElement("div");
      //massDiv.innerHTML = "‎";//json.atomic_mass;
      // Make the button and give it an id and ARIA bits
      var detailButton = document.createElement("button");
      detailButton.innerHTML = "details.";
      detailButton.setAttribute("type", "button");
      detailButton.setAttribute("id", "btn" + json.symbol);
      var labelledby = "name" + json.symbol + " btn" + json.symbol;
      detailButton.setAttribute("aria-labelledby", labelledby);
      detailButton.setAttribute("onclick", "OpenDialog(this.id,'" + json.name + "','" + lang + "');");
      // Add all the nodes to the <li>
      elementNode.appendChild(numberDiv);
      elementNode.appendChild(symbolDiv);
      elementNode.appendChild(nameDiv);
      //elementNode.appendChild(massDiv);
      elementNode.appendChild(detailButton);
      // Add the <li> to the <ol>
      ol.appendChild(elementNode);
      // Loop through the category and add distinct to array
      if (!(rawCat in catLookup)) {
        catLookup[rawCat] = 1;
        catArray.push(rawCat);
        // console.log(rawCat);
      }
    }
    // Create a <dl> to hold categories
    var dl = document.createElement("dl");
    for (var i = 0; i < catArray.length; i++) {
      var catText = catArray[i];
      var catString;
      catString = catText.split(' ').join('_');
      catString = catString.split(',').join('');
      catString = "cat-" + catString;
      // console.log(catString);
      // Make the color container and class it
      var dt = document.createElement("dt");
      dt.classList.add(catString);
      // Make the category container
      var dd = document.createElement("dd");
      dd.innerHTML = lang == "pt" ? convertCategoryNameToPortuguese(catText) : catText;
      dd.setAttribute("id", catString);
      // Make the button
      var showButton = document.createElement("button");
      showButton.innerHTML = "highlighting";
      showButton.setAttribute("type", "button");
      showButton.setAttribute("onmouseover", "ToggleStyleBlock('" + catString + "','show');");
      showButton.setAttribute("onfocus", "ToggleStyleBlock('" + catString + "','show');");
      showButton.setAttribute("onmouseout", "ToggleStyleBlock('','hide');");
      showButton.setAttribute("onblur", "ToggleStyleBlock('','hide');");
      showButton.setAttribute("id", "btn-" + catString);
      var labelledby = " btn-" + catString + " " + catString;
      showButton.setAttribute("aria-labelledby", labelledby);
      // Append these to the <dl>
      dt.appendChild(showButton);
      dl.appendChild(dt);
      dl.appendChild(dd);
    }
    // Create a new <li>
    var keyItem = document.createElement("li");
    keyItem.setAttribute("role", "presentation");
    // keyItem.setAttribute("aria-hidden","true");
    keyItem.setAttribute("id", "Key");
    // Give it some context
    var h2 = document.createElement("h2");
    h2.innerHTML = lang == "pt" ? "Categoria:" : "Category key:";
    // Add the context text
    keyItem.appendChild(h2);
    // Add the new list to it
    keyItem.appendChild(dl);
    // Add this entire mess to the <ol>
    ol.appendChild(keyItem);
  //} catch (e) {
  //  console.log("ParseElements(): " + e);
  //}
}

function convertCategoryNameToPortuguese(catText) {
  switch (catText) {
    case "developer tool": return "ferramenta de trabalho";
    case "operating system": return "sistema operacional";
    case "structured data format": return "formato estruturado";
    case "internet file format": return "formato para internet";
    case "type of computing": return "tipo de computação";
    case "database system": return "banco de dados";
    case "scripting language": return "linguagem de script";
    case "programming language": return "linguagem de programação";
    case "physical protocol": return "protocolo físico";
    case "logic protocol": return "protocolo lógico";
    case "unknown": return "desconhecido";
    case "educational language": return "linguagem educacional";
    case "hardware description language": return "linguagem de descrição de hardware";
    case "esoteric language": return "linguagem esotérica";
    default: return "";
  }
}

function ToggleStyleBlock(strClass, showhide) {
  try {
    if (showhide == "show") {
      // Create a style block
      var styleBlock = document.createElement("style");
      styleBlock.setAttribute("id", "ShowCat");
      document.head.appendChild(styleBlock);
      styleBlock.sheet.insertRule(
        "#Elements li:not(#Key):not(." + strClass + ") { background-color: #999; opacity: .5; }", 0
      );
      styleBlock.sheet.insertRule(
        "@media screen and (prefers-color-scheme: dark) { #Elements li:not(#Key):not(." + strClass + ") { background-color: #333; opacity: .5; } }", 1
      );
      styleBlock.sheet.insertRule(
        "@media screen and (forced-colors: active) { #Elements li:not(#Key):not(." + strClass + ") { opacity: .25; } #Elements li." + strClass + " { background-color: AccentColor; color: AccentColorText; } }", 2
      );
    } else {
      var node = document.getElementById("ShowCat");
      node.parentNode.removeChild(node);
    }
  } catch (e) {
    console.log("ToggleStyleBlock(): " + e);
  }
}

function OpenDialog(eID, elName, lang) {
  try {
    DialogTrigger = eID;
    // Get all the elements to manipulate
    var body = document.getElementsByTagName("body");
    var dialog = document.getElementById('myDialog');
    var closeBtn = document.getElementById('dialog-element-close-btn');
    // Set the heading
    var elm = elements.filter(x => x.name == elName)[0];
    document.getElementById('dialog-element-name').innerHTML = elm.name;
    document.getElementById('dialog-element-summary').innerHTML = elm.summary;
    document.getElementById('dialog-element-symbol').innerHTML = elm.symbol;
    document.getElementById('dialog-element-type').innerHTML = lang == "pt" ? convertCategoryNameToPortuguese(elm.category) : elm.category;
    document.getElementById('dialog-element-source').href = elm.source;
    // Show dialog
    dialog.showModal();
    document.getElementById('dialog-element-scroll-area').scrollTop = 0;
    // Kill the page scroll
    body[0].style.overflow = "hidden";
    // Put focus on the close button
    // Normally I would put it on the modal, but this fits
    closeBtn.setAttribute("onclick", "CloseDialog('" + eID + "');");
    // Disabling focus on close button because looks weird on mobile
    //closeBtn.focus();
  } catch (e) {
    console.log("OpenDialog(): " + e);
  }
}

function CloseDialog(eID) {
  try {
    // Get all the elements to manipulate
    var body = document.getElementsByTagName("body");
    //var overlay = document.getElementById("Overlay");
    var dialog = document.getElementById("myDialog");
    var triggerBtn = document.getElementById(eID);
    // Close dialog
    dialog.close();
    // Return the scrollbar
    body[0].style.overflow = "auto";
    // Return focus to trigger
    triggerBtn.focus();
  } catch (e) {
    console.log("CloseDialog(): " + e);
  }
}

document.onkeydown = function (evt) {
  evt = evt || window.event;
  var isEscape = false;
  if ("key" in evt) {
    isEscape = evt.key == "Escape" || evt.key == "Esc";
  } else {
    isEscape = evt.keyCode == 27;
  }
  if (isEscape) {
    CloseDialog(DialogTrigger);
  }
};

// Light-dark mode switch

const isDarkMode = () => localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);

if (isDarkMode()) {
  document.getElementById('darkModeSwitchCheckbox').checked = true;
  document.documentElement.classList.add('dark')
} else {
  document.getElementById('darkModeSwitchCheckbox').checked = false;
  document.documentElement.classList.remove('dark')
}

document.getElementById('darkModeSwitchCheckbox').addEventListener('change', function (event) {
  if (isDarkMode()) {
    localStorage.theme = 'light'
    document.documentElement.classList.remove('dark')
  } else {
    localStorage.theme = 'dark'
    document.documentElement.classList.add('dark')
  }
});
