import { containerTemplate } from './container.mock';
import { containerCloudTemplate } from './container-cloud.mock';
import { containerMultusTemplate } from './container-multus.mock';

import { pxeTemplate } from './pxe.mock';
import { pxeDataVolumeTemplate } from './pxe-dv.mock';
import { pxePvcTemplate } from './pxe-pvc.mock';

import { urlTemplate } from './url.mock';
import { urlCustomFlavorTemplate } from './url-flavor.mock';
import { urlNoNetworkTemplate } from './url-nonetwork.mock';

export {
  containerTemplate,
  containerCloudTemplate,
  containerMultusTemplate,
  pxeTemplate,
  pxeDataVolumeTemplate,
  pxePvcTemplate,
  urlTemplate,
  urlCustomFlavorTemplate,
  urlNoNetworkTemplate,
};

export const userTemplates = [
  containerTemplate,
  containerCloudTemplate,
  containerMultusTemplate,
  pxeTemplate,
  pxeDataVolumeTemplate,
  pxePvcTemplate,
  urlTemplate,
  urlCustomFlavorTemplate,
  urlNoNetworkTemplate,
];
