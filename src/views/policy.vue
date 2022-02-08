<template>
    <vue-pdf-embed id='policy' :source="pdfSource" />
</template>

<script>
import VuePdfEmbed from 'vue-pdf-embed' 
export default {
    name: 'policy',
  components: {
    VuePdfEmbed,
  },
 data() {
    return {
        pdfSource: 'https://raw.githubusercontent.com/mozilla/pdf.js/ba2edeae/examples/learning/helloworld.pdf'
    }
}
}
</script>