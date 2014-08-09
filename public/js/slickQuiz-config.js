// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "What would you do as President?",
        "main":    "",
        "results": "<a href='https://www.facebook.com/theknowledgeproblemisreal'>Like us on Facebook</a>",
        "level1":  "President Penn Jillete.<br>Congratulations, you actually get economics! You understand that government doesn't have sufficient knowledge to centrally plan an economy or solve complex issues, and when it tries to do so, often causes more problems than it solves. Like Penn Jillette, you admit that you just don't know a lot about what will work, and appreciate how allowing people to use local knowledge leads to the best outcomes. Check out our Facebook page on the Knowledge Problem to learn more!<img class='img-responsive' src='penn.jpg'></img>",
        "level2":  "President Know-it-all(NOT)<br>As president, you believe that the government has sufficient knowledge to centrally--and effectively--solve complex economic and social problems. But it turns out that you know even less than Jon Snow! Check out our Facebook page on the Knowledge Problem to learn more!<img class='img-responsive' src='rif.jpg'></img>",
        "level3":  "President Know-it-all(NOT)<br>As president, you believe that the government has sufficient knowledge to centrally--and effectively--solve complex economic and social problems. But it turns out that you know even less than Jon Snow! Check out our Facebook page on the Knowledge Problem to learn more!<img class='img-responsive' src='rif.jpg'></img>",
        "level4":  "President Know-it-all(NOT)<br>As president, you believe that the government has sufficient knowledge to centrally--and effectively--solve complex economic and social problems. But it turns out that you know even less than Jon Snow! Check out our Facebook page on the Knowledge Problem to learn more!<img class='img-responsive' src='rif.jpg'></img>",
        "level5":   "President Know-it-all(NOT)<br>As president, you believe that the government has sufficient knowledge to centrally--and effectively--solve complex economic and social problems. But it turns out that you know even less than Jon Snow! Check out our Facebook page on the Knowledge Problem to learn more!<img class='img-responsive' src='rif.jpg'></img>" // no comma here
    },
    "questions": [
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "Uh-oh! Your country experienced a steep drop in milk prices last week, and milk producers are lobbying hard for price controls. You forbid stores from selling milk below $1.31 per gallon. Your advisors are confident that their charts and graphs can accurately predict what the market price of milk should really be. If your goal is to have a quality supply of milk at adequate amounts, should you take your adviser's advice and implement price controls?<img class='img-responsive' src='milk.jpg'></img>",
            "a": [
                {"option": "Yes",      "correct": false},
                {"option": "No",     "correct": true} // no comma here
            ],
            "correct": "<p><span>Good!</span> You understand that the price of a good is determined by countless factors relating to supply and demand, and that governments cannot possibly capture of all this information in order to set a reality-based price.</p>",
            "incorrect": "<p><span>Are you sure?</span> Government manipulation of prices distorts signals to consumers and producers, and in this case, would make milk more expensive and would lead to an excess supply of milk, much of which would spoil before it could be sold. Government lacks sufficient knowledge of the complex nature of supply and demand to adequately fix prices in the milk market (negative without unintended economic consequences).</p>"
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "Oh no! The kids in your country are dumber than a failing student in a Mississippi school! Your advisers are suggesting that you implement national standards, testing and curriculum for all public schools to improve the quality of education. The idea is leaked to the press, and education activists go insane, claiming the federal government doesn't know how to run their schools. If your goal is to increase the quality of education in your country, should you implement the national standards?<img class='img-responsive' src='lazy.jpg'></img>",
            "a": [
                {"option": "Yes",               "correct": false},
                {"option": "No",   "correct": true}
            ],
            "select_any": false,
            "correct": "<p><span>You chose wisely!</span>Different students learn best in different ways, and local conditions can influence which educational approaches would work best. Furthermore, making all schools follow one approach makes it difficult to try different approaches to education, and if the one you chose is a failure, all students will suffer. Therefore, it is important to let the people who know.</p>", 
            "incorrect": "<p><span>Wrong</span>You charge full speed with the national education plan, only to find student performance becomes even worse! As if school wasn't boring enough already, your emphasis on national, standardized testing and top-down control of education makes it very difficult for teachers to teach in a way that actually excites students and improves their learning.</p>"

        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "Your Director of Central Planning on Housing is sweating bullets: rent for apartments is skyrocketing nationwide, and your citizens are protesting. You want to ensure that rent prices remain affordable, but that there are plenty of apartments for everyone. You weigh the costs and benefits of implementing rent control (setting a limit on the price an apartment complex can charge for rent). If your goal is to keep apartments affordable but have enough for those who want to rent them, do you implement the policy?<img class='img-responsive' src='high.jpg'></img>",
            "a": [
                {"option": "Yes",           "correct": false},
                {"option": "No",          "correct": true} // no comma here
            ],
            "correct": "<p><span>Good Job!</span>As much as you want people to have affordable housing, you understand that when the government messes with price signals, it distorts the information regarding supply and demand provided by prices.</p>",
            "incorrect": "<p><span>Not Quite.</span>You try to limit the price of rent, but unfortunately, this leads to a reduction in available apartments due to people holding onto their cheap apartments, and actually increases the price of other housing options due to increased demand! You messed with the signals provided by the market price, and now, your citizens are getting ready to mess with you.</p>"
        }
/*        { // Question 4
            "q": "Imagine you are the mayor of a large city, where many people live and work. You are experiencing a trend of increased immigration to your city. There are few apartment buildings and you want to ensure that your city is both and affordable place to live and has enough housing. You decide to implement rent control setting a limit on the price property owners can charge to renters. Was that a good idea?",
            "a": [
                {"option": "Yes",      "correct": false},
                {"option": "No",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Holy bananas!</span> It sounds great to tell everyone you will have lower rent costs. Most will have lower rent costs. However, the unintended consequence is that less people will rent out their property as it is not as profitable. It will be harder to find somewhere to rent and often times whoever does find a good place to rent was lucky, knew someone, or sold their soul to someone.</p>",
            "incorrect": "<p><span>Fail.</span>It sounds great to tell everyone you will have lower rent costs. Most will have lower rent costs. However, the unintended consequence is that less people will rent out their property as it is not as profitable. It will be harder to find somewhere to rent and often times whoever does find a good place to rent was lucky, knew someone, or sold their soul to someone.</p>"
        }*/
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
