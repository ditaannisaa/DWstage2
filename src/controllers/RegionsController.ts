import { Request, Response } from "express"
import RegionsService from "../service/RegionsService"

export default new class RegionsController {
    findRegions(req: Request, res: Response) {
        RegionsService.findRegions(req, res)
    }

    createRegion(req: Request, res: Response) {
        RegionsService.createRegion(req, res)
    }

    updateRegion(req: Request, res: Response) {
        RegionsService.updateRegion(req, res)
    }

    deleteRegion(req: Request, res: Response) {
        RegionsService.deleteRegion(req, res)
    }
}