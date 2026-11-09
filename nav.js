// nav.js
const navHTML = `
<header class="navbar">
    <div class="logo">LUO TIANYI</div>
    <nav>
        <a href="index.html">Home</a>
        <a href="index.html">File</a>
        <a href="quotes.html">Quotes</a>
        <a href="project.html">Project</a>
        <a href="machine.html">Machine</a>
    </nav>
</header>
`;

// 将导航栏插入到 body 的最前面
document.body.insertAdjacentHTML('afterbegin', navHTML);

// 自动高亮当前页面的链接
document.addEventListener("DOMContentLoaded", () => {
    // 获取当前页面的文件名（比如 quotes.html）
    const path = window.location.pathname.split("/").pop() || "index.html";
    
    // 找到所有导航链接
    const navLinks = document.querySelectorAll('.navbar nav a');
    
    navLinks.forEach(link => {
        // 如果链接的 href 和当前文件名一致，就给它加上 active 类
        if (link.getAttribute('href') === path) {
            link.classList.add('active');
        }
    });
});