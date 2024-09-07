import AppService from "../services/AppService";

export default {
  getData: (req: SailRequest, res: SailResponse, next: Function) => {
    return res.status(200).json(AppService.getInfo());
  },
};
