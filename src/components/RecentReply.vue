<template>
  <div class="panel">
    <header>最近参与的话题</header>
    <divider class="divider" />
    <template v-for="item in user.recent_replies">
      <div :key="item.id">
        <router-link v-if="simple" :to="{ path: '/topic/' + item.id }">{{
          item.title
        }}</router-link>
        <div v-else>
          <div class="main">
            <div>
              <router-link
                class="avatar"
                :to="{ path: '/user/' + item.author.loginname }"
              >
                <img :src="item.author && item.author.avatar_url" alt="头像" />
              </router-link>
              <router-link key="{item.id}" :to="{ path: '/topic/' + item.id }">
                {{ item.title }}
              </router-link>
            </div>
            <span class="time">
              {{
                $moment(item.last_reply_at, "YYYY-MM-DD")
                  .startOf("day")
                  .fromNow()
              }}
            </span>
          </div>
          <divider class="inside-divider" />
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import divider from "@/components/Divider";

export default {
  name: "RecentReply",
  components: {
    divider
  },
  props: {
    simple: {
      default: true,
      type: Boolean
    }
  },
  data() {
    return {};
  },
  computed: {
    user() {
      return this.$store.getters.topicAuthor;
    }
  }
};
</script>

<style lang="scss" scoped>
.panel {
  display: flex;
  flex-direction: column;
  padding: 20px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  margin: 20px 0;
  header {
    color: black;
    font-weight: bold;
  }
  > div {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    .main {
      display: flex;
      justify-content: space-between;
      align-items: center;
      > div {
        display: flex;
        align-items: center;
      }
    }
    .time {
      float: right;
      color: #777;
      font-size: 11px;
    }
    .inside-divider {
      margin: 10px 0;
    }
    .avatar {
      margin-left: 10px;
    }
  }
  img {
    width: 30px;
    height: 30px;
    border-radius: 5px;
    margin-right: 5px;
  }
  .divider {
    margin: 12px 0;
  }
}
</style>
