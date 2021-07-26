// require axios
const axios = require('axios');

exports.handler = async function (event, context) {
  const getData = async (data) => {
    try {
      return await axios.get(`https://swapi.dev/api/${data}`);
    } catch (error) {
      console.error(error);
    }
  };

  const response = await getData(event.arguments.msg);

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
    return `Search results for ${event.arguments.msg} [${result.length}]: ${result}`;
  } else {
    return `No search results for ${event.arguments.msg}. Try the search options provided above.`;
  }
};

// exports.handler = async function (event, context) {
//   return 'Lambda Response: ' + event.arguments.msg;
// };
