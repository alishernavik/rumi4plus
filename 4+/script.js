// Менюи аслии Руми 4+ — номҳо ва нархҳо нигоҳ дошта шудаанд.
const M = [
["Газакҳо",[
["Салатҳо","Домашний 20 · Зелёный 20/30 · Шакароб 18/24 · Каприз 30 · Птичье Гнездо 40 · Парламент 30 · Хрустящий Баклажан 30 · Стейк Салат 50 · Греческий 30 · Японский 30 · Оливье 28 · Цезарь с курицей 30 · Цезарь с креветкой 60"],
["Газакҳои хунук","Ассорти Маринованные 60 · Мясное Ассорти 90/110 · Овощной Букет 35 · Селёдка с картошкой 35/45 · Сырная Тарелка 60/80 · Окрошка 10 · Окрошка с мясом 15"],
["Газакҳои гарм","Тёплый салат с говядиной 40 · Тёплый салат с языком 40 · Рулетики из баклажанов 20 · Креветки 250гр 100 · Пивной ассорти с кухни 220"]]],
["Таомҳо",[
["Хӯрокҳои якум","Реза шурбо 20 · Бирини оба 18 · Крем суп сырный 30 · Барра шурбо 30 · Борщ украинский 20 · Чечевичный крем суп 20"],
["Хӯрокҳои дуюм","Бедона табака 60 · Котлета домашняя 30 · Медальоны с овощами 65 · Сазан жаренный 100гр 25 · Котлета РУМИ 30 · Мясо в собственном соку 50 · Говядина с грибами 55 · Мясо по китайский 50 · Чиз Биз из говядины 60 · Нога ягнёнка (с соусом сальса) 140 · Тушеная говядина 70 · Казан кебаб 100гр 30 · Судак жаренный 100гр 25 · Говядина с картошкой 80 · Баранина с картошкой 80 · Чупонча из баранины 70"],
["Стейкҳо","Рибай 150 · Ти-Бон 160 · Миньон 100 · Тамагавка 200 · Калифорния 80 · С лимонным соком 80 · На углях 80"],
["Гарнирҳо","Картошка фри 10 · Картошка по деревенский 15 · Грибы жареные 20 · Грибы на мангале 20 · Рис 10"]]],
["Бар",[
["Вино","Kindzmarauli 150 · Kindzmarauli Santeli 150 · Kindzmarauli Ikhalto 150 · Mukuzani 150 · JP Chenet Merlot 150"],
["Пиво","Corona Extra 40 · Miller 0.33 30 · Bud 0.33 30 · Bud 0.45 40 · Heineken 0.33 40 · Heineken 0.5 50 · Barbikan 25 · Hoegaarden 40 · Paulaner 50 · Кулер 30 · Балтика 30"],
["Виски (1 л)","Red Label 500 · Jameson 600 · Jack Daniels 800 · Chivas 12 1000 · Chivas 16 1600"],
["Коньяк","Арарат 3 лет 0.5 – 350 · Арарат 5 лет 0.5 – 400 · Old Barrel 5 лет 0.5 – 150 · Старейшина 7 лет 0.5 – 150 · Чоми Чам 7 лет 0.5 – 150"],
["Водка","Beluga 0.5 – 330 · Absolut 0.5 – 250 · Grey Goose 0.5 – 600 · Belvedere 0.5 – 500 · Tequila Olmeca 1л – 600 · Чистые Росы 0.5 – 330 · Царская 0.5 – 150 · Архангельская 0.5 – 120 · Беленькая 0.5 – 100 · Русский Стандарт 0.5 – 180 · Онегин 0.7 – 500 · Nooroz 777 0.7 – 150 · Шохона Платинум 0.7 – 80 · Шохона Прайд 0.7 – 100 · Кекилик 0.7 – 80 · Кекилик Саваж 0.7 – 150 · Сиёма Арча 0.7 – 90 · Арча Премиум 0.7 – 150"],
["Коктейлҳо","Молочный с мороженым 60 · Фруктовый смузи 50 · Мохито классический 18 · Мохито с клубникой 50 · Мохито с ромом 60 · Маргарита 80 · Апероль Шприц 60 · B 52 60 · B 53 50 · Текила с лаймом 50 · Виски кола 50 · Голубая… 50"]]],
["Нӯшокиҳо",[
["Энергетик","Red Bull 40 · XL 20 · Gorilla 20 · Jaguar 30 · Strike 30"],
["Нӯшокиҳо","RC Cola 1.5л 20 · Fanta 1.5л 18 · Sprite 1.5л 15 · Coca Cola 1.5л 20 · Coca Cola 0.25л 10 · Coca Cola 0.45л 15 · Баржоми 25 · Оби зулол 6 · Натахтари 25 · Хаватаг 6 · Сок Добрый 30 · Сок Rich 30"]]],
["Кальян",[
["Кальян","Musthave 150/200/250 · Darkside 150/200/250 · Overdose 150/200/250 · Starline 100/150/200/250 · Blackburn 150/200/250 · Замена чаши 80"]]],
["Дигар",[
["Шоколад ва ғайра","Raffaello 70 · Nestle 15 · Milka 20 · Кофе Черноне 5 · Кофе 3/1 5 · Esse Change 50 · Mentos 7 · Зажигалка 5 · Влажные салфетки 3"]]]
];

