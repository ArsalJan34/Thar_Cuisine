 const PHONE_NUMBER = '+923700666140';
    const RESTAURANT_EMAIL = 'arsaljaan649@gmail.com';
    const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';

    function encodeMsg(t) { return encodeURIComponent(t) };
    function buildMsg(d) { return `New Order:\nItem: ${d.item}\nQty: ${d.qty}\nCustomer: ${d.customer}\nPhone: ${d.phone}\nMode: ${d.mode}\nNotes: ${d.notes}\nTotal: Rs.${d.qty * parseInt(d.price)}` }
    function wa(d) { window.open(`https://wa.me/${PHONE_NUMBER}?text=${encodeMsg(buildMsg(d))}`, '_blank') }
    function mail(d) { window.open(`mailto:${RESTAURANT_EMAIL}?subject=${encodeMsg('New Order')}&body=${encodeMsg(buildMsg(d))}`, '_blank') }
    async function formSend(d) { try { await fetch(FORMSPREE_ENDPOINT, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(d) }) } catch (e) { } }
    function toast(t) { const el = document.getElementById('toast'); el.textContent = t; el.style.display = 'block'; setTimeout(() => el.style.display = 'none', 3000) }

    const modal = document.getElementById('orderModal');
    const form = document.getElementById('orderForm');
    document.querySelectorAll('.order-btn').forEach(b => b.onclick = () => { document.getElementById('itemName').value = b.dataset.name; document.getElementById('qty').value = 1; modal.style.display = 'flex' });
    document.getElementById('cancelOrder').onclick = () => modal.style.display = 'none';
    form.onsubmit = async e => { e.preventDefault(); const d = { item: itemName.value, qty: parseInt(qty.value), price: document.querySelector(`[data-name='${itemName.value}']`).dataset.price, customer: customerName.value, phone: phone.value, mode: mode.value, notes: notes.value }; wa(d); mail(d); await formSend(d); modal.style.display = 'none'; toast('Order sent successfully!') }
    window.onclick = e => { if (e.target == modal) modal.style.display = 'none' }

function showSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.classList.add("show");
}

function hideSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.classList.remove("show");
}
