# windychen-site · Personal Website

陈晓峰的个人主页 — Next.js 15 · 中英双语 · 深浅双模

---

## 一、本地运行

需要 Node.js 18+（推荐 20+）。

```bash
# 1. 解压进入目录
cd windychen-site

# 2. 安装依赖（约 2-3 分钟）
npm install

# 3. 启动开发服务器
npm run dev

# 打开 http://localhost:3000
```

---

## 二、你需要替换的内容（优先级从高到低）

### 1. 联系信息（必改）
编辑 `messages/zh.json` 和 `messages/en.json`，替换：
- `contact.email` → 你的真实邮箱
- `contact.phone` → 你的手机号
- 任何出现 `[your-email]` `[你的邮箱]` `[你的手机号]` 的占位符

### 2. 职业照（重要）
把一张你的职业照命名为 `portrait.jpg` 放到 `public/images/` 目录下。
然后打开 `components/About.tsx`，按照文件中的注释替换掉占位div。

### 3. 简历 PDF（重要）
把简历 PDF 命名为 `resume.pdf` 放到 `public/` 目录下。
（Hero区的"下载简历"按钮会自动链接到 `/resume.pdf`）

### 4. PRD 文件（重要）
把6份 PRD 按以下命名放到 `public/prds/` 目录下：
- `yingjichem-prd.pdf`
- `docmind-prd.pdf`
- `metarag-prd.pdf`
- `pbimcp-prd.pdf`
- `ai-intel-prd.pdf`
- `ezoo-prd.pdf`

### 5. GitHub 链接（建议检查）
`messages/*.json` 里的 `contact.github` 默认是 `github.com/nightrunner01`，确认是你要用的地址。

### 6. 文案微调（可选）
所有文字内容都在 `messages/zh.json` 和 `messages/en.json` 里，任何你想改的内容都在这两个文件里。

---

## 三、部署到 Vercel（推荐，免费）

### 步骤 1：推送到 GitHub

```bash
git init
git add .
git commit -m "Initial commit"
# 在 GitHub 创建一个新 repo（建议设为 Public 或 Private 都行），然后：
git remote add origin https://github.com/你的用户名/windychen-site.git
git branch -M main
git push -u origin main
```

### 步骤 2：在 Vercel 部署

1. 访问 https://vercel.com，用 GitHub 账号登录
2. 点击 "Add New Project"
3. 选择刚才推送的 repo
4. 保持默认配置（Framework 会自动识别为 Next.js）
5. 点击 "Deploy"

约 2 分钟后，你会得到一个 `xxx.vercel.app` 的地址。

### 步骤 3：绑定自定义域名

在 Vercel 项目的 Settings → Domains 里添加你买的域名（比如 `windychen.dev`），按提示去域名服务商那里配置 DNS（通常是加一个 A 记录指向 `76.76.21.21` 或 CNAME 指向 `cname.vercel-dns.com`）。

---

## 四、目录结构

```
windychen-site/
├── app/
│   └── [locale]/
│       ├── layout.tsx        # 字体/主题/i18n Provider
│       └── page.tsx          # 主页（组装所有 section）
│   └── globals.css           # 全局样式 + CSS变量
├── components/
│   ├── Nav.tsx               # 顶部导航（主题切换+语言切换）
│   ├── Hero.tsx              # 首屏
│   ├── About.tsx             # 关于
│   ├── Methodology.tsx       # 方法论（可展开卡片）
│   ├── Projects.tsx          # 项目（旗舰 + 6个网格）
│   ├── Prds.tsx              # PRD 文档墙
│   ├── Credentials.tsx       # 资质荣誉
│   ├── Contact.tsx           # 联系
│   ├── Footer.tsx            # 页脚
│   └── SectionHeading.tsx    # 通用章节标题
├── messages/
│   ├── zh.json               # 中文内容（所有文字都在这里）
│   └── en.json               # 英文内容
├── lib/
│   └── i18n.ts               # i18n 配置
├── public/
│   ├── resume.pdf            # ← 你要放的简历
│   ├── images/
│   │   └── portrait.jpg      # ← 你要放的职业照
│   └── prds/                 # ← 你要放的6份 PRD
├── middleware.ts             # 语言路由中间件
├── next.config.mjs
├── tailwind.config.ts        # 设计 tokens（颜色/字体/动画）
└── package.json
```

---

## 五、自定义设计

### 改颜色
`tailwind.config.ts` 里的 `mint` 是深色模式的强调色（青绿色 `#64FFDA`），`indigo` 是浅色模式的强调色（蓝色 `#0066CC`）。想换颜色？改这两个值就行。

CSS变量在 `app/globals.css` 里：
- `--bg` — 页面背景
- `--surface` — 卡片背景
- `--text` — 主文字颜色
- `--accent` — 强调色

### 改字体
目前使用：
- **Inter** — 英文标题+正文
- **JetBrains Mono** — 数字/代码/mono字体
- **思源黑体(Noto Sans SC)** — 中文

想换字体？改 `app/[locale]/layout.tsx` 顶部的 import。

### 改动画
所有滚动动画用的是 Framer Motion，动画参数在各个组件里的 `motion.div` 属性里改。想删掉所有动画？把 `motion.div` 替换成 `div` 即可。

---

## 六、面试官看这个网站时会发现什么

1. 打开 F12 查看源码 → Next.js 15 + TypeScript + Tailwind → "这个AI PM懂技术"
2. 看到中英双语切换 → "国际化经验"
3. 看到方法论板块（约束驱动/双轨模型/研究框架） → "这人有体系"
4. 看到 6 份可下载的完整 PRD → "这人有真东西"
5. 看到 YingjiChemAI 带 GitHub 源码链接 → "这人是认真的"

---

## 七、常见问题

**Q: 我想加一个博客/文章板块怎么办？**
A: 建议在 `app/[locale]/` 下加一个 `blog/` 目录，用 MDX 写文章。Next.js 原生支持 MDX。

**Q: 字体加载慢？**
A: Google Fonts 在国内偶尔会慢。可以改用本地字体或阿里字体 CDN，改 `app/[locale]/layout.tsx` 里的字体导入方式。

**Q: 中英切换后URL变了？**
A: 这是预期行为。默认中文是 `/`，英文是 `/en`。这对 SEO 友好。

**Q: 怎么查看网站访问数据？**
A: 部署到 Vercel 后，在 Analytics tab 里可以看到免费的基础数据（PV/UV/来源）。

---

Deployed on Vercel · Last updated 2026
