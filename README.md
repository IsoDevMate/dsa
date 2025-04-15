# 🚀 LeetCode DSA Journey

<div align="center">
  <img src="https://img.shields.io/badge/Language-JavaScript-yellow?style=for-the-badge&logo=javascript" alt="JavaScript">
  <img src="https://img.shields.io/badge/Platform-LeetCode-FFA116?style=for-the-badge&logo=leetcode" alt="LeetCode">
  <img src="https://img.shields.io/badge/DSA-Solutions-blue?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTIxLDRIMTdWM2MwLTAuNi0wLjQtMS0xLTFIMTBDOS40LDIsOSwyLjQsOSwzdjFINWMtMS4xLDAtMiwwLjktMiwydjE0YzAsMS4xLDAuOSwyLDIsMmgxNmMxLjEsMCwyLTAuOSwyLTJWNkMyMyw0LjksMjIuMSw0LDIxLDR6IE0xMSw0aDJ2MmgtMlY0eiBNMTQsMThoLTRhMSwxLDAsMCwxLDAtMmg0YTEsMSwwLDAsMSwwLDJ6IE0xNiwxNGgtOGExLDEsMCwwLDEsMC0yaDhhMSwxLDAsMCwxLDAsMnoiLz48L3N2Zz4=" alt="DSA">
</div>

<div align="center">
  <p>A comprehensive collection of LeetCode DSA problems & solutions with detailed explanations.</p>
  <p><a href="https://leetcode.com/isodevmate/">LeetCode Profile</a> | <a href="https://github.com/IsoDevMate">GitHub</a></p>
</div>

---

## 📝 About This Repository

This repository documents a journey through LeetCode Data Structures and Algorithm problems. It serves as both a personal log and a resource for others studying DSA concepts. Each solution includes detailed explanations, complexity analysis, and alternative approaches where applicable.

### Repository Goals:
- 🎯 Track progress through LeetCode problems
- 📚 Document solutions with clear explanations
- 🧠 Highlight core DSA patterns and techniques
- 📊 Provide visual progress tracking

<div class="tech-stack fade-in">
  <h2>🛠️ Tech Stack</h2>
  <ul>
    <li>TypeScript</li>
    <li>Python</li>
    <li>Java</li>
    <!-- Add or remove languages as needed -->
  </ul>
</div>

---

## 📊 Progress Tracker

<div class="progress-container fade-in">
  <div class="progress-stats">
    <div class="stat-card">
      <h3>Total Problems Solved</h3>
      <p class="count">0</p>
    </div>
    <div class="stat-card">
      <h3>Easy</h3>
      <p class="count">0</p>
    </div>
    <div class="stat-card">
      <h3>Medium</h3>
      <p class="count">0</p>
    </div>
    <div class="stat-card">
      <h3>Hard</h3>
      <p class="count">0</p>
    </div>
  </div>
</div>

---




## 🔍 Topics Covered

<div class="topics-container fade-in">
  <div class="topic">
    <h3>Arrays & Strings</h3>
    <div class="progress-bar">
      <div class="progress" style="width: 0%;"></div>
    </div>
    <p>0/20 Problems</p>
  </div>
  
  <div class="topic">
    <h3>Linked Lists</h3>
    <div class="progress-bar">
      <div class="progress" style="width: 0%;"></div>
    </div>
    <p>0/10 Problems</p>
  </div>
  
  <div class="topic">
    <h3>Trees & Graphs</h3>
    <div class="progress-bar">
      <div class="progress" style="width: 0%;"></div>
    </div>
    <p>0/20 Problems</p>
  </div>
  
  <div class="topic">
    <h3>Dynamic Programming</h3>
    <div class="progress-bar">
      <div class="progress" style="width: 0%;"></div>
    </div>
    <p>0/20 Problems</p>
  </div>
</div>

---

## 🧩 Key DSA Patterns

<div class="learnings fade-in">
  <ul>
    <li>📝 <strong>Hash Map Lookups</strong>: O(1) access time for finding complements (Two Sum pattern)</li>
    <li>📝 <strong>Two Pointers</strong>: Efficient array/string traversal with O(n) time and O(1) space</li>
    <li>📝 <strong>Sliding Window</strong>: Tracking subarrays/substrings within a larger array</li>
    <li>📝 <strong>Binary Search</strong>: Dividing search space in half for O(log n) time complexity</li>
    <li>📝 <strong>BFS/DFS</strong>: Graph and tree traversal techniques for various problems</li>
    <li>📝 <strong>Dynamic Programming</strong>: Breaking problems into overlapping subproblems</li>
  </ul>
