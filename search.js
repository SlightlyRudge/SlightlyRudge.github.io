document.getElementById("search-btn").addEventListener("click", async function() {
    const query = document.getElementById("search-input").value.trim().toLowerCase();
    if (!query) return;

    const response = await fetch("articles.json"); // 文章数据文件
    const articles = await response.json();

    const results = articles.filter(article => 
        article.title.toLowerCase().includes(query) || 
        article.content.toLowerCase().includes(query)
    );

    displayResults(results);
});

function displayResults(results) {
    const resultsDiv = document.getElementById("search-results");
    resultsDiv.innerHTML = "";
    
    if (results.length === 0) {
        resultsDiv.innerHTML = "<p>未找到匹配的文章。</p>";
        return;
    }

    results.forEach(article => {
        const item = document.createElement("div");
        item.innerHTML = `<a href="${article.url}">${article.title}</a>`;
        resultsDiv.appendChild(item);
    });
}
