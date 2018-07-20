// words that don't appear a part of non-bad words can go in the RegExp below
const fullDirty = /(fuck|nigga|nigger|pussy|cunt|whore|bitch|shit|negro|jackass|slut|damn|douche|asshole|asswhole|asswhipe|asslick|bastard|choad|twat|cocksuck)/gi

// words that are a part of non-bad words
const partDirty = /\b(ass|asses|piss|cock)\b/gi
const maskStr = '****'

module.exports = str => {
  str = str.replace(fullDirty, maskStr)
  str = str.replace(partDirty, maskStr)
  return str
}
