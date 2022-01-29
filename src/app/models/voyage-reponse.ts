/* eslint-disable @typescript-eslint/naming-convention */
export interface VoyageResponse extends rawVoyageResponse {
  startDate: string;
  endDate: string;
  // QUESTION: comment on ajoute une image comme c'est pas un type fondamental?
  //img: ;
}

export type rawVoyageResponse = {
  createdAt: string; //pas majuscule car  type primitif
  description: string;
  href: string;
  id: string;
  placesCount: number;
  title: string;
  updatedAt: string;
  userHref: string;
  userId: string;
};
