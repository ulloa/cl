// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "What would you do as President?",
        "main":    "",
        "results": "<a href='https://www.facebook.com/theknowledgeproblemisreal'>Like us on Facebook</a>",
        "level1":  "Knowledge problem expert",
        "level2":  "Knowledge problem proficient",
        "level3":  "Knowledge problem competent",
        "level4":  "Knowledge problem beginner",
        "level5":  "Knowledge problem novice" // no comma here
    },
    "questions": [
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "40% of your orange crops were inected with a plague causing losses and shortages in the market. What do you do?<img src='logo.jpg'></img>",
            "a": [
                {"option": "Government takeover of orange industry.",      "correct": false},
                {"option": "Nothing significant",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Genius</span> By doing nothing, you are actually letting something else happen. You are letting the free market work its magic. These companies will likely seek someone to rid them of the plague.</p>",
            "incorrect": "<p><span>Sorry</span> Government takeover the orange industry will hurt selected, and likely everyone else through taxes. Not only is it immoral, but the government will not know how many oranges people want and what prices to sell them for if it is a complete take over.</p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "Your Country experienced a steep drop in milk prices last week. Milk producers are lobbying hard for price controls so that a large part of the industry doesn't collapse. Your top adviser has suggested that you forbid stores from selling milk below $1.31 based on economic models. Would you place a price control on milk?<img src='milk.jpg'></img>",
            "a": [
                {"option": "Yes",               "correct": false},
                {"option": "No",   "correct": true}
            ],
            "select_any": false,
            "correct": "<p><span>Nice!</span>Putting what is called a price floor can secretly benefit suppliers and hurt consumers at the same time. Suppliers may have been able sell the product for a less than 1.31 and still be profitable. It is a good thing for everyone in the long run when companies are replaced by new ones. There is no need to protect a certain milk company when they are making poor business decisions or nobody wants their products.",
            "incorrect": "<p><span>Wrong</span>Putting what is called a price floor can secretly benefit suppliers and hurt consumers at the same time. Suppliers may have been able sell the product for a less than 1.31 and still be profitable. It is a good thing for everyone in the long run when companies are replaced by new ones. There is no need to protect a certain milk company when they are making poor business decisions or nobody wants their products."

        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "Are you really going to eat that? Trans-fats and sweeteners such as high fructose corn syrup,  may make food taste good, but can lead to serious health problems. The more people that eat these foods, the more resources our government will spend on looking for cures and treating people. Should we put restrictions and ban some of these foods?",
            "a": [
                {"option": "Yes",           "correct": false},
                {"option": "No",          "correct": true} // no comma here
            ],
            "correct": "<p><span>Good Job!</span>The answer isn't to put some sort of band-aid on a internal wound. It would be morally wrong for the government to prevent you from eating these foods by force (threat of jail time or fine). The people should be free to eat what they want and if they want to lose weight, they may choose other foods.</p>",
            "incorrect": "<p><span>Not Quite.</span>The answer isn't to put some sort of band-aid on a internal wound. It would be morally wrong for the government to prevent you from eating these foods by force (threat of jail time or fine). The people should be free to eat what they want and if they want to lose weight, they may choose other foods.</p>"
        },
        { // Question 4
            "q": "Imagine you are the mayor of a large city, where many people live and work. You are experiencing a trend of increased immigration to your city. There are few apartment buildings and you want to ensure that your city is both and affordable place to live and has enough housing. You decide to implement rent control setting a limit on the price property owners can charge to renters. Was that a good idea?",
            "a": [
                {"option": "Yes",      "correct": false},
                {"option": "No",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Holy bananas!</span> It sounds great to tell everyone you will have lower rent costs. Most will have lower rent costs. However, the unintended consequence is that less people will rent out their property as it is not as profitable. It will be harder to find somewhere to rent and often times whoever does find a good place to rent was lucky, knew someone, or sold their soul to someone.</p>",
            "incorrect": "<p><span>Fail.</span>It sounds great to tell everyone you will have lower rent costs. Most will have lower rent costs. However, the unintended consequence is that less people will rent out their property as it is not as profitable. It will be harder to find somewhere to rent and often times whoever does find a good place to rent was lucky, knew someone, or sold their soul to someone.</p>"
        }
/*        { // Question 5
            "q": "Is Earth bigger than a basketball?",
            "a": [
                {"option": "Yes",    "correct": true},
                {"option": "No",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Good Job!</span> You must be very observant!</p>",
            "incorrect": "<p><span>ERRRR!</span> What planet Earth are <em>you</em> living on?!?</p>" // no comma here
        } // no comma here*/
    ]
};
