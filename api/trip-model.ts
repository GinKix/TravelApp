/**
 * Represents a Trip model as used throughout the application
 */
export class Trip {
  id?: string;
  title: string;
  description: string;
  // Custom properties. Replace with all the ones you want.
  startDate: string;
  endDate: string;
}

/**
 * Represents a Trip model as saved and returned by the API
 */
export class RawTrip {
  id?: string;
  title: string;
  description: string;
}

/**
 * Converts a RawTrip model to a Trip model.
 *
 * Should be used whenever we get one or more trips from the API.
 *
 * @param raw The RawTrip model from the API
 * @return An instance of our custom Trip model
 */
export function rawTripToTrip(raw: RawTrip): Trip {
  const decodedData = JSON.parse(raw.description);
  return {
    id: raw.id,
    title: raw.title,
    description: decodedData.description,
    // Replace following lines with you custom properties
    startDate: decodedData.startDate,
    endDate: decodedData.endDate,
  };
}

/**
 * Converts a Trip model to a RawTrip model.
 *
 * Should be used whenever we want to send data to the API.
 *
 * @param trip The custom Trip model.
 * @returns An instance of RawTrip destined to the API.
 */
export function tripToRawTrip(trip: Trip): RawTrip {
  const encodedData = JSON.stringify({
    description: trip.description,
    // Replace following lines with your custom properties
    endDate: trip.endDate,
    startDate: trip.startDate,
  });
  return {
    id: trip.id,
    title: trip.title,
    description: encodedData,
  };
}
