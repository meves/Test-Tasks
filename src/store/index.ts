import { ModalStore } from "./modal-store";
import { PositionStore } from "./position-store";

export class RootStore {
  modalStore: ModalStore
  positionStore: PositionStore

  constructor() {
    this.modalStore = new ModalStore(this)
    this.positionStore = new PositionStore(this)
  }
}

export const store = new RootStore()