import { RootStore } from ".";

export class ModalStore {
  rootStore: RootStore

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore
  }
}