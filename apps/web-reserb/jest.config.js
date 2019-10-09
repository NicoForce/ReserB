module.exports = {
  name: 'web-reserb',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/web-reserb',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
