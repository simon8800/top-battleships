# Battleship Game

This is a JavaScript implementation of the classic Battleship game. The project follows a test-driven development approach, focusing on unit tests and a clean separation of concerns. Below are the detailed steps and functionalities included in the game:

## Table of Contents

1. [Ship Class/Factory](#ship-classfactory)
2. [Gameboard Class/Factory](#gameboard-classfactory)
3. [Player Class/Factory](#player-classfactory)
4. [Game Flow and User Interface](#game-flow-and-user-interface)
5. [Extra Credit](#extra-credit)

## Ship Class/Factory

Begin your app by creating the Ship class or factory (your choice).

- **Properties**:
  - `length`: The length of the ship.
  - `hits`: The number of times the ship has been hit.
  - `sunk`: Boolean indicating whether the ship has been sunk.

- **Methods**:
  - `hit()`: Increases the number of hits.
  - `isSunk()`: Calculates whether the ship is sunk based on its length and hits.

_Remember to only test your object’s public interface. Only methods or properties used outside of your ‘ship’ object need unit tests._

## Gameboard Class/Factory

Create a Gameboard class or factory.

- **Note**: There is no User Interface at this stage. Verify functionality using tests, not console logs or DOM methods.

- **Methods**:
  - `placeShip(coordinates)`: Places ships at specific coordinates by calling the ship factory or class.
  - `receiveAttack(coordinates)`: Determines if the attack hits a ship and sends the `hit` function to the correct ship, or records the coordinates of the missed shot.
  - `reportAllSunk()`: Reports whether all ships have been sunk.

- **Tracking**:
  - Keeps track of missed attacks to display them properly.

## Player Class/Factory

Create a Player class or factory.

- **Types**:
  - `Real Player`: Controlled by the user.
  - `Computer Player`: Controlled by the game logic.

- **Properties**:
  - Each player object contains its own Gameboard.

## Game Flow and User Interface

Import your classes/factories into another file and drive the game using event listeners to interact with your objects. Create a module to manage DOM interactions.

### Steps:

1. **Setup New Game**:
   - Create players.
   - Populate each player’s Gameboard with predetermined coordinates.

2. **Render Gameboards**:
   - Display both player’s boards using information from the Gameboard class/factory.
   - Implement methods to render each player’s Gameboard in an appropriate module.

3. **Game Turn Management**:
   - Use event listeners to step through the game turn by turn, using only methods from other objects.
   - Allow users to click on a coordinate in the enemy Gameboard to attack.
   - Re-render boards to display updated information.

4. **Player Turns**:
   - Players take turns attacking the enemy Gameboard.
   - Manage the current player’s turn within the module.

5. **Computer Player**:
   - Implement basic logic for the computer player to make random, legal moves.

6. **End Game**:
   - Create conditions to end the game when one player’s ships are all sunk.

### Ship Placement

Finish by implementing a system for players to place their ships:

- Allow typing coordinates or using a button to cycle through random placements.

## Extra Credit

Make your Battleship project more impressive by introducing any of these modifications:

- **Drag and Drop**: Implement drag and drop to allow players to place their ships.
- **2-Player Option**: 
  - Enable a 2-player mode where users take turns by passing the device or spinning the monitor.
  - Implement a ‘pass device’ screen to prevent players from seeing each other’s boards.
- **Improved Computer**: Enhance the computer player's intelligence to try adjacent slots after getting a ‘hit’.