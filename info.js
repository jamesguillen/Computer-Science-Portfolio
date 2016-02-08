var item1 = document.getElementById("item1");
var item2 = document.getElementById("item2");
var item3 =  document.getElementById("item3");
var item4 = document.getElementById("item4");
var info1 = document.getElementById("info1");
var info2 = document.getElementById("info2");
//Once this photo is clicked it gives 3 fun facts about Horned Lizards
item1.addEventListener("click", function(){
    info1.innerHTML = "<u><a>Horned Lizard Facts</a></u><li> Have the ability to squirt blood out of their eyes</li> <li>Have round flat bodies to be able to blend in with the ground</li> <li>Can camoflauge into the sand</li>";
    

});
//Once this photo is clicked it gives 3 fun facts about Soccer
item2.addEventListener("click", function(){
    info1.innerHTML = "<u><a>Soccer Facts</a></u> <li>There are a total of 11 players per team</li> <li>You can't use your hands to get the ball unless you are the goalie</li> <li>The national sport of Canada is soccer</li>";

});
//Once this photo is clicked it gives 3 fun facts about Bullet Trains                       
item3.addEventListener("click", function(){
    info1.innerHTML = "<u><a>Bullet Train Facts</a></u> <li>When a train exits a tunnel at speeds approaching 200 mph, it sounds<br> like a sonic boom</li> <li>Bullet trains require cryogenic cooling to operate</li> <li>The original bullet train is the Japanese 0 Series Shinkansen</li>";
    
});
//Once this photo is clicked it gives 3 fun facts about Sea Otters
item4.addEventListener("click", function(){
    info1.innerHTML = "<u><a>Sea Otters Facts</u></a> <li>The sea otter can live its entire life without leaving the water</li> <li>To keep from drifting apart while they snooze, sea otters often <br> sleep holding paws</li> <li>Sea Otters don't have blubber</li>";
    
});

   
     