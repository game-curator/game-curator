let Handlebars = require('handlebars');

module.exports = function(number) {
  let number = parseInt(number);
  let output = '';
  for(let i = 0;i<5;i++) {
    output += (i < number ? "&#9632;" : "<span class='inactive'>&#9632;</span>");
  }
	return new Handlebars.SafeString(output);
};
