
import TsDocTestReporter, { coreDefaults } from '@tsdoc-test-reporter/vitest';
import type { Reporter } from 'vitest/reporters';
import type { File } from 'vitest';

export default class CustomReporter implements Reporter {
	async onFinished(files?: File[]) {
		new TsDocTestReporter({
			outputFileName: 'reports/index',
			applyTags: [...coreDefaults.applyTags, "@flaky"],
			customTags: [
				{
					tagName: "@flaky",
					syntaxKind: 2,
				}
			],
			uiOptions: {
				hideAncestorTitles: true,
				showTextOnTestSummaryMeta: true,
				aggregateTagsToFileHeading: "onlyAncestors",
				title: 'TSDoc Test Report',
				formatTitle: (title) => title.replace(process.cwd(), "").replace("/src/", "")
			},
		}).onFinished(files);
	}
}