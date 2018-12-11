module.exports = function NoDrunkScreen(mod) {
  const drinkAbnormalities = [48733, 48734, 48735, 48736, 48737, 48738, 48739, 70234, 70235, 70236, 70237, 70238, 905434]
  mod.hook('S_ABNORMALITY_BEGIN', 3, event => {
    if (drinkAbnormalities.includes(event.id))
      return false
  })
}
