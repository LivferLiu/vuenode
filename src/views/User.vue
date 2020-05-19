<template>
  <div class="user">
    <ProfilePanel :loginname="loginname" />
    <OtherTopic :simple="false" />
    <RecentReply :simple="false" />
  </div>
</template>

<script>
/**
 * 用户个人中心页
 */
import OtherTopic from "@/components/OtherTopic";
import ProfilePanel from "@/components/ProfilePanel";
import RecentReply from "@/components/RecentReply";

export default {
  /**
   * 给此组件起的名字，会显示在Vue的DevTool里面
   */
  name: "User",
  /**
   * 当前组件的‘数据中心'
   */
  data() {
    return {
      loginname: ""
    };
  },
  /**
   * 一般此钩子下面调用接口获取数据
   */
  created() {
    this.loginname = this.$route.params.loginname;
  },
  beforeRouteUpdate(to, from, next) {
    this.loginname = to.params.id;
    next();
  },
  /**
   * 注册引用进来的其他组件
   */
  components: {
    RecentReply,
    OtherTopic,
    ProfilePanel
  }
};
</script>

<style lang="scss" scoped>
.user {
  width: 75%;
  margin: auto;
}
</style>
