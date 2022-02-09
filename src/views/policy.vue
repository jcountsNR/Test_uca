
<template>
  <div id="policy">
    <WebViewer initialDoc="../assets/policy.pdf"
    />
  </div>
</template>

<script>
import WebViewer from "@/components/WebViewer.vue";
export default {
  name: "policy",
  components: {
    WebViewer,
  },
};
</script>

<style>
html,
body {
  margin: 0;
}
#policy {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0 auto;
}
</style>