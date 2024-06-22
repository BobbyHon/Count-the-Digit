function nbDig(n, d) {
    let count = 0
    for (let i = 0; i < n + 1; i++){
      let num = (i * i).toString().split('')
      for (let j = 0; j < num.length; j++){
        if (num[j] == d.toString()) ++count
      }
      
    }
    return count
  }