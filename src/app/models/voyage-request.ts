/* eslint-disable @typescript-eslint/naming-convention */
export type Voyages = {
  id?: string;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
};

export type rawVoyage = {
  id: string;
  title: string;
  description: string;
};
