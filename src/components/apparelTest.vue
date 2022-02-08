<template>
<div>
    <div>hello</div>
  <router-link :to="{name: 'Cart'}" class="button is-primary">
    Cart ({{count}})
  </router-link>
</div>
</template>

<script>
export default {
  props: {
    count: Number
  }
}
</script>