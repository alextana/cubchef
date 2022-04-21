import { writable } from 'svelte/store'
import { browser } from '$app/env'

export const recipes = writable([])

if (browser) {
  const getRecipes = async () => {
    const res = await fetch(`/api/recipes`)
    const result = await res.json()
    recipes.set(result)
  }

  getRecipes()
}