document.addEventListener('DOMContentLoaded', () => {
  // 创建按钮
  const btn = document.createElement('button');
  btn.textContent = '↑ 返回顶部';
  btn.id = 'back-to-top';
  document.body.appendChild(btn);

  // 按钮样式
  btn.style.position = 'fixed';
  btn.style.bottom = '30px';
  btn.style.right = '30px';
  btn.style.padding = '10px 15px';
  btn.style.display = 'none';
  btn.style.cursor = 'pointer';

  // 滚动显示/隐藏
  window.addEventListener('scroll', () => {
    if (window.scrollY > 200) btn.style.display = 'block';
    else btn.style.display = 'none';
  });

  // 点击滚动到顶部
  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});
