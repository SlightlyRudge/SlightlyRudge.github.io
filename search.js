document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("search-input");
    const searchResults = document.getElementById("search-results");
    let articles = [];

    // 加载文章数据
    fetch("articles.json")
        .then(response => response.json())
        .then(data => { articles = data; })
        .catch(error => console.error("加载文章数据失败:", error));

    // 监听搜索按钮点击事件
    document.getElementById("search-btn").addEventListener("click", performSearch);

    // 监听回车键
    searchInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            performSearch();
        }
    });

    function performSearch() {
        const keyword = searchInput.value.trim().toLowerCase();
        searchResults.innerHTML = ""; // 清空旧搜索结果

        if (keyword === "") return;

        // 过滤匹配的文章
        const filteredArticles = articles.filter(article =>
            article.title.toLowerCase().includes(keyword) ||  // 标题匹配
            article.description.toLowerCase().includes(keyword) || // 描述匹配
            article.content.toLowerCase().includes(keyword) // 内容匹配
        );

        if (filteredArticles.length === 0) {
            searchResults.innerHTML = "<p>未找到相关内容</p>";
            return;
        }

        // 显示搜索结果
        filteredArticles.forEach(article => {
            const resultItem = document.createElement("div");
            resultItem.classList.add("search-result-item");
            resultItem.innerHTML = `<a href="article.html?file=${article.file}">${article.title}</a>`;
            searchResults.appendChild(resultItem);
        });
    }
});
