const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (keyword) => {
  try {
    const theaterIXX = await promiseTheaterIXX();
    const theaterVGC = await promiseTheaterVGC();

    const data = await [...theaterIXX, ...theaterVGC];

    const countValue = data.filter(item => {
      return item.hasil == keyword
    }).length;

    return countValue
  } catch (err) {
    console.error(err)
  }
};

module.exports = {
  promiseOutput,
};
