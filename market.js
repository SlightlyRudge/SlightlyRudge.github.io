document.addEventListener("DOMContentLoaded", function () {
    const articles = [
        { id: 1, title: "三方通道", category: "供", time: "7小时前", content: "支付解决方案..." },
        { id: 2, title: "招收代理", category: "求", time: "6小时前", content: "寻找合作伙伴..." },
        { id: 3, title: "高价回收", category: "供", time: "8小时前", content: "回收业务..." },
        { id: 4, title: "项目合作", category: "求", time: "5小时前", content: "项目投资..." },
    ];

    const articleList = document.getElementById("article-list");
    const filterButtons = document.querySelectorAll(".filter-btn");

    function renderArticles(filter = "all") {
        articleList.innerHTML = "";
        articles
            .filter(article => filter === "all" || article.category === filter)
            .forEach(article => {
                const articleCard = document.createElement("div");
                articleCard.className = `article-card ${article.category === "供" ? "red" : "blue"}`;
                articleCard.innerHTML = `
                    <h3>${article.category} | ${article.title}</h3>
                    <p>${article.time}</p>
                `;
                articleCard.addEventListener("click", () => {
                    window.location.href = `article.html?id=${article.id}`;
                });
                articleList.appendChild(articleCard);
            });
    }

    filterButtons.forEach(button => {
        button.addEventListener("click", function () {
            document.querySelector(".active").classList.remove("active");
            this.classList.add("active");
            renderArticles(this.dataset.category);
        });
    });

    renderArticles();
});
