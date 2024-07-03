# Thoughts

Here is where I document how I approach this project, the blockers I come across, what I've learned, where I failed, and everything else related to this project.

## Approach

7/1/24 - Connecting display and logic

- I want to build the UI depending on what is on the current position in player's gameboard
  - If there's a ship - mark it, if not leave it blue
  - To do so, I need to check if there's a ship

6/30/24 - Building the UI

1. I'm going with checkboxes because it inherently has a "checked" property that will help me with marking places that have been hit and that will also help me with logic since I can use the `checked` property
  - NVM... going to go with divs. I can't figure out how to simulate a click for the CPU to make the check show up. It doesn't do anything...
2. I'm going to mark empty cells with skyblue, hit but empty with grey, ships with black, and ships that have been hit with red
3. Now I need to populate each cell with data that corresponds to the indices of `Gameboard`

6/29/24 - Getting the hang of testing and covering cases

1. `Ship` class
  - Move properties to private ✅
  - Create getters ✅
2. `Gameboard` class
  - Check for ship in position ✅
  - Prevent ships overlapping ✅

6/26/24 - I'm going to start off by following the README instructions which are:

1. Create `Ship` class/factory
  - Ships can add their positions ✅
2. Create `Gameboard` class/factory
  - Place ships on gameboard ✅
  - Receive attacks ✅
3. Create `Player` class/factory

## Questions

How to connect backend and frontend?
- Setup so that clicking a cell reflects on respective gameboard
- Only change cell if the backend agrees 

What else do I need?
- GameController module to orchestrate Gameboard, Ship, and Player instances
  - Waits for all ships to be placed onto the board before the game starts
  - playRound 
    - Changes active player 
    - Gets for active player input
- GameDisplay module to create elements and interactivity
  - How do I prevent a user from clicking on their own board?

Building out Ship and Gameboard classes

- How do I check if a ship is placed within the gameboard?
  - If a ship's "head" and "tail" are within the rows and columns, then the rest of the ship is within bounds. So I just need to check the head and tail...?
  - But what if it overlaps with another ship?
- How do I know where my ships are? Do I mark it on the gameboard only or also on the ship?
- Does the ship need to know where it is?
  - Yes, the ship should know where it is
- Who should care if there are ship placement collisions?
  - I've decided that the gameboard will track this
- How do I mark a position being hit?
  - Empty space: 0
  - Ship that hasn't been it: Ship object
  - Ship that has been hit: X with Ship?
  - Space without ship that has been hit: X
  - I can make this an object with 2 properties
    - hit: bool
    - ship: Ship||0

## Learned

- Originally I used `Array.from` and `Array.fill` to create my gameboard, but what happened was that when I used `Array.fill({hit: false, ship: 0})`, it made every row's columns reference the same object. So, if I changed one column, it would change all the columns in that row. I switched to a `for` loop
- I tried to return early from inside the `forEach` method and realized have two hours that I was working inside a callback. It was not working how I expected it to. Very good lesson here, haha...