<!-- 游戏关卡文件 -->
<template>
  <div class="stage">
    <p>这是一个关卡</p>
    <div class="game-view">
      <!--渲染地图-->
      <Map />
      <!--渲染角色-->
      <div class="charactor-list">
        <CharacterUnit
          v-for="(item, i) in STATE.characters"
          :key="i"
          :id="item.id"
        />
      </div>
    </div>
    <!--UI-->
    <TerrainWindow />
    <CharacterWindow />
  </div>
</template>

<script>
import Map from "@/components/game/Map.vue";
import TerrainWindow from "@/components/ui/TerrainWindow.vue";
import CharacterWindow from "@/components/ui/CharacterWindow.vue";
import CharacterUnit from "@/components/game/CharacterUnit.vue";
export default {
  name: "StageModule",
  components: { Map, TerrainWindow, CharacterWindow, CharacterUnit },
};
</script>

<style lang="stylus">
.stage
  width 100%
  .game-view
    position relative
    overflow scroll
    margin auto
    width 840px
    height 840px
  .charactor-list
    position absolute
    top 0
    left 0
</style>
