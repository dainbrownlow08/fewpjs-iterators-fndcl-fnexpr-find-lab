const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(arr){
  let o = arr.find(function(g){ return g.result === "W"})
  return (o ? o.year : undefined)
}
