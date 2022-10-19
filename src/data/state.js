import { reactive } from 'vue'

const data = {
    // 角色数据
    characters: {
        "000": {
            position: [0, 0],
            group: "000",
            name: "测试角色"
        },
        "001": {
            position: [2, 1],
            group: "000",
            name: "测试角色2"
        }
    },
    // 地图数据
    mapMatrix: [
        [["00", null, {}], ["00", null, {}], ["00", null, {}], ["00", null, {}], ["00", null, {}], ["00", null, {}], ["00", null, {}], ["00", null, {}], ["00", null, {}], ["00", null, {}]],
        [["00", null, {}], ["00", null, {}], ["00", null, {}], ["00", null, {}], ["00", null, {}], ["00", null, {}], ["00", null, {}], ["00", null, {}], ["00", null, {}], ["00", null, {}]],
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
        store: {}
    },
    // 当前鼠标处于的地形位置
    recentTerrain: [0, 0]
}

const newData = reactive(data)
export default newData