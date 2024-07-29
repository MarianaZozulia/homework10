import {CarData} from "./models/car-model";
import {faker} from "@faker-js/faker"
import {brands, models} from "./constant/Cars-constant";

const brand=getRandomElement(brands);
const model=getRandomElement(models[brand]);
function getRandomElement(arr){
    return arr[Math.floor(Math.random()*arr.length)];
}

export function generateRandomCar(){

    const mileage=Math.round(Math.random()* (150 - 30) + 30);
    return new CarData(brand,model,mileage);
}

export const fakerCar=()=>new CarData(
    brand,
    model,
    faker.number.int({ min: 30, max: 150 })
)