const scanner = require("sonarqube-scanner");

scanner(
  {
    // this example uses local instance of SQ
    serverUrl: "http://localhost:9000/",
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
