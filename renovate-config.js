const branchName = "github-renovate";

const config = {
  branchPrefix: `${branchName}/`,
  dependencyDashboardTitle: "Dependency Dashboard self-hosted",
  gitAuthor: "Renovate Bot <bot@renovateapp.com>",
  logLevel: "debug",
  onboarding: true,
  onboardingBranch: `${branchName}/configure`,
  platform: "github",
  repositories: ["christoferolaison/christofer.dev"],
  prConcurrentLimit: 2,
  allowedPostUpgradeCommands: ["^git status$"],
  postUpgradeTasks: {
    commands: ["git status"],
    fileFilters: ["**/*.txt"],
  },
};

module.exports = config;
