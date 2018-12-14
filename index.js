module.exports = function NoDrunkScreen(mod) {
  const drinkAbnormalities = [48732, 48733, 48734, 48735, 48736, 48737, 48738, 48739, 70251, 70252, 70253, 70254, 70255, 70256]
  mod.hook('S_ABNORMALITY_BEGIN', 3, event => {
    if (drinkAbnormalities.includes(event.id))
      return false
  })
}
