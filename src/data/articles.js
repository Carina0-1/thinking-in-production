export const articles = [
  {
    id: "human-ai-collaboration",
    title: "别再让AI替你思考了——人机协作的正确打开方式",
    excerpt: "把一个完整任务直接丢给AI，期待拿到可用的输出——这条路有一个隐藏的前提：AI拥有完成这个任务所需的全部信息。但现实是，它没有。",
    content: `# 别再让AI替你思考了——人机协作的正确打开方式

**作者视角：一个产品人的实操反思**

---

## 一、一个失败的实验

最近在准备一场二面，我让AI直接预测面试题并生成逐字稿。

结果：预测不准，逐字稿也没什么用。

这个失败值得认真拆解——问题不在AI能力不够，而在我给AI的任务设计有根本性的缺陷。

---

## 二、问题的根源：把"信息生产"和"内容生成"混在一起了

大多数人使用AI的方式是：**把一个完整任务直接丢给AI，期待拿到可用的输出。**

这条路有一个隐藏的前提：AI拥有完成这个任务所需的全部信息。

但现实是，AI的知识来源是公开训练数据，截止某个时间点。它不知道：

- 这家公司最近在B站发布了什么内容
- 一面面试官提到了哪些战略方向
- 你作为候选人在行业里观察到的细节判断

当这些信息缺失时，AI只能用通用知识填补空白——输出的结果看起来完整，实则悬空。

**这不是AI的问题，是信息输入的问题。**

---

## 三、正确模型：人负责判断，AI负责生成

调整之后，我换了一个做法：

先自己去做调研——看招聘页面、看B站账号视频内容、结合一面沟通——形成一个判断：**这家公司正在向教科研市场和金融市场发力。**

然后把这个判断作为信息锚点，输入给AI，再预测面试题。

结果完全不同。

这个过程揭示了一个更清晰的分工模型：

| 环节 | 执行者 | 原因 |
|------|--------|------|
| 获取一手信息（看视频、访谈、现场感知） | 人 | AI没有这些信息 |
| 形成判断（推断战略方向、识别真实意图） | 人 | 高风险，需要行业感知和上下文 |
| 基于判断生成结构化内容 | AI | 信息齐备后，生成是AI的强项 |
| 调整输出使其符合个人风格和表达 | 人+AI | 需要"你"在里面 |

核心逻辑只有一句话：**AI是信息处理和语言生成的引擎，但燃料必须由人提供。**

---

## 四、判断框架：哪些环节必须人来做？

基于以上实践，可以提炼出三个判断维度：

**1. AI是否拥有这个信息？**

如果信息来自一手观察、非公开渠道、实时动态——AI没有，人必须介入。典型场景：用户访谈洞察、公司内部动向、竞品的真实战略意图。

**2. 判断错误是否有真实代价？**

AI会自信地说错话。如果一个判断错了会导致面试失误、产品方向走偏、客户关系受损——这类判断必须人来把关，AI只能辅助验证。

**3. 输出是否需要"你"在里面？**

有些内容的价值来自于你的视角、你的风格、你的背书。通用答案在这里没有价值，甚至有反效果。凡是"只有你才能说"的内容，人必须参与生成过程。

---

## 五、更准确的认知：不是"任务拆分"，是"人机分工"

很多人谈到高效使用AI，会说"要学会任务拆分"。这个说法方向对，但不够精准。

"拆分"暗示把大任务切成小块，分批交给AI。但真正的问题不是任务大小，而是**任务性质**。

需要判断力的环节——信息获取、风险评估、立场表达——留给人。需要生成力的环节——结构化输出、语言扩展、格式打磨——交给AI。

这两类工作性质不同，不是用"拆小"就能解决的，而是要在分工层面做出明确区隔。

---

## 六、对产品经理的额外意义

这个认知对PM群体尤其重要，原因有两点：

**第一，PM的核心价值恰好在AI的盲区里。**

用户洞察、需求判断、优先级取舍、跨团队对齐——这些都是高度依赖上下文、一手信息和人际感知的工作。AI无法替代，PM也不应该把这部分外包出去。

**第二，如何驾驭AI，本身就是新的产品能力。**

知道何时用AI、何时不用、如何设计输入让AI发挥最大效用——这是一种元能力。未来的PM竞争力，一部分来自对AI工具的驾驭深度，而不只是使用频率。

---

## 结语

AI改变的不是"谁来做事"，而是"做事的分工边界"。

真正值得投入精力的问题，不是如何让AI做更多，而是：**哪些事情，只有你自己做了才有意义。**

把这个问题想清楚，人机协作才真正开始。`,
    author: "Carina",
    publishDate: "2026-06-25",
    readTime: "5 min read",
    tags: ["AI", "产品思考", "人机协作", "效率"],
    coverImage: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: true
  },
  {
    id: "moat-for-application-layer-software",
    title: "应用层软件公司的护城河，到底是什么",
    excerpt: "AI 模型越来越强、越来越同质化，应用层软件公司凭什么活下去？核心护城河只有一个根源——切换成本，但它有三种形态：工作流嵌入、网络效应、数据飞轮。",
    content: `# 应用层软件公司的护城河，到底是什么

AI 模型越来越强，越来越便宜，越来越同质化。这个背景下，一个问题变得紧迫：应用层软件公司凭什么活下去？

我的结论是：**核心护城河只有一个根源——切换成本。但它有三种形态，重要性依次递减：工作流嵌入、网络效应、数据飞轮。**

很多人谈护城河时会把"成为数据公司"或"坐在资金流上"当作答案。这些不是错的，但它们是结果，不是原因。真正的问题是：你怎么让用户在意到无法离开你？

---

## 护城河一：工作流嵌入

这是最被低估的护城河，也是最黏的一种。

工作流嵌入不是指用户用得勤，而是指**产品出现在用户做出判断的那一刻**。

区分一下"执行"和"判断"：复制粘贴、填表、发邮件，这些是执行，换个工具照样能做。"这个方案要不要推进"、"这个客户值不值得跟进"、"这段代码要不要重构"，这些是判断——结果有代价，答案不唯一。

当产品成为判断发生的容器，一个自我强化的结构就形成了：**判断在哪里发生，上下文就积累在哪里；上下文在哪里，下一次判断就倾向于在哪里发生。**

Notion 早期只是比 Word 好看的笔记工具，随时可以换。但当一个团队开始在 Notion 里写方案、留评论、做决策记录之后，它就变成了"我们当时为什么这么决定"的唯一存放地。这时候换掉它，不是迁移数据的问题，是失去了决策脉络。

Linear 不只是记 ticket，它出现在"这个 bug 要不要修"的讨论里。Figma 不只是画图，它出现在"这个方案要不要改"的评审里。

**对产品来说，值得问的问题不是"用户会不会每天用"，而是"用户会不会在这里做一个他在意的决定"。** 哪怕一周只有一次，只要那个决定足够重要，你就在正确的位置上。

有两个常见误区需要避开：

**把频率当嵌入。** DAU 高不等于嵌入深。用户可能每天打开，但随时可以换一个替代品。真正的嵌入是：换掉你之后，他们的工作方式要跟着变，而不只是换个界面。

**把功能堆叠当护城河。** 功能越多，表面上越难替代，实际上越容易被一个专注的竞争对手在核心场景上打穿。

---

## 护城河二：网络效应

网络效应是最强的护城河，但也是最难建立的。

真正的网络效应要求：产品对第 N 个用户的价值，依赖前 N-1 个用户的存在。大多数应用公司其实没有这个，只是误以为自己有。

一个判断标准：如果你的用户群体清零，产品对新用户的价值是否会大幅下降？如果不会，你拥有的不是网络效应，只是规模效应——这两件事差别很大。

---

## 护城河三：数据飞轮

数据飞轮是真实的，但有一个经常被忽视的前提。

**光有数据不够，得有能把数据变成更好决策的闭环。** 23andMe 坐拥 1500 万人的 DNA 数据，最后还是破产了。数据本身不产生价值，数据驱动产品变得更好才产生价值。

在 AI 产品里，数据飞轮有一个更具体的形式：**盯着用户"改"了什么，而不只是"用"了什么。**

用户接受了 AI 的建议还是删掉重写了？他填了一个字段然后又改成另一个值？每一个"改"的动作背后都有一个隐含判断——模型给的不对、默认值不符合他的逻辑。这些修正信号是最有价值的数据，比点击流和停留时长有意义得多。

积累了信号之后，关键是让信号在下一次交互里就生效，而不是攒够了再去训练模型。用户上次改掉了你的默认排序，下次打开就用他改过的那个。用户反复在某类建议上做同样的修改，下次直接给他改完的结果。

**一个检验标准：用了你的产品三个月的用户，和第一天用的用户，体验应该是不一样的。如果一样，说明你在收集信号但没有在使用它。**

---

## 三者的关系

这三种护城河不是并列的，它们有层次：

工作流嵌入是基础，没有它，数据和网络效应都缺乏来源。你首先需要让用户在你这里做决定，判断才会留下来，数据才有意义，网络才有节点。

数据飞轮是工作流嵌入的副产品——当判断在你的产品里持续发生，信号自然积累。问题只是你有没有在用它。

网络效应是锦上添花，并非所有产品都能建立，强求反而会分散精力。

---

## 最后

AI 时代应用层的真正护城河，是**成为用户工作方式本身的一部分**。

数据和资金流是这件事做成之后的副产品，不是起点。

所以真正值得问的问题只有一个：**你的产品有没有出现在用户做出重要判断的那一刻？**

如果有，剩下的事情会自然发生。如果没有，其他一切都是在一个不稳固的地基上建楼。`,
    author: "Carina",
    publishDate: "2026-06-14",
    readTime: "6 min read",
    tags: ["产品思考", "AI", "商业策略", "护城河"],
    coverImage: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: true
  },
  {
    id: "react-hooks-comprehensive-guide",
    title: "深入理解 React Hooks：从入门到精通",
    excerpt: "全面解析 React Hooks 的工作原理，包括 useState, useEffect, 以及自定义 Hook 的最佳实践。探索函数式组件的强大能力。",
    content: `# 深入理解 React Hooks：从入门到精通

React Hooks 彻底改变了我们编写 React 组件的方式，让函数式组件拥有了类组件的所有能力，同时提供了更简洁、更易理解的代码结构。

## useState Hook：状态管理的新方式

useState 是最基础也是最常用的 Hook，它让函数式组件能够拥有内部状态：

\`\`\`javascript
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
\`\`\`

## useEffect Hook：副作用处理

useEffect 让你能够在函数组件中执行副作用操作，它结合了 componentDidMount、componentDidUpdate 和 componentWillUnmount 的功能：

\`\`\`javascript
import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = \`You clicked \${count} times\`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
\`\`\`

## 自定义 Hooks：逻辑复用的艺术

自定义 Hooks 是 React Hooks 最强大的特性之一，它让我们能够在组件之间共享状态逻辑：

\`\`\`javascript
function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(initialValue);

  return { count, increment, decrement, reset };
}
\`\`\`

## 总结

React Hooks 不仅简化了组件的编写，还提供了更好的逻辑复用机制。掌握 Hooks 是现代 React 开发的必备技能。`,
    author: "前端架构师",
    publishDate: "2025-01-20",
    readTime: "8 min read",
    tags: ["React", "JavaScript", "Hooks", "前端开发"],
    coverImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: true
  },
  {
    id: "css-grid-vs-flexbox-comprehensive",
    title: "CSS Grid vs Flexbox：现代布局技术全面对比",
    excerpt: "深入对比 CSS Grid 和 Flexbox 的使用场景，通过实际案例帮你选择最适合的布局方案，掌握现代 CSS 布局的精髓。",
    content: `# CSS Grid vs Flexbox：现代布局技术全面对比

在现代 Web 开发中，CSS Grid 和 Flexbox 是两个最重要的布局技术。了解它们的区别和适用场景，能够让你的布局更加高效和优雅。

## 核心概念对比

### Flexbox：一维布局系统
Flexbox 是为一维布局而设计的，主要处理行或列的排列：

\`\`\`css
.flex-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
\`\`\`

### CSS Grid：二维布局系统
CSS Grid 则是为二维布局而生，可以同时处理行和列：

\`\`\`css
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
}
\`\`\`

## 实际应用场景

### 使用 Flexbox 的场景
- 导航栏布局
- 卡片内容对齐
- 垂直居中
- 等高列布局

### 使用 CSS Grid 的场景
- 整体页面布局
- 复杂的网格系统
- 不规则的布局结构
- 响应式图片画廊

## 性能和兼容性

两种技术都有良好的浏览器支持，在现代浏览器中性能表现都很出色。选择时应该基于布局需求而不是性能考虑。

## 最佳实践建议

1. **优先考虑语义化**：选择最能表达你布局意图的技术
2. **渐进增强**：为不支持的浏览器提供降级方案
3. **组合使用**：Grid 和 Flexbox 可以完美配合使用

掌握这两种布局技术，你将能够应对现代 Web 开发中的各种布局挑战。`,
    author: "UI设计师",
    publishDate: "2025-01-15",
    readTime: "6 min read",
    tags: ["CSS", "布局", "Grid", "Flexbox", "前端开发"],
    coverImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: false
  },
  {
    id: "javascript-async-programming-mastery",
    title: "JavaScript 异步编程：Promise、Async/Await 完全指南",
    excerpt: "从回调地狱到 Promise，再到 Async/Await，全面掌握 JavaScript 异步编程的演进历程和最佳实践。",
    content: `# JavaScript 异步编程：Promise、Async/Await 完全指南

异步编程是 JavaScript 的核心特性之一，掌握异步编程对于编写高效的现代 JavaScript 应用至关重要。

## 异步编程的演进

### 1. 回调函数时代
最初，JavaScript 使用回调函数处理异步操作：

\`\`\`javascript
function fetchData(callback) {
  setTimeout(() => {
    callback(null, 'Data loaded');
  }, 1000);
}

fetchData((error, data) => {
  if (error) {
    console.error(error);
  } else {
    console.log(data);
  }
});
\`\`\`

### 2. Promise 的革命
Promise 解决了回调地狱的问题：

\`\`\`javascript
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Data loaded');
    }, 1000);
  });
}

fetchData()
  .then(data => console.log(data))
  .catch(error => console.error(error));
\`\`\`

### 3. Async/Await 的优雅
Async/Await 让异步代码看起来像同步代码：

\`\`\`javascript
async function loadData() {
  try {
    const data = await fetchData();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}
\`\`\`

## 错误处理最佳实践

正确的错误处理是异步编程的关键：

\`\`\`javascript
async function robustFetch(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(\`HTTP error! status: \${response.status}\`);
    }
    return await response.json();
  } catch (error) {
    console.error('Fetch failed:', error);
    throw error; // Re-throw to allow caller to handle
  }
}
\`\`\`

## 并发处理

使用 Promise.all 和 Promise.allSettled 处理并发请求：

\`\`\`javascript
// 等待所有请求完成
const results = await Promise.all([
  fetch('/api/users'),
  fetch('/api/posts'),
  fetch('/api/comments')
]);

// 即使某些请求失败也继续
const results = await Promise.allSettled([
  fetch('/api/users'),
  fetch('/api/posts'),
  fetch('/api/comments')
]);
\`\`\`

掌握这些异步编程技巧，你将能够编写出更加健壮和高效的 JavaScript 应用。`,
    author: "全栈开发者",
    publishDate: "2025-01-10",
    readTime: "10 min read",
    tags: ["JavaScript", "异步编程", "Promise", "Async/Await"],
    coverImage: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: true
  },
  {
    id: "responsive-web-design-2025",
    title: "2025年响应式设计趋势：移动优先的设计策略",
    excerpt: "探索2025年响应式Web设计的最新趋势，包括容器查询、逻辑属性、以及新的CSS特性如何改变我们的设计方式。",
    content: `# 2025年响应式设计趋势：移动优先的设计策略

随着移动设备的普及和新CSS特性的出现，响应式设计正在经历新的变革。让我们探索2025年的设计趋势和最佳实践。

## 容器查询：革命性的布局技术

容器查询让组件能够根据其容器的大小而不是视口大小来调整样式：

\`\`\`css
.card-container {
  container-type: inline-size;
}

@container (min-width: 300px) {
  .card {
    display: flex;
    flex-direction: row;
  }
}
\`\`\`

## CSS 逻辑属性

逻辑属性让我们的CSS更加国际化友好：

\`\`\`css
.content {
  margin-inline-start: 1rem;
  padding-block: 2rem;
  border-inline-end: 1px solid #ccc;
}
\`\`\`

## 现代响应式图片技术

使用现代图片格式和技术优化加载性能：

\`\`\`html
<picture>
  <source srcset="image.avif" type="image/avif">
  <source srcset="image.webp" type="image/webp">
  <img src="image.jpg" alt="Description" loading="lazy">
</picture>
\`\`\`

## 流体排版

使用clamp()函数创建流体排版：

\`\`\`css
h1 {
  font-size: clamp(1.5rem, 4vw, 3rem);
}
\`\`\`

## 可访问性优先

响应式设计必须考虑可访问性：

\`\`\`css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
\`\`\`

## 性能优化策略

1. **关键CSS内联**：将首屏CSS内联到HTML中
2. **图片懒加载**：使用Intersection Observer API
3. **字体优化**：使用font-display: swap

响应式设计的未来是更加智能、更加用户友好的。掌握这些新技术，你将能够创建出真正适应各种设备的优秀体验。`,
    author: "UX设计专家",
    publishDate: "2025-01-05",
    readTime: "7 min read",
    tags: ["响应式设计", "CSS", "移动优先", "用户体验"],
    coverImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: false
  },
  {
    id: "web-performance-optimization-guide",
    title: "Web性能优化实战：让你的网站飞起来",
    excerpt: "从Core Web Vitals到具体的优化技巧，全面提升网站性能。包括图片优化、代码分割、缓存策略等实用技术。",
    content: `# Web性能优化实战：让你的网站飞起来

网站性能直接影响用户体验和搜索引擎排名。让我们深入了解如何通过各种技术手段优化网站性能。

## Core Web Vitals 指标

Google的Core Web Vitals包含三个关键指标：

### 1. Largest Contentful Paint (LCP)
衡量加载性能，应在2.5秒内完成：

\`\`\`javascript
// 监测 LCP
new PerformanceObserver((entryList) => {
  for (const entry of entryList.getEntries()) {
    console.log('LCP:', entry.startTime);
  }
}).observe({entryTypes: ['largest-contentful-paint']});
\`\`\`

### 2. First Input Delay (FID)
衡量交互性，应小于100毫秒

### 3. Cumulative Layout Shift (CLS)
衡量视觉稳定性，应小于0.1

## 图片优化策略

### 现代图片格式
使用WebP和AVIF格式可以显著减少文件大小：

\`\`\`html
<picture>
  <source srcset="hero.avif" type="image/avif">
  <source srcset="hero.webp" type="image/webp">
  <img src="hero.jpg" alt="Hero image">
</picture>
\`\`\`

### 响应式图片
为不同设备提供不同尺寸的图片：

\`\`\`html
<img src="small.jpg"
     srcset="small.jpg 300w,
             medium.jpg 600w,
             large.jpg 1200w"
     sizes="(max-width: 300px) 300px,
            (max-width: 600px) 600px,
            1200px"
     alt="Responsive image">
\`\`\`

## 代码分割和懒加载

### React代码分割
使用React.lazy实现组件懒加载：

\`\`\`javascript
import { lazy, Suspense } from 'react';

const LazyComponent = lazy(() => import('./LazyComponent'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </Suspense>
  );
}
\`\`\`

### 路由级别的代码分割
为每个路由创建单独的chunk：

\`\`\`javascript
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
\`\`\`

## 缓存策略

### HTTP缓存
设置合适的缓存头：

\`\`\`
Cache-Control: public, max-age=31536000, immutable
\`\`\`

### Service Worker缓存
实现离线优先的缓存策略：

\`\`\`javascript
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        return response || fetch(event.request);
      })
  );
});
\`\`\`

## 性能监测工具

1. **Lighthouse**：综合性能评估
2. **WebPageTest**：详细的加载瀑布图
3. **Chrome DevTools**：实时性能分析

性能优化是一个持续的过程，需要根据实际情况选择合适的优化策略。`,
    author: "性能优化专家",
    publishDate: "2024-12-28",
    readTime: "9 min read",
    tags: ["性能优化", "Web性能", "用户体验", "前端开发"],
    coverImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: false
  },
  {
    id: "modern-javascript-features-2025",
    title: "ES2025新特性深度解析：JavaScript的未来已来",
    excerpt: "探索JavaScript最新特性，包括装饰器、管道操作符、记录和元组等令人兴奋的新功能，引领JavaScript发展新方向。",
    content: `# ES2025新特性深度解析：JavaScript的未来已来

JavaScript持续发展，每年都有新的特性加入。让我们深入了解ES2025中最值得关注的新特性。

## 装饰器 (Decorators)

装饰器提供了一种声明式的方式来修改类和类成员：

\`\`\`javascript
function log(target, key, descriptor) {
  const originalMethod = descriptor.value;
  descriptor.value = function(...args) {
    console.log(\`Calling \${key} with\`, args);
    return originalMethod.apply(this, args);
  };
}

class Calculator {
  @log
  add(a, b) {
    return a + b;
  }
}
\`\`\`

## 管道操作符 (Pipeline Operator)

管道操作符让函数组合更加直观：

\`\`\`javascript
const result = value
  |> double
  |> increment
  |> square;

// 等价于
const result = square(increment(double(value)));
\`\`\`

## 记录和元组 (Records and Tuples)

不可变的数据结构：

\`\`\`javascript
// 记录 (Record)
const person = #{
  name: "Alice",
  age: 30
};

// 元组 (Tuple)
const coordinates = #[10, 20];

// 深度不可变
const nestedRecord = #{
  user: #{
    name: "Bob",
    preferences: #["dark-mode", "notifications"]
  }
};
\`\`\`

## 顶层 await

在模块顶层直接使用await：

\`\`\`javascript
// config.js
const config = await fetch('/api/config').then(r => r.json());
export default config;

// main.js
import config from './config.js';
console.log(config); // 配置已经加载完成
\`\`\`

## 私有字段改进

更强大的私有字段支持：

\`\`\`javascript
class BankAccount {
  #balance = 0;
  #history = [];

  deposit(amount) {
    this.#balance += amount;
    this.#history.push({ type: 'deposit', amount });
  }

  get balance() {
    return this.#balance;
  }

  // 私有方法
  #validateTransaction(amount) {
    return amount > 0 && amount <= this.#balance;
  }
}
\`\`\`

## 模式匹配 (Pattern Matching)

类似其他函数式语言的模式匹配：

\`\`\`javascript
function processData(data) {
  return match(data) {
    when ({ type: 'user', name }) => \`Hello, \${name}!\`,
    when ({ type: 'admin', permissions: [...perms] }) => \`Admin with \${perms.length} permissions\`,
    when ({ type: 'guest' }) => 'Welcome, guest!',
    when (_) => 'Unknown user type'
  };
}
\`\`\`

## 时间操作改进

新的Temporal API替代Date：

\`\`\`javascript
import { Temporal } from '@js-temporal/polyfill';

// 创建日期
const date = Temporal.PlainDate.from('2025-01-15');

// 时区感知的时间
const zonedDateTime = Temporal.ZonedDateTime.from({
  year: 2025,
  month: 1,
  day: 15,
  hour: 10,
  minute: 30,
  timeZone: 'Asia/Shanghai'
});

// 持续时间计算
const duration = Temporal.Duration.from({ hours: 2, minutes: 30 });
const newTime = zonedDateTime.add(duration);
\`\`\`

这些新特性将让JavaScript更加强大和表达力更强，值得我们深入学习和实践。`,
    author: "JavaScript专家",
    publishDate: "2024-12-20",
    readTime: "12 min read",
    tags: ["JavaScript", "ES2025", "新特性", "前端技术"],
    coverImage: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: true
  }
];

export const getFeaturedArticles = () => {
  return articles.filter(article => article.featured);
};

export const getArticleById = (id) => {
  return articles.find(article => article.id === id);
};

export const getArticlesByTag = (tag) => {
  return articles.filter(article => 
    article.tags.some(t => t.toLowerCase().includes(tag.toLowerCase()))
  );
};

export default articles;