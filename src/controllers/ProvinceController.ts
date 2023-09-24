import { Request, Response } from "express"
import ProvinceServices from "../service/ProvinceServices"

export default new class RegionsController {
    find(req: Request, res: Response) {
        ProvinceServices.find(req, res)
    }

    create(req: Request, res: Response) {
        ProvinceServices.create(req, res)
    }

    update(req: Request, res: Response) {
        ProvinceServices.update(req, res)
    }

    delete(req: Request, res: Response) {
        ProvinceServices.delete(req, res)
    }
}