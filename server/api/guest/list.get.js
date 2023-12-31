import ExcelService from '~/services/excelService.js';

export default defineEventHandler(async (event) => {
  try {
    const e = new ExcelService();
    const list = await e.listGuest();
    return list
      .map((value, i) => {
        if (i !== 0) {
          return {
            [list[0][0].trim()]: value[0].trim(),
            [list[0][1].trim()]: value[1].trim(),
            [list[0][2].trim()]: value[2].trim(),
            [list[0][3].trim()]: value[3].trim(),
            [list[0][4].trim()]: value[4].trim()
          };
        }
      })
      .filter((v) => v);
  } catch (e) {
    console.log(e);
    return {
      error: true,
      msg: e.message,
    };
  }
});
