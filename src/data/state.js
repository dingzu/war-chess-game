import { reactive } from 'vue'

const data = {
    // 关卡数据
    characters: {
        "0": {
            position: [0, 0],
            id: "0",
            group: "0"
        }
    },
    // 交互模块
    // 当前激活的角色 id
    activeCharacter: "",
    // 当前鼠标出于的地形位置
    recentTerrain: {
        type: 'type',
        position: ``,
    }
}

const newData = reactive(data)
export default newData