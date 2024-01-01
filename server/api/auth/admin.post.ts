import DbService from '~/services/dbService.js';

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { token } = body;
  const dbService = new DbService();
  const { error, count, status } = await dbService.getAdminToken(token);
  console.log(count === 0);
  if (count != null && count === 0) {
    return { error: true, status: 401 };
  }
  if (error) {
    return {
      error: true,
      message: error,
    };
  }

  return { status: 200 };
});
