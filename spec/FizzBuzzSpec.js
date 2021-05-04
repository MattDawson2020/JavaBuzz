describe("FizzBuzz name", function() {
  let fizzy

  beforeEach(function(){
    fizzy = new FizzBuzz()
  })

  it("returns 2 if 2", function() {
    expect(fizzy.fizzbuzz(2)).toEqual(2)
  })

  it("returns Fizz if 3", function() {
    expect(fizzy.fizzbuzz(3)).toEqual('Fizz')
  })

  it("returns Buzz if 5", function() {
    expect(fizzy.fizzbuzz(5)).toEqual('Buzz')
  })

  it("returns FizzBuzz if 15", function() {
    expect(fizzy.fizzbuzz(15)).toEqual('FizzBuzz')
  })

  it("returns Buzz if 100", function() {
    expect(fizzy.fizzbuzz(100)).toEqual('Buzz')
  })
})