<template>
    <div id="home">
        <p>Software Engineer</p>
        <section>
            <button name="about">About Me</button>
            <button name="work">My Work</button>
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
    p {
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
    }

    button:hover {
        cursor: pointer;
    }
}

</style>