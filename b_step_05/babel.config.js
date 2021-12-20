// babel.config.js 
module.exports = {
  presets : [
    [ '@babel/preset-env', {
      targets : { ie:9 },
      "useBulidIns" : "usage",
      "corejs" : "3.6.5"
    }]
  ]
}