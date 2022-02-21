const EndPoints = {
  BASE_URL:'https://whispering-eyrie-76050.herokuapp.com',
  USER_DATA_URL: '/aspire/4',
  UPDATE_USER_DATA_URL: '/aspire/4',
  Method: {
    GET: 'GET',
    POST: 'POST',
    UPDATE: 'UPDATE',
    PATCH: 'PATCH',
    DELETE: 'DELETE',
  },

  getUserEndPoints:function () {
    return this.BASE_URL + this.USER_DATA_URL;
  }

};


export default EndPoints;