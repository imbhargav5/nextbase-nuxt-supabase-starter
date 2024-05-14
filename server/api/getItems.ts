import { createError } from 'h3'
import { serverSupabaseUser, serverSupabaseClient } from '#supabase/server'
import type { Database } from '~/lib/database.types'

export default defineEventHandler(async (event) => {
  const supabaseClient = await serverSupabaseClient<Database>(event)

  const { data, error } = await supabaseClient.from('items').select('*');


  if (error) {
    throw createError({ statusMessage: error.message })
  }

  return data
})