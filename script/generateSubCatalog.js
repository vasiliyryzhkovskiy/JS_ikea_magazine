"use strict";

const generateSubCatalog = () => {
  const subCatalog = `
    <div class="subcatalog">
    <button
      type="button"
      class="btn btn-return catalog-btn"
      aria-expanded="true"
      title="Закрыть меню"
      aria-label="Закрыть меню"
    >
      <svg
        focusable="false"
        class="svg-icon hnf-svg-icon"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M4.70613 11.2927L3.99902 11.9997L4.70606 12.7069L11.999 20.0008L13.4133 18.5867L7.82744 13.0001H19.9999V11.0001H7.82729L13.4144 5.41328L12.0002 3.99902L4.70613 11.2927Z"
        ></path>
      </svg>
    </button>
    <h3 class="subcatalog-header"><a href="goods.html?cat=Мебель"></a></h3>
    <ul class="subcatalog-list">
      <li class="subcatalog-list__item">
        <a href="goods.html?subcat=Диваны">Диваны</a>
      </li>
      <li class="subcatalog-list__item">
        <a href="goods.html?subcat=Кресла">Кресла</a>
      </li>
      <li class="subcatalog-list__item">
        <a href="goods.html?subcat=Книжные шкафы">Книжные шкафы</a>
      </li>
      <li class="subcatalog-list__item">
        <a href="goods.html?subcat=Стеллажи">Стеллажи</a>
      </li>
      <li class="subcatalog-list__item">
        <a href="goods.html?subcat=Шкаф для ТВ">Шкаф для ТВ</a>
      </li>
      <li class="subcatalog-list__item">
        <a href="goods.html?subcat=Кровати">Кровати</a>
      </li>
      <li class="subcatalog-list__item">
        <a href="goods.html?subcat=Комоды">Комоды</a>
      </li>
      <li class="subcatalog-list__item">
        <a href="goods.html?subcat=Столы">Столы</a>
      </li>
      <li class="subcatalog-list__item">
        <a href="goods.html?subcat=Письменные столы">Письменные столы</a>
      </li>
      <li class="subcatalog-list__item">
        <a href="goods.html?subcat=Стулья для письменного стола"
          >Стулья для письменного стола</a
        >
      </li>
    </ul>
  </div>
    `;

  document.body.insertAdjacentHTML("afterbegin", subCatalog);
};

generateSubCatalog();
