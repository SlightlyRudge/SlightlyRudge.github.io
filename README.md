# SlightlyRudge.github.io

index.html---首页-页面
说明：
data/categories.json---首页分类增加删除。
articles.json---分类增加文章
articles/---文章修改增加

market.html---供需消息-页面
market-posts.json---供需文章增加删除修改

fraud.html---防骗指南-页面
fraud-posts.json---防骗指南文章增加删除修改

lianxiwomen.html---联系我们-页面


gonggaoxiaoxi.html---公告消息-页面


about.html---关于我们-页面


faq.html---常见问题-页面
faq.html---文章列表标题增加删除
常见问题文章路径faq/.html是每篇文章


robots.txt---文件
说明：
User-agent: * 代表所有搜索引擎都可以访问。
Allow: / 允许爬取所有页面。
Sitemap: https://你的域名/sitemap.xml（可选），告诉搜索引擎你的网站地图地址。

sitemap.xml---文件
说明：
<loc>：页面的完整 URL。
<lastmod>：最后更新时间，格式 YYYY-MM-DD（可以手动更新）。
<changefreq>：内容更新频率，可选 always、hourly、daily、weekly、monthly、yearly、never。
<priority>：优先级，1.0 最高，0.1 最低。
提交 sitemap.xml 到搜索引擎
访问 Google Search Console
选择你的网站，点击 “Sitemaps”
在输入框输入：https://你的域名/sitemap.xml
点击 提交
✅ Bing 提交：
访问 Bing Webmaster
选择 “Sitemaps”，输入 https://你的域名/sitemap.xml，然后提交

正确使用 <h1> 标题
目前你的文章标题是：<p>文章标题</p>
📌 这样不利于 SEO，因为搜索引擎会认为这是普通文本，不会赋予它权重。
✅ 改成
<h1>文章标题</h1>
规则：
每个页面 只能有一个 <h1>，用于页面的主标题。
其他副标题可以用 <h2>、<h3> 等。

