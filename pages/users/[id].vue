<template>
  <div>
    <h1>{{ $t('welcome') }}User</h1>
    <p>This is the user page</p>
    <pre>
      {{ user }}
    </pre>

  </div>
</template>

<script setup>
import {useUsers} from "~/composables/users";
const route = useRoute()
const { id: userId } = route.params

const { getUser } = useUsers();
const { user } = await getUser(userId);
defineI18nRoute(false)
</script>

<style scoped>

</style>