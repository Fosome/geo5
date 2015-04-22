import Location from "models/location"

var _locations = [];

export default class Locations {

  static all() {
    return _locations;
  }

  static save(loc) {
    _locations.unshift(loc);
    return true;
  }
}
