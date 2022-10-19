<template>
  <div class="character-window">当前选中角色: {{ recentCharacter }},</div>
</template>

<script>
export default {
  computed: {
    recentCharacter() {
      const id = this.STATE.activeCharacter;
      console.log(id);
      if (id) {
        return this.STATE.characters[id].name;
      } else {
        return "无";
      }
    },
  },
};
</script>

<style lang="stylus">
.character-window
  padding 12px
  background-color blue
  color #fff
</style>