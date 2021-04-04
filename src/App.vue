<template>
  <div id="app">
    <Suspense>
      <template #default>
        <router-view />
      </template>
      <template #fallback>
        <div>
          <h1>Loading...</h1>
        </div>
      </template>
    </Suspense>
  </div>
</template>

<style lang="scss">
@import "@/assets/styles/utility";

html,
body {
  padding: 0;
  margin: 0;
  border: 0;
  outline: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
