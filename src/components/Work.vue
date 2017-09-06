<template>
    <div id="work">
        <p class="title">My Work</p>
    </div>
</template>

<script>
    export default {
      name: 'work'
    }
</script>

<style lang="scss" scoped>
    #work {
        width: 80%;
        display: flex;
        align-self: center;
        flex-direction: column;
        .title {
            font-size: 32px;
        }
    }
</style>