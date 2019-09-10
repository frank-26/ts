interface IResponse < T > {
  message: string,
  result: T,
  success: boolean,
}
async function getResponse(): Promise < IResponse < number[] >> {
  return {
    message: '获取成功',
    result: [1, 2, 3],
    success: true,
  }
}
getResponse()
  .then(response => {
    console.log(response.result)
  })