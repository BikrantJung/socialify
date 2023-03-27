import Dropdown from "../dropdown/Dropdown";
import Logo from "../logo/Logo";
import SearchBox from "../search/Search";
import { useRouter } from "next/router";
function Navbar() {
  const router = useRouter();
  const pageName = router.pathname.split("/").pop();

  return (
    <div className="flex items-center border-b p-4">
      <div className="flex-1">
        <Logo />
      </div>
      <div className="flex flex-[4_4_0%] items-center">
        <SearchBox placeholder="Search..." />
        <div className="ml-auto flex items-center gap-2 ">
          <Dropdown></Dropdown>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
