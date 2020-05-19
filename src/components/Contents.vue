<template>
  <div>
    <div class="topic" v-for="item in list" :key="item.id">
      <router-link :to="{ path: '/user/' + item.author.loginname }">
        <img :src="item.author.avatar_url" alt="头像" />
      </router-link>
      <span class="count">
        <em>{{ item.reply_count }}</em
        >/<em>{{ item.visit_count }}</em>
      </span>
      <el-tag :type="tab[item.tab] && tab[item.tab].type">
        {{ tab[item.tab] && tab[item.tab].name }}
      </el-tag>
      <router-link class="title" :to="{ path: '/topic/' + item.id }">
        {{ item.title }}
      </router-link>
      <span class="time">
        {{
          $moment(item.last_reply_at, "YYYY-MM-DD")
            .startOf("day")
            .fromNow()
        }}
      </span>
    </div>
  </div>
</template>
<script>
import tab from "@/utils/tab";
export default {
  name: "Topics",
  data() {
    return {
      tab: tab
    };
  },
  props: {
    list: {
      required: true,
      default: () => []
    }
  }
};
</script>

<style lang="scss" scoped>
.topic {
  margin: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
  span.count {
    width: 50px;
    text-align: center;
    em:first-child {
      font-size: 1.2rem;
      color: purple;
    }
    em:last-child {
      color: gray;
    }
  }
  .title {
    width: 60%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin: 0;
  }
  span.time {
    width: 70px;
    text-align: right;
  }
}
</style>
