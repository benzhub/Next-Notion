'use client';

import { ReactNode } from 'react';
import { Provider } from 'jotai';

function JotaiProvider({ children }: { children: ReactNode }) {
  return <Provider>{children}</Provider>;
}

export default JotaiProvider;
