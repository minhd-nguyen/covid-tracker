/*
 * Copyright 2020 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { bindReporter } from './lib/bindReporter.js';
import { getFirstHidden } from './lib/getFirstHidden.js';
import { initMetric } from './lib/initMetric.js';
import { observe } from './lib/observe.js';
import { onHidden } from './lib/onHidden.js';
export const getFID = (onReport) => {
    const metric = initMetric('FID');
    const firstHidden = getFirstHidden();
    const entryHandler = (entry) => {
        // Only report if the page wasn't hidden prior to the first input.
        if (entry.startTime < firstHidden.timeStamp) {
            metric.value = entry.processingStart - entry.startTime;
            metric.entries.push(entry);
            metric.isFinal = true;
            report();
        }
    };
    const po = observe('first-input', entryHandler);
    const report = bindReporter(onReport, metric, po);
    onHidden(() => {
        if (po) {
            po.takeRecords().map(entryHandler);
            po.disconnect();
        }
    }, true);
    if (!po) {
        if (window.perfMetrics && window.perfMetrics.onFirstInputDelay) {
            window.perfMetrics.onFirstInputDelay((value, event) => {
                // Only report if the page wasn't hidden prior to the first input.
                if (event.timeStamp < firstHidden.timeStamp) {
                    metric.value = value;
                    metric.isFinal = true;
                    metric.entries = [{
                            entryType: 'first-input',
                            name: event.type,
                            target: event.target,
                            cancelable: event.cancelable,
                            startTime: event.timeStamp,
                            processingStart: event.timeStamp + value,
                        }];
                    report();
                }
            });
        }
    }
};
