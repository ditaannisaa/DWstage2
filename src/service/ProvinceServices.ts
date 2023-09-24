import { Request, Response } from "express"
import Province from "../databases/models/provinces"
import Regency from "../databases/models/regencies"
import District from "../databases/models/districts"
import Village from "../databases/models/villages"

export default new class ProvinceServices {
    async find(req: Request, res: Response) : Promise<Response> {
        try {
          const province = await Province.findAll()
    
          return res.status(200).json(province)
        } catch (error) {
          return res.status(500).json({ error: "Internal Server Error"})
        }
      }

    async create( req: Request, res: Response) : Promise<Response> {
        try{
            const { name } = req.body
            const province = await Province.create({ name })

            return res.status(200).json(province)
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

    async delete( req: Request, res: Response) : Promise<Response> {
        try{
            const { id } = req.params
            const toDeleteProvince = await Province.findByPk(id)

            if(!toDeleteProvince) 
            return res.status(404).json({ Error: "cannot find province" })

            const province = await toDeleteProvince.destroy()

            return res.status(200).json(province)
        } catch (error) {
            return res.status(500).json({ message: "delete Error"})
        }
    } 
}
