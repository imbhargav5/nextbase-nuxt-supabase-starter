import type { AppSupabaseClient, Table } from "~/utils/types";

export async function insertPrivateItemAction(supabaseClient: AppSupabaseClient, payload: {
  name: string;
  description: string;
}) {
  const { data, error } = await supabaseClient
    .from('private_items')
    .insert(payload)
    .select('*')
    .single();

  if (error) {
    throw error;
  }

  return data.id;
}