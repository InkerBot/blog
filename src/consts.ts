export const SITE = {
  title: 'InkerBot',
  description: '墨水瓶的博客 —— 记录折腾、踩坑与一些或许能帮到你的东西。',
  url: 'https://inker.bot',
  author: 'InkerBot',
  lang: 'zh-CN',
  // GitHub repo, used to link commit hashes in the footer build info.
  repo: 'https://github.com/InkerBot/blog',
} as const;

export const NAV = [
  { href: '/', label: '主页' },
  { href: '/posts/', label: '所有' },
  { href: '/about/', label: '关于' },
  { href: '/tags/', label: '标签' },
] as const;
