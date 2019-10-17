function urutkan(x){
    var numArray = x;
    numArray.sort(function(a, b) {
      return a - b ;
    });
    return numArray
    }
    
    
    function cariMedian(arr) {
    var urut = urutkan(arr) ;
    
    
    var panjang = urut.length ;
    var ini = panjang/2 ;
    
    if(panjang % 2 !== 0){
    return urut[Math.round(ini) - 1 ] ;
    
    }else{var hi = urut[ini] + urut[ini - 1] ;
        return hi /2 ;
    }
      }
      
      // TEST CASES
      console.log(cariMedian([1, 2, 3, 4, 5])); // 3
      console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
      console.log(cariMedian([3, 4, 7, 6, 10])); // 7 (harusnya 6 karena mencari median diurutkan terlebih dahulu dri kecil ke besar)
      console.log(cariMedian([1, 3, 3])); // 3
      console.log(cariMedian([7, 7, 8, 8])); // 7.5