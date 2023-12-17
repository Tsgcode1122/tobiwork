const fetchData = async () => {
  try {
    const response = await fetch("utils.json");
    const data = await response.json();
    const tobicont = document.getElementById("tobi");
    const nairaFormatter = new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
    });
    const itemsHTML = data
      .map(
        (itemz) => `
<div class="tsg1">
 <img src=${itemz.img} />
      <p>${nairaFormatter.format(itemz.price)}</p>
      <article class="tsgan">
       ${itemz.description}
      </article>
      <h4 >${itemz.name}</h4>
 </div>
`,
      )
      .join("");
    tobicont.innerHTML = itemsHTML;
  } catch (error) {
    console.log("error");
  }
};
fetchData();
console.log("HELLO");
