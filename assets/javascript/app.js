// start of document.ready function and write the codes inside it
$(document).ready(function () {

    // there will be a list of questions
    // a list of possible answers will be shown. 
    var questions = [

        {
            question: "Which company used to bear the name: Research in Motion?",
            choices: ["Nokia", "Blackberry", "Apple", "Sprint"],
            answer: "Blackberry",
            trivia: "Research in Motion became Blackberry in 2013."
        },
        {
            question: "Which company used to bear the name: Tokyo Tshushin Kogyo?",
            choices: ["Nintendo", "LG", "Sony", "Samsung"],
            answer: "Sony",
            trivia: "Tokyo Tsushin Kogyo was founded in 1946 the company is now known as Sony"
        },
        {
            question: "Which company used to bear the name: AuctionWeb?",
            choices: ["Amazon", "Craigslist", "Paypal", "eBay"],
            answer: "eBay",
            trivia: "AuctionWeb was founded in 1995 and is now known as eBay"
        },
        {
            question: "Which company used to bear the name: Cadabra?",
            choices: ["Amazon", "Apple", "Target", "eBay"],
            answer: "Amazon",
            trivia: "Jeff Bezos originally called it Cadabra, changing it to Amazon in 1995."
        },
        {
            question: "Which company used to bear the name: BackRub?",
            choices: ["Samsung", "LG", "Google", "Walmart"],
            answer: "Google",
            trivia: "The first search engine Larry Page and Sergey Brin worked on was called BackRub, before becoming Google.com in 1997."
        },
        {
            question: "Which company used to bear the name: Jerry and David’s Guide to the World Wide Web?",
            choices: ["Microsoft", "Netscape", "Yahoo", "AOL"],
            answer: "Yahoo",
            trivia: "The name of a website created in 1994 by Jerry Yang and David Filo eventually became Yahoo in April 1994."
        },
        {
            question: "Which company used to bear the name: Chinese Academy of Sciences Computer Technology Research Institute New Technology Development Company?",
            choices: ["Alibaba", "Lenovo", "Dell", "IBM"],
            answer: "Lenovo",
            trivia: "It’s hard to believe, but at their first meeting in 1984, the founders of Lenovo agreed to call it ‘Chinese Academy of Sciences Computer Technology Research Institute New Technology Development Company’"
        },
        {
            question: "Which company used to bear the name: Computing-Tabulating-Recording Company?",
            choices: ["Apple", "Microsoft", "Oracle", "IBM"],
            answer: "IBM",
            trivia: "The original name of IBM is Computing-Tabulating-Recording Company.  It was in 1924 when it changed its name to IBM."
        },
        {
            question: "Which company used to bear the name: Sound of Music?",
            choices: ["BestBuy", "Target", "Sony", "Samsung"],
            answer: "Best Buy",
            trivia: "Buy’s original name is Sound of Music.  It was founded in 1966 by Richard Schulze as a home and car stereo store in St. Paul, Minn."
        },
        {
            question: "Which company used to bear the name: Quantum Computer Services?",
            choices: ["Sony", "Nokia", "AOL", "Salesforce"],
            answer: "AOL",
            trivia: "The original name of AOL is Quantum Computer Services. It was started in 1983."
        }
    ]

    // click a button to start a Game
    $("#startGame").on("click", function () {
        play.startGame()
    })

    var play = {
        correct: 0,
        incorrect: 0,
        counter: 2000,
        
        // displays the time in the html of the page
        countdown: function () {
            play.counter--
            $("#timer").html(play.counter)

            // ends the game if counter reaches to zero or less than zero
            if (play.counter <= 0) {
                // console.log("Game Over!")
                play.endGame()
            }
        },
    
        startGame: function () {
            // initiates the timer and displays the running time in the display
            timer = setInterval(play.countdown, 1000)
            $("#timer").html('<h2> Time Remaining: <span id = "counter"> 120 </span> Seconds </h2>')

            // removes the Start button
            $(".buttonSection").remove()

            // does a for loop of the questions array and display it in the html
            for (var i = 0; i < questions.length; i++) {
                $("#questSection").append("<h5 class = 'card-title'> " + questions[i].question + " </h5>")
                
                // does a for loop of the choices related to the questions array and display it in the html
                for (var j = 0; j < questions[i].choices.length; j++) {
                    $("#questSection").append("<input type = 'radio' name = 'choices-" + i + "' value = '" + questions[i].choices[j] + "'>" + questions[i].choices[j])
                }
            }
        },

        // validates the responded answers against the correct answer
        // increments correct answers
        // increments incorrect answers
        endGame: function(){
            $.each($('input[name = "choices-0]":checked'),function(){
                if ($(this).val() == questions[0].answer){
                    play.correct++
                    console.log(correct)
                } 
                else{
                    play.incorrect++
                }
            })
            $.each($('input[name = "choices-1]": checked'),function(){
                if ($(this).val() == questions[1].answer){
                    play.correct++
                } 
                else{
                    play.incorrect++
                }
            })
            $.each($('input[name = "choices-2]": checked'),function(){
                if ($(this).val() == questions[2].answer){
                    play.correct++
                } 
                else{
                    play.incorrect++
                }
            })
            $.each($('input[name = "choices-3]": checked'),function(){
                if ($(this).val() == questions[3].answer){
                    play.correct++
                } 
                else{
                    play.incorrect++
                }
            })
            $.each($('input[name = "choices-4]": checked'),function(){
                if ($(this).val() == questions[4].answer){
                    play.correct++
                } 
                else{
                    play.incorrect++
                }
            })
            $.each($('input[name = "choices-5]": checked'),function(){
                if ($(this).val() == questions[5].answer){
                    play.correct++
                } 
                else{
                    play.incorrect++
                }
            })
            $.each($('input[name = "choices-6]": checked'),function(){
                if ($(this).val() == questions[6].answer){
                    play.correct++
                } 
                else{
                    play.incorrect++
                }
            })
            $.each($('input[name = "choices-7]": checked'),function(){
                if ($(this).val() == questions[7].answer){
                    play.correct++
                } 
                else{
                    play.incorrect++
                }
            })
            $.each($('input[name = "choices-8]": checked'),function(){
                if ($(this).val() == questions[8].answer){
                    play.correct++
                } 
                else{
                    play.incorrect++
                }
            })
            $.each($('input[name = "choices-9]": checked'),function(){
                if ($(this).val() == questions[9].answer){
                    play.correct++
                } 
                else{
                    play.incorrect++
                }
            })

            this.result()
        },
        
        result: function(){
            clearInterval(timer)
            $("#questSection").remove()
            $("#choicesSection").remove()

            $("#questSection").html("<h2> Thank you for participating in our Trivia Game! </h2>")
            $("#choicesSection").append("<h3> Correct Answers: " + this.correct + " </h3>")
            $("#choicesSection").append("<h3> Incorrect Answers: " + this.incorrect + " </h3>")
            $("#choicesSection").append("<h3> Unanswered Questions: " + (questions.length - (this.incorrect+this.correct)) + " </h3>")
        }
    }

    // list of global variables for tracking of scores

    // end of global variables for tracking scores

    // Display my question in the question section one question at a time.

    // Display the list of answers on the screen using for loop.


    // click next question button to go to next trivia question
    // function nextQuestion (){
    //     $("#nextQuestion").on("click", function(){
    //         playGame()
    //     })
    // }

    // a timer per question is presented

    // only one of the possible answers can be chosen

    // if answer is correct, inform the user that it was correct, give the trivia section and add to the correct tally.

    // if it is the wrong answer, inform the user that it was wrong, give the trivia section and add to the wrong tally.

    // if the user does not make any input, ie, mouse click or key press, it will do the following:
    // - it will inform the user no input was entered in.
    // - it will show the correct answer
    // - it will move to the next question

    // at the end of the game, it will show the tally of correct, incorrect and unanswered answers
    // at the end of the game, there will be no more timer to display
    // at the end of the game, show a button to start over the game. starting over the game should not refresh the page.


    // end of document.ready function
})