import { createClient } from '@supabase/supabase-js';
import { v4 as uuidv4 } from 'uuid';

export default class DbService {
  client;
  GUEST_TABLE = 'guests';
  AUTH_TABLE = 'auth';
  constructor() {
    this.client = createClient(
      'https://stwokyzifxxdacguuwon.supabase.co',
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN0d29reXppZnh4ZGFjZ3V1d29uIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcwNDA1NDg2MiwiZXhwIjoyMDE5NjMwODYyfQ.65M27GKKRWZa14Rhb4s1pJdWlYpLec8fFKgHIiZQ3mM'
    );
  }

  listGuest = () => {
    return this.client.from(this.GUEST_TABLE).select('*');
  };

  addGuest = async (guests) => {
    guests = {...guests, token: uuidv4()};
    return this.client
      .from(this.GUEST_TABLE)
      .insert(guests)
      .select();
  };

  deleteGuestById = async (id)  => {
    return this.client
    .from(this.GUEST_TABLE)
    .delete()
    .eq('id', id)
  }

  getAdminToken = (token) => {
    return this.client
    .from(this.AUTH_TABLE)
    .select('*', { count: 'exact', head: true })
    .eq('role', 'admin')
    .eq('token', token);
  }

  getUserToken = (token) => {
    return this.client
    .from(this.GUEST_TABLE)
    .select('*', { count: 'exact' })
    .eq('token', token);
  }
}
