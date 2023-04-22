const config = {
  baseURL: import.meta.env.VITE_BASE_URL,
  githubUsername: import.meta.env.VITE_GITHUB_USERNAME,
  notionTableId: import.meta.env.VITE_NOTION_TABLE_ID,
  notionAboutPageId: import.meta.env.VITE_NOTION_ABOUT_PAGE_ID,
  devName: import.meta.env.VITE_DEV_NAME,
  devDescription: import.meta.env.VITE_DEV_DESCRIPTION,
  devRole: import.meta.env.VITE_DEV_ROLE,
  devGithubLink: import.meta.env.VITE_DEV_GITHUB_LINK,
  devTwitterLink: import.meta.env.VITE_DEV_TWITTER_LINK,
  devLinkedinLink: import.meta.env.VITE_DEV_LINKEDIN_LINK,
  devLogo: import.meta.env.VITE_DEV_LOGO,
}

export default config