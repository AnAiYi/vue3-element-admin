<script setup lang="ts">
import { ref } from 'vue'
import SvgIcon from '@/components/SvgIcon/index.vue';
import {useCounterStore} from '@/store/counter';
defineProps<{ msg: string }>()
const counterStore = useCounterStore();

const count = ref(0)
</script>

<template>
   <el-card  class="text-left text-white border-white border-1 border-solid mt-10 bg-[#242424]" >
    <template #header> 子组件 HelloWorld.vue</template>
    <el-form>
      <el-form-item label="数字："> {{ counterStore.count }}</el-form-item>
      <el-form-item label="加倍："> {{ counterStore.double }}</el-form-item>
    </el-form>
  </el-card>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Learn more about IDE Support for Vue in the
    <a
      href="https://vuejs.org/guide/scaling-up/tooling.html#ide-support"
      target="_blank"
      >Vue Docs Scaling up Guide</a
    >.
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
  <ElButton>123</ElButton>
  <SvgIcon icon-class="start"></SvgIcon>
  <div class="box">scss</div>
  <div class="text-amber">unocss</div>
 
</template>

<style scoped lang="scss">

.read-the-docs {
  color: #888;
}
.box {
  width: 100px;
  height: 100px;
  color: $bg-color;
}
</style>
