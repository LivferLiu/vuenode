<template>
  <div class="panel">
    <router-link class="user" :to="{ path: '/user/' + user.loginname }">
      <img :src="user.avatar_url" alt="用户头像" />
      <span>{{ user.loginname }}</span>
    </router-link>
    <div>积分: {{ user.score }}</div>
    <div>
      GitHub:
      <a
        :href="'https://github.com/' + user.githubUsername"
        target="_blank"
        rel="nofollow noopener noreferrer"
      >
        {{ user.githubUsername }}
      </a>
    </div>
    <div>
      注册时间:
      {{
        $moment(user.create_at, "YYYY-MM-DD")
          .startOf("day")
          .fromNow()
      }}
    </div>
  </div>
</template>
<script>
import { getUserByName } from "@/api/user";

export default {
  name: "ProfilePanel",
  props: ["loginname"],
  data() {
    return {
      user: {}
    };
  },
  methods: {
    fetchUser(loginname) {
      getUserByName(loginname).then(res => {
        console.log(res);
        this.user = res.data;
        this.$store.dispatch("user/storeTopiAuthor", res.data);
      });
    }
  },
  created() {
    if (!this.loginname) {
      return;
    }
    this.fetchUser(this.loginname);
  },
  watch: {
    loginname(loginname) {
      if (!loginname) return;
      this.fetchUser(loginname);
    }
  },
  beforeRouteUpdate(from, to, next) {
    this.fetchUser(this.$route.params.loginname);
    next();
  }
};
</script>

<style lang="scss" scoped>
.panel {
  display: flex;
  flex-direction: column;
  color: black;
  padding: 20px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  > a {
    display: flex;
    align-items: center;
    img {
      width: 48px;
      height: 48px;
      border-radius: 5px;
      margin-right: 20px;
    }
  }
  .user {
    margin-bottom: 10px;
  }
}
</style>
