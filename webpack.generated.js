/**
 * NOTICE: this is an auto-generated file
 *
 * This file has been generated by the `flow:prepare-frontend` maven goal.
 * This file will be overwritten on every run. Any custom changes should be made to webpack.config.js
 */
const fs = require('fs');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const {BabelMultiTargetPlugin} = require('webpack-babel-multi-target-plugin');

const path = require('path');
const baseDir = path.resolve(__dirname);
// the folder of app resources (main.js and flow templates)
const frontendFolder = require('path').resolve(__dirname, './frontend');

const fileNameOfTheFlowGeneratedMainEntryPoint = require('path').resolve(__dirname, 'target/frontend/generated-flow-imports.js');
const mavenOutputFolderForFlowBundledFiles = require('path').resolve(__dirname, 'target/classes/META-INF/VAADIN');

// public path for resources, must match Flow VAADIN_BUILD
const build = 'build';
// public path for resources, must match the request used in flow to get the /build/stats.json file
const config = 'config';
// folder for outputting index.js bundle, etc.
const buildFolder = `${mavenOutputFolderForFlowBundledFiles}/${build}`;
// folder for outputting stats.json
const confFolder = `${mavenOutputFolderForFlowBundledFiles}/${config}`;
// file which is used by flow to read templates for server `@Id` binding
const statsFile = `${confFolder}/stats.json`;
// make sure that build folder exists before outputting anything
const mkdirp = require('mkdirp');
mkdirp(buildFolder);
mkdirp(confFolder);

const devMode = process.argv.find(v => v.indexOf('webpack-dev-server') >= 0);
let stats;

exports = {
  frontendFolder: `${frontendFolder}`,
  buildFolder: `${buildFolder}`,
  confFolder: `${confFolder}`
};

module.exports = {
  mode: 'production',
  context: frontendFolder,
  entry: {
    bundle: fileNameOfTheFlowGeneratedMainEntryPoint
  },

  output: {
    filename: `${build}/vaadin-[name]-[contenthash].cache.js`,
    path: mavenOutputFolderForFlowBundledFiles
  },

  resolve: {
    alias: {
      Frontend: frontendFolder
    }
  },

  devServer: {
    // webpack-dev-server serves ./ ,  webpack-generated,  and java webapp
    contentBase: [mavenOutputFolderForFlowBundledFiles, 'src/main/webapp'],
    after: function(app, server) {
      app.get(`/stats.json`, function(req, res) {
        res.json(stats.toJson());
      });
      app.get(`/stats.hash`, function(req, res) {
        res.json(stats.toJson().hash.toString());
      });
      app.get(`/stop`, function(req, res) {
        // eslint-disable-next-line no-console
        console.log("Stopped 'webpack-dev-server'");
        process.exit(0);
      });
    }
  },

  module: {
    rules: [
      { // Files that Babel has to transpile
        test: /\.js$/,
        use: [BabelMultiTargetPlugin.loader()]
      },
      {
        test: /\.css$/i,
        use: ['raw-loader']
      }
    ]
  },
  performance: {
    maxEntrypointSize: 2097152, // 2MB
    maxAssetSize: 2097152 // 2MB
  },
  plugins: [
    // Transpile with babel, and produce different bundles per browser
    new BabelMultiTargetPlugin({
      babel: {
        presetOptions: {
          useBuiltIns: false // polyfills are provided from webcomponents-loader.js
        }
      },
      targets: {
        'es6': { // Evergreen browsers
          browsers: [
            // It guarantees that babel outputs pure es6 in bundle and in stats.json
            // In the case of browsers no supporting certain feature it will be
            // covered by the webcomponents-loader.js
            'last 1 Chrome major versions'
          ],
        },
        'es5': { // IE11
          browsers: [
            'ie 11'
          ],
          tagAssetsWithKey: true, // append a suffix to the file name
        }
      }
    }),

    // Generates the stats file for flow `@Id` binding.
    function (compiler) {
      compiler.hooks.afterEmit.tapAsync("FlowIdPlugin", (compilation, done) => {
        if (!devMode) {
          // eslint-disable-next-line no-console
          console.log("         Emitted " + statsFile)
          fs.writeFile(statsFile, JSON.stringify(compilation.getStats().toJson(), null, 1), done);
        } else {
          // eslint-disable-next-line no-console
          console.log("         Serving the 'stats.json' file dynamically.");
          stats = compilation.getStats();
          done();
        }
      });
    },

    // Copy webcomponents polyfills. They are not bundled because they
    // have its own loader based on browser quirks.
    new CopyWebpackPlugin([{
      from: `${baseDir}/node_modules/@webcomponents/webcomponentsjs`,
      to: `${build}/webcomponentsjs/`
    }]),
  ]
};
