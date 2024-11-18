module.exports = {
    id: "visual_regression_tests",
    viewports: [
      { label: "desktop", width: 1920, height: 1080 }
    ],
    scenarios: [], // Lo llenaremos dinámicamente.
    paths: {
      bitmaps_reference: "backstop_data/bitmaps_reference",
      bitmaps_test: "backstop_data/bitmaps_test",
      html_report: "backstop_data/html_report",
      ci_report: "backstop_data/ci_report"
    },
    misMatchThreshold: 4.5,
    engine: "puppeteer",
    report: ["browser", "CI"],
    debug: false
  };
  