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
      if (this.STATE.activeCharacter == this.id) {
        this.STATE.activeCharacter = "";
      } else {
        this.STATE.activeCharacter = this.id;
      }
    },
    resolvePosition() {
      return `left:${this.position[0] * this.CONFIG.cellSize}px;
      top:${this.position[1] * this.CONFIG.cellSize}px`;
    },
  },
};
</script>