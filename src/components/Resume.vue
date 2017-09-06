<template>
    <div id="resume">
        <p class="title">Resume</p>
        <section>
            <p>If you fancy killing trees and want to print a copy, please 
            <a href="" target="_blank">Click Here</a>.</p>
        </section>
    </div>
</template>

<script>
    export default {
      name: 'resume'
    }
</script>

<style lang="scss" scoped>

    #resume {
        width: 80%;
        display: flex;
        align-self: center;
        flex-direction: column;
    }

    section {
        display: flex;
        align-items: center;
    }

    .title {
        font-size: 32px;
    }

    a, a:visited, a:active {
      color: inherit;
      text-decoration: none;
      font-weight: bold;
    }

    a:hover, u {
      text-decoration: none;
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