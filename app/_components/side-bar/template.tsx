import { ReactNode } from "react";

function SideBarTemplate({
  isOpen,
  children,
}: {
  isOpen: boolean;
  children: ReactNode;
}) {
  return (
    <div
      className={`p-4 overflow-y-scroll bg-neutral-content transition-all duration-400 delay-50 ${
        isOpen
          ? "!bg-[#eaeaec] absolute md:static top-0 w-full md:w-auto"
          : "invisible h-0"
      } md:visible md:w-auto md:h-auto`}
    >
      <div className="md:max-w-[240px] lg:max-w-[280px] h-[100dvh] mx-auto">
        <ul className="flex flex-col gap-4">{children}</ul>
      </div>
    </div>
  );
}

export default SideBarTemplate;
