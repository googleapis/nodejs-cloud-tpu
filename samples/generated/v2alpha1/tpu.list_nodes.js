// Copyright 2021 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

function main(parent) {
  // [START tpu_v2alpha1_generated_Tpu_ListNodes_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The parent resource name.
   */
  // const parent = 'abc123'
  /**
   *  The maximum number of items to return.
   */
  // const pageSize = 1234
  /**
   *  The next_page_token value returned from a previous List request, if any.
   */
  // const pageToken = 'abc123'

  // Imports the Tpu library
  const {TpuClient} = require('@google-cloud/tpu').v2alpha1;

  // Instantiates a client
  const tpuClient = new TpuClient();

  async function callListNodes() {
    // Construct request
    const request = {
      parent,
    };

    // Run request
    const iterable = await tpuClient.listNodesAsync(request);
    for await (const response of iterable) {
      console.log(response);
    }
  }

  callListNodes();
  // [END tpu_v2alpha1_generated_Tpu_ListNodes_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
