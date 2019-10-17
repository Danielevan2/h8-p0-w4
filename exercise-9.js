function checkAB(num) {
  var result = false
  
  for(var i = 0 ; i < num.length ; i++){
    if(num[i] === 'a' || num[i] === 'b'){

      if(num[i] === 'a' && num[i + 4] === 'b'){
        result = true
      }else if(num[i] === 'b' && num[i + 4] === 'a'){
        result = true
      }
    }
    
  }

  return result



  }
  
  // TEST CASES
  console.log(checkAB('lane borrowed')); // true
  console.log(checkAB('i am sick')); // false
  console.log(checkAB('you are boring')); // true
  console.log(checkAB('barbarian')); // true
  console.log(checkAB('bacon and meat')); // false