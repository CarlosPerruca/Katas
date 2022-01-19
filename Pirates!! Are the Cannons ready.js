// You have cannons at the ready.... or are they?

// Your task is to check if the gunners are loaded and ready, if they are: Fire!

// If they aren't ready: Shiver me timbers!

// Your gunners for each test case are 4 or less.

// When you check if they are ready their answers are in a dictionary and will either be: aye or nay

const cannonsReady = (gunners) => {
  for (let i in gunners) {
    if (gunners[i] == "aye") {
      return "Shiver me timbers!";
    }
  }
  return "Fire!";
};
