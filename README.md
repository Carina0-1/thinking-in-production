# thinking-in-production

基于 React 19 构建的极简风格个人博客，黑白灰配色，专注内容呈现。

## 技术栈

- React 19 + React Router 7
- Create React App + CSS Modules
- 部署于 Vercel

## 核心特性

- 极简设计，黑白灰配色，大量留白
- 响应式布局，移动优先
- 懒加载 + 代码分割（Suspense / lazy）
- 滚动进度指示器

## 快速开始

```bash
npm install
npm start       # 开发服务器，默认端口 3000
npm run build   # 构建生产版本
```

## 添加文章

在 `src/data/articles.js` 中添加文章对象：

```javascript
{
  id: "unique-id",
  title: "文章标题",
  excerpt: "摘要",
  content: `# Markdown 内容`,
  author: "作者",
  date: "2025-01-01",
  readTime: "5 min read",
  tags: ["React", "JavaScript"],
}
```
