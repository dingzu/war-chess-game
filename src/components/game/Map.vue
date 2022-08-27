<!--这个文件用于定义地图的基本模型-->
<template>
  <div class="map-module">
    <!-- 根据地图数据渲染地形 -->
    <div class="map-wrp">
      <div class="map-row" v-for="(row, i) in matrix" :key="i">
        <TerrainUnit
          v-for="(col, j) in row"
          :key="j"
          :type="col"
          @mouseenter="postTerrainData(col, i, j)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import TerrainUnit from "@/components/game/TerrainUnit.vue";
export default {
  name: "mapModule",
  components: { TerrainUnit },
  data() {
    return {
      size: [10, 10], // 定义地图的大小
      matrix: [
        ["00", "00", "00", "00", "00", "00", "00", "00", "00", "00"],
        ["00", "00", "00", "00", "00", "00", "00", "00", "00", "00"],
        ["00", "01", "01", "01", "00", "00", "01", "01", "01", "00"],
        ["00", "01", "00", "00", "00", "00", "00", "00", "01", "00"],
        ["00", "01", "00", "00", "00", "00", "00", "00", "01", "00"],
        ["00", "01", "00", "00", "00", "00", "00", "00", "01", "00"],
        ["00", "01", "00", "00", "00", "00", "00", "00", "01", "00"],
        ["00", "01", "01", "01", "00", "00", "01", "01", "01", "00"],
        ["00", "00", "00", "00", "00", "00", "00", "00", "00", "00"],
        ["00", "00", "00", "00", "00", "00", "00", "00", "00", "00"],
      ],
    };
  },
  methods: {
    postTerrainData(type, x, y) {
      this.STATE.recentTerrain = {
        type: type,
        position: `${x},${y}`,
      };
    },
  },
};
</script>

<style lang="stylus">
.map-module
  margin auto

.map-wrp
  display flex
  flex-direction column
  width fit-content

.map-row
  display flex
  width fit-content
</style>