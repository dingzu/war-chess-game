/* 计算位置是否可以移动的函数 */
import state from '../../data/state.js'
import terrain from '../../data/terrain.js'

// 计算出的可以移动的位置记录到这里
let store = {}
// 获取当前单位
let recentCharacter = {}

export default function (id) {
  // 获取当前单位
  recentCharacter = state.characters[id]
  // 获取单位初始位置
  const begin = recentCharacter.position
  // 初始化移动数据模型
  let moveData = {
    moveLink: [begin],
    speed: recentCharacter.move.speed[0]
  }
  // 开始移动测试
  if (moveData.speed > 0) {
    moveTest(moveData)
  }
  // 输出测试结果
  return store
}

// 尝试向四个方向移动
function moveTest(moveData) {
  const position = moveData.moveLink[moveData.moveLink.length - 1]
  // 向上移动
  const moveTo = [position[0], position[1] - 1]
  tryMoveTo(moveTo, moveData)
}

// 检查移动情况
function tryMoveTo(moveTo, moveData) {
  // 如果当前坐标不存在则不可移动
  const inMap = isInMap(moveTo)
  // 如果当前坐标地形不可移动则不可移动
  const moveAble = isMoveAble(moveTo)
  // 如果可以移动进行移动计算
  if (inMap && moveAble[0]) {
    moveData.speed -= moveAble[1]
  }

}

// 检查当前节点是否在地图上
function isInMap(moveTo) {
  const mapX = state.mapMatrix[0].length + 1
  const mapY = state.mapMatrix.length + 1
  if (moveTo[0] > -1 && moveTo[0] < mapX && moveTo[1] > -1 && moveTo[1] < mapY) {
    return true
  }
  return false
}

// 检查当前地形是否可以移动
function isMoveAble(moveTo) {
  // 获取地形数据
  const cellKind = state.mapMatrix[moveTo[1], moveTo[0]][0]
  // 检查地形是否可以移动
  const type = terrain.type[cellKind]
  // 如果地形是可移动返回衰减值
  if (type.moveType === 0) {
    return [true, type.moveRed]
  }
  // 如果不符合要求，返回不可移动
  return [false]
}