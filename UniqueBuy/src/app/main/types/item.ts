export type Jewelry = {
    _id: string,
    name: string,
    description: string,
    price: number,
    stock_quantity: number,
    image_url: string,
    artisan_id: string,
    material: string,
    size: string,
    type: string,
    gemstone: string,
    weight: number
}
export type Artwork = {
    _id: string,
    name: string,
    description: string,
    price: number,
    stock_quantity: number,
    image_url: string,
    artisan_id: string,
    medium: string,
    dimensions: string,
    framing_options: string,
    style: string,
    year_created: number,
    edition: string
}
export type Clothes = {
    _id: string,
    name: string,
    description: string,
    price: number,
    stock_quantity: number,
    image_url: string,
    artisan_id: string,
    material: string
    size: string,
    gender: string,
    color: string,
    fit: string,
    care_instructions: string
}
export type Pottery = {
    _id: string,
    name: string,
    description: string,
    price: number,
    stock_quantity: number,
    image_url: string,
    artisan_id: string,
    material: string,
    dimensions: string,
    finish: string,
    usage: string,
    weight: number,
    customizable: boolean
}
export type Furniture = {
    _id: string,
    name: string,
    description: string,
    price: number,
    stock_quantity: number,
    image_url: string,
    artisan_id: string,
    material: string,
    dimensions: string,
    weight: number,
    type: string,
    assembly_required: boolean,
    load_capacity: number
} 
export type commonType = Jewelry | Artwork | Clothes | Pottery | Furniture;
export type commonTypeArray = Jewelry[] | Artwork[] | Clothes[] | Pottery[] | Furniture[];