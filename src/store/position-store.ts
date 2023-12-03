import { makeAutoObservable } from "mobx";
import { RootStore } from ".";
import { Coords } from "./types";

export class PositionStore {
  rootStore: RootStore

  coords: Coords = { posX: 0, posY: 0 }

  constructor(rootStore: RootStore) {
    makeAutoObservable(this, {}, {autoBind: true})
    this.rootStore = rootStore
  }

  setCoords(coords: Coords) {
    this.coords = coords
  }
}