module.exports = function check(str, bracketsConfig) {
  str = str.split('')
  if(str.length % 2 !== 0){
      return false
  }

  for(let i = 1; i < str.length; i++){
      for(let j = 0; j < bracketsConfig.length; j++){
          if(str[i] === bracketsConfig[j][1] && str[i - 1] === bracketsConfig[j][0]){
              str.splice(i - 1, 2)
              i = 0
              break
          }
      }
  }
  return str.length === 0
}