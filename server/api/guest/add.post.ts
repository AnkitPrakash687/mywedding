import DbService from '~/services/dbService.js';

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { name, phoneNumber, email } = body;
  const dbService = new DbService();
  const {data, error} = await dbService.addGuest(
    {
      name: name,
      phoneNumber: phoneNumber,
      email: email,
    },
  );

  if(error) return {
    error: true, message: error
  }

  return data
});
