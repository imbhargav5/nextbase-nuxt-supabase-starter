
import type { SupabaseClient } from "@supabase/supabase-js";
import type { Database } from "~/lib/database.types";
import type { AppSupabaseClient, Table } from "~/utils/types";


export const getAllItems = async (supabaseClient: SupabaseClient<Database> ): Promise<Array<Table<'items'>>> => {
  const { data, error } = await supabaseClient.from('items').select('*');

  if (error) {
    throw error;
  }

  return data;
};

export const getItem = async (supabaseClient: AppSupabaseClient, id: string): Promise<Table<'items'>> => {

  const { data, error } = await supabaseClient
    .from('items')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    throw error;
  }

  return data;
};

export const deleteItemAction = async (supabaseClient: AppSupabaseClient, id: string) => {
  const { error } = await supabaseClient.from('items').delete().match({ id });

  if (error) {
    throw error;
  }

};

export async function insertItemAction(supabaseClient: AppSupabaseClient, payload: {
  name: string;
  description: string;
}) {
  const { data, error } = await supabaseClient
    .from('items')
    .insert(payload)
    .select('*')
    .single();

  if (error) {
    throw error;
  }

  return data.id;
}