import { useSnapshot } from "valtio"
import store from "~/lib/valtio"

export default function useSideBar() {
  const { sideBarOpen } = useSnapshot(store)

  function toggleSideBar() {
    store.sideBarOpen = !sideBarOpen
  }

  return { sideBarOpen, toggleSideBar }
}
