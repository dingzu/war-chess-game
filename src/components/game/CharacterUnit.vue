<template>
  <div
    class="character-unit"
    @mouseenter="postTerrainData()"
    @mousedown="active()"
    :class="resolveActive()"
  ></div>
</template>

<style lang="stylus">
.character-unit
  box-sizing border-box
  width 80px
  height 80px
  border 10px solid #ccc
  background-color red
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
  },
  methods: {
    postTerrainData() {
      this.STATE.recentTerrain = {
        type: "角色",
        position: `${this.STATE.character[this.id].position}`,
      };
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
  },
};
</script>