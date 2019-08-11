module.exports.handler = (event, ctx, done) => {
  console.log(event);
  done(null, {
    statusCode: 200,
    body: JSON.stringify({
      data: {
        id: 1,
        name: "clean up",
        status: "open"
      }
    })
  });
};
