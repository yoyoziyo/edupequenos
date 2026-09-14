const list=document.querySelector("#product-list"),search=document.querySelector("#search"),empty=document.querySelector("#empty");
function card(p){return `<article class="card"><a class="cover" style="background:${p.color}" href="produto.html?slug=${p.slug}">${p.badge?`<span>${p.badge}</span>`:""}<i>📖</i><b>${p.name}</b><small>${p.type}</small></a><div class="info"><small>${p.category}</small><a href="produto.html?slug=${p.slug}"><h3>${p.name}</h3></a><p>${p.type} · ${p.years.join(", ")}</p><div><strong>${money(p.price)}</strong><button aria-label="Adicionar ${p.name} ao carrinho">🛒</button></div></div></article>`}
function render(items=PRODUCTS){list.innerHTML=items.map(card).join("");empty.hidden=items.length>0}render();
search?.addEventListener("input",e=>{const q=e.target.value.toLowerCase();render(PRODUCTS.filter(p=>`${p.name} ${p.category} ${p.type} ${p.subjects.join(" ")}`.toLowerCase().includes(q)))});
document.querySelectorAll("[data-category]").forEach(btn=>btn.addEventListener("click",()=>{const c=btn.dataset.category;render(c==="all"?PRODUCTS:PRODUCTS.filter(p=>p.category===c));document.querySelector("#produtos").scrollIntoView()}));
document.querySelector("#show-all")?.addEventListener("click",()=>render());
document.querySelector(".menu")?.addEventListener("click",()=>document.querySelector("nav").classList.toggle("open"));
