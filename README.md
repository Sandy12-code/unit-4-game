# Crystal Collector



* ['CrystalCollectorGame']

## Game Instructions

* There will be four crystals displayed as buttons on the page.
* The player will be shown a random number at the start of the game.

* When the player clicks on a crystal, it will add a specific amount of points to the player's total score. 


* Your game will hide this amount until the player clicks a crystal.
* When they do click one, update the player's score counter.


* The player wins if their total score matches the random number from the beginning of the game.
* The player loses if their score goes above the random number.

* The game restarts whenever the player wins or loses.


* When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.


* The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.

## HTML File

* Add Bootstrap core CSS 
* Link Html file to Personal CSS
* Create a container for styling
* Inside the container, create several boxes with rows and cols 
* Attach javaScript files needed by Bootsrap at the end of the Html file.

## CSS

* Style all the boxes created in your html file

## JavaScript

* defining variables in order of page apperance
* generate random number
* generate random numbers for the crystals
* set wins and losses to 0 when page loads
* set user score to 0 when page loads
* create winning game function
* create lossing game function
* create crystal funtion
* create Jquery click event for crystal click
* add crystal number to user score
* check user score vs random number
