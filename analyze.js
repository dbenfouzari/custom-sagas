const scanner = require("sonarqube-scanner");

const {
  SONAR_HOST = 'http://localhost',
  SONAR_PORT = '9000'
} = process.env;
//
// const SONAR_HOST = process.env.SONAR_HOST || 'http://localhost';
// const SONAR_PORT = process.env.SONAR_PORT || '9000';

const serverUrl = `${SONAR_HOST}:${SONAR_PORT}`;

scanner(
  {
    // this example uses local instance of SQ
    serverUrl,
    options: {
      "sonar.projectVersion": "0.0.1",
      "sonar.sources": "src",
      "sonar.tests": "__tests__",
      "sonar.typescript.lcov.reportPaths": "./coverage/lcov.info",
      "sonar.testExecutionReportPaths": "./test-report.xml"
    },
  },
  () => {
    // callback is required
  }
);
