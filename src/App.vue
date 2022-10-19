<template>
  <router-view />
</template>

<script>
import config from "@/data/config.js";
export default {
  mounted() {
    // 注册单元格宽度到样式变量中
    console.log("hah", config);
    document
      .getElementsByTagName("html")[0]
      .style.setProperty("--cellSize", config.cellSize + "px");
  },
};
</script>
