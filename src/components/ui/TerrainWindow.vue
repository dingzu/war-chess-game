<template>
  <div>
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
      const type = this.STATE.mapMatrix[y][x];
      return terrain[type];
    },
  },
};
</script>