const WHATSAPP_NUMBER = "992005222412";
const tabs = document.getElementById("tabs");
const menus = document.getElementById("menus");
const cart = [];
const money = n => `${Number(n).toLocaleString("ru-RU")} сомонӣ`;

function parseItem(raw) {
  const match = raw.trim().match(/^(.*?)\s*(?:[–-]\s*)?(\d+(?:\/\d+)*)$/);
  if (!match) return { name: raw.trim(), prices: [0] };
  return { name: match[1].trim(), prices: match[2].split("/").map(Number) };
}

function addToCart(name, price) {
  const existing = cart.find(item => item.name === name && item.price === price);
  if (existing) existing.qty += 1;
  else cart.push({ name, price, qty: 1 });
  renderCart();
  const fab = document.getElementById("cartFab");
  fab.classList.add("bump");
  setTimeout(() => fab.classList.remove("bump"), 220);
}

function renderMenu() {
  M.forEach((category, index) => {
    const tab = document.createElement("button");
    tab.type = "button";
    tab.setAttribute("role", "tab");
    tab.setAttribute("aria-selected", String(index === 0));
    tab.textContent = category[0];
    tabs.appendChild(tab);

    const panel = document.createElement("div");
    panel.className = `menu${index === 0 ? " show" : ""}`;

    category[1].forEach(group => {
      const heading = document.createElement("h3");
      heading.textContent = group[0];
      panel.appendChild(heading);

      group[1].split(" · ").forEach(raw => {
        const item = parseItem(raw);
        const row = document.createElement("article");
        row.className = "item menu-item";

        const info = document.createElement("div");
        info.className = "item-info";
        const name = document.createElement("span");
        name.className = "item-name";
        name.textContent = item.name;
        info.appendChild(name);

        const controls = document.createElement("div");
        controls.className = "item-controls";
        let chosenPrice = item.prices[0];

        if (item.prices.length > 1) {
          const select = document.createElement("select");
          select.className = "price-select";
          select.setAttribute("aria-label", `Нархи ${item.name}`);
          item.prices.forEach((price, i) => {
            const option = document.createElement("option");
            option.value = String(price);
            option.textContent = `${price} сомонӣ`;
            if (i === 0) option.selected = true;
            select.appendChild(option);
          });
          select.addEventListener("change", () => { chosenPrice = Number(select.value); });
          controls.appendChild(select);
        } else {
          const price = document.createElement("span");
          price.className = "price";
          price.textContent = `${item.prices[0]} сомонӣ`;
          controls.appendChild(price);
        }

        const add = document.createElement("button");
        add.type = "button";
        add.className = "add-btn";
        add.textContent = "+";
        add.setAttribute("aria-label", `Илова кардани ${item.name} ба сабад`);
        add.addEventListener("click", () => addToCart(item.name, chosenPrice));
        controls.appendChild(add);

        row.append(info, controls);
        panel.appendChild(row);
      });
    });

    menus.appendChild(panel);
    tab.addEventListener("click", () => {
      tabs.querySelectorAll("button").forEach(button => button.setAttribute("aria-selected", "false"));
      menus.querySelectorAll(".menu").forEach(menu => menu.classList.remove("show"));
      tab.setAttribute("aria-selected", "true");
      panel.classList.add("show");
    });
  });
}

