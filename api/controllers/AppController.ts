import AppService from "../services/AppService";

export default {
  getData: (req: any, res: any, next: Function) => {
    return res.json(AppService.getInfo());
  },
};
