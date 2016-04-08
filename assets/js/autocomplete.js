
/*
 
 
 function	autoCompleteCityOFF()
 {
 
 document.getElementById('divSuggestionsCity').style.visibility = 'hidden';
 }
 
 
 function	autoCompleteLocalityOFF()
 {
 
 document.getElementById('divSuggestionsLocality').style.visibility = 'hidden';
 }
 function	autoCompleteShopOFF()
 {
 
 document.getElementById('divSuggestionsShop').style.visibility = 'hidden';
 }
 */

function doSelectionCity(text)
{
    var selection = text;
    document.getElementById('divSuggestionsCity').style.visibility = 'hidden'; // hides the suggestion box
    document.getElementById("searchCity").value = selection;
    document.getElementById('divSuggestionsCity').innerHTML = "";
}

function doSelectionLocality(text) {
    var selection = text;
    document.getElementById('divSuggestionsLocality').style.visibility = 'hidden'; // hides the suggestion box
    document.getElementById("searchLocality").value = selection;
	document.getElementById('divSuggestionsLocality').innerHTML = "";
}

function doSelectionShop(text) {
    var selection = text;
    document.getElementById('divSuggestionsShop').style.visibility = 'hidden'; // hides the suggestion box
    document.getElementById("searchShop").value = selection;
	document.getElementById('divSuggestionsShop').innerHTML = "";
}

var nameArray = null;
this.nameArray = new Array();

this.nameArray[0] = "aaa";
this.nameArray[1] = "ahhh";
this.nameArray[2] = "azzz";


function autoCompleteCity(text) {
    var input = text;
    // store inputed text as variable for later manipulation
    // determine whether to display suggestion box or not
    if (input == "") {
        document.getElementById('divSuggestionsCity').style.visibility = 'hidden'; // hides the suggestion box
    } else {
        document.getElementById('divSuggestionsCity').style.visibility = 'visible'; // shows the suggestion box

        var inputLength = input.toString().length;
        var code = "";
        var counter = 0;
        while (counter < this.nameArray.length) {
            var x = this.nameArray[counter]; // avoids retyping this code a bunch of times
            if (x.substr(0, inputLength).toLowerCase() == input.toLowerCase()) {
                code += "<div id='City" + x + "'onmouseover='changeBG(this.id);' onMouseOut='changeBG(this.id);' onclick='doSelectionCity(this.innerHTML)'>" + x + "</div>";

            }
            counter += 1;
        }

        if (code == "") {
            outClick();
        }

        document.getElementById('divSuggestionsCity').innerHTML = code;
        document.getElementById('divSuggestionsCity').style.overflow = 'auto';
    }
}




function autoCompleteLocality(text) {
    var input = text;
    // store inputed text as variable for later manipulation
    // determine whether to display suggestion box or not
    if (input == "") {
        document.getElementById('divSuggestionsLocality').style.visibility = 'hidden'; // hides the suggestion box
    } else {
        document.getElementById('divSuggestionsLocality').style.visibility = 'visible'; // shows the suggestion box

        var inputLength = input.toString().length;
        var code = "";
        var counter = 0;
        while (counter < this.nameArray.length) {
            var x = this.nameArray[counter]; // avoids retyping this code a bunch of times
            if (x.substr(0, inputLength).toLowerCase() == input.toLowerCase()) {
                code += "<div id='Locality" + x + "'onmouseover='changeBG(this.id);' onMouseOut='changeBG(this.id);' onclick='doSelectionLocality(this.innerHTML)'>" + x + "</div>";
            }
            counter += 1;
        }

        if (code == "") {
            outClick();
        }


        document.getElementById('divSuggestionsLocality').innerHTML = code;
        document.getElementById('divSuggestionsLocality').style.overflow = 'auto';

    }

}

function autoCompleteShop(text) {
    var input = text;
    // store inputed text as variable for later manipulation
    // determine whether to display suggestion box or not
    if (input == "") {
        document.getElementById('divSuggestionsShop').style.visibility = 'hidden'; // hides the suggestion box
    } else {
        document.getElementById('divSuggestionsShop').style.visibility = 'visible'; // shows the suggestion box

        var inputLength = input.toString().length;
        var code = "";
        var counter = 0;
        while (counter < this.nameArray.length) {
            var x = this.nameArray[counter]; // avoids retyping this code a bunch of times
            if (x.substr(0, inputLength).toLowerCase() == input.toLowerCase()) {
                code += "<div id='Shop" + x + "'onmouseover='changeBG(this.id);' onMouseOut='changeBG(this.id);' onclick='doSelectionShop(this.innerHTML)'>" + x + "</div>";
            }
            counter += 1;
        }

        if (code == "") {
            outClick();
        }
        document.getElementById('divSuggestionsShop').innerHTML = code;
        document.getElementById('divSuggestionsShop').style.overflow = 'auto';


    }

}

function outClick() {

    document.getElementById('divSuggestionsCity').style.visibility = 'hidden';
    document.getElementById('divSuggestionsLocality').style.visibility = 'hidden';
    document.getElementById('divSuggestionsShop').style.visibility = 'hidden';
	
	  document.getElementById('divSuggestionsCity').innerHTML = "";
	    document.getElementById('divSuggestionsLocality').innerHTML = "";
		  document.getElementById('divSuggestionsShop').innerHTML = "";
	
}


function changeBG(obj) {
    element = document.getElementById(obj);
    oldColor = element.style.backgroundColor;
    if (oldColor == "purple" || oldColor == "") {
        element.style.background = "white";
        element.style.color = "purple";
        element.style.cursor = "pointer";
    } else {
        element.style.background = "purple";
        element.style.color = "white";
        element.style.cursor = "default";
    }
}





			