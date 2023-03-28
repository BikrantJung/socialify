import Dropdown from "../dropdown/Dropdown";
import Logo from "../logo/Logo";
import SearchBox from "../search/Search";
import { useRouter } from "next/router";
function Navbar() {
  const router = useRouter();
  const pageName = router.pathname.split("/").pop();

  return (
    <div className="sticky top-0 grid h-20 grid-cols-12 items-center border-b bg-white p-4 px-8">
      <div className="col-span-2">
        <Logo />
      </div>
      <div className="col-span-10 ml-32 flex items-center">
        <SearchBox placeholder="Search..." />
        <div className="ml-auto flex items-center gap-2 ">
          <Dropdown></Dropdown>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
