import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://bniobemminqwvycjkbcn.supabase.co';
const supabaseAnonKey = 'sb_publishable_KGvHO_DwUsTAffZGFLRanQ_djr7PyTL';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
