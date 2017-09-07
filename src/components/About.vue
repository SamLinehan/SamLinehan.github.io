<template>
    <div id="about">
        <p class="title">About Me</p>
        <section>
            <p class="hello">Hello.</p>
            <p>My name is Sam and I'm a Software Engineer focusing on Web, Mobile, and IoT.</p>
            <p>Please pardon the appearance of my website... I'm currently learning the ways of Vue.js.</p
            <p>Check me out here:</p>
            <div>
                <a class="github" href="https://github.com/SamLinehan">GITHUB</a>
                <a class="linkedin" href="https://www.linkedin.com/in/samuellinehan">LINKEDIN</a>
            </div>
        </section>
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
        section {
            padding-left: 40px;
        }
        .hello {
            margin-top: 0px;
        }
        a, a:visited, a:active {
            color: inherit;
            text-decoration: none;
        }
        .github {
            margin-right: 10px;
        }
        .github:hover {
            color: #00C853;
        }
        .linkedin:hover {
            color: #0077B5;
        }
    }
</style>