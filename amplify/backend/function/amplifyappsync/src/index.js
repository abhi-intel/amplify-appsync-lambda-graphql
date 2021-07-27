const axios = require('axios');

exports.handler = async function (event, context) {
  const getData = async (data) => {
    try {
      return await axios.get(`https://swapi.dev/api/${data}`);
    } catch (error) {
      console.error(error);
    }
  };

  const response = await getData(event.arguments.input);

  const result = [];

  if (response && response.data) {
    for (const key in response.data.results) {
      if (response.data.results[key].name) {
        result.push(response.data.results[key].name);
      } else if (response.data.results[key].title) {
        result.push(response.data.results[key].title);
      }
    }
  }

  if (result.length > 0) {
    return `Search results for ${event.arguments.input} [${result.length}]: ${result}`;
  } else {
    return `No search results for ${event.arguments.input}. Try the search options provided above.`;
  }
};

// ECHO Function

// exports.handler = async function (event, context) {
//   return 'Lambda Response: ' + event.arguments.msg;
// };

//DEFAULT

// exports.handler = async (event) => {
//     // TODO implement
//     const response = {
//         statusCode: 200,
//     //  Uncomment below to enable CORS requests
//     //  headers: {
//     //      "Access-Control-Allow-Origin": "*",
//     //      "Access-Control-Allow-Headers": "*"
//     //  },
//         body: JSON.stringify('Hello from Lambda!'),
//     };
//     return response;
// };
