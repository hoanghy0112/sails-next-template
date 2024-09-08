import AppService from "../services/AppService";

export default {
  getData: (req: SailsRequest, res: SailsResponse, next: Function) => {
    return res.status(200).json(AppService.getInfo());
  },
};
