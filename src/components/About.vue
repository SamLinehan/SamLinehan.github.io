<template>
    <div id="about">
        <p class="title">About Me</p>
    </div>
</template>

<script>
    export default {
      name: 'about'
    }
</script>

<style lang="scss" scoped>
    #about {
        width: 80%;
        display: flex;
        align-self: center;
        flex-direction: column;
        .title {
            font-size: 32px;
        }
    }
</style>