import { proxy } from "valtio"

const store = proxy<{ sideBarOpen: boolean }>({
  sideBarOpen: false,
})

export default store
