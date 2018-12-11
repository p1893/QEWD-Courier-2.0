/*

 ----------------------------------------------------------------------------
 | courier-conductor: QEWD-Courier Conductor MicroService                   |
 |                                                                          |
 | Copyright (c) 2018 Ripple Foundation Community Interest Company          |
 | All rights reserved.                                                     |
 |                                                                          |
 | http://rippleosi.org                                                     |
 | Email: code.custodian@rippleosi.org                                      |
 |                                                                          |
 | Author: Rob Tweed, M/Gateway Developments Ltd                            |
 |                                                                          |
 | Licensed under the Apache License, Version 2.0 (the "License");          |
 | you may not use this file except in compliance with the License.         |
 | You may obtain a copy of the License at                                  |
 |                                                                          |
 |     http://www.apache.org/licenses/LICENSE-2.0                           |
 |                                                                          |
 | Unless required by applicable law or agreed to in writing, software      |
 | distributed under the License is distributed on an "AS IS" BASIS,        |
 | WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. |
 | See the License for the specific language governing permissions and      |
 |  limitations under the License.                                          |
 ----------------------------------------------------------------------------

  17 September 2018

*/

// TODO This code seems to get executed twice when this module is loaded

const router = require('qewd-router');

const routes_template = [{
  path: '/api/smokeTest',
  method: 'GET',
  handler: require('./handlers/smokeTest')
}]

module.exports = {
  restModule: true,
  init: function() {
    const routes = router.initialise(routes_template, module.exports);
  },

  beforeMicroServiceHandler: function(req, finished) {
    console.log('beforeMicroServiceHandler: ' + JSON.stringify(req));
  },
  
  beforeHandler: function(req, finished) {

    if (!req.headers) {
      finished({error: 'Invalid request'});
      return false;
    }
    /* Where does this belong?
    if (!req.headers['x-requested-with']) {
      finished({error: 'Invalid request'});
      return false;
    }
    if (req.headers['x-requested-with'] !== 'XMLHttpRequest') {
      finished({error: 'Invalid request'});
      return false;
    }*/
  }

};