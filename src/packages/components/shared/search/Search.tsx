import { Combobox } from "@headlessui/react";
import { IconBackspace, IconSearch } from "@tabler/icons-react";
import clsx from "clsx";
import Image from "next/legacy/image";
import { useRef, useState } from "react";

const people = [
  { id: 1, name: "Jung_Bikrant" },
  { id: 2, name: "Mike_A" },
  { id: 3, name: "ramen" },
];
interface SearchBoxProps {
  placeholder: string;
  placement?: "navbar" | "create-post";
  width?: string;
}
export default function SearchBox({ placeholder, placement }: SearchBoxProps) {
  const [selected, setSelected] = useState();
  const [queryWord, setQueryWord] = useState("");
  const comboBoxInput = useRef<HTMLInputElement>(null);

  return (
    <Combobox
      as="div"
      className={"max-w-xs"}
      value={selected}
      onChange={setSelected}
    >
      {({ open }) => (
        <div
          className={clsx([
            "relative max-w-3xl rounded-lg border bg-neutral-50 hover:border-blue-400 hover:bg-white",

            {
              " rounded-3xl rounded-bl-none rounded-br-none border-b-white focus-within:border-b-white hover:border-b-white focus:border-b-white ":
                open,
              " rounded-lg py-1 ring-white focus-within:ring-1":
                placement === "create-post",
            },
          ])}
        >
          {queryWord && (
            <IconBackspace
              onClick={() => setQueryWord("")}
              className="icon absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer "
            />
          )}
          <div
            className={`flex items-center ${
              placement === "navbar" ? "px-4" : "px-2"
            }`}
          >
            <IconSearch className="icon h-6 w-6  " />

            <Combobox.Input
              as="input"
              ref={comboBoxInput}
              className={
                "input w-full border border-none bg-transparent text-sm focus:shadow-none focus-visible:ring-0"
              }
              placeholder={placeholder}
              onChange={(e) => {
                return;
              }}
            />
          </div>
          <Combobox.Options
            className={
              "absolute z-10 -mt-[0.10rem] max-h-96 w-full overflow-auto rounded-bl-md rounded-br-md border border-l-0 border-r-0 border-b-0 border-t-2 bg-neutral-50 py-2 shadow-lg ring-1 ring-white dark:ring-0"
            }
          >
            <h3 className="mb-1 px-3 text-xs font-semibold text-gray-600">
              Users
            </h3>
            <div className="mb-1 flex flex-col">
              {people.map((item) => {
                return (
                  <Combobox.Option key={item.id} value={item.name}>
                    {({ active }) => {
                      return (
                        <SearchResult
                          avatar=""
                          name={item.name}
                          active={active}
                        />
                      );
                    }}
                  </Combobox.Option>
                );
              })}
            </div>
            {placement === "navbar" && (
              <>
                <hr className="border-t-2" />
                <h3 className="heading-text mt-1 px-3">People</h3>
                <div className="flex flex-col">
                  {people.map((item) => {
                    return (
                      <Combobox.Option key={item.id} value={item.name}>
                        {({ active }) => {
                          return (
                            <SearchResult
                              avatar=""
                              name={item.name}
                              active={active}
                            />
                          );
                        }}
                      </Combobox.Option>
                    );
                  })}
                </div>
              </>
            )}
          </Combobox.Options>
        </div>
      )}
    </Combobox>
  );
}

interface SearchResult {
  avatar: string;
  name: string;
  members?: string;
  karma?: string;
  active: boolean;
}
function SearchResult({ avatar, name, karma, members, active }: SearchResult) {
  return (
    <div
      className={`flex cursor-pointer items-center gap-2 py-2 px-5 hover:bg-neutral-100 ${
        active ? "bg-neutral-200" : ""
      }`}
    >
      <div className="relative h-6 w-6 overflow-hidden rounded-full">
        <Image
          layout="fill"
          alt="user"
          src="https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        />
      </div>
      <div className="flex flex-col">
        <h4 className="text-sm font-medium text-gray-700">{`u/${name}`}</h4>
        <p className="text-[10px] text-gray-400">5 karma</p>
      </div>
    </div>
  );
}
