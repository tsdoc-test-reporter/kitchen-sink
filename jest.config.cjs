/** @type {import('@tsdoc-test-reporter/jest').TsDocTestReporterConfig} */
const tsDocReporterOptions = {
  outputFileName: 'reports/jest',
  customTags: [
    {
      tagName: "@parsesCustomTagsLikeThis",
      syntaxKind: 2,
    }
  ],
  /*
   * Do something with results before rendering
   * for example sort by failed results  at the top
   */
  onBeforeRender: (results) => {
    return results.sort((a, b) => {
      if(a.meta.failed > b.meta.failed) {
        return -1;
      }
      if(a.meta.failed < b.meta.failed) {
        return 1;
      }
      return 0;
    }) 
  },
  uiOptions: {
    showTagNameOnBlockTags: false,
    aggregateTagsToFileHeading: "onlyAncestors",
    htmlTitle: 'Custom Title for Report',
    showTextOnTestSummaryMeta: true,
    titleFormatter: (title) => {
      if(title.includes("types")) {
        return "Custom title formatting supported"
      }
      if(title.includes("showcase")) {
        return "Showcase";
      }
      return title.replace(process.cwd(), "").replace("/src/", "");
    },
    tagTextAndIconFormatter: (_tag, tagText) => {
      if(tagText.includes("convert this to icon")) {
        return {
          text: tagText,
          icon: "🤷🏼"
        }
      }
      return { text: tagText };
    },
  },
}

/** @type {import('@jest/types').Config.InitialOptions} */
module.exports = {
  testRegex: "(/__tests__/.*|(\\.|/)jest\\.(test|spec))\\.[jt]sx?$",
  transform: {
    "^.+\\.(t|j)sx?$": [
      "@swc/jest",
      {
        jsc: {
          transform: {
            react: {
              runtime: "automatic",
            },
          },
        },
      },
    ],
  },
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "^components/(.*)": "<rootDir>/src/components/$1",
    "^common/(.*)": "<rootDir>/src/common/$1",
  },
  setupFilesAfterEnv: ['<rootDir>/src/test/jest-setup.ts'],
  reporters: [
    "default",
    ["@tsdoc-test-reporter/jest", tsDocReporterOptions]
  ]
};