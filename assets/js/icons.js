/* Tiny offline icon set for the demo; intentionally local so the UI does not depend on an icon CDN. */
(() => {
  const paths = {
    'arrow-right':'<path d="M5 12h14M12 5l7 7-7 7"/>', 'arrow-left':'<path d="M19 12H5m7 7-7-7 7-7"/>',
    megaphone:'<path d="m3 11 18-5v12L3 13v-2Z"/><path d="M11.6 15.2 14 21H9l-2-8"/><path d="M5 11v2"/>',
    truck:'<path d="M3 6h12v12H3zM15 10h4l3 4v4h-7"/><circle cx="7.5" cy="19" r="1.8"/><circle cx="18.5" cy="19" r="1.8"/>',
    search:'<circle cx="10.8" cy="10.8" r="6.8"/><path d="m16 16 5 5"/>', sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42"/>',
    moon:'<path d="M20.5 14.2A8.5 8.5 0 0 1 9.8 3.5 8.8 8.8 0 1 0 20.5 14.2Z"/>',
    bell:'<path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9"/><path d="M10 21h4"/>',
    heart:'<path d="M20.8 8.8c0 5.2-8.8 11-8.8 11s-8.8-5.8-8.8-11A4.8 4.8 0 0 1 12 6a4.8 4.8 0 0 1 8.8 2.8Z"/>',
    'shopping-cart':'<circle cx="9" cy="20" r="1.4"/><circle cx="18" cy="20" r="1.4"/><path d="M2 3h2l2.6 12.2a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 1.9-1.4L22 8H5"/>',
    'user-round':'<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>', 'chevron-down':'<path d="m6 9 6 6 6-6"/>',
    menu:'<path d="M4 6h16M4 12h16M4 18h16"/>', 'grid-3x3':'<rect x="3" y="3" width="6" height="6"/><rect x="15" y="3" width="6" height="6"/><rect x="3" y="15" width="6" height="6"/><rect x="15" y="15" width="6" height="6"/>',
    house:'<path d="m3 10 9-7 9 7v10H3z"/><path d="M9 20v-6h6v6"/>', zap:'<path d="m13 2-9 12h7l-1 8 10-13h-7z"/>', flame:'<path d="M12 22c4.5 0 7-3.2 7-7 0-3.1-1.5-5.1-4-8-.1 2-1 3-2 3.5C13 6 11 3 8 2c.5 4-1 6-3 9-2.2 4.7 1 11 7 11Z"/>',
    'ticket-percent':'<path d="M3 8a2 2 0 0 0 0 4v4h18v-4a2 2 0 0 1 0-4V4H3z"/><path d="m9 13 6-6m-5 .5h.01M14.5 13h.01"/>',
    trophy:'<path d="M8 21h8m-4-4v4M7 4h10v5a5 5 0 0 1-10 0z"/><path d="M7 6H3v2a4 4 0 0 0 4 4m10-6h4v2a4 4 0 0 1-4 4"/>',
    'clock-3':'<circle cx="12" cy="12" r="9"/><path d="M12 7v5h5"/>', info:'<circle cx="12" cy="12" r="9"/><path d="M12 11v5m0-9h.01"/>',
    headset:'<path d="M3 13v-2a9 9 0 0 1 18 0v2"/><rect x="2" y="12" width="5" height="8" rx="2"/><rect x="17" y="12" width="5" height="8" rx="2"/><path d="M17 20c-1 2-3 2-5 2"/>',
    mail:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>', 'shield-check':'<path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z"/><path d="m8 12 3 3 5-6"/>',
    'lock-keyhole':'<rect x="4" y="10" width="16" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/><circle cx="12" cy="15" r="1"/><path d="M12 16v2"/>',
    'gamepad-2':'<path d="M6 11h4m-2-2v4m8-3h.01M18 12h.01"/><path d="M7 7h10a4 4 0 0 1 3.8 2.8l1.1 4a3 3 0 0 1-4.7 3.2L14 15H10l-3.2 2a3 3 0 0 1-4.7-3.2l1.1-4A4 4 0 0 1 7 7Z"/>',
    'chevron-left':'<path d="m15 18-6-6 6-6"/>','chevron-right':'<path d="m9 18 6-6-6-6"/>',tags:'<path d="M20 13 13 20 3 10V3h7z"/><circle cx="7.5" cy="7.5" r="1"/>',
    gift:'<rect x="3" y="8" width="18" height="13" rx="2"/><path d="M12 8v13M3 12h18M12 8H7a2.5 2.5 0 1 1 2.5-2.5C9.5 7 12 8 12 8Zm0 0h5a2.5 2.5 0 1 0-2.5-2.5C14.5 7 12 8 12 8Z"/>',
    'arrow-up':'<path d="M12 19V5m-7 7 7-7 7 7"/>','send':'<path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/>',
    keyboard:'<rect x="2" y="5" width="20" height="14" rx="2"/><path d="M6 9h.01M10 9h.01M14 9h.01M18 9h.01M6 13h.01M10 13h.01M14 13h.01M18 13h.01M8 16h8"/>',
    mouse:'<rect x="6" y="2" width="12" height="20" rx="6"/><path d="M12 2v6"/>', monitor:'<rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8m-4-4v4"/>',
    'layout-grid':'<rect x="3" y="3" width="8" height="8" rx="1"/><rect x="13" y="3" width="8" height="8" rx="1"/><rect x="3" y="13" width="8" height="8" rx="1"/><rect x="13" y="13" width="8" height="8" rx="1"/>',
    'sparkles':'<path d="m12 3 1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8zM19 16l.8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8z"/>',
    'check-circle-2':'<circle cx="12" cy="12" r="9"/><path d="m8 12 2.5 2.5L16 9"/>', 'ticket-check':'<path d="M3 8a2 2 0 0 0 0 4v4h18v-4a2 2 0 0 1 0-4V4H3z"/><path d="m9 11 2 2 4-4"/>',
    package:'<path d="m12 3 9 5-9 5-9-5zM3 8v9l9 5 9-5V8M12 13v9"/>','package-search':'<path d="m12 3 9 5-9 5-9-5zM3 8v9l6 3"/><circle cx="17" cy="17" r="3"/><path d="m19.5 19.5 2 2"/>','search-x':'<circle cx="10.8" cy="10.8" r="6.8"/><path d="m16 16 5 5m-12-12 4 4m0-4-4 4"/>',
    x:'<path d="m18 6-12 12M6 6l12 12"/>'
  };
  function createIcons(root=document){
    root.querySelectorAll('[data-lucide]').forEach(el=>{
      const name=el.getAttribute('data-lucide'); const content=paths[name]||paths.info;
      const svg=document.createElementNS('http://www.w3.org/2000/svg','svg');
      svg.setAttribute('viewBox','0 0 24 24');svg.setAttribute('fill','none');svg.setAttribute('stroke','currentColor');svg.setAttribute('stroke-width','2');svg.setAttribute('stroke-linecap','round');svg.setAttribute('stroke-linejoin','round');svg.setAttribute('aria-hidden','true');svg.setAttribute('class',`lucide lucide-${name}`);
      svg.innerHTML=content;el.replaceWith(svg);
    });
  }
  window.lucide={createIcons};
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',()=>createIcons());else createIcons();
})();
