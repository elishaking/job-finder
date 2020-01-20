const ResponseUtil = {
  createResponse: (success, statusCode, message, data = undefined) => ({
    success,
    statusCode,
    message,
    data
  }),

  sendResponse: (res, responseData) => {
    res.status(responseData.statusCode)
      .json(responseData);
  }
};

module.exports = ResponseUtil;
