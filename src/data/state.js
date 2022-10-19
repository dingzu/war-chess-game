import { reactive } from 'vue'

const data = {
    // 角色数据
    characters: {
        "000": {
            name: "测试角色",
            position: [0, 0],
            group: 0,
            move: {
                times: 1,
                Speed: [5],
                type: 0,
                intercept: 3,
            }
        },
        "001": {
            name: "测试角色2",
            position: [3, 1],
            group: 1,
            move: {
                times: 1,
                Speed: [5],
                type: 0,
                intercept: 3,
            }
        }
    },
    // 地图数据
    mapMatrix: [
        [["00", "000", {}], ["00", null, {}], ["00", null, {}], ["00", null, {}], ["00", null, {}], ["00", null, {}], ["00", null, {}], ["00", null, {}], ["00", null, {}], ["00", null, {}]],
        [["00", null, {}], ["00", null, {}], ["00", null, {}], ["00", "001", {}], ["00", null, {}], ["00", null, {}], ["00", null, {}], ["00", null, {}], ["00", null, {}], ["00", null, {}]],
        [["00", null, {}], ["01", null, {}], ["01", null, {}], ["01", null, {}], ["00", null, {}], ["00", null, {}], ["01", null, {}], ["01", null, {}], ["01", null, {}], ["00", null, {}]],
        [["00", null, {}], ["01", null, {}], ["00", null, {}], ["00", null, {}], ["00", null, {}], ["00", null, {}], ["00", null, {}], ["00", null, {}], ["01", null, {}], ["00", null, {}]],
        [["00", null, {}], ["01", null, {}], ["00", null, {}], ["00", null, {}], ["00", null, {}], ["00", null, {}], ["00", null, {}], ["00", null, {}], ["01", null, {}], ["00", null, {}]],
        [["00", null, {}], ["01", null, {}], ["00", null, {}], ["00", null, {}], ["00", null, {}], ["00", null, {}], ["00", null, {}], ["00", null, {}], ["01", null, {}], ["00", null, {}]],
        [["00", null, {}], ["01", null, {}], ["00", null, {}], ["00", null, {}], ["00", null, {}], ["00", null, {}], ["00", null, {}], ["00", null, {}], ["01", null, {}], ["00", null, {}]],
        [["00", null, {}], ["01", null, {}], ["01", null, {}], ["01", null, {}], ["00", null, {}], ["00", null, {}], ["01", null, {}], ["01", null, {}], ["01", null, {}], ["00", null, {}]],
        [["00", null, {}], ["00", null, {}], ["00", null, {}], ["00", null, {}], ["00", null, {}], ["00", null, {}], ["00", null, {}], ["00", null, {}], ["00", null, {}], ["00", null, {}]],
        [["00", null, {}], ["00", null, {}], ["00", null, {}], ["00", null, {}], ["00", null, {}], ["00", null, {}], ["00", null, {}], ["00", null, {}], ["00", null, {}], ["00", null, {}]],
    ],
    // 交互模块
    // 当前激活的角色 id
    activeCharacter: null,
    // 当前激活角色的移动存储数据
    activeCharacterMoveData: {
        recentActiveId: null,
        active: false,
        store: {}
    },
    // 当前鼠标处于的地形位置
    recentTerrain: [0, 0]
}

const newData = reactive(data)
export default newData