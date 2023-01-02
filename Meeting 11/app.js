//keep quotes in an array
//var quotes=["quotes 1","quotes2", "Quotes3"];
var quotes = [
    "We cannot solve our problems with the same thinking we used when we created them. - Albert Einstein",
    "Self-education is, I firmly believe, the only kind of education there is. - Isaac Asimov",
    "Science is a way of thinking much more than it is a body of knowledge. - Carl Sagan"
];


//function to generate random quotes from array element
function generate(){
    let random = Math.floor(Math.random() * quotes.length);
    document.getElementById("quoteSection").innerHTML = quotes[random];
}

//function to print all array elements
function seeAllQuotes(){
    text = "<ul>"; //create bullet
    for (i=0; i<quotes.length; i++){
        text += "<li>" + quotes[i] + "</li>";
    }
    text += "</ul>";
    document.getElementById("quoteSection").innerHTML = text;
}

//add new element to array
function newQuotes(){
    var newQuotes = document.getElementById("insertSection").value;
    alert("quotes added");
    quotes.push(newQuotes);
    seeAllQuotes();
}
