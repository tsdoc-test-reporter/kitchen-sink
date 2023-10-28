
import TsDocTestReporter from '@tsdoc-test-reporter/vitest';
import type { Reporter } from 'vitest/reporters';
import type { File } from 'vitest';

export default class CustomReporter implements Reporter {
	async onFinished(files?: File[]) {
		new TsDocTestReporter({
			outputFileName: 'reports/index',
			repoUrl: "https://github.com/tsdoc-test-reporter/kitchen-sink/blob/main/src/",
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
				buildInfo: {
					text: "Build",
					url: `https://github.com/tsdoc-test-reporter/kitchen-sink/actions/runs/${process.env.GITHUB_RUN_ID}`,
					position: "right",
				},
				showTagNameOnBlockTags: false,
				aggregateTagsToFileHeading: "onlyAncestors",
				htmlTitle: 'Custom Title for Report',
				showTextOnTestSummaryMeta: true,
				expandErrorDetails: true,
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
		}).onFinished(files);
	}
}