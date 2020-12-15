<template>
  <div></div>
</template>

<script>
export default {
  data() {
    return {
      nBack: true
    };
  },
  onLoad() {
    uni.showModal({
      content: '暂不支持重置，即将返回',
      showCancel: false,
      success: () => {
        this.nBack = false;
        uni.navigateBack();
      }
    });
    setTimeout(()=> {
      if (this.nBack) {
        uni.navigateBack();
      }
    }, 3000);
  }
};
</script>

<style></style>
