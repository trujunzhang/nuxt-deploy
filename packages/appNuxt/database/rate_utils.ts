export const calcRateForRestaurant = (rate : number, total: number) => {
  const base = rate * 10 / total
  const value = (base) % 10
  const left = ((base - value) / 10)

  let right = 0.0
  if (value > 7) {
    right = 1
  } else if (value > 2 && value <= 7) {
    right = 0.5
  }

  return left + right
}
