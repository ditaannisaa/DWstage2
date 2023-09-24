import { Request, Response } from "express"
import Province from "../databases/models/provinces"
import Regency from "../databases/models/regencies"
import District from "../databases/models/districts"
import Village from "../databases/models/villages"

export default new class ProvinceServices {
     async findRegions( req: Request, res: Response) : Promise<Response> {
        try{
            const areaType = req.query.areaType
            const areaId = Number(req.query.id);
            var result = null;

            switch(areaType) {
                case "province":
                    result = await Regency.findAll({
                        where: {
                        provinceId: areaId
                        }
                    });
                break;
                case "regency":
                    result = await District.findAll({
                        where: {
                        regencyId: areaId
                        }
                    })
                break;
                case "district":
                    result = await Village.findAll({
                        where: {
                        districtId: areaId
                        }
                    })
                break;
                default:
                    return res.status(400).json({ error: "area type not found"})
            }

            return res.status(200).json(result)
        } catch (error) {
            return res.status(500).json({ error: "Server Error"})
        }
    }

    async createRegion( req: Request, res: Response) : Promise<Response> {
        try{
            const { regency, district, village, addAreaType} = req.body
            var areaName = null

            switch(addAreaType) {
                case "regency":
                    const provinceId = Number(req.body);
                    areaName = await Regency.create({ regency, provinceId})
                break;
                case "district":
                    const regencyId = Number(req.body);
                    areaName = await District.create({ district, regencyId })
                break;
                case "village":
                    const districtId = Number(req.body);
                    areaName = await Village.create({ village, districtId })
                break;
                default:
                    return res.status(400).json({ error: "area type not found"})
            }

            return res.status(200).json(addAreaType)
        } catch (error) {
            return res.status(500).json({ message: "create Error"})
        }
    }

    async update( req: Request, res: Response) : Promise<Response> {
        try{
            const id: number = Number(req.params.id)
            const toUpdateProvince = await Province.findByPk(id)

            if(!toUpdateProvince) 
            return res.status(404).json({ Error: "cannot find province" })

            const updateProvince = req.body
            const province = await toUpdateProvince.update(updateProvince)

            return res.status(404).json(province)
        } catch (error) {
            return res.status(500).json({ message: "update Error"})
        }
    }

    async updateRegion( req: Request, res: Response) : Promise<Response> {
        try{
            const regionType = req.query.regionType
            const areaId = Number(req.query.id)
            var updateRegion = null

            switch(regionType) {
                case "regency":
                    const updateRegency = await Regency.findByPk(areaId)

                    if(!updateRegency) 
                    return res.status(404).json({ Error: "cannot find regency" })

                    const toUpdateRegency = req.body
                    const regencyUpdating = await updateRegency.update(toUpdateRegency)
                    updateRegion = res.json(regencyUpdating)
                break;
                case "district":
                    const updateDistrict = await District.findByPk(areaId)

                    if(!updateDistrict) 
                    return res.status(404).json({ Error: "cannot find district" })

                    const toUpdateDistrict = req.body
                    const districtUpdating = await updateDistrict.update(toUpdateDistrict)
                    updateRegion = res.json(districtUpdating)
                break;
                case "village":
                    const updateVillage = await Village.findByPk(areaId)

                    if(!updateVillage) 
                    return res.status(404).json({ Error: "cannot find village" })

                    const toUpdateVillage = req.body
                    const villageUpdating = await updateVillage.update(toUpdateVillage)
                    updateRegion = res.json(villageUpdating)
                break;
                default:
                    return res.status(400).json({ error: "region type not found"})
            }

            return res.json(regionType)
        } catch (error) {
            return res.status(500).json({ message: "update Error"})
        }
    }

    async deleteRegion( req: Request, res: Response) : Promise<Response> {
        try{
            const regionType = req.query.regionType
            const areaId = Number(req.query.id)
            var deleteRegion = null

            switch(regionType) {
                case "regency":
                    const deleteRegency = await Regency.findByPk(areaId)

                    if(!deleteRegency) 
                    return res.status(404).json({ Error: "cannot find regency" })

                    const toDeleteRegency = await deleteRegency.destroy()
                    deleteRegion = res.json(toDeleteRegency)
                break;
                case "district":
                    const deleteDistrict = await Regency.findByPk(areaId)
                    
                    if(!deleteDistrict) 
                    return res.status(404).json({ Error: "cannot find regency" })

                    const toDeleteDistrict = await deleteDistrict.destroy()
                    deleteRegion = res.json(toDeleteDistrict)
                break;
                case "village":
                    const deleteVillage = await Regency.findByPk(areaId)
                    
                    if(!deleteVillage) 
                    return res.status(404).json({ Error: "cannot find regency" })

                    const toDeleteVillage = await deleteVillage.destroy()
                    deleteRegion = res.json(toDeleteVillage)
                break;
                default:
                    return res.status(400).json({ error: "region type not found"})
            }

            return res.status(200).json(deleteRegion)
        } catch (error) {
            return res.status(500).json({ message: "delete Error"})
        }
    }    
}
