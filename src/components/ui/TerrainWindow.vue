<template>
  <div class="terrain-window">
    当前地形类型: {{ terrainType.text }}, 当前坐标:
    {{ STATE.recentTerrain }}
  </div>
</template>

<script>
import terrain from "@/data/terrain.js";
export default {
  computed: {
    terrainType() {
      const y = this.STATE.recentTerrain[0];
      const x = this.STATE.recentTerrain[1];
      const type = this.STATE.mapMatrix[y][x][0];
      return terrain.type[type];
    },
  },
};
</script>

<style lang="stylus">
.terrain-window
  padding 12px
  background-color blue
  color #fff
</style>