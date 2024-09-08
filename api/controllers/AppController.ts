import AppService from "../services/AppService";

export default {
  getData: (req: any, res: any, next: Function) => {
    return res.status(200).json(AppService.getInfo());
  },
};
