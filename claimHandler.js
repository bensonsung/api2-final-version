//~~~~~~ Setup  the express web server , imports the body-parser library and defines the port number ~~~~~~~~//

const bodyParser = require("body-parser");
const express = require("express");

const app = express();
const port = 3000;

app.use(bodyParser.json());

//~~~~~~~ Define the route for the submit-claim endpoint ~~~~~~~~//

app.post("/submit-claim", (req, res) => {
  const description = req.body.description || "";
  const keyWords = ["collide", "crash", "scratch", "bump", "smash"]; //declares the array
  const keywordCount = countKeywords(description, keyWords);
  const riskLevel = calculateRiskLevel(keywordCount);

  if (keywordCount > 0) {
    res.send(
      `Risk level: ${riskLevel}. Key words detected in the description: ${keyWords.join(
        ", "
      )}`
    );
  } else {
    res.send("No key words found in the description.");
  }
});

//~~~~~~~ Start the server and checcks its acticcing ~~~~~~~~//
app.listen(port, () => {
  console.log(`Server is up and sprinting on http://localhost:${port}`);
});

//~~function that takes in a description and an array of keywords and returns the number of keywords found in the claim description~~//
function countKeywords(description, keywords) {
  const words = description.toLowerCase().split(/\s+/);
  const keywordCount = words.filter((word) => keywords.includes(word)).length;
  return keywordCount;
}

//~~setting up the risk level with the amounts of key words detected

function calculateRiskLevel(keywordCount) {
  if (keywordCount === 0) {
    return 1;
  } else if (keywordCount === 1) {
    return 2;
  } else if (keywordCount === 2) {
    return 3;
  } else if (keywordCount === 3) {
    return 4;
  } else {
    return 5;
  }
}

//~~function that takes in a description and an array of keywords and returns the risk level of the claim~~//
function processClaim(description, keywords) {
  const keywordCount = countKeywords(description, keywords);
  const riskLevel = calculateRiskLevel(keywordCount);
  return riskLevel;
}
//~~~~~~~ Export the functions for testing ~~~~~~~~//
module.exports = {
  countKeywords,
  calculateRiskLevel,
  processClaim,
};
