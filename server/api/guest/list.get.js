import DbService from '~/services/dbService.js';

export default defineEventHandler(async (event) => {
  try {
    const dbService = new DbService();
    const { data, error } = await dbService.listGuest();
    if (error)
      return {
        error: true,
        msg: error,
      };
    data.forEach(function(v){ delete v.created_at })
    return data
  } catch (e) {
    console.log(e);
    return {
      error: true,
      msg: e.message,
    };
  }
});