function renderCart() {
  const container = document.getElementById("cartItems");
  const count = cart.reduce((sum, item) => sum + item.qty, 0);
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  document.getElementById("cartCount").textContent = count;
  document.getElementById("cartTotal").textContent = money(total);
  container.replaceChildren();

  if (!cart.length) {
    const empty = document.createElement("p");
    empty.className = "empty-cart";
    empty.textContent = "Сабад ҳоло холӣ аст. Аз меню таом интихоб кунед.";
    container.appendChild(empty);
    return;
  }

  cart.forEach((item, index) => {
    const line = document.createElement("div");
    line.className = "cart-line";
    const details = document.createElement("div");
    details.className = "cart-line-details";
    const title = document.createElement("strong");
    title.textContent = item.name;
    const subtotal = document.createElement("small");
    subtotal.textContent = `${money(item.price)} × ${item.qty} = ${money(item.price * item.qty)}`;
    details.append(title, subtotal);

    const actions = document.createElement("div");
    actions.className = "qty-actions";
    const minus = document.createElement("button");
    minus.type = "button"; minus.textContent = "−"; minus.setAttribute("aria-label", "Кам кардан");
    minus.addEventListener("click", () => {
      item.qty -= 1;
      if (item.qty <= 0) cart.splice(index, 1);
      renderCart();
    });
    const qty = document.createElement("span");
    qty.textContent = item.qty;
    const plus = document.createElement("button");
    plus.type = "button"; plus.textContent = "+";
    plus.addEventListener("click", () => { item.qty += 1; renderCart(); });
    actions.append(minus, qty, plus);
    line.append(details, actions);
    container.appendChild(line);
  });
}

function openCart() {
  const modal = document.getElementById("cartModal");
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}
function closeCart() {
  const modal = document.getElementById("cartModal");
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

function orderText() {
  const table = document.getElementById("tableNumber").value.trim();
  if (!cart.length) {
    alert("Сабад холӣ аст. Аввал аз меню маҳсулот интихоб кунед.");
    return null;
  }
  if (!table || !/^\d+$/.test(table) || Number(table) < 1) {
    alert("Лутфан рақами столро дуруст ворид кунед.");
    document.getElementById("tableNumber").focus();
    return null;
  }
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const lines = cart.map((item, i) =>
    `${i + 1}. ${item.name} — ${item.qty} × ${item.price} = ${item.qty * item.price} сомонӣ`
  );
  return {
    table,
    total,
    text: `🍽️ *ФАРМОИШ — РЕСТОБАР РУМИ 4+*\\n🪑 Рақами стол: *${table}*\\n\\n${lines.join("\\n")}\\n\\n💰 *Ҳамагӣ: ${total} сомонӣ*`
  };
}

document.getElementById("cartFab").addEventListener("click", openCart);
document.getElementById("closeCart").addEventListener("click", closeCart);
document.getElementById("cartModal").addEventListener("click", event => {
  if (event.target.id === "cartModal") closeCart();
});
document.addEventListener("keydown", event => {
  if (event.key === "Escape") closeCart();
});
document.getElementById("sendOrder").addEventListener("click", () => {
  const order = orderText();
  if (!order) return;
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(order.text)}`;
  window.open(url, "_blank", "noopener,noreferrer");
});
document.getElementById("printReceipt").addEventListener("click", () => {
  const order = orderText();
  if (!order) return;
  const receipt = `
    <html lang="tg"><head><meta charset="utf-8"><title>Чеки Руми 4+</title>
    <style>body{font:16px Arial,sans-serif;padding:24px;color:#111}h2{text-align:center}
    .line{padding:8px 0;border-bottom:1px dashed #aaa}.total{font-weight:bold;margin-top:18px;font-size:20px}
    </style></head><body><h2>РЕСТОБАР РУМИ 4+</h2>
    <p>Рақами стол: <b>${order.table}</b></p>
    ${cart.map(item => `<div class="line">${item.name} — ${item.qty} × ${item.price} = ${item.qty * item.price} сомонӣ</div>`).join("")}
    <p class="total">Ҳамагӣ: ${order.total} сомонӣ</p>
    <p>Ташаккур барои интихоби мо!</p></body></html>`;
  const printWindow = window.open("", "_blank");
  if (!printWindow) { alert("Барои чоп равзанаи навро дар браузер иҷозат диҳед."); return; }
  printWindow.document.open();
  printWindow.document.write(receipt);
  printWindow.document.close();
  printWindow.focus();
  printWindow.print();
});

renderMenu();
renderCart();
