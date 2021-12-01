const branchName = "github-renovate";

const config = {
  branchPrefix: `${branchName}/`,
  dependencyDashboardTitle: "Dependency Dashboard self-hosted",
  gitAuthor: "Renovate Bot <bot@renovateapp.com>",
  logLevel: "debug",
  onboarding: true,
  onboardingBranch: `${branchName}/configure`,
  platform: "github",
  repositories: [],
};

module.exports = config;
