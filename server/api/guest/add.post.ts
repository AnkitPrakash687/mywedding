import ExcelService from '~/services/excelService.js';

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { name, phoneNumber, email } = body;
  const excelService = new ExcelService();
  const res = await excelService.addUser({
    name: name,
    phoneNumber: phoneNumber,
    email: email,
  });
});
