export type VoyageResponse = {
  createdAt: Date; //majuscule car pas type primitif au contraire de string, number, boolean
  description: string;
  href: string;
  id: string;
  placesCount: number;
  title: string;
  updatedAt: Date;
  userHref: string;
  userId: string;
};
