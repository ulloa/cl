// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "What would you do as President?",
        "main":    "",
        "results": "<iframe src=\"//www.facebook.com/plugins/likebox.php?href=https%3A%2F%2Fwww.facebook.com%2Ftheknowledgeproblemisreal&amp;width=100&amp;height=62&amp;colorscheme=light&amp;show_faces=false&amp;header=true&amp;stream=false&amp;show_border=true\" scrolling=\"no\" frameborder=\"0\" style=\"border:none; overflow:hidden; width:100px; height:62px;\" allowTransparency=\"true\"></iframe>",
        "level1":  "Libertarian",
        "level2":  "Democrat",
        "level3":  "Socialist",
        "level4":  "Repubican",
        "level5":  "Clueless" // no comma here
    },
    "questions": [
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "40% of your orange crops were inected with a pplague causing losses and shortages in the market. What do you do?",
            "a": [
                {"option": "Import oranges. Foreigners could help",      "correct": false},
                {"option": "The plague will no last forever. Import with quota restrictions",     "correct": false},
                {"option": "Find the culprit that brouth this plague to your country",      "correct": true},
                {"option": "Nothing. Oranges aren't that important",     "correct": false} // no comma here
            ],
            "correct": "<p><span>That's right!</span> The letter A is the first letter in the alphabet!</p>",
            "incorrect": "<p><span>Uhh no.</span> It's the first letter of the alphabet. Did you actually <em>go</em> to kindergarden?</p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "Your Country experienced a steep drop in milk prices last week. Milk producers are lobbying hard for price controls so that a large part of the industry doesn't collapse. Your top adviser has suggested that you forbid stores from selling milk below $1.31 based on economic models. Would you place a price control on milk?",
            "a": [
                {"option": "Yes",               "correct": false},
                {"option": "No",   "correct": true}
            ],
            "select_any": false,
            "correct": ""//"<p><span>Nice!</span> Your cholesterol level is probably doing alright.</p>",
,
            "incorrect": ""//"<p><span>Hmmm.</span> You might want to reconsider your options.</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "Are you really going to eat that? Trans-fats and sweeteners such as high fructose corn syrup,  may make food taste good, but can lead to serious health problems. The more people that eat these foods, the more resources our government will spend on looking for cures and treating people. Should we put restrictions and ban some of these foods?",
            "a": [
                {"option": "Yes",           "correct": false},
                {"option": "No",          "correct": true} // no comma here
            ],
            "correct": "<p><span>Brilliant!</span> You're seriously a genius, (wo)man.</p>",
            "incorrect": "<p><span>Not Quite.</span> You're actually on Planet Earth, in The Milky Way, At a computer. But nice try.</p>" // no comma here
        },
        { // Question 4
            "q": "Imagine you are the mayor of a large city, where many people live and work. You are experiencing a trend of increwased immigration to your ccity. There are few apartment buildings and you want to ensure that your city is both and affordable place to live and has enough housing. You decide to implement rent control setting a limit on the price property owners can charge to renters. Was that a good idea?",
            "a": [
                {"option": "Yes",      "correct": false},
                {"option": "No",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Holy bananas!</span> I didn't actually expect you to know that! Correct!</p>",
            "incorrect": "<p><span>Fail.</span> Sorry. You lose. It actually rains approximately 32 inches a year in Michigan.</p>" // no comma here
        },
        { // Question 5
            "q": "Is Earth bigger than a basketball?",
            "a": [
                {"option": "Yes",    "correct": true},
                {"option": "No",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Good Job!</span> You must be very observant!</p>",
            "incorrect": "<p><span>ERRRR!</span> What planet Earth are <em>you</em> living on?!?</p>" // no comma here
        } // no comma here
    ]
};
