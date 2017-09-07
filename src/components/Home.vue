<template>
    <div id="home">
        <p class="title">Software Engineer</p>
        <section>            
            <router-link to="/work" tag="button">My Work</router-link>
            <router-link to="/about" tag="button">About Me</router-link>
        </section>
    </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss" scoped>

#home {
    width: 80%;
    display: flex;
    align-self: center;
    flex-direction: column;
    .title {
        font-size: 32px;
    }

    button {
        border: 1px solid black;
        outline: none;
        background: white;
        width: 25%;
        height: 50px;
        text-align: left;
        font-size: 16px;
        transition: background .2s ease-in;
        transition: color .2s ease-in;
    }

    button:hover {
        cursor: pointer;
        background: black;
        color: white;
    }
}

</style>