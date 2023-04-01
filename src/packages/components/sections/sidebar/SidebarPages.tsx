import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import { sidebarUserPages } from "./hooks/sidebarUserPages";
import ProfileIcon from "./ProfileIcon";

function SidebarPages() {
  const router = useRouter();
  return (
    <div className="flex flex-col rounded bg-white">
      {sidebarUserPages.map((data) => {
        return (
          <Link href={data.pageLink} key={data.pageTitle}>
            <div
              className={clsx([
                "relative  flex items-center gap-4 border-b px-2 py-2 transition before:absolute before:left-0 before:h-full  before:w-[2px] hover:bg-neutral-50",
              ])}
            >
              <ProfileIcon src={data.pageImage} profileType="page" />
              <p className="w-32 truncate text-sm">{data.pageTitle}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default SidebarPages;
