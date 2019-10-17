function faktor (x){
    var faktor1 = [] ;
  
    for(var i = 0 ; i < x ; i++){
      var bagi = x % i ;
      if(bagi === 0){
        faktor1.push(i) ;
      }else if(i === x[i]){
        faktor1.push(i) ;
      }
    }
  console.log(faktor1)
    return faktor1 ;
  }

  
function fpb(angka1, angka2) {
    var fsatu = faktor(angka1) 
    console.log(fsatu);
    var fdua = faktor(angka2) 
    console.log(fdua);
    var result = [] ;
    for(var y = 0 ; y < fsatu.length ; y++){
      for(var r = 0 ; r < fdua.length ; r++){
        if(fsatu[y] === fdua[r]){
          result.push(fsatu[y]) ;
        }
       }
      }
    var last = 0 ;
    for(var d = 0 ; d < result.length ; d++){
        if(result[d] > last){
            last = result[d] ;
        }
    }  
    
    return last
    
}
          
    
    
    
    
    
    // TEST CASES
    console.log(fpb(12, 16)); // 4
    // console.log(fpb(50, 40)); // 10
    // console.log(fpb(22, 99)); // 11
    // console.log(fpb(24, 36)); // 12
    // console.log(fpb(17, 23)); // 1
  
  