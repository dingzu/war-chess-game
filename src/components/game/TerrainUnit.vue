<template>
  <div class="terrain-unit" :class="resolveType()"></div>
</template>

<script>
export default {
  props: {
    type: {
      require: true,
      default: "XX",
    },
  },
  methods: {
    resolveType() {
      return "type-" + this.type;
    },
  },
};
</script>

<style lang="stylus">
.terrain-unit
  box-sizing border-box
  width 80px
  height 80px
  border 1px solid #ccc
  background-color #000
  &.type-00
    background-color #bbb
  &.type-01
    background-color #000
  &:hover
    border 4px solid blue
</style>