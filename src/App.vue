<script setup>
import { ref } from 'vue'
import { useSubmit } from './composables/useSubmit'

const identifiant = ref()
const motdepasse = ref()

const { submit } = useSubmit()

const handleSubmit = () => {
  submit({ id: identifiant.value, pwd: motdepasse.value })
}
</script>

<template>
  <form>
    <div class="form-control">
      <label for="id" class="label">Identifiant</label>
      <input type="text" v-model="identifiant" class="input input-bordered" name="id" id="" />
    </div>

    <div class="form-control">
      <label for="pwd" class="label">Mot de passe</label>
      <input type="password" v-model="motdepasse" class="input input-bordered" name="pwd" id="" />
    </div>

    <button type="button" @click="handleSubmit" class="btn btn-primary mt-4">Se connecter</button>
  </form>
</template>
