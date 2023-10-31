const btns = [
    {
      id: 1,
      name: 'Mobiles'
    },
    {
      id: 2,
      name: 'Watches'
    },
    {
      id: 3,
      name: 'Cameras'
    },
    {
      id: 4,
      name: 'Laptops'
    },
    {
      id: 5,
      name: 'Air Pods'
    }
  ];
  
  const filters = [...new Set(btns.map((btn) => btn.id))];
  
  document.getElementById('btns').innerHTML = filters
    .map((id) => {
      const btn = btns.find((btn) => btn.id === id);
      return `<button class='fil-p' onclick='filterItems(${btn.id})'>${btn.name}</button>`;
    }).join('');
  