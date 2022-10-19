/* 计算位置是否可以移动的函数 */
import state from '../../data/state.js'
// import terrain from '../../data/terrain.js'

// 计算出的可以移动的位置记录到这里
let store = {}

export default function (id) {
  // 获取当前单位
  const recentCharacter = state.characters[id]
  // 获取单位初始位置
  const begin = recentCharacter.position
  // 初始化移动数据模型
  let moveData = {
    moveLink: { begin: [begin] },
    speed: recentCharacter.move.speed[0]
  }
  // 开始移动测试
  if (moveData.speed > 0) {
    moveData = moveTest(moveData)
  }
  // 输出测试结果
  return store
}

// 尝试向四个方向移动
function moveTest(moveData) {
  return moveData
}