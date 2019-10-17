function shoppingTime(member, money) {
    var result = { }

// member
    if(member === '' || money === undefined){
       return 'Mohon maaf, toko X hanya berlaku untuk member saja'
    }  
    else{ result.memberId = member}
    
//money
    if(money < 50000){
        return 'Mohon maaf, uang tidak cukup'
    }else{result.money = money}

//listpurchased
// 'Sepatu brand Stacattu seharga'  => 1500000
// 'Baju brand Zoro seharga' => 500000
// 'Baju brand H&N seharga' => 250000
// 'Sweater brand Uniklooh seharga' => 175000
// 'Casing Handphone seharga' => 50000
    var baju = ['Sepatu brand Stacattu' , 'Baju brand Zoro' , 'Baju brand H&N' , 'Sweater brand Uniklooh' , 'Casing Handphone' ]
    var harga = [1500000 , 500000 , 250000 , 175000 , 50000]
    var list = []
    var uang = money
    for(var i = 0 ; i < harga.length ; i++){
        if(uang >= harga[i]){
            list.push(baju[i]) ;
            uang -= harga[i]
        }
    }

    result['listPurchased'] = list

// changemoney
    result['changeMoney'] = uang

    return result

  }
  
  // TEST CASES
  console.log(shoppingTime('1820RzKrnWn08', 2475000));
    //{ memberId: '1820RzKrnWn08',
    // money: 2475000,
    // listPurchased:
    //  [ 'Sepatu Stacattu',
    //    'Baju Zoro',
    //    'Baju H&N',
    //    'Sweater Uniklooh',
    //    'Casing Handphone' ],
    // changeMoney: 0 }
  console.log(shoppingTime('82Ku8Ma742', 170000));
  //{ memberId: '82Ku8Ma742',
  // money: 170000,
  // listPurchased:
  //  [ 'Casing Handphone' ],
  // changeMoney: 120000 }


  console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
  console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
  console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja