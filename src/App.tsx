/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import RootLayout from '../app/layout';
import HomePage from '../app/page';
import CapabilitiesPage from '../app/capabilities/page';
import RigorPage from '../app/rigor/page';
import PricingPage from '../app/pricing/page';
import TeardownsPage from '../app/teardowns/page';
import IntakePage from '../app/intake/page';
import { useCurrentPath } from './navigation';

export default function App() {
  const pathname = useCurrentPath();

  let PageComponent = HomePage;

  if (pathname === '/capabilities') {
    PageComponent = CapabilitiesPage;
  } else if (pathname === '/rigor' || pathname === '/rigor-audits') {
    PageComponent = RigorPage;
  } else if (pathname === '/pricing') {
    PageComponent = PricingPage;
  } else if (pathname === '/teardowns' || pathname === '/work') {
    PageComponent = TeardownsPage;
  } else if (pathname === '/intake' || pathname === '/engage' || pathname === '/specification-intake') {
    PageComponent = IntakePage;
  }

  return (
    <RootLayout>
      <PageComponent />
    </RootLayout>
  );
}
