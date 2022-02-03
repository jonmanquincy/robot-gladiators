//Helper Class
class BattleManager {

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
    }
}

export default BattleManager;