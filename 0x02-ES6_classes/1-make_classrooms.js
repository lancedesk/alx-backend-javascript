import ClassRoom from './0-classroom';

/*
 * Initialize classroom objects with given sizes.
 *
 * Returns an array of classroom objects.
 */
export default function initializeRooms() {
  return [19, 20, 34].map((size) => new ClassRoom(size));
}
