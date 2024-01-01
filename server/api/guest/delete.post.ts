import DbService from '~/services/dbService.js';

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { id } = body;
  console.log(id);
  const dbService = new DbService();
  const { data, error, status, statusText } = await dbService.deleteGuestById(
    id
  );
  if (error)
    return {
      error: true,
      message: error,
    };

  return { status: status, statusText: statusText };
});
