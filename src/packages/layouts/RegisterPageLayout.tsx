import Image from "next/image";
import React from "react";
import NatureImage from "../../assets/nature.jpg";
function RegisterPageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen bg-red-400">
      <div className="flex-1 relative">
        <Image
          src={NatureImage}
          fill
          className="object-cover"
          alt="Banner Image"
        />
      </div>
      <div className="flex-1 bg-blue-300">{children}</div>
    </div>
  );
}

export default RegisterPageLayout;
