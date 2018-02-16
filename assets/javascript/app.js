// start of document.ready function and write the codes inside it
$(document).ready(function(){

// there will be a list of questions
// a list of possible answers will be shown. 
var questions = [
    
    {
        quest01 : "Which company used to bear the name: Research in Motion?",
        choices : ["Nokia", "Blackberry", "Apple", "Sprint"],
        answer : 1,
        trivia : "Research in Motion became Blackberry in 2013."
    },
    {
        quest02 : "Which company used to bear the name: Tokyo Tshushin Kogyo?",
        choices : ["Nintendo", "LG", "Sony", "Samsung"],
        answer : 2,
        trivia : "Tokyo Tsushin Kogyo was founded in 1946 the company is now known as Sony"
    },
    {
        quest03 : "Which company used to bear the name: AuctionWeb?",
        choices : ["Amazon", "Craigslist", "Paypal", "eBay"],
        answer : 3,
        trivia : "AuctionWeb was founded in 1995 and is now known as eBay"
    },
    {
        quest04 : "Which company used to bear the name: Cadabra?",
        choices : ["Amazon", "Apple", "Target", "eBay"],
        answer : 0,
        trivia : "Jeff Bezos originally called it Cadabra, changing it to Amazon in 1995."
    },
    {
        quest05 : "Which company used to bear the name: BackRub?",
        choices : ["Samsung", "LG", "Google", "Walmart"],
        answer : 2,
        trivia : "The first search engine Larry Page and Sergey Brin worked on was called BackRub, before becoming Google.com in 1997."
    },
    {
        quest06 : "Which company used to bear the name: Jerry and David’s Guide to the World Wide Web?",
        choices : ["Microsoft", "Netscape", "Yahoo", "AOL"],
        answer : 2,
        trivia : "The name of a website created in 1994 by Jerry Yang and David Filo eventually became Yahoo in April 1994."
    },
    {
        quest07 : "Which company used to bear the name: Chinese Academy of Sciences Computer Technology Research Institute New Technology Development Company?",
        choices : ["Alibaba", "Lenovo", "Dell", "IBM"],
        answer : 1,
        trivia : "It’s hard to believe, but at their first meeting in 1984, the founders of Lenovo agreed to call it ‘Chinese Academy of Sciences Computer Technology Research Institute New Technology Development Company’"
    },
    {
        quest08 : "Which company used to bear the name: Computing-Tabulating-Recording Company?",
        choices : ["Apple", "Microsoft", "Oracle", "IBM"],
        answer : 3,
        trivia : "The original name of IBM is Computing-Tabulating-Recording Company.  It was in 1924 when it changed its name to IBM."
    },
    {
        quest09 : "Which company used to bear the name: Sound of Music?",
        choices : ["BestBuy", "Target", "Sony", "Samsung"],
        answer : 0,
        trivia : "Buy’s original name is Sound of Music.  It was founded in 1966 by Richard Schulze as a home and car stereo store in St. Paul, Minn."
    },
    {
        quest10 : "Which company used to bear the name: Quantum Computer Services?",
        choices : ["Sony", "Nokia", "AOL", "Salesforce"],
        answer : 2,
        trivia : "The original name of AOL is Quantum Computer Services. It was started in 1983."
    }
]

var displayed = #questSection

// click a button to start a Game
function startGame(){
    // one question at a time will be shown on the screen
    for (var i =0; i < questions.length; i++){
        $("#questSection").append(displayed) 
    }
}
console.log(startGame())

// only one of the possible answers can be chosen
// a timer per question is presented


// when answer is chosen, screen will show if it was correct or wrong
// if it is the wrong answer, it will give the correct answer
// if the user does not make any input, ie, mouse click or key press, it will do the following:
// - it will show the correct answer
// - it will move to the next question

// at the end of the game, it will show the tally of correct, incorrect and unanswered answers
// at the end of the game, there will be no more timer to display
// at the end of the game, show a button to start over the game. starting over the game should not refresh the page.


// end of document.ready function
})