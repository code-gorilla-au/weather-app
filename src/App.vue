<template>
  <router-view v-slot="{ Component }">
    <template v-if="Component">
      <transition mode="out-in">
        <keep-alive>
          <suspense>
            <component :is="Component"></component>
            <template #fallback>
              <div class="loader-container">
                <h1>Loading</h1>
              </div>
            </template>
          </suspense>
        </keep-alive>
      </transition>
    </template>
  </router-view>
</template>

<style lang="scss">
@import "@/assets/styles/utility";
@import "@/assets/styles/variables";

h1,
h2,
h3,
h4,
h5,
p,
span,
i {
  color: $colour-white-default;
}

html,
body {
  padding: 0;
  margin: 0;
  background-color: $colour-dark-default;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  display: flex;
  flex-direction: column;
  height: 100vh;
}
.loader-container {
  margin: 4rem auto;
}
</style>
