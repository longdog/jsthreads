import crypto, { randomBytes } from "node:crypto"

const big64arr = new BigInt64Array(1)
function random64(){
  crypto.randomFillSync(big64arr)
  return big64arr[0]
}

function sumDigitsSquared(num){
  let total = 0n
  while(num > 0){
    const numModBase = num % 10
    total += numModBase ** 2n
    num = num / 10n
  }
}

function isHappy(num){
  while(num != 1n && num != 4n){
    num = sumDigitsSquared(num)
  }
  return num === 1n
}

function isHappyCoin(num){
  return isHappy(num) && num % 1000n === 0n
}

let count = 0
for(let i = 1; i < 10_000_000; i++){
  const randomNum = random64()
  if (isHappyCoin(randomNum)){
    process.stdout.write(randomNum.toString() + " ")
    count++
  }
}

process.stdout.write("\ncount " + count + "\n")