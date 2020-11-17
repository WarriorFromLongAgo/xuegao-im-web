<template>
  <el-row :gutter="20">
    <el-col :span="8">
      <div class="grid-content bg-purple">
        <el-button type="text">components</el-button>
      </div>
      <div class="grid-content bg-purple">
        <el-button type="text" @click="open2url('Auth')"
          >点击打开Auth</el-button
        >
      </div>
      <div class="grid-content bg-purple">
        <el-button type="text" @click="open2url('Chat')"
          >点击打开Chat</el-button
        >
      </div>
      <div class="grid-content bg-purple">
        <el-button type="text" @click="open2url('Login')"
          >点击打开Login</el-button
        >
      </div>
      <div class="grid-content bg-purple">
        <el-button type="text" @click="open2url('Notify')"
          >点击打开Notify</el-button
        >
      </div>
      <div class="grid-content bg-purple">
        <el-button type="text" @click="open2url('Register')"
          >点击打开Register</el-button
        >
      </div>
      <div class="grid-content bg-purple">
        <el-button type="text" @click="open2url('ResetPasswd')"
          >点击打开ResetPasswd</el-button
        >
      </div>
    </el-col>
    <el-col :span="8">
      <div class="grid-content bg-purple">
        <el-button type="text">medium</el-button>
      </div>
      <div class="grid-content bg-purple">
        <el-button type="text" @click="open2url('Contacts')"
          >点击打开Contacts</el-button
        >
      </div>
      <div class="grid-content bg-purple">
        <el-button type="text" @click="open2url('Sessions')"
          >点击打开Sessions</el-button
        >
      </div>
      <div class="grid-content bg-purple">
        <el-button type="text" @click="open2url('Settings')"
          >点击打开Settings</el-button
        >
      </div>
    </el-col>
    <el-col :span="8">
      <div class="grid-content bg-purple">
        <el-button type="text">right</el-button>
      </div>
      <div class="grid-content bg-purple">
        <el-button type="text" @click="open2url('AddContact')"
          >点击打开 AddContact</el-button
        >
      </div>
      <div class="grid-content bg-purple">
        <el-button type="text" @click="open2url('Contact')"
          >点击打开 Contact</el-button
        >
      </div>
      <div class="grid-content bg-purple">
        <el-button type="text" @click="open2url('Flow')"
          >点击打开 Flow</el-button>
      </div>
      <div class="grid-content bg-purple">
        <el-button type="text" @click="open2url('Me')"
          >点击打开 Me</el-button>
      </div>
      <div class="grid-content bg-purple">
        <el-button type="text" @click="open2url('NewContact')"
          >点击打开 NewContact</el-button>
      </div>
      <div class="grid-content bg-purple">
        <el-button type="text" @click="open2url('Security')"
          >点击打开 Security</el-button>
      </div>
      <div class="grid-content bg-purple">
        <el-button type="text" @click="open2url('SettingsDetails')"
          >点击打开 SettingsDetails</el-button>
      </div>
      </el-col>
  </el-row>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {};
  },
  methods: {
    open1url(url) {
      setTimeout(() => {
        // replace 不可以返回
        this.$router.replace({ path: url });
      }, 1000);
    },
    open2url(url) {
      setTimeout(() => {
        // push 可以返回
        this.$router.push({ path: url });
      }, 1000);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-row {
  margin-bottom: 20px;
  /* &:last-child {
    margin-bottom: 0;
  } */
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
