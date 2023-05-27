import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import { Head } from "./components/Head";
import { useNextSeoProps } from "./config/useNextSeoProps";


const config: DocsThemeConfig = {
  
  project: {
    link: "https://github.com/mkrtchian/reading-notes",
  },
  docsRepositoryBase: "https://github.com/mkrtchian/reading-notes/blob/main",
 
  head: Head,

  useNextSeoProps,
  i18n: [],

  footer: {
    text: (
      <span>
        MIT {new Date().getFullYear()} ©{' '}
        <a href="https://nextra.site" target="_blank">
          Template
        </a>
        .
      </span>
    )
  },
  gitTimestamp:false


};

export default config;
