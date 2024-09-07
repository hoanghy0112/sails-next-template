import AppService from "../services/AppService";

export default {
  getData: (req, res) => {
    return res.json(AppService.getInfo());
  },
};
