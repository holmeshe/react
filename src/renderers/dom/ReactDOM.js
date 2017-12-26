/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @providesModule ReactDOM
 */

/* globals __REACT_DEVTOOLS_GLOBAL_HOOK__*/

'use strict';

var ReactDOMComponentTree = require('ReactDOMComponentTree');
var ReactDefaultInjection = require('ReactDefaultInjection');
var ReactMount = require('ReactMount');
var ReactReconciler = require('ReactReconciler');
var ReactUpdates = require('ReactUpdates');
var ReactVersion = require('ReactVersion');

var findDOMNode = require('findDOMNode');
var getHostComponentFromComposite = require('getHostComponentFromComposite');
var renderSubtreeIntoContainer = require('renderSubtreeIntoContainer');
var warning = require('warning');

ReactDefaultInjection.inject();

var ReactDOM = {
  findDOMNode: findDOMNode,
  render: ReactMount.render,
  unmountComponentAtNode: ReactMount.unmountComponentAtNode,
  version: ReactVersion,

  /* eslint-disable camelcase */
  unstable_batchedUpdates: ReactUpdates.batchedUpdates,
  unstable_renderSubtreeIntoContainer: renderSubtreeIntoContainer,
  /* eslint-enable camelcase */
};

module.exports = ReactDOM;
