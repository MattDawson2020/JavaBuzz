class FizzBuzz {
  fizzbuzz(number) {
    let ans = ''
    if(number % 3 === 0) {
      ans += 'Fizz'
    }
    if(number % 5 === 0) {
      ans += 'Buzz'
    }
    return (ans === '' ? number : ans)
  }

  oneToOneHundred() {
    for (let i = 1; i <= 100; i++) {
      console.log(this.fizzbuzz(i))
    }
  }
}




