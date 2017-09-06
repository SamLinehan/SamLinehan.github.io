<template>
    <div id="resume">
        <section>
            <p>If you fancy killing trees and want to print a copy, please 
            <a href="" target="_blank">Click Here</a></p>
        </section>
    </div>
</template>

<script>
    export default {
      name: 'resume'
    }
</script>

<style lang="scss" scoped>
    section {
        display: flex;
        align-items: center;
    }

    button {
        border: 1px solid black;
        outline: none;
        background: white;
        text-align: left;
        font-size: 16px;
    }

    button:hover {
        cursor: pointer;
    }

</style>