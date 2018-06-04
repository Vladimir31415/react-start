import { MovieItem } from "../interfaces/main";

export function divideIntoColumns(data: MovieItem[], cols: number) {
    let arData: Array<MovieItem[]> = [];
    const rows = data.length / cols;
    for(let row = 0; row < rows; row++) {
        arData.push(data.filter((val, ind) => ind >= row*cols && ind < row*cols+cols));
    } 
    return arData;
}