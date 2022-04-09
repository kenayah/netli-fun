exports.handler = async (event, context) => {
  const { nom = "L'Anonyme" } = event.queryStringParameters;
  return {
    statusCode: 200,
    body: `Hey ${nom}, Jesus-Chrit is Lord!!!`,
  };
};
