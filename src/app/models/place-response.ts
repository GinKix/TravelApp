export type PlaceResponse = {
  id: string;
  name: string;
  description: string;
  location: IGeoJsonPoint;
  tripHref: string;
  tripId: string;
  pictureUrl: string;
};

export interface IPlace {
  name: string;
  description: string;
  tripHref: string;
  tripID: string;
  location: IGeoJsonPoint;
}

export interface IGeoJsonPoint {
  type: string;
  coordinates: number[];
}
