<template>
  <div class="home">
    <button @click="left">left</button><button @click="right">right</button>
    <img alt="Vue logo" :src="images[index].url">
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import io from 'socket.io-client'

const socket = io.connect('http://localhost:3000')

export default {
  name: 'Home',
  data () {
    return {
      images: [
        {
          url: 'https://cdn-production-thumbor-vidio.akamaized.net/ZWJxx15X01V4HycH9amyUxbbEx0=/filters:quality(90)/vidio-web-prod-video/uploads/video/image/702408/fakta-fakta-kartini-65757b.jpg'
        },
        {
          url: 'https://cdn-brilio-net.akamaized.net/news/2019/02/13/159332/990719-1000xauto-potret-renatta-moeloek.jpg'
        },
        {
          url: 'https://cdn.idntimes.com/content-images/post/20180111/22500103-1691795124173265-3384620115432570880-n-5c3c9272944e6474fef918e3822ebd0d.jpg'
        },
        {
          url: 'https://cdn.idntimes.com/content-images/post/20171117/16789550-728864340624697-1361545357711900672-n-716be9dfc70fd9905e380296d6ec482c.jpg'
        },
        {
          url: 'https://i.pinimg.com/originals/97/67/1e/97671e56696ccb9234a2ba28e57b529f.jpg'
        }
      ],
      index: 0
    }
  },
  methods: {
    right () {
      this.index === 5 ? this.index = 0 : this.index++
      socket.emit('index', this.index)
    },
    left () {
      this.index === 0 ? this.index = 5 : this.index--
      socket.emit('index', this.index)
    }
  },
  created () {
    socket.on('index', (payload) => {
      this.index = payload
    })
  }
}
</script>
