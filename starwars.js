let randomPowerFirst = Math.floor(Math.random()*(250-100)+100),randomPowerSecond = Math.floor(Math.random()*(250-100)+100),randomPowerThird = Math.floor(Math.random()*(250-100)+100),randomPowerFourth = Math.floor(Math.random()*(250-100)+100);
$(".obi-wan .character-health").html(randomPowerFirst);
$(".darth-sidious .character-health").html(randomPowerSecond);
$(".luke-skywalker .character-health").html(randomPowerThird);
$(".darth-maul .character-health").html(randomPowerFourth);
var count=0, selectedCharacter ='', defenderCharacter = '', selectedCharacterNumber = '',defenderCharacterNumber = '',selectedCharacterNumber2,defenderCharacterNumber2;
$("#characters-section .character ").on("click",function(){
        if(!selectedCharacter){
        selectedCharacter = $(this);
        selectedCharacterNumber = parseInt($(this).children(".character-health").text());
        selectedCharacterNumber2 = selectedCharacterNumber;
        $("#selected-character").html(selectedCharacter);
        $(this).removeClass("select");
        $("#available-to-attack-section .enemies").html($(".select"));
        $("#characters-section .section-title").html("");
        }   
});
$(document).on("click","#available-to-attack-section .enemies .character",function(){  
     if(!defenderCharacter){
        count++;
        defenderCharacter= $(this);
        $("#defender").html(this);
        defenderCharacterNumber = parseInt($(this).children(".character-health").text());
        defenderCharacterNumber2 = defenderCharacterNumber;
    }
});
$("#attack-button").on("click",function(){
    var randomNumber1 = Math.floor(Math.random()*(30-10)+10);
    var randomNumber2 = Math.floor(Math.random()*(50-10)+10);
    if(selectedCharacter &&  defenderCharacter){
        selectedCharacterNumber-=randomNumber1;
        defenderCharacterNumber-=randomNumber2;
        if(selectedCharacterNumber>0 && defenderCharacterNumber>0 ){
                $("#selected-character .character-health").html(selectedCharacterNumber);
                $("#defender .character-health").html(defenderCharacterNumber);
                $("#game-message").html("You attacked "+$("#defender .character-name").html()+" for "+randomNumber2+" damage<br>"
                +$("#defender .character-name").html()+" attacked you "+" for "+randomNumber1+" damage");
                
        }else if(selectedCharacterNumber<0){
            $("#game-message").html("Game Over<br>");
            var newBtn = document.createElement("button");
            var restart = document.createTextNode("Restart");
            newBtn.append(restart);
            $("#game-message").append(newBtn)
            $("#selected-character-section").empty();
            $("#available-to-attack-section").empty();
        }else 
        {
            if(count<3){
            $("#game-message").html("You won "+$("#defender .character-name").html()+" ,choose your new enemy");
            $("#defender").empty();
            defenderCharacter ='';
            selectedCharacterNumber = selectedCharacterNumber2;
            $("#selected-character .character-health").html(selectedCharacterNumber2);
        }else{
            $("#game-message").html("You won this game<br>");
            var newBtn = document.createElement("button");
            var restart = document.createTextNode("Restart");
            newBtn.append(restart);
            $("#game-message").append(newBtn);
            $("#defender .character .character-health").html("0");            
            }          
        }       
    }
});
$(document).on("click","#game-message button",function(){
    window.location.reload();
});
