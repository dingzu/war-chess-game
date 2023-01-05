// 类型:单位
class Unit {
  position: Position = [0, 0]; // 坐标
  move: Move = { // 移动信息
    times: 1,
    speed: 5,
    type: 'Foot',
    intercept: 3,
  }
}


// 描述坐标
interface Position {
  0: number, //x 坐标
  1: number //y 坐标
}

// 描述移动
interface Move {
  times: number, // 剩余移动次数
  speed: number, // 移动力
  type: 'Foot' | 'Fly', //移动方式,步行，飞行
  intercept: number, // 移动阻拦值 
}


