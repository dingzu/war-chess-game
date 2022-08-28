<!--这个文件用于定义地图的基本模型-->
<template>
  <div class="map-module">
    <!-- 根据地图数据渲染地形 -->
    <div class="map-wrp">
      <div class="map-row" v-for="(row, i) in STATE.mapMatrix" :key="i">
        <TerrainUnit
          v-for="(col, j) in row"
          :key="j"
          :type="col[0]"
          @mouseenter="postTerrainData(i, j)"
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
  methods: {
    postTerrainData(x, y) {
      this.STATE.recentTerrain = [x, y];
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