# Thoughts

Here is where I document how I approach this project, the blockers I come across, what I've learned, where I failed, and everything else related to this project.

## Approach

6/26/24 - I'm going to start off by following the README instructions which are:

1. Create `Ship` class/factory
2. Create `Gameboard` class/factory
3. Create `Player` class/factory

## Questions

6/26/24 - Building out Ship and Gameboard classes

- How do I check if a ship is placed within the gameboard?
  - If a ship's "head" and "tail" are within the rows and columns, then the rest of the ship is within bounds. So I just need to check the head and tail...?
  - But what if it overlaps with another ship?
- How do I know where my ships are? Do I mark it on the gameboard only or also on the ship?
- Does the ship need to know where it is?
  - Yes, being able to know where the ship is will allow me to keep track which parts of the ship are hit and I can return all those positions back to the gameboard...?