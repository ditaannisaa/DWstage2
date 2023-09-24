import { Router } from "express";
import ProvinceController from "../controllers/ProvinceController";
import RegionsController from "../controllers/RegionsController";

const router = Router()

router.get('/get/regions', RegionsController.findRegions)
router.get('/provinces', ProvinceController.find)
router.post('/create/region', RegionsController.createRegion)
router.post('/province', ProvinceController.create)
router.patch('/province/:id', ProvinceController.update)
router.patch('/update/region', RegionsController.updateRegion)
router.delete('/province/:id', ProvinceController.delete)
router.delete('/delete/region', RegionsController.deleteRegion)

export default router