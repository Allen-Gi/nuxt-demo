<script setup lang="ts">
import {useUsers} from "~/composables/users";

useHead({
  title: 'Nuxt About',
  description: 'Nuxt Routing set up successfully!',
})

definePageMeta({
  middleware: 'auth'
})

const shopInfo = useState('shopInfo')

const { getUsers } = useUsers();
const { users } = await getUsers()

defineI18nRoute(false)
</script>

<template>
  <div ma class="flex w-[500px]">
    <h1>{{ $t('welcome') }}About</h1>
    <p>This is the about page</p>
    <p>{{ shopInfo }}</p>

    <span text="blue 5xl hover:red" cursor="default">Hello Nuxt 3</span>
    <br>
    <table class="table">
      <tr v-for="user in users" :key="user.id">
        <td>{{ user.id }}</td>
        <td>
          <NuxtLink :to="`/users/${user.id}`">
            {{ user.username }}
          </NuxtLink>
        </td>
        <td>{{ user.name }}</td>
        <td>{{ user.email }}</td>
        <td>
          <pre> {{ user.address }}</pre>
        </td>
        <td>
          <button>Edit</button>
          <button>Delete</button>
        </td>

      </tr>
    </table>
  </div>
</template>

<style scoped>

.table {
  width: 100%;
  border-collapse: collapse;
}

.table th, .table td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

.table th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #f2f2f2;
  color: black;
}

.table tr:nth-child(even) {
  background-color: #f2f2f2;
}

.table tr:hover {
  background-color: #f1f1f1;
}


</style>