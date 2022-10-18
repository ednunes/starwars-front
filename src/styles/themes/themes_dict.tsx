import { ReactComponent as JediLogo } from '~/assets/icons/themes/jedi_logo.svg';
import { ReactComponent as SithLogo } from '~/assets/icons/themes/sith_logo.svg';
import { ReactComponent as EmpireLogo } from '~/assets/icons/themes/empire_logo.svg';
import { ReactComponent as AllianceLogo } from '~/assets/icons/themes/alliance_logo.svg';
import { ReactComponent as R2D2Logo } from '~/assets/icons/themes/r2d2_logo.svg';

import sith from './sith';
import jedi from './jedi';
import empire from './empire';
import alliance from './alliance';
import r2d2 from './r2d2';

export const THEMES = {
  sith: { style: sith, icon: <SithLogo /> },
  jedi: { style: jedi, icon: <JediLogo /> },
  empire: { style: empire, icon: <EmpireLogo /> },
  alliance: { style: alliance, icon: <AllianceLogo /> },
  r2d2: { style: r2d2, icon: <R2D2Logo /> },
};
