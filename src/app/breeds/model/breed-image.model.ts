import { Breeds } from "./breed.model";
export interface BreedImage {
  id?: string;
  width?: number;
  height?: number;
  breeds?: Breeds[],
  url?: string;
}
