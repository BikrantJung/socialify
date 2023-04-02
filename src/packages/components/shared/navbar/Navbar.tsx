import { IUserProfile } from "@/packages/types/auth/profile.types";
import { useRouter } from "next/router";
import Logo from "../logo/Logo";
import SearchBox from "../search/Search";
import NavbarDropdown from "./NavbarDropdown";
function Navbar({ user }: { user: IUserProfile }) {
  const router = useRouter();
  const pageName = router.pathname.split("/").pop();

  return (
    <div className="sticky top-0 grid h-20 grid-cols-12 items-center border-b bg-white p-4 px-8">
      <div className="col-span-2">
        <Logo />
      </div>
      <div className="col-start-4 col-end-13 flex items-center">
        <SearchBox placeholder="Search..." />
        <div className=" ml-auto flex items-center gap-2">
          {user ? (
            <div>
              <NavbarDropdown />
            </div>
          ) : (
            <div>
              <p>No user</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
