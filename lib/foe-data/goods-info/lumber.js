const moment = require("moment");
import ageData from "../ages";
const age = ageData.BronzeAge.key;

export default {
  key: "lumber",
  age: age,
  building: {
    resources: {
      coins: 340,
      supplies: 490
    },
    time: moment.duration({ minutes: 30 }),
    size: {
      length: 3,
      width: 3
    },
    population: 108,
    connection: 1
  },
  unrefined: null
};
