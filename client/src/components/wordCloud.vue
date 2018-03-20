<template>
  <div class="word-cloud">
      <wordcloud
      class="word-cloud-item"
      :data="defaultWords"
      nameKey="name"
      valueKey="value"
      spiral="rectangular"
      :rotate="rotate">
      </wordcloud>
  </div>
</template>

<script>
import wordcloud from 'vue-wordcloud'

export default {
  components: {
    wordcloud
  },
  data() {
    return {
      rotate: {from: 0, to: 180, numOfOrientation: 5 },
      defaultWords: [{
          "name": "伪娘",
          "value": 26
        },
        {
          "name": "橘子",
          "value": 19
        },
        {
          "name": "诸葛&王允",
          "value": 18
        },
        {
          "name": "鬼畜王者",
          "value": 16
        },
        {
          "name": "日剧",
          "value": 15
        },
        {
          "name": "疯狂打call",
          "value": 9
        },
        {
          "name": "收藏不看系列",
          "value": 9
        },
        {
          "name": "独秀",
          "value": 9
        },
        {
          "name": "舞蹈",
          "value": 6
        }
      ]
    }
  }
}
</script>
<style scoped>
    .word-cloud {
        height: 88%;
    }
    .word-cloud-item {
        height: 100% !important;
    }
    svg {
        text-align: center;
        vertical-align: baseline;
    }
</style>
