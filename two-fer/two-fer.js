var TwoFer = function() {};

TwoFer.prototype.twoFer = function(who) {
  const isWho = `One for ${who}, one for me.`;

  return who == undefined ? (who = "you") : isWho;
};

module.exports = TwoFer;
