export default defineNuxtRouteMiddleware(async (to, from) => {
  const { name, query } = to;
  const user = useState('user');
  // if (!query.token)
  //   return abortNavigation(
  //     createError({
  //       statusCode: 401,
  //       message: 'missing token',
  //     })
  //   );
  let res;
  if (name === 'admin') {
    res = await useFetch('/api/auth/admin', {
      method: 'POST',
      body: {
        token: query.token,
      },
    });
  } else {
    res = await useFetch('/api/auth/user', {
      method: 'POST',
      body: {
        token: query.token,
      },
    });
    return
    
  }
  const { value: data } = res.data;
  //if(data.user) user.value = data.user;
  if (data.error) {
    return abortNavigation(
      createError({
        statusCode: 401,
        message: 'Unauthorized',
      })
    );
  }
});
