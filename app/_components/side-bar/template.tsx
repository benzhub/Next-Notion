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
      className={`p-4 h-full overflow-y-scroll bg-neutral-content transition-all duration-400 delay-50 ${
        isOpen
          ? "!bg-[#eaeaec] absolute md:static top-0 w-full md:w-auto"
          : "w-0 h-0 invisible md:w-auto md:h-auto md:visible"
      }`}
    >
      <div className="md:max-w-[240px] lg:max-w-[280px] h-[100dvh] mx-auto">
        <ul className="flex flex-col gap-4">{children}</ul>
      </div>
    </div>
  );
}

export default SideBarTemplate;
