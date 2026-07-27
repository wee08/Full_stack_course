const targetEmail =
  "kX#9!mP2$v&L[7*qZ)1_wA@bN(5^eR%3~tY+8|uI-0{oO]4=fG`6V/cBcD.fG_hJ";

const validChars =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@._-!\"#$%&'()*+,/:;<=>?[\\]^`{|}~ ";

// Helper function to create a delay (simulating server response time)
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function startGuessing() {
  let guessedEmail = "";
  console.log("Starting to guess the email with a 50ms delay per attempt...");

  while (guessedEmail !== targetEmail) {
    let foundChar = false;

    for (let i = 0; i < validChars.length; i++) {
      let char = validChars[i];
      let testGuess = guessedEmail + char;

      // Introduce a artificial 50ms lag for every single character tried
      await delay(50);

      if (targetEmail.startsWith(testGuess)) {
        guessedEmail = testGuess;
        console.log(`Current guess: ${guessedEmail}`);
        foundChar = true;
        break;
      }
    }

    if (!foundChar) {
      console.log("Error: Character not found in the valid character pool.");
      break;
    }
  }

  console.log(`Success! The full email is: ${guessedEmail}`);
}

// Execute the asynchronous function
startGuessing();
