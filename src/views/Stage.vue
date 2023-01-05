<!-- 游戏关卡文件 -->
<template>
  <div class="stage">
    <!--操作区域-->
    <div class="game-view">
      <!--渲染地图：层级1-->
      <Map />
      <!--渲染标示框：层级2-->
      <!--渲染角色：层级3-->
      <div class="charactor-list">
        <CharacterUnit v-for="(item, i) in STATE.characters" :key="i" :id="i" :position="item.position" />
      </div>
      <!--渲染地图遮罩：层级4-->
    </div>
    <!--UI 区域-->
    <div class="game-ui">
      <TerrainWindow />
      <CharacterWindow />
    </div>
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
$ui-width = 400px
$ui-padding = 40px

.stage
  width 100%
  .game-view
    position absolute
    overflow scroll
    left $ui-padding
    top $ui-padding
    right: $ui-width + 2 * $ui-padding
    bottom $ui-padding
    background-color #f5f5f5
  .game-ui
    position absolute
    right $ui-padding
    top $ui-padding
    bottom $ui-padding
    width $ui-width
    background-color #f5f5f5
  .charactor-list
    position absolute
    top 0
    left 0
</style>
