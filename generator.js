var factButton = document.getElementById("factButton");

var dropdown = document.getElementById("dropdown");
var fact = facts[Math.floor(Math.random()*facts.length)];


var display = document.getElementById("display");


factButton.addEventListener("click", facts);
function facts() {
    // function generateRandomFact(first, last) {
    //     return Math.floor(Math.random() * (last - first + 1)) + first;
    // }
// This is used to store the information    
    var sportsFacts = ["Soccer: Was illegal in Mississippi until 1991.", "Basketball: The first hoops were actually just peach baskets and the first backboards were made of wire.", "Basketball: The first hoops were actually just peach baskets and the first backboards were made of wire.", "Basketball: The first hoops were actually just peach baskets and the first backboards were made of wire.", "Baseball: Baseball stars from the National League and the American League played the first All-Star Game in 1933. The National League has won 41 of the 80 games. The game ended in a tie twice. In 1961 rain in Boston prevented extra innings and the game ended in a 1-1 tie. And in 2002, the game went 11 innings with the score knotted at seven before it was finally called off due to a lack of pitchers.", "Water Polo: There are six field player positions and a goalkeeper on each team. Unlike most common team sports, there is not any positional play; field players often will fill several positions throughout the game as situations demand. Players who are skilled at several offensive or defensive roles are called utility players. Utility players tend to come off of the bench, though this isn't absolute. Certain body types are more suited for particular positions, and left-handed players are especially coveted, allowing teams to launch 2-sided attacks.", "Cricket: It is said that cricket originated in England. Since they used to raise sheep, the grass was so short that it was possible to roll a lump of wool on it which they used as a ball.", "Golf: America's first 18-hole golf course constructed on a sheep farm in Downer's Grove, Illinois in 1892. Businessman and golf lover Charles Blair McDonald moved to this quaint town and began constructing the course with his colleagues. The Downer's Grove Golf Course is still intact after all of these years, although its since been downsized to 9 holes.", "Football: American Football grew out of English sports such as rugby and soccer and became popular on American college campuses in the late 1800s.", "Rugby: As rugby balls and footballs were made from pig's bladders and they had to be blown up by breath alone, it was possible to become ill if blowing up a diseased bladder, and the wife of Richard Lindon, a man who made balls for Rugby School in the 19th Century, died after breathing in the air from too many bad bladders.", "Soccer: In 2013, soccer player Cristiano Ronaldo opened a museum dedicated to himself." ];
    var technologyFacts = ["On eBay, there is an average of $680 worth of transactions every second.", "Dragon Skin Body Armour is a newer invention that can withstand a grenade explosion at point-blank range.", "The founder of Microsoft, Bill Gates, was a college drop out.", "Bill Gates house was designed using a Macintosh Computer.", "Skype is banned from the public in China.", "Google rents out goats from a company called California Grazing to help cut down the amount of weeds and brush at Google HQ!", "A red panda is an animal native to the Himalayas and southwestern China. The English word for red panda is 'FireFox' which is where the browser gets its name from - so the Firefox logo is actually a red panda, not a fox!", " Amazon, originally was a printed book seller company, now it sells more e-books than printed books.", "220 million tons of old computers and other technological hardware are trashed in the United States each year.", "70% of virus writers actually work under a contract for an organization."];
    var healthFacts = ["Banging your head against a wall burns 150 calories an hour.", "In some parts of the world, they protect their babies from disease by bathing them in beer.", "Motorists who talk on cell phones are more impaired than drunk drivers with blood-alcohol levels exceeding .08.", "he word 'gymnasium' comes from the Greek word gymnazein, which means 'to excersise naked.'", "There are more than 1,000 chemicals in a cup of coffee; of these, only 26 have been tested, and half caused cancer in rats.", "The average American eats at McDonalds more than 1,800 times in his/her life.", "There are more bacteria in your mouth than there are people in the world.", "You burn more calories sleeping than you do watching television.", "Right-handed people live, on average, nine years longer than left-handed people.", "During your lifetime, you'll eat about 60,000 pounds of food -- that's the weight of about 6 elephants.", "Farting helps reduce high blood pressure and is good for your health.", "Laughing 100 times is equivalent to 15 minutes of exercise on a stationary bicycle."];
//This only grabs sports facts    
    if(dropdown.value == "Sports"){
        var Sport = sportsFacts[Math.floor(Math.random()*sportsFacts.length)];
        display.innerHTML = Sport;
    }
//This only grabs technology facts
    else if(dropdown.value == "Technology"){
        var Technology = technologyFacts[Math.floor(Math.random()*technologyFacts.length)];
      display.innerHTML = Technology;
    }
//This only grabs health facts
    else if(dropdown.value == "Health"){
        var Health = healthFacts[Math.floor(Math.random()*healthFacts.length)];
       display.innerHTML = Health;
    }
    
    
    
   
    
   
   
   
   
  
   
   
}