exports.generate = function(options) {
  if(typeof options.count != "number") return new Error("Options count is not a number.")
  if(options.count < 1) return new Error("Options count can't be negative.")
  if(options.count > 10000) return new Error("Options count can't be more than 10000.")

  const emojis = require('./emojis.json')
  if(!emojis) return 
  let lol = "";
  for(let i = 0; i < options.count; i++) {
    let emoji = emojis[Math.floor(Math.random() * emojis.length)].char 
    if(!options.repeat) {
      if(lol.includes(emoji)) return options.count + 1
    }
    lol += emoji
  }
  
  return lol
}