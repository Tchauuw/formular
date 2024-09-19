<script setup>
import { ref } from 'vue'
import { useSubmit } from './composables/useSubmit'

const identifiant = ref()
const motdepasse = ref()
const errors = ref({
  id: '',
  pwd: ''
})

const { submit } = useSubmit()

const handleSubmit = () => {
  errors.value.id = ''
  errors.value.pwd = ''

  if (identifiant.value && motdepasse.value) {
    submit({ id: identifiant.value, pwd: motdepasse.value })
  }
  if (!identifiant.value) {
    errors.value.id = 'Identifiant requis'
  }
  if (!motdepasse.value) {
    errors.value.pwd = 'Mot de passe requis'
  }
  if (Object.keys(errors.value).length) {
    return `${errors.value.id}`
  }
}
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <div class="form-control">
      <label for="id" class="label">Identifiant</label>
      <input
        :class="{ 'input-error': errors.id }"
        type="text"
        v-model="identifiant"
        class="input input-bordered"
        name="id"
        id=""
      />
      <div v-if="errors.id" class="label">
        <span class="label-text-alt">{{ errors.id }}</span>
      </div>
    </div>

    <div class="form-control">
      <label for="pwd" class="label">Mot de passe</label>
      <input
        :class="{ 'input-error': errors.pwd }"
        type="password"
        v-model="motdepasse"
        class="input input-bordered"
        name="pwd"
        id=""
      />
      <div v-if="errors.pwd" class="label">
        <span class="label-text-alt">{{ errors.pwd }}</span>
      </div>
    </div>

    <button type="submit" class="btn btn-primary mt-4">Se connecter</button>
  </form>
</template>