</div>

---

## 📈 Roadmap

<div class="goals fade-in">
  <ul>
    <li>🎯 Complete Top 100 LeetCode interview questions</li>
    <li>🎯 Solve problems across all difficulty levels</li>
  </ul>
</div>

---

## 📚 How to Use This Repository

1. **Browse solutions** by day or by data structure/algorithm topic
2. **Clone the repository** to run solutions locally
   ```
   git clone https://github.com/IsoDevMate/dsa.git
   ```
3. **Study the approach** in each problem's details section
4. **Track your own progress** by forking this repository and customizing it

---

## 🤝 Contributing

Contributions are welcome! If you'd like to contribute:

1. Fork the repository
2. Create a new branch (`git checkout -b solution/problem-name`)
3. Add your solution with explanation
4. Commit your changes (`git commit -m 'Add solution for problem-name'`)
5. Push to the branch (`git push origin solution/problem-name`)
6. Open a Pull Request

---

<div align="center" class="footer fade-in">
  <p>Happy Coding! 💻</p>
  <p>© 2025 | <a href="https://github.com/IsoDevMate">IsoDevMate</a></p>
</div>

<!-- Add the Intersection Observer JavaScript -->
<script>
  document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2
    };
    
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
    
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => {
      observer.observe(el);
    });
  });
</script>

<!-- CSS Styles -->
<style>
  /* Base styles */
  * {
    box-sizing: border-box;
  }
  
  body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    line-height: 1.6;
    color: #333;
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
  }
  
  h1, h2, h3, h4 {
    color: #2a2a72;
  }
  
  h1 {
    font-size: 2.5rem;
    text-align: center;
    margin-bottom: 1rem;
  }
  
  h2 {
    border-bottom: 2px solid #f0f0f0;
    padding-bottom: 10px;
    margin-top: 30px;
  }
  
  a {
    color: #0066cc;
    text-decoration: none;
  }
  
  a:hover {
    text-decoration: underline;
  }
  
  /* Animation styles */
  .fade-in {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.8s ease-out, transform 0.8s ease-out;
  }
  
  .fade-in.visible {
    opacity: 1;
    transform: translateY(0);
  }
  
  /* Progress tracker styles */
  .progress-container {
    margin: 30px 0;
  }
  
  .progress-stats {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 20px;
  }
  
  .stat-card {
    background: #f8f9fa;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    flex: 1 1 200px;
    text-align: center;
    transition: transform 0.3s ease;
  }
  
  .stat-card:hover {
    transform: translateY(-5px);
  }
  
  .stat-card .count {
    font-size: 2.5rem;
    font-weight: bold;
    color: #4a6fa5;
  }
  
  /* Solution cards */
  .solutions-container {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  
  .solution-card {
    background: #ffffff;
    border-radius: 8px;
    padding: 20px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    border-left: 5px solid #4a6fa5;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .solution-card:hover {
    transform: translateX(5px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
  
  .solution-card details {
    margin: 15px 0;
  }
  
  .solution-card summary {
    cursor: pointer;
    color: #4a6fa5;
    font-weight: bold;
  }
  
  .solution-card .approach {
    background: #f8f9fa;
    padding: 15px;
    border-radius: 5px;
    margin-top: 10px;
  }
  
  /* Topic progress bars */
  .topics-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
  }
  
  .topic {
    background: #ffffff;
    padding: 15px;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }
  
  .progress-bar {
    background: #e9ecef;
    border-radius: 20px;
    height: 10px;
    overflow: hidden;
    margin: 10px 0;
  }
  
  .progress {
    background: linear-gradient(90deg, #4a6fa5, #6e8cbb);
    height: 100%;
    border-radius: 20px;
    transition: width 1s ease-in-out;
  }
  
  /* Daily log and learnings */
  .daily-log, .learnings, .goals {
    background: #f8f9fa;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    margin: 20px 0;
  }
  
  .daily-log ul, .learnings ul, .goals ul {
    padding-left: 20px;
  }
  
  .daily-log li, .learnings li, .goals li {
    margin-bottom: 10px;
  }
  
  /* Footer */
  .footer {
    margin-top: 50px;
    padding: 20px;
    text-align: center;
    color: #6c757d;
  }
</style>
