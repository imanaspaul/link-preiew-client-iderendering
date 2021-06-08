<template>
  <div class="con">
    <input type="url" v-model="url" placeholder="Enter url">
    <button @click="getData">{{ isLoading ? 'Loading..': 'Get Data'}}</button>
    <!-- <pre v-if="metaData">{{ metaData }}</pre> -->
     <div class="card" v-if="metaData">
      <img :src="metaData.image" alt="Avatar" style="width:100%">
      <div class="container">
        <h4><b>{{ metaData.title }}</b></h4>
        <p>{{ metaData.description }}</p>
      </div>
    </div> 
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      isLoading: false,
      url: '',
      metaData: null
    }
  },
  methods: {
    async getData() {
      this.isLoading = true
      const res = await this.$axios.get(`/api/metadata?url=${this.url}`)
      this.metaData = res.data
      this.isLoading = false
    }
  }
}
</script>

<style>
body{
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
}
.card {
  /* Add shadows to create the "card" effect */
  width: 400px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  margin-top: 20px;
}

/* On mouse-over, add a deeper shadow */
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

/* Add some padding inside the card container */
.con {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.container {
  overflow: hidden;
  padding: 12px 16px;
}
button {
    width: 90px;
    height: 40px;
    background-color: #e0f3fd;
    color: #1bbef0;
    font-weight: 700;
    border: none;
    border-radius: 20px;
    cursor: pointer;
}
input {
    width: 300px;
    height: 30px;
    border-radius: 20px;
    padding: 20px;
    color: gray;
}
</style>
