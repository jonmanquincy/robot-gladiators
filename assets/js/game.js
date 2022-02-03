//JavaScript is weird. Tried seperating this into it's own file but turns out if you aren't running this on a server it wont let you modulate -_-
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;


var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

class BattleManager {
    static runGame() {
        // Alert players that they are starting the round
        window.alert("Welcome to Robot Gladiators!");
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

        //Resisting just making an enum
        promptFight = promptFight.toLowerCase();
        switch (promptFight) {

            case "fight":
                //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
                BattleManager.damageEnemy(playerAttack, enemyHealth);

                // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
                BattleManager.damagePlayer(enemyAttack, playerHealth);
                break;

            case "skip":
                BattleManager.skip();
                break;

            default:
                window.alert("You need to choose a valid option. Try again!");
        }
    }
    /** Enter damage to deal to the enemy as an argument to the method. */
    static damageEnemy(damage, enemyHealth) {
        enemyHealth = enemyHealth - damage;

        // Log a resulting message to the console so we know that it worked.
        console.log(
            playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
        );

        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");
        }
        else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }
    }

    /** Enter damage to deal to the player as an argument to the method. */
    static damagePlayer(damage, playerHealth) {
        // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable
        playerHealth = playerHealth - damage;

        // Log a resulting message to the console so we know that it worked.
        console.log(
            enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
        );

        // check player's health
        if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
        }
        else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }
    }

    static skip() {
        // confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");

        // if yes (true), leave fight
        if (confirmSkip) {
            window.alert(playerName + " has decided to skip this fight. Goodbye!");
            // subtract money from playerMoney for skipping
            playerMoney = playerMoney - 2;
        }
        // if no (false), ask question again by running fight() again
        else {
            fight();
        }
    }
}



BattleManager.runGame();