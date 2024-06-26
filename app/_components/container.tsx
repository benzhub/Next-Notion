import { ReactNode } from "react";

function Container({ children }: { children: ReactNode }) {
  return <div className="md:max-w-4xl mx-auto">{children}</div>;
}

export default Container;
