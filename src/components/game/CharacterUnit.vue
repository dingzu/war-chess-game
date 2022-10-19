<template>
  <div class="character-unit" @mouseenter="postTerrainData()" @mousedown="active()" :class="resolveActive()" :style="resolvePosition()"></div>
</template>

<style lang="stylus">
.character-unit
  box-sizing border-box
  width var(--cellSize)
  height var(--cellSize)
  border 10px solid #ccc
  background-color red
  position absolute
  &:hover
    border 10px solid blue
  &.active
    border 10px solid blue
</style>

<script>
import resolveMoveStore from "./resolveMoveStore.js";
export default {
  props: {
    id: {
      require: true,
    },
    position: {
      require: true,
    },
  },
  methods: {
    postTerrainData() {
      this.STATE.recentTerrain = this.STATE.characters[this.id].position;
    },
    resolveActive() {
      if (this.STATE.activeCharacter == this.id) {
        return "active";
      } else {
        return "not-active";
      }
    },
    active() {
      // 单位变成激活态
      if (this.STATE.activeCharacter == this.id) {
        this.STATE.activeCharacter = "";
      } else {
        this.STATE.activeCharacter = this.id;
      }
      // 单位的移动状态显示变成激活态
      const moveData = this.STATE.activeCharacterMoveData;
      if (!moveData.active) {
        if (moveData.recentActiveId === this.id) {
          moveData.active = true;
        } else {
          moveData.recentActiveId = this.id;
          moveData.store = resolveMoveStore(this.id);
          moveData.active = true;
        }
      } else if (moveData.recentActiveId === this.id) {
        moveData.active = false;
      }
      console.log("激活移动状态", moveData);
      this.STATE.activeCharacterMoveData = moveData;
    },
    resolvePosition() {
      return `left:${this.position[0] * this.CONFIG.cellSize}px;
      top:${this.position[1] * this.CONFIG.cellSize}px`;
    },
  },
};
</script>