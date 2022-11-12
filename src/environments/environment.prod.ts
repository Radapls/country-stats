import { ModuleWithProviders, VERSION } from '@angular/core';

export const environment = {
  production: true,
  angularVersion: VERSION
};

(window as any).wenv = environment;

export const storeTools: Array<ModuleWithProviders<any>> = [];
