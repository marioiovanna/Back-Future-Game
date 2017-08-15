# Back to the Future - RPG Game

### Rpg game based on *Back to the Future* characters. Easy and simple to play. Where each characters has an uniq Life and Hitp.

![alt text](https://github.com/marioiovanna/Back-Future-Game/blob/master/assests/img/game-pics/main.PNG "Main")


## GAME PLAY
### Start game
Press on the main start button to trigger the game ...
![alt text](https://github.com/marioiovanna/Back-Future-Game/blob/master/assests/img/game-pics/start.PNG)


Select your favorite player from the left column ...

![alt text](https://github.com/marioiovanna/Back-Future-Game/blob/master/assests/img/game-pics/caract.PNG) 

On hover on the imagesyou will be able to see the names of the caracthers.
![alt text](https://github.com/marioiovanna/Back-Future-Game/blob/master/assests/img/game-pics/caract2.PNG)

After choosing your **Player** you will need to choose the **VS player**.
![alt text](https://github.com/marioiovanna/Back-Future-Game/blob/master/assests/img/game-pics/caract3.PNG)

### Game 
Once you chooose both, the fight button will appear ... and ready **fight**.
![alt text](https://github.com/marioiovanna/Back-Future-Game/blob/master/assests/img/game-pics/game.PNG)

Every time you press on the **FIGHT button** the life of each player will drop. Thats because each player has an uniq **HIT POWER**  that change on every sigle press ...
![alt text](https://github.com/marioiovanna/Back-Future-Game/blob/master/assests/img/game-pics/game2.PNG)

```javascript
        // math for life player, add extra hit points
                players[playerValue].life -= players[vsValue].hitp;
                $('.lifeplayer').html('LIFE: ' + players[playerValue].life);
                players[playerValue].hitp += Math.floor((Math.random() * 10) + 1);
                console.log('player ' + players[playerValue].hitp);

        // math for vs player, add extra hit p
                players[vsValue].life -= players[playerValue].hitp;
                $('.lifevs').html('LIFE: ' + players[vsValue].life);
                players[vsValue].hitp += Math.floor((Math.random() * 10) + 1);
```
 This number will be random between 0 and 10, so it makes it fun, because you never know which player can defeat all of them. 
 **IT's LUCKY**
 
 #
 ### Defeat VS
 If you defeat your enemy, you will receive a *extra bonus life* ... that will help you with the next enemy, but your **HIT POWER** will be reset too ...
 ![alt text](https://github.com/marioiovanna/Back-Future-Game/blob/master/assests/img/game-pics/bonuslife.PNG)
 
#
 ### End Game
 If you loose all your life, the game is over, otherwise you need to defeat all of the enemies.
  ![alt text](https://github.com/marioiovanna/Back-Future-Game/blob/master/assests/img/game-pics/gameover.PNG)
  
  ## GOOD LUCK !


 


