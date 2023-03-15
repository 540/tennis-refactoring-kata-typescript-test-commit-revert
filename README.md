# Kata Template for Test-Commit-Revert (TCR)

Here's the original idea of [test && commit || revert](https://medium.com/@kentbeck_7670/test-commit-revert-870bbd756864) by [Kent Beck](https://www.kentbeck.com/).

This is a starter project for a _coding kata_ using `test && commit || revert` and [TypeScript](https://www.typescriptlang.org/); where TCR is enforced as a Git _pre-commit hook_.

**Note:** Although, this kata template is using a _pre-commit hook_, the use of pre-commit hooks has major downsides and is often a focus on the "wrong thing"; cf. [Pre-commit: Don't git hooked!](https://www.thoughtworks.com/insights/blog/pre-commit-don-t-git-hooked) by Matt Riley.

## Setup

Install dependencies with `npm i`, `pnpm i`, or `yarn install` (Husky hooks should be installed)

## How to Use

* Commit often
  * Use Git as you are used to (the pre-commit hook will be executed)
  * Use `npm run tcr` to commit (it will execute `test && commit || revert`)
  * Use `npm run tcr-timeboxed 5` to continuously `test && commit || revert` in `5` minute intervalls
    * combine the exercise with `npm run tcr` or `npm run tc` (without reset) to commit early
    * cancel with `ctrl+c`

This kata template was created by Andrej Dyck, here is the original repository:
https://github.com/andrej-dyck/kata-template-tcr


# Tennis Game Kata

This kata was created by Emily Bache. Yo can check the original version:
https://github.com/emilybache/Tennis-Refactoring-Kata


Tennis has a rather quirky scoring system, and to newcomers it can be a little difficult to keep track of. The tennis society has contracted you to build a scoreboard to display the current score during tennis games.

You can read more about Tennis scores on wikipedia which is summarized below:

 1. A game is won by the first player to have won at least four points in total and at least two points more than the opponent.
 2. The running score of each game is described in a manner peculiar to tennis: scores from zero to three points are described as “Love”, “Fifteen”, “Thirty”, and “Forty” respectively.
 3. If at least three points have been scored by each player, and the scores are equal, the score is “Deuce”.
 4. If at least three points have been scored by each side and a player has one more point than his opponent, the score of the game is “Advantage” for the player in the lead.

You need only report the score for the current game. Sets and Matches are out of scope.
