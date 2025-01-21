<script setup>
import Profile_picture from './components/Profile_picture.vue';
import Heading from './components/Heading.vue'
import Content from './components/Content.vue'
import IconLinkedIn from './components/icons/IconLinkedIn.vue';
</script>

<template>

  <aside>
    <Profile_picture/>
  </aside>  

  <main>
    <header>
      <Heading />  
    </header>
    <section>
      <Content />
    </section>
  </main>
    <IconLinkedIn/>
</template>

<style scoped>
aside{
  padding-top: 8%;
}
header {
  display: flex;
}

.profile_pic {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .profile_pic {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
