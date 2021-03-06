const moment = require("moment");
import ageData from "../ages";
const age = ageData.ArcticFuture.key;

export default {
  key: "transester_gas",
  age: age,
  building: {
    resources: {
      coins: 293000,
      supplies: 638000
    },
    time: moment.duration({ hours: 15 }),
    size: {
      length: 5,
      width: 5
    },
    population: 4330,
    connection: 2
  },
  unrefined: "gas"
};
