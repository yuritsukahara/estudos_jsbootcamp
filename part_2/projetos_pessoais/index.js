const getTokens = async () => {
  const response = axios.get("https://api.pancakeswap.info/api/v2/tokens");
  return response;
};

getTokens().then(function (response) {
  // handle success
  const tokens = response.data.data;
  const updateAt = response.data.updated_at;

  adicionaHtml(tokens, updateAt);
});

const adicionaHtml = (tokens, updateAt) => {
  const target = document.querySelector("#token-list");
  const title = document.querySelector("#updateAt");

  //título
  let date = timeConverter(updateAt);
  const titleUpdate = document.createElement("h1");
  titleUpdate.innerText = "Atualizado em " + date;
  title.appendChild(titleUpdate);

  //lista tokens
  for (token in tokens) {
    const tokenName = tokens[token].name;
    const tokenSymbol = tokens[token].symbol;
    const tokenPrice = parseFloat(tokens[token].price)
      .toFixed(2)
      .replace(/\./g, ",");

    const tokenHtml = document.createElement("div");

    tokenHtml.innerHTML = `
        <p>${tokenName} ${tokenSymbol} ${tokenPrice}</p>
        `;

    target.appendChild(tokenHtml);
  }
};

