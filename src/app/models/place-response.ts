export type PlaceResponse = {
  id: string;
  name: string;
  description: string;
  location: IGeoJsonPoint;
  tripHref: string;
  tripId: string;
  pictureUrl: string;
};

export type PlaceVoyage = {
  id: string;
  href: string;
  name: string;
  description: string;
  location: Location;
  tripId: string;
  tripHref: string;
  pictureUrl: string;
  createdAt: Date;
  updatedAt: Date;
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
