var friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom"];

var longestName = friends[0];

for (let i = 1; i < friends.length; i++) {
  if (friends[i].length > longestName.length) {
    longestName = friends[i];
  }
}

console.log(longestName);
