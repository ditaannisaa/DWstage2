export interface IProvinces {
    id: number
    name: string
}

export interface IRegencies {
    id: number
    regency: string
    provinceId: number
}

export interface IDistricts {
    id: number
    district: string
    regencyId: number
}

export interface IVillages {
    id: number
    village: string
    districId: number
}
