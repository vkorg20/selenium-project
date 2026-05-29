import type { Config } from "@level-ci/cli";
export default {
  organization: "level-ci-3110066591488590-levelaccess-com-wbssc",
  project: "selenium-project",
  token: process.env.LEVEL_CI_TOKEN,
  server: "https://staging.uw.ci.levelaccess.io/",
  reportPaths: ["./level-ci-reports"],
} satisfies Config;